import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocCallbackTag(node: Mutable<TS.JSDocCallbackTag>, options: CloneNodeVisitorOptions<TS.JSDocCallbackTag>): TS.JSDocCallbackTag {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocCallbackTag>, options: CloneNodeVisitorOptions<TS.JSDocCallbackTag>): TS.JSDocCallbackTag {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocCallbackTag, -1, -1) as unknown) as Mutable<TS.JSDocCallbackTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.fullName = options.hook("fullName", options.nextNode(node.fullName), node.fullName);
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocCallbackTag>, options: CloneNodeVisitorOptions<TS.JSDocCallbackTag>): TS.JSDocCallbackTag {
	const baseNode = options.factory.createJSDocCallbackTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("fullName", options.nextNode(node.fullName), node.fullName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocCallbackTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);

	return baseNode;
}
