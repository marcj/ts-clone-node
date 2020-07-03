import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocNamepathType
 */
export function isJsDocNamepathType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNamepathType {
	// TypeScript 4.x
	if (("isJSDocNamepathType" in typescript) as never) {
		return typescript.isJSDocNamepathType(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocNamepathType;
}
