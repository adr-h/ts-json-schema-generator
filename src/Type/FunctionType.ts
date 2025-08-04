import { getJSDocTags, FunctionTypeNode, FunctionExpression, FunctionDeclaration, ArrowFunction } from "typescript";
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
            this.comment = JSON.stringify(getJSDocTags(node));
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
