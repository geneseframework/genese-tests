import { Node, Project, SourceFile } from 'ts-morph';
import { TsNode } from './models/root-node.model';

/**
 * The project to analyse
 */
export let project  = new Project();


export class TypescriptParser {

    rootNode: TsNode;

    constructor(code: string) {
        const sourceFile = project.createSourceFile('temp.ts', code, {overwrite: true});
        this.rootNode = this.getRecursiveFrom(sourceFile, sourceFile);
        // console.log('ROOTNODE', this.rootNode.children)
    }

    getRecursiveFrom(node: Node, sourceFile: SourceFile): TsNode {
        const syntaxKind = node.getKindName();
        const nodeText = node.getText(sourceFile as any);
        const children = [];
        node.forEachChild(child => {
            children.push(this.getRecursiveFrom(child, sourceFile));
        });
        const getFunc = function() { return {get: getFunc} }
        const get = (kind: string) => {
            const all = children.filter(el => el.syntaxKind === kind);
            return all.length === 0 ? {get: getFunc} :
                all.length === 1 ? all[0] :
                    all;
        }
        return {
            node: node,
            syntaxKind: syntaxKind,
            nodeText: nodeText,
            children: children,
            get: get
        };
    }
}

