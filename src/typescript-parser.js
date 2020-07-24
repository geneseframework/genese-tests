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
        const sourceFile = exports.project.createSourceFile('temp.ts', code, { overwrite: true });
        this.rootNode = this.getRecursiveFrom(sourceFile, sourceFile);
    }
    getRecursiveFrom(node, sourceFile) {
        const syntaxKind = node.getKindName();
        const nodeText = node.getText(sourceFile);
        const children = [];
        node.forEachChild(child => {
            children.push(this.getRecursiveFrom(child, sourceFile));
        });
        const getFunc = function () { return { get: getFunc }; };
        const get = (kind) => {
            const all = children.filter(el => el.syntaxKind === kind);
            return all.length === 0 ? { get: getFunc } :
                all.length === 1 ? all[0] :
                    all;
        };
        return {
            node: node,
            syntaxKind: syntaxKind,
            nodeText: nodeText,
            children: children,
            get: get
        };
    }
}
exports.TypescriptParser = TypescriptParser;
