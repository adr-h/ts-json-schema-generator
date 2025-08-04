import { FunctionTypeNode, FunctionExpression, FunctionDeclaration, ArrowFunction, getJSDocCommentsAndTags } from "typescript";
import { BaseType } from "./BaseType.js";
import type { ObjectType } from "./ObjectType.js";

export class FunctionType extends BaseType {
    private comment: string;

    constructor(
        node?: FunctionTypeNode | FunctionExpression | FunctionDeclaration | ArrowFunction,
        protected namedArguments?: ObjectType,
    ) {
        super();

        if (node) {
            this.comment = getJSDocCommentsAndTags(node).map(node => node.comment).join(' ');
            // this.comment = `(${getJSDocTags(node)} ${node.parameters.map((p) => p.getFullText()).join(",")}) =>${node.type?.getFullText()}`;
        }
    }

    public getId(): string {
        return "function";
    }

    public getComment(): string | undefined {
        return this.comment;
    }

    public getNamedArguments(): ObjectType | undefined {
        return this.namedArguments;
    }
}
