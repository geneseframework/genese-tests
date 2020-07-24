import { FuncTestGen } from './func-test-gen';
import { DEBUG, Util } from './util';
import { MethodDeclaration } from 'ts-morph';
import * as chalk from 'chalk';
import { TestGen } from './templates/test-gen.model';
import * as ts from 'typescript';
import { config } from '../genese-tests.config';
import { Options } from './interfaces/options';
import { ServiceTestGen } from './templates/service/service-test-gen';
import { TemplateData } from './models/template-data.model';
const fs = require('fs');
const requireFromString = require('require-from-string');
const glob = require('glob');
const pathModule = require('path'); // eslint-disable-line

export class MainProcess {


    start(path: string, options: Options): void {
        console.log(chalk.blueBright('START PROCESS'));
        this.setConfig(options?.config);
        const isDir = fs.lstatSync(path).isDirectory();
        if (isDir) {
            const files = glob.sync('**/!(*.spec).ts', {cwd: path})
            files.forEach(file => {
                const includeMatch = config.includeMatch.map(re => file.match(re)).some(e => !!e);
                const excludeMatch = config.excludeMatch.map(re => file.match(re)).some(e => !!e);
                if (excludeMatch) {
                    console.log(' *** NOT processing (in excludeMatch)', pathModule.join(path, file));
                } else if (includeMatch) {
                    console.log(' *** processing', pathModule.join(path, file));
                    this.run(pathModule.join(path, file), options);
                } else {
                    console.log(' *** NOT processing (not in includeMatch)', pathModule.join(path, file));
                }
            });
        } else {
            this.run(path, options);
        }
    }


    setConfig(configFile: string): void {
        if (configFile && fs.existsSync(configFile)) {
            this.loadConfig(configFile);
        } else {
            DEBUG && console.log(`${configFile} not found. Using default config instead.`)
        }
    }


    loadConfig(configFile: string): void {
        const userConfig = require(configFile);
        for (const key of Object.keys(userConfig)) {
            config[key] = userConfig[key];
        }
    }


