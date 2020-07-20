import { Node } from 'ts-morph';

export class TsNode {

    children?: TsNode[];
    get?: any;
    node?: Node;
    nodeText?: string;
    syntaxKind?: string;

}
