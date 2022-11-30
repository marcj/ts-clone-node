# 2.0.0 (2022-11-30)


### Bug Fixes

* add support for 4.1.0-beta and 4.1.0 nightly ([a164d27](https://github.com/wessberg/ts-clone-node/commit/a164d27c65c758f940655087f3195aa79b621533))
* add support for cloning comments ([73887ae](https://github.com/wessberg/ts-clone-node/commit/73887aeba63fb33e49b30ecfeda2ea2073e1d5c9))
* add support for PrivateIdentifiers ([17068ef](https://github.com/wessberg/ts-clone-node/commit/17068efe864dfc941bd127ceb983d2257915de8e))
* also clear synthetic trailing comment ranges ([fe6052e](https://github.com/wessberg/ts-clone-node/commit/fe6052e21e433c1de61da47020834587e0832723))
* always set parents, traversable with _parent, unless 'setParents' is true, then the 'parent' property is used directly ([6db6182](https://github.com/wessberg/ts-clone-node/commit/6db61824919b945d5fec4ba97341c468b39985fd))
* **comments:** improve comment cloning ([8f2dbcc](https://github.com/wessberg/ts-clone-node/commit/8f2dbcce91752cc85eb8d8de55aa2d1e66371362))
* ensure compatibility with TypeScript v3.0.0 ([92139eb](https://github.com/wessberg/ts-clone-node/commit/92139ebaefca69c98f2ced3c36b3f59f920b6bcd))
* fix an issue where ArrayTypeNodes didn't have their TextSpan reset ([b579487](https://github.com/wessberg/ts-clone-node/commit/b5794873b200af1a15517e76968d88a01f1ac3ab))
* fix an issue where the options for setParentNodes would be ignored ([fcd3eb7](https://github.com/wessberg/ts-clone-node/commit/fcd3eb74d9a36121113db7cea3cc6e0ae58896fb))
* fix cloning TupleTypeNodes on TypeScript 3.x ([2243b29](https://github.com/wessberg/ts-clone-node/commit/2243b29f6ca928c7c37d8c3a38ae6e47b7dcc38c))
* fix issue with cloning MethodSignatures with modifiers ([c392fc9](https://github.com/wessberg/ts-clone-node/commit/c392fc9dd5f0115258c0ef9d3cbd10637b624c86))
* **ImportEqualsDeclaration:** add support for constructing type-only ImportEqualsDeclarations, as supported by TypeScript 4.2 ([c4b6082](https://github.com/wessberg/ts-clone-node/commit/c4b60823b1a6b89d3d87497663fa099c794eaf6b))
* **parentheses:** make sure that cloned CallExpressions and VariableDeclarations are always structurally equivalent ([03206f6](https://github.com/wessberg/ts-clone-node/commit/03206f6a60ff2919836040cd813c3b11415b14c2))
* **property-access-chains:** fix cloning of PropertyAccessChains. Fixes [#5](https://github.com/wessberg/ts-clone-node/issues/5) ([5497b6c](https://github.com/wessberg/ts-clone-node/commit/5497b6c81b57784d4cbc796d8cd188afa160db39))
* **PropertyAssignment:** make sure that cloned PropertyAssignments are always structurally equivalent. Closes [#1](https://github.com/wessberg/ts-clone-node/issues/1) ([fa59c75](https://github.com/wessberg/ts-clone-node/commit/fa59c7590b55af80195e41f1ce5f6956b85f09f6))
* support [@see](https://github.com/see) jsdoc comments with TypeScript 4.1 ([bc8d58c](https://github.com/wessberg/ts-clone-node/commit/bc8d58ca8de91d505c805f02bb26d68226e18d27))
* support Identifier nodes with only escapedText. [#6](https://github.com/wessberg/ts-clone-node/issues/6) ([9e5378c](https://github.com/wessberg/ts-clone-node/commit/9e5378cf1edbb0582ee94ae829c325a3321a95b0))
* **typescript-3.8:** respect 'isTypeOnly' property for ImportClauses ([de62562](https://github.com/wessberg/ts-clone-node/commit/de6256219652246694f82a66a941ab62dce155f5))
* use provided modifiers when creating/updating MethodSignatures ([b405dca](https://github.com/wessberg/ts-clone-node/commit/b405dca0bdb707ce8580cb501b6e3233e2ac1960))
* when preserving a node, make sure to set the parent of the old node if requested ([d78720d](https://github.com/wessberg/ts-clone-node/commit/d78720df4765d427f9de903404a16de006bba4f9))


### Features

* add more customizability ([a40af21](https://github.com/wessberg/ts-clone-node/commit/a40af21f1e8e7f784067ed859aeb4081474530cd))
* add support for dynamic TypeScript versions ([70fbbab](https://github.com/wessberg/ts-clone-node/commit/70fbbabde8a8c8a841725ed8820d48422b99bf60))
* add support for dynamic TypeScript versions ([962a93b](https://github.com/wessberg/ts-clone-node/commit/962a93b9b5ffabe591d4600eeef977a5394b0854))
* add TypeScript 4.4 support ([0a004a8](https://github.com/wessberg/ts-clone-node/commit/0a004a88a699e026573d1d98d6d3190f166ebb5c))
* Add TypeScript 4.7 support ([bba8536](https://github.com/wessberg/ts-clone-node/commit/bba853637eee2e3b538d806e6e1aa1493a33fdb1))
* Add TypeScript 4.8 support ([6b8137d](https://github.com/wessberg/ts-clone-node/commit/6b8137df191e5d2acfc8df6ec966d6a640f8f865))
* add TypeScript v4.5 support ([972470a](https://github.com/wessberg/ts-clone-node/commit/972470a78fea9ac7f8631b5ab1a8eda7b3c62ca6))
* **ConstructorTypeNode:** add support for the 'abstract' modifier for ConstructorTypeNodes, as introduced in TypeScript 4.2 ([254292a](https://github.com/wessberg/ts-clone-node/commit/254292af4f7ec6a3f1f01e6613388d3baa08a889))
* **JSDocDeprecatedTag:** add support for JSDocDeprecatedTags ([bd6df51](https://github.com/wessberg/ts-clone-node/commit/bd6df51fa07b0f885d93460618c2fb410a9f1fc8))
* **MappedTypeNode:** add support for 'as' clauses in MappedTypeNodes ([9ddc790](https://github.com/wessberg/ts-clone-node/commit/9ddc790c58f7a3cde912e27ff2f7dedb678ecec8))
* **NamedTupleMember:** add support for NamedTupleMembers ([339fc9b](https://github.com/wessberg/ts-clone-node/commit/339fc9b27395da951f7f0c8641c4aeacb1d9aaa4))
* **setParents:** expose 'setParents' function ([4b8bda1](https://github.com/wessberg/ts-clone-node/commit/4b8bda129efabfe294f5727c66065de7b4fcf5b2))
* **TemplateLiteralTypeNode:** add support for TemplateLiteralTypeNode and TemplateLiteralTypeSpan ([8478aea](https://github.com/wessberg/ts-clone-node/commit/8478aea06b89fab7a6b150315dd08bd69cde3e31))
* **typescript-3.8:** add support for TypeScript v3.8 ([36db665](https://github.com/wessberg/ts-clone-node/commit/36db665a59db776e7f5669c34cc6a351cad780a2))
* **typescript:** add TypeScript v4 support ([729b38e](https://github.com/wessberg/ts-clone-node/commit/729b38e172e6466217067bc1c6e15ae4ba55b154))



