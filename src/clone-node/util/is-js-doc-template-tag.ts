import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocTemplateTag
 */
export function isJsDocTemplateTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTemplateTag {
	// TypeScript 4.x
	if (("isJSDocTemplateTag" in typescript) as never) {
		return typescript.isJSDocTemplateTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocTemplateTag;
}