    run(filePath: string, options: Options): void {
        try {
            const testGenerator = this.getTestGenerator(filePath);
            const typescript = fs.readFileSync(filePath, 'utf8');
            const angularType = Util.getAngularType(typescript).toLowerCase();
            const ejsData: TemplateData = testGenerator.getData();
            // ejsData.config = config;
            // mockData is set after each statement is being analyzed from getFuncMockData
            ejsData.ctorParamJs; // declaration only, will be set from mockData
            ejsData.providerMocks; //  declaration only, will be set from mockData
            ejsData.accessorTests = {}; //  declaration only, will be set from mockData
            ejsData.functionTests = {}; //  declaration only, will be set from mockData

            const result = ts.transpileModule(typescript, {
                compilerOptions: {
                    module: ts.ModuleKind.CommonJS,
                    experimentalDecorators: true,
                    removeComments: true,
                    target: ts.ScriptTarget.ES2015
                }
            });

            // replace invalid require statements
            let replacedOutputText = result.outputText
                .replace(/require\("\.(.*)"\)/gm, '{}') // replace require statement to a variable, {}
                .replace(/super\(.*\);/gm, '') // remove inheritance code
                .replace(/super\./gm, 'this.') // change inheritance call to this call
                .replace(/\s+extends\s\S+ {/gm, ' extends Object {') // change inheritance to an Object

            config.replacements.forEach( ({from,to}) => {
                replacedOutputText = replacedOutputText.replace(new RegExp(from, 'gm'), to);
            })
            const module = requireFromString(replacedOutputText);
            console.log('EJSDATAAAA', ejsData)
            const Klass = module[ejsData.className];
            // DEBUG && console.warn('\x1b[36m%s\x1b[0m', `PROCESSING ${Klass.ctor && Klass.ctor.name} constructor`);
            const ctorMockData = this.getFuncMockData(Klass, 'constructor', 'constructor');
            let constructorParams = '';
            for (let i = 0; i < Object.keys(ctorMockData.params).length; i++) {
                constructorParams = `${constructorParams} undefined,`;
            }
            constructorParams = constructorParams.slice(1, -1);
            const ctorParamJs = constructorParams;
// const ctorParamJs = Util.getFuncParamJS(ctorMockData.params);
            ejsData.ctorParamJs = Util.indent(ctorParamJs, ' '.repeat(6)).trim();
// TODO: uncomment
// ejsData.providerMocks = testGenerator.getProviderMocks(ctorMockData.params);
// for (var key in ejsData.providerMocks) {
//   ejsData.providerMocks[key] = Util.indent(ejsData.providerMocks[key]).replace(/\{\s+\}/gm, '{}');
// }

            const errors = [];
            testGenerator.klassSetters.forEach(setter => {
                const setterName = setter.node.name.escapedText;
                ejsData.accessorTests[`${setterName} SetterDeclaration`] =
                    Util.indent(this.getFuncTest(Klass, setterName, 'set', angularType), '  ');
            });
            testGenerator.klassGetters.forEach(getter => {
                const getterName = getter.node.name.escapedText;
                ejsData.accessorTests[`${getterName} GetterDeclaration`] =
                    Util.indent(this.getFuncTest(Klass, getterName, 'get', angularType), '  ');
            });

// TODO: uncomment
            testGenerator.klassMethods.forEach(method => {
                const methodNode = method.node as MethodDeclaration;
                const methodName = methodNode.getName();
                try {
                    ejsData.functionTests[methodName] =
                        Util.indent(this.getFuncTest(Klass, methodName, 'method', angularType), '  ');
                } catch (e) {
                    const msg = '    // '+ e.stack;
                    const itBlock = `it('should run #${method.name}()', async () => {\n` +
                        `${msg.replace(/\n/g, '\n    // ')}\n` +
                        `  });\n`
                    ejsData.functionTests[methodName] = itBlock;
                    errors.push(e);
                }
            });

// console.log('..................................................................')
// console.log(ejsData)
// console.log('..................................................................')

            const generated = testGenerator.getGenerated(ejsData, options);
            generated && testGenerator.writeGenerated(generated, options);

            errors.forEach( e => console.error(e) );
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }


    getFuncMockData(Klass, funcName, funcType) {
        const funcTestGen = new FuncTestGen(Klass, funcName, funcType);
        const funcMockData = {
            isAsync: funcTestGen.isAsync,
            props: {},
            params: funcTestGen.getInitialParameters(),
            map: {},
            globals: {}
        };
        funcTestGen.getExpressionStatements().forEach((expr, ndx) => {
            // const code = funcTestGen.classCode.substring(expr.start, expr.end);
            // DEBUG && console.log('  *** EXPRESSION ***', ndx, code.replace(/\n+/g, '').replace(/\s+/g, ' '));
            funcTestGen.setMockData(expr, funcMockData);
        });

        return funcMockData;
    }


    getTestGenerator (tsPath: string): TestGen {
        // TODO : uncomment when services will run correctly
        // const typescript = fs.readFileSync(tsPath, 'utf8');
        // const angularType = Util.getAngularType(typescript).toLowerCase();
        // const testGenerator = /* eslint-disable */
        //     angularType === 'component' ? new ComponentTestGen(tsPath, config) :
        //         angularType === 'directive' ? new DirectiveTestGen(tsPath, config) :
        //             angularType === 'service' ? new ServiceTestGen(tsPath, config) :
        //                 angularType === 'pipe' ? new PipeTestGen(tsPath, config) :
        //                     new ClassTestGen(tsPath, config); /* eslint-enable */
        // return testGenerator;
        return new ServiceTestGen(tsPath);
    }

    getFuncTest(Klass, funcName, funcType, angularType) {
        // DEBUG && console.log('\x1b[36m%s\x1b[0m', `\nPROCESSING #${funcName}`);

        const funcMockData = this.getFuncMockData(Klass, funcName, funcType);
        const [allFuncMockJS, asserts] = Util.getFuncMockJS(funcMockData, angularType);
        const funcMockJS = [...new Set(allFuncMockJS)];
        const funcParamJS = Util.getFuncParamJS(funcMockData.params);

        const funcAssertJS = asserts.map(el => `// expect(${el.join('.')}).toHaveBeenCalled()`);
        const jsToRun =
            funcType === 'set' ? `${angularType}.${funcName} = ${funcParamJS || '{}'}`:
                funcType === 'get' ? `const ${funcName} = ${angularType}.${funcName}` :
                    `${angularType}.${funcName}(${funcParamJS})`;
        const itBlockName =
            funcType === 'method' ? `should run #${funcName}()` :
                funcType === 'get' ? `should run GetterDeclaration #${funcName}` :
                    funcType === 'set' ? `should run SetterDeclaration #${funcName}` : '';
        const asyncStr = funcMockData.isAsync ? 'await ' : '';

        return `
    it('${itBlockName}', async () => {
      ${funcMockJS.join(';\n')}${funcMockJS.length ? ';' : ''}
      ${asyncStr}${jsToRun};
      ${funcAssertJS.join(';\n')}${funcAssertJS.length ? ';' : ''}
    });
    `;
    }

}
