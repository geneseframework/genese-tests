"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainProcess = void 0;
const func_test_gen_1 = require("./func-test-gen");
const util_1 = require("./util");
const chalk = require("chalk");
const ts = require("typescript");
const genese_tests_config_1 = require("../genese-tests.config");
const service_test_gen_1 = require("./templates/service/service-test-gen");
const fs = require('fs');
const requireFromString = require('require-from-string');
const glob = require('glob');
const pathModule = require('path'); // eslint-disable-line
class MainProcess {
    start(path, options) {
        console.log(chalk.blueBright('START PROCESS'));
        this.setConfig(options === null || options === void 0 ? void 0 : options.config);
        const isDir = fs.lstatSync(path).isDirectory();
        if (isDir) {
            const files = glob.sync('**/!(*.spec).ts', { cwd: path });
            files.forEach(file => {
                const includeMatch = genese_tests_config_1.config.includeMatch.map(re => file.match(re)).some(e => !!e);
                const excludeMatch = genese_tests_config_1.config.excludeMatch.map(re => file.match(re)).some(e => !!e);
                if (excludeMatch) {
                    console.log(' *** NOT processing (in excludeMatch)', pathModule.join(path, file));
                }
                else if (includeMatch) {
                    console.log(' *** processing', pathModule.join(path, file));
                    this.run(pathModule.join(path, file), options);
                }
                else {
                    console.log(' *** NOT processing (not in includeMatch)', pathModule.join(path, file));
                }
            });
        }
        else {
            this.run(path, options);
        }
    }
    setConfig(configFile) {
        if (configFile && fs.existsSync(configFile)) {
            this.loadConfig(configFile);
        }
        else {
            util_1.DEBUG && console.log(`${configFile} not found. Using default config instead.`);
        }
    }
    loadConfig(configFile) {
        const userConfig = require(configFile);
        for (const key of Object.keys(userConfig)) {
            genese_tests_config_1.config[key] = userConfig[key];
        }
    }
    run(filePath, options) {
        try {
            const testGenerator = this.getTestGenerator(filePath);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const angularType = util_1.Util.getAngularType(fileContent).toLowerCase();
            const templateData = testGenerator.getData();
            const result = ts.transpileModule(fileContent, {
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
                .replace(/\s+extends\s\S+ {/gm, ' extends Object {'); // change inheritance to an Object
            genese_tests_config_1.config.replacements.forEach(({ from, to }) => {
                replacedOutputText = replacedOutputText.replace(new RegExp(from, 'gm'), to);
            });
            const module = requireFromString(replacedOutputText);
            console.log('EJSDATAAAA', templateData);
            console.log('MODULLLL', module);
            const constructor = module[templateData.className];
            // DEBUG && console.warn('\x1b[36m%s\x1b[0m', `PROCESSING ${Klass.ctor && Klass.ctor.name} constructor`);
            const ctorMockData = this.getFuncMockData(constructor, 'constructor', 'constructor');
            let constructorParams = '';
            for (let i = 0; i < Object.keys(ctorMockData.params).length; i++) {
                constructorParams = `${constructorParams} undefined,`;
            }
            constructorParams = constructorParams.slice(1, -1);
            // const constructorParams = constructorParams;
            // const constructorParams = Util.getFuncParamJS(ctorMockData.params);
            templateData.constructorParams = util_1.Util.indent(constructorParams, ' '.repeat(6)).trim();
            // TODO: uncomment
            // ejsData.providerMocks = testGenerator.getProviderMocks(ctorMockData.params);
            // for (var key in ejsData.providerMocks) {
            //   ejsData.providerMocks[key] = Util.indent(ejsData.providerMocks[key]).replace(/\{\s+\}/gm, '{}');
            // }
            const errors = [];
            testGenerator.klassSetters.forEach(setter => {
                const setterName = setter.node.name.escapedText;
                templateData.accessorTests[`${setterName} SetterDeclaration`] =
                    util_1.Util.indent(this.getFuncTest(constructor, setterName, 'set', angularType), '  ');
            });
            testGenerator.klassGetters.forEach(getter => {
                const getterName = getter.node.name.escapedText;
                templateData.accessorTests[`${getterName} GetterDeclaration`] =
                    util_1.Util.indent(this.getFuncTest(constructor, getterName, 'get', angularType), '  ');
            });
            // TODO: uncomment
            testGenerator.klassMethods.forEach(method => {
                const methodNode = method.node;
                const methodName = methodNode.getName();
                try {
                    templateData.functionTests[methodName] =
                        util_1.Util.indent(this.getFuncTest(constructor, methodName, 'method', angularType), '  ');
                }
                catch (e) {
                    const msg = '    // ' + e.stack;
                    const itBlock = `it('should run #${method.name}()', async () => {\n` +
                        `${msg.replace(/\n/g, '\n    // ')}\n` +
                        `  });\n`;
                    templateData.functionTests[methodName] = itBlock;
                    errors.push(e);
                }
            });
            // console.log('..................................................................')
            // console.log(ejsData)
            // console.log('..................................................................')
            const generated = testGenerator.getGenerated(templateData, options);
            generated && testGenerator.writeGenerated(generated, options);
            errors.forEach(e => console.error(e));
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
    getFuncMockData(Klass, funcName, funcType) {
        const funcTestGen = new func_test_gen_1.FuncTestGen(Klass, funcName, funcType);
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
    getTestGenerator(tsPath) {
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
        return new service_test_gen_1.ServiceTestGen(tsPath);
    }
    getFuncTest(Klass, funcName, funcType, angularType) {
        // DEBUG && console.log('\x1b[36m%s\x1b[0m', `\nPROCESSING #${funcName}`);
        const funcMockData = this.getFuncMockData(Klass, funcName, funcType);
        const [allFuncMockJS, asserts] = util_1.Util.getFuncMockJS(funcMockData, angularType);
        const funcMockJS = [...new Set(allFuncMockJS)];
        const funcParamJS = util_1.Util.getFuncParamJS(funcMockData.params);
        const funcAssertJS = asserts.map(el => `// expect(${el.join('.')}).toHaveBeenCalled()`);
        const jsToRun = funcType === 'set' ? `${angularType}.${funcName} = ${funcParamJS || '{}'}` :
            funcType === 'get' ? `const ${funcName} = ${angularType}.${funcName}` :
                `${angularType}.${funcName}(${funcParamJS})`;
        const itBlockName = funcType === 'method' ? `should run #${funcName}()` :
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
exports.MainProcess = MainProcess;
