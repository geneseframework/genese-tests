import { Node, SyntaxKind } from 'ts-morph';

export class TsNode {

    children?: TsNode[];
    get?: (kind: string) => () => any;
    node?: Node;
    nodeText?: string;
    syntaxKind?: string;


    get name(): string {
        if (!this.node) {
            return '';
        }
        switch (this.node.getKind()) {
            case SyntaxKind.ClassDeclaration:
            case SyntaxKind.FunctionDeclaration:
            case SyntaxKind.MethodDeclaration:
            case SyntaxKind.Parameter:
                return this.node.compilerNode['name']?.['escapedText'] ?? '';
            case SyntaxKind.Identifier:
                return this.node.compilerNode['escapedText'];
            default:
                return undefined;
        }
    }
}
