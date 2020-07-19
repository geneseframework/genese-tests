
import { Node, Project, SourceFile, SyntaxKind } from 'ts-morph';

/**
 * The project to analyse
 */
export let project  = new Project();


export class TypescriptParser {

    rootNode;

    constructor(code) {
        // console.log('CODE PARSERRRR', code)
        const sourceFile = project.createSourceFile('temp.ts', code, {overwrite: true});
        // console.log('SOURCE FILLLL', sourceFile.getFilePath())
        this.rootNode = this.getRecursiveFrom(sourceFile, sourceFile);
        console.log('ROOTNODE', this.rootNode.children)
    }

    getRecursiveFrom(node: Node, sourceFile: SourceFile) {
        const syntaxKind = node.getKindName();
        // const syntaxKind = SyntaxKind[node.kind];
        const nodeText = node.getText(sourceFile as any);
        const children = [];
        node.forEachChild(child => {
            children.push(this.getRecursiveFrom(child, sourceFile));
        });
        const getFunc = function() { return {get: getFunc} }
        const get = (kind) => {
            const all = this.rootNode.children.filter(el => el.syntaxKind === kind);
            return all.length === 0 ? {get: getFunc} :
                all.length === 1 ? all[0] :
                    all;
        }
        return {node, syntaxKind, nodeText, children, get};
    }
}

