import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocAuthorTag(node: Mutable<TS.JSDocAuthorTag>, options: CloneNodeVisitorOptions<TS.JSDocAuthorTag>): TS.JSDocAuthorTag {
	const baseNode = options.factory.createJSDocAuthorTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocAuthorTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
