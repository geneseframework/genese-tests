import { Node, Project, SourceFile } from 'ts-morph';
import { TsNode } from './models/ts-node.model';

/**
 * The project to analyse
 */
export let project  = new Project();


export class TypescriptParser {

    tsNode: TsNode;

    constructor(code: string) {
        const sourceFile = project.createSourceFile('temp.ts', code, {overwrite: true});
        this.tsNode = this.getRecursiveFrom(sourceFile, sourceFile);
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
            // console.log('NODDDDD', syntaxKind, kind)
            const all = children.filter(el => el.syntaxKind === kind);
            return all.length === 0 ? {get: getFunc} :
                all.length === 1 ? all[0] :
                    all;
        }
        const tsNode = new TsNode();
        tsNode.node = node;
        tsNode.syntaxKind = syntaxKind;
        tsNode.nodeText = nodeText;
        tsNode.children = children;
        tsNode.get = get;
        return tsNode;
    }
}

