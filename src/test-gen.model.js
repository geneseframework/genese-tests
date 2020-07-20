"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGen = void 0;
const typescript_parser_1 = require("./typescript-parser");
const util_1 = require("./util");
const fs = require('fs');
class TestGen {
    constructor(tsPath, config) {
        this.typescript = fs.readFileSync(tsPath, 'utf8');
        this.setTsPath(tsPath, config);
        this.klass = this.getKlass();
    }
    setTsPath(tsPath, config) {
        if (tsPath && fs.existsSync(tsPath)) {
            this.tsPath = tsPath;
            this.config = config;
        }
        else {
            throw new Error(`Error. invalid typescript file. e.g., Usage $0 ${tsPath} [options]`);
        }
    }
    getKlass() {
        const parsed = new typescript_parser_1.TypescriptParser(this.typescript);
        const fileBasedKlassName = util_1.Util.getClassName(this.tsPath);
        // console.log('KLASSSSSS NAMEEEEe', fileBasedKlassName)
        // console.log('CHILDRENNNN', parsed.rootNode)
        // console.log('CHILDRENNNN', parsed.rootNode.children)
        // console.log('PARSED ROOTNOEEEE', parsed.rootNode.get.body)
        const klassDeclarations = util_1.Util.__toArray(parsed.rootNode.get('ClassDeclaration'));
        // const klassDeclarations = Util.__toArray(parsed.rootNode.get('ClassDeclaration'));
        // console.log('TO ARRAYYYYY', klassDeclarations)
        const klass = klassDeclarations.find(decl => decl.node.getName() === fileBasedKlassName) || klassDeclarations[0];
        // console.log('KLASSSSSS', klass)
        if (!klass) {
            throw new Error(`Error:TypeScriptParser Could not find ` +
                `${fileBasedKlassName || 'a class'} from ${this.tsPath}`);
        }
        return klass;
    }
    getKlassSetters() { return util_1.Util.__toArray(this.klass.get('SetAccessor')); }
    getKlassGetters() { return util_1.Util.__toArray(this.klass.get('GetAccessor')); }
    getKlassMethods() { return util_1.Util.__toArray(this.klass.get('MethodDeclaration')); }
}
exports.TestGen = TestGen;
