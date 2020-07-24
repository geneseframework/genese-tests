"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsNode = void 0;
const ts_morph_1 = require("ts-morph");
class TsNode {
    get name() {
        var _a, _b;
        if (!this.node) {
            return '';
        }
        switch (this.node.getKind()) {
            case ts_morph_1.SyntaxKind.ClassDeclaration:
            case ts_morph_1.SyntaxKind.FunctionDeclaration:
            case ts_morph_1.SyntaxKind.MethodDeclaration:
            case ts_morph_1.SyntaxKind.Parameter:
                return (_b = (_a = this.node.compilerNode['name']) === null || _a === void 0 ? void 0 : _a['escapedText']) !== null && _b !== void 0 ? _b : '';
            case ts_morph_1.SyntaxKind.Identifier:
                return this.node.compilerNode['escapedText'];
            default:
                return undefined;
        }
    }
}
exports.TsNode = TsNode;
