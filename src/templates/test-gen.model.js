"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGen = void 0;
const typescript_parser_1 = require("../typescript-parser");
const util_1 = require("../util");
const chalk = require("chalk");
const ejs = require('ejs');
const fs = require('fs');
const ts = require('typescript');
class TestGen {
    constructor(tsPath) {
        this.typescript = fs.readFileSync(tsPath, 'utf8');
        this.setTsPath(tsPath);
        this.klass = this.getKlass();
    }
    setTsPath(tsPath) {
        if (tsPath && fs.existsSync(tsPath)) {
            this.tsPath = tsPath;
        }
        else {
            throw new Error(`Error. invalid typescript file. e.g., Usage $0 ${tsPath} [options]`);
        }
    }
    getAngularType() {
        return (this.__get(this.klass).decorator || {}).name;
    }
    __get(node) {
        var _a;
        node = node.node || node;
        const name = node.name && node.name.escapedText;
        let type;
        console.log('TYPPPPPP', node.type, (_a = node.node) === null || _a === void 0 ? void 0 : _a.getKindName());
        if (node.type && node.type.typeName) {
            type = node.type.typeName.escapedText;
        }
        else if (node.type && node.type.kind) {
            type = ts.SyntaxKind[node.type.kind].replace(/Keyword/, '').toLowerCase();
        }
        let decorator;
        if (node.decorators) {
            const name = node.decorators[0].expression.expression.escapedText;
            const param = (node.decorators[0].expression.arguments[0] || {}).text;
            decorator = { name, param };
        }
        return { type, name, decorator };
    }
    __getKlassDecorator(klass) {
        const klassDecorator = {};
        const props = klass.get('Decorator')
            .get('CallExpression')
            .get('ObjectLiteralExpression')
            .get('PropertyAssignment');
        util_1.Util.__toArray(props).forEach(el => {
            const key = el.children[0].node.escapedText;
            const value = el.children[1].node;
            klassDecorator[key] = value;
        });
        return klassDecorator;
    }
    // all imports info. from typescript
    // { Component: { moduleName: xxx, alias: xxx } }
    getImports() {
        const imports = [];
        const parsed = new typescript_parser_1.TypescriptParser(this.typescript);
        util_1.Util.__toArray(parsed.rootNode.get('ImportDeclaration'))
            .forEach(prop => {
            var _a, _b;
            const moduleName = (_b = (_a = prop.node.moduleSpecifier) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : 'Unknown';
            const namedImports = prop.get('ImportClause').get('NamedImports');
            const namespaceImport = prop.get('ImportClause').get('NamespaceImport');
            if (namespaceImport.node) {
                const alias = namespaceImport.node.name.escapedText;
                imports.push({ name: '*', alias, moduleName });
            }
            else if (namedImports.node) {
                namedImports.node.elements.forEach(node => {
                    const name = node.name.escapedText;
                    imports.push({ name, alias: undefined, moduleName });
                });
            }
        });
        return imports;
    }
    // import statement mocks;
    getImportMocks() {
        var _a;
        const importMocks = [];
        const klassName = this.klass.node.getName();
        const moduleName = util_1.Util.getFilename(this.tsPath).replace(/.ts$/, '');
        const imports = {};
        if (['component', 'directive'].includes(this.angularType)) {
            imports[`@angular/core`] = ['Component'];
        }
        imports[`./${moduleName}`] = [klassName];
        if (this.klass.get('Constructor').node) {
            const parameters = (_a = this.klass.get('Constructor').node.parameters) !== null && _a !== void 0 ? _a : [];
            for (const param of parameters) {
                const { name, type, decorator } = this.__get(param);
                const exportName = decorator ? decorator.name : type;
                const emport = this.imports.find(el => el.name === exportName); // name , alias
                const importStr = emport.alias ? `${exportName} as ${emport.alias}` : exportName;
                if (exportName === 'Inject') { // do not import Inject
                    imports[`@angular/core`] = (imports[`@angular/core`] || []).concat(decorator.param);
                }
                else {
                    imports[emport.moduleName] = (imports[emport.moduleName] || []).concat(importStr);
                }
            }
            ;
        }
        for (var lib in imports) {
            const fileNames = imports[lib].join(', ');
            importMocks.push(`import { ${fileNames} } from '${lib}';`);
        }
        return importMocks;
    }
    getKlass() {
        const parsed = new typescript_parser_1.TypescriptParser(this.typescript);
        const fileBasedKlassName = util_1.Util.getClassName(this.tsPath);
        const klassDeclarations = util_1.Util.__toArray(parsed.rootNode.get('ClassDeclaration'));
        const klass = klassDeclarations.find(decl => decl.node.getName() === fileBasedKlassName) || klassDeclarations[0];
        if (!klass) {
            throw new Error(`Error:TypeScriptParser Could not find ` +
                `${fileBasedKlassName || 'a class'} from ${this.tsPath}`);
        }
        return klass;
    }
    getKlassGetters() {
        return util_1.Util.__toArray(this.klass.get('GetAccessor'));
    }
    getKlassMethods() {
        return util_1.Util.__toArray(this.klass.get('MethodDeclaration'));
    }
    getKlassProperties() {
        return util_1.Util.__toArray(this.klass.get('PropertyDeclaration'))
            .concat(this.klass.get('SetAccessor'))
            .concat(this.klass.get('GetAccessor'))
            .map(prop => {
            return this.__get(prop);
        })
            .filter(el => el.name);
    }
    getKlassSetters() {
        return util_1.Util.__toArray(this.klass.get('SetAccessor'));
    }
    getProviderMocks(ctorMockData) {
        const providerMocks = { providers: [], mocks: [] };
        if (!this.klass.get('Constructor').node) {
            return providerMocks;
        }
        const paremeters = this.klass.get('Constructor').node.parameters;
        paremeters.forEach(param => {
            const { name, type, decorator } = this.__get(param);
            const injectClassName = decorator && decorator.name === 'Inject' && decorator.param;
            const injectUseStatement = injectClassName === 'DOCUMENT' ? `useClass: MockDocument` :
                injectClassName === 'PLATFORM_ID' ? `useValue: 'browser'` :
                    injectClassName === 'LOCALE_ID' ? `useValue: 'en'` : `useValue: ${injectClassName}`;
            const mockData = ctorMockData[name];
            mockData && (delete mockData['undefiend']);
            const mockDataJS = !mockData ? [] :
                Object.entries(mockData).map(([k, v]) => `${k} = ${util_1.Util.objToJS(v)};`);
            const emport = this.imports.find(el => el.name === type); // name , alias, moduleName
            const emportFromFile = !!(emport && emport.moduleName.match(/^(\.|src\/)/));
            const configMockJS = this.config.providerMocks[type];
            let mockFn;
            if (type !== 'Object' && emportFromFile) {
                mockFn = (mockDataJS || []).concat(configMockJS);
            }
            else if (configMockJS) {
                mockFn = (mockDataJS || []).concat(configMockJS);
            }
            if (mockFn) {
                providerMocks.mocks.push(util_1.Util.indent(`
        @Injectable()
        class Mock${type} {
          ${mockFn.join('\n')}
        }`)
                    .replace(/\n\s*?\n/gm, '\n') // remove empty lines
                    .replace(/\{\s+?}\s*?/gm, '{}\n') // ...{\n} to ...{}
                );
            }
            // code for providers section at @Component({providers: XXXXXXXXX}
            if (type === 'ActivatedRoute') {
                providerMocks.providers.push(`{
          provide: ActivatedRoute,
          useValue: {
            snapshot: {url: 'url', params: {}, queryParams: {}, data: {}},
            url: observableOf('url'),
            params: observableOf({}),
            queryParams: observableOf({}),
            fragment: observableOf('fragment'),
            data: observableOf({})
          }
        }`);
            }
            else if (this.config.providerMocks[type]) { // if mock is given from config
                providerMocks.providers.push(`{ provide: ${type}, useClass: Mock${type} }`);
            }
            else if (emportFromFile) {
                providerMocks.providers.push(`{ provide: ${type}, useClass: Mock${type} }`);
            }
            else if (injectClassName) {
                providerMocks.providers.push(`{ provide: '${injectClassName}', ${injectUseStatement} }`);
            }
            else {
                providerMocks.providers.push(type);
            }
        });
        return providerMocks;
    }
    getInputMocks() {
        const inputMocks = { html: [], js: [] };
        // this.klassProperties.forEach(({type, name, decorator}) => {
        //     if (decorator && decorator.name === 'Input') {
        //         inputMocks.html.push(`[${decorator.param || name}]="${name}"`);
        //         inputMocks.js.push(`${name}: ${type};`);
        //     }
        // });
        return inputMocks;
    }
    getOutputMocks() {
        const outputMocks = { html: [], js: [] };
        // this.klassProperties.forEach(({type, name, decorator}) => {
        //     const funcName = `on${name.replace(/^[a-z]/, x => x.toUpperCase())}`;
        //     if (decorator && decorator.name === 'Output') {
        //         outputMocks.html.push(`(${decorator.param || name})="${funcName}($event)"`);
        //         outputMocks.js.push(`${funcName}(event): void { /* */ }`);
        //     }
        // });
        return outputMocks;
    }
    getComponentProviderMocks() {
        const mocks = [];
        const decorator = this.__getKlassDecorator(this.klass);
        if (decorator.providers) {
            const klassNames = decorator.providers.elements.map(el => el.escapedText);
            const providerMocks = klassNames.map(name => `{ provide: ${name}, useClass: Mock${name} }`);
            mocks.push(`set: { providers: [${providerMocks.join(',\n')}] }`);
        }
        return mocks;
    }
    getDirectiveSelector() {
        const decorator = this.__getKlassDecorator(this.klass);
        if (decorator.selector) {
            const selectorTxt = decorator.selector.text;
            if (selectorTxt.match(/^\[/)) {
                return { type: 'attribute', value: selectorTxt, name: selectorTxt.match(/[^\[\]]+/)[0] };
            }
            else if (selectorTxt.match(/^\./)) {
                return { type: 'class', value: selectorTxt, name: selectorTxt.match(/[^\.]+/)[0] };
            }
            else if (selectorTxt.match(/^[a-z]/i)) {
                return { type: 'element', value: selectorTxt, name: selectorTxt.match(/[a-z-]+/)[0] };
            }
        }
    }
    getExistingTests(ejsData, existingTestCodes) {
        const existingTests = {};
        const allTests = Object.assign({}, ejsData.accessorTests || {}, ejsData.functionTests || {});
        for (var funcName in allTests) {
            // e.g. compoent.myFuncName(any, goes, here);
            const re = new RegExp(`\\S+\.${funcName}\\(?[\\s\\S]*\\)?;`, 'm');
            existingTests[funcName] = !!existingTestCodes.match(re);
        }
        return existingTests;
    }
    getGenerated(ejsData, options) {
        let generated;
        const funcName = options.method;
        const specPath = this.tsPath.replace(/\.ts$/, '.spec.ts');
        // const specPath = path.resolve(this.tsPath.replace(/\.ts$/, '.spec.ts'));
        const existingTestCodes = fs.existsSync(specPath) && fs.readFileSync(specPath, 'utf8');
        if (funcName) {
            // if user asks to generate only one function
            generated = ejsData.functionTests[funcName] || ejsData.accessorTests[funcName];
        }
        else if (existingTestCodes && specPath && !options.force && !options.forcePrint) {
            // if there is existing tests, then add only new tests at the end
            const existingTests = this.getExistingTests(ejsData, existingTestCodes);
            const newTests = [];
            const allTests = Object.assign({}, ejsData.accessorTests || {}, ejsData.functionTests || {});
            // get only new tests
            for (var method in existingTests) {
                (existingTests[method] !== true) && newTests.push('  // new test by ngentest' + allTests[method]);
            }
            if (newTests.length) {
                // add new tests at the end
                const re = /(\s+}\);?\s+)(}\);?\s*)$/;
                const testEndingMatch = existingTestCodes.match(re); // file ending parts
                if (testEndingMatch) {
                    generated = existingTestCodes.replace(re, (m0, m1, m2) => {
                        const newCodes = newTests.join('\n').replace(/[ ]+$/, '');
                        return `${m1}${newCodes}${m2}`;
                    });
                }
            }
            else {
                generated = ejs.render(this.template, ejsData).replace(/\n\s+$/gm, '\n');
            }
        }
        else {
            // if no existing tests
            generated = ejs.render(this.template, ejsData).replace(/\n\s+$/gm, '\n');
        }
        return generated;
    }
    writeToSpecFile(specPath, generated) {
        fs.writeFileSync(specPath, generated);
        console.log('Generated unit test to', specPath);
    }
    backupExistingFile(specPath, generated) {
        if (fs.existsSync(specPath)) {
            const backupTime = (new Date()).toISOString().replace(/[^\d]/g, '').slice(0, -5);
            const backupContents = fs.readFileSync(specPath, 'utf8');
            if (backupContents !== generated) {
                fs.writeFileSync(`${specPath}.${backupTime}`, backupContents, 'utf8'); // write backup
                console.log('Backup the exisiting file to', `${specPath}.${backupTime}`);
            }
        }
    }
    writeGenerated(generated, options) {
        const toFile = options.spec;
        const force = options.force;
        const specPath = this.tsPath.replace(/\.ts$/, '.spec.ts');
        generated = generated.replace(/\r\n/g, '\n');
        const specFileExists = fs.existsSync(specPath);
        if (toFile && specFileExists && force) {
            this.backupExistingFile(specPath, generated);
            this.writeToSpecFile(specPath, generated);
            console.log(chalk.greenBright('\nGENERATED TESTS\n'));
            process.stdout.write(generated);
        }
        else if (toFile && specFileExists && !force) {
            const readline = require('readline');
            const rl = readline.createInterface(process.stdin, process.stdout);
            console.warn('\x1b[33m%s\x1b[0m', `WARNING!!, Spec file, ${specPath} already exists. Overwrite it?`);
            rl.question('Continue? ', answer => {
                if (answer.match(/y/i)) {
                    this.backupExistingFile(specPath, generated);
                    this.writeToSpecFile(specPath, generated);
                }
                else {
                    process.stdout.write(generated);
                }
                rl.close();
            });
        }
        else if (toFile && !specFileExists) {
            this.backupExistingFile(specPath, generated);
            this.writeToSpecFile(specPath, generated);
        }
        else if (!toFile) {
            process.stdout.write(generated);
        }
    }
}
exports.TestGen = TestGen;
