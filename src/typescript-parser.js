"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptParser = exports.project = void 0;
const ts_morph_1 = require("ts-morph");
/**
 * The project to analyse
 */
exports.project = new ts_morph_1.Project();
class TypescriptParser {
    constructor(code) {
        // console.log('CODE PARSERRRR', code)
        const sourceFile = exports.project.createSourceFile('temp.ts', code, { overwrite: true });
        // console.log('SOURCE FILLLL', sourceFile.getFilePath())
        this.rootNode = this.getRecursiveFrom(sourceFile, sourceFile);
        console.log('ROOTNODE', this.rootNode.children);
    }
    getRecursiveFrom(node, sourceFile) {
        const syntaxKind = node.getKindName();
        // const syntaxKind = SyntaxKind[node.kind];
        const nodeText = node.getText(sourceFile);
        const children = [];
        node.forEachChild(child => {
            children.push(this.getRecursiveFrom(child, sourceFile));
        });
        const getFunc = function () { return { get: getFunc }; };
        const get = (kind) => {
            const all = this.rootNode.children.filter(el => el.syntaxKind === kind);
            return all.length === 0 ? { get: getFunc } :
                all.length === 1 ? all[0] :
                    all;
        };
        return { node, syntaxKind, nodeText, children, get };
    }
}
exports.TypescriptParser = TypescriptParser;
