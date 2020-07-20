import { ClassDeclaration, Node } from 'ts-morph';
import { TypescriptParser } from './typescript-parser';
import { Util } from './util';
const fs = require('fs');

export class TestGen {

    config;
    getGenerated;
    getProviderMocks;
    imports;
    klass: {
        get: any
        node: ClassDeclaration
    };
    klassMethods;
    klassGetters;
    klassSetters;
    template;
    tsPath;
    typescript;
    writeGenerated;

    constructor(tsPath: string, config) {
        this.typescript = fs.readFileSync(tsPath, 'utf8');
        this.setTsPath(tsPath, config);
        this.klass = this.getKlass();
    }


    setTsPath(tsPath, config) {
        if (tsPath && fs.existsSync(tsPath)) {
            this.tsPath = tsPath;
            this.config = config;
        } else {
            throw new Error(`Error. invalid typescript file. e.g., Usage $0 ${tsPath} [options]`);
        }
    }

    getKlass() {
        const parsed = new TypescriptParser(this.typescript);
        const fileBasedKlassName = Util.getClassName(this.tsPath);
        // console.log('KLASSSSSS NAMEEEEe', fileBasedKlassName)
        // console.log('CHILDRENNNN', parsed.rootNode)
        // console.log('CHILDRENNNN', parsed.rootNode.children)
        // console.log('PARSED ROOTNOEEEE', parsed.rootNode.get.body)
        const klassDeclarations = Util.__toArray(parsed.rootNode.get('ClassDeclaration'));
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

    getKlassSetters() { return Util.__toArray(this.klass.get('SetAccessor')); }
    getKlassGetters() { return Util.__toArray(this.klass.get('GetAccessor')); }
    getKlassMethods() { return Util.__toArray(this.klass.get('MethodDeclaration')); }
}
