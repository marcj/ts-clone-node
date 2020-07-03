import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeAliasDeclaration(node: TS.TypeAliasDeclaration, options: CloneNodeVisitorOptions<TS.TypeAliasDeclaration>): TS.TypeAliasDeclaration {
	return options.factory.createTypeAliasDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
