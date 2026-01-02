export type Node = InterfaceNode | TypeAliasNode | VariableNode | EnumNode | ClassNode | FunctionNode | UnknownNode;

export interface BaseNode {
    kind: string;
    displayName: string;
    sourceURL: string;
    sourceLine: number;
    sourceExcerpt: string;
    summary: CommentBlock | null;
    isStatic: boolean;
    isProtected: boolean;
    isReadonly: boolean;
    isAbstract: boolean;
    isDeprecated: boolean;
    isOptional: boolean;
    isExternal: boolean;
}

export interface InterfaceNode extends BaseNode {
    kind: "Interface";
    extends: InheritanceElement[] | null;
    implements: InheritanceElement[] | null;
    members: Members;
}

export interface TypeAliasNode extends BaseNode {
    kind: "TypeAlias";
    typeParameters: TypeParameter[];
    unionMembers: UnionMembers;
}

export interface VariableNode extends BaseNode {
    kind: "Variable";
    unionMembers: UnionMembers;
}

export interface EnumNode extends BaseNode {
    kind: "Enum";
    members: EnumMember[];
}

export interface ClassNode extends BaseNode {
    kind: "Class";
    extends: InheritanceElement[] | null;
    typeParameters: TypeParameter[];
    construct: Constructor | null;
    members: Members;
}

export interface FunctionNode extends BaseNode {
    kind: "Function";
    overloadIndex: number;
    typeParameters: TypeParameter[];
    parameters: Parameter[];
    overloads: [];
}

export interface UnknownNode extends BaseNode {
    kind: string;
}

export type UnionMembers = ExcerptElement[][];

export interface Members {
    properties: Property[];
    methods: Method[];
    events: Event[];
}

export interface Member extends BaseNode {}

export interface Constructor extends BaseNode {
    kind: "Constructor";
    parametersString: string;
    parameters: Parameter[];
}

export interface Property extends Member {
    kind: "Property";
    inheritedFrom: string | null;
    typeExcerpt: ExcerptElement[];
}

export interface Method extends Member {
    kind: "Method";
    overloadIndex: number;
    parametersString: string;
    returnTypeExcerpt: ExcerptElement[];
    inheritedFrom: string | null;
    typeParameters: TypeParameter[];
    parameters: Parameter[];
    overloads: MethodOverload[];
}

export interface EnumMember extends Member {
    name: string;
    initializerExcerpt: ExcerptElement[];
}

export interface Event extends Member {
    kind: "Event";
    parametersString: string;
    returnTypeExcerpt: ExcerptElement[];
    inheritedFrom: string | null;
    typeParameters: TypeParameter[];
    parameters: Parameter[];
}

export interface Parameter {
    name: string;
    isOptional: boolean;
    typeExcerpt: ExcerptElement[];
    description: KindTextElement[] | null;
    defaultValue?: string | null;
}

export interface TypeParameter {
    name: string;
    constraintsExcerpt: ExcerptElement[];
    isOptional: boolean;
    defaultExcerpt: ExcerptElement[];
    description: KindTextElement[] | null;
}

export interface InheritanceElement {
    type: "Extends" | "Implements";
    excerpts: ExcerptElement[];
}

export interface ExcerptElement {
    text: string;
    href?: string;
    resolvedItem?: ResolvedItem;
}

export interface ResolvedItem {
    kind: string;
    displayName: string;
    containerKey: string;
    uri: string;
    packageName: string;
    version?: string;
}

export interface KindTextElement {
    kind: "PlainText" | "CodeSpan" | "FencedCode" | "LinkTag" | "SoftBreak" | string;
    text: string;
    /**
     * e.g. "js"
     *
     * Only if kind is `FencedCode`
     */
    language?: string;
    /**
     * Can be on LinkTag
     */
    uri?: string;
    /**
     * Can be on LinkTag (?)
     */
    members?: string[];
    /**
     * Can be on LinkTag
     */
    resolvedPackage?: {
        packageName: string;
        version: string | null;
    };
}

export interface CommentBlock {
    kind: "Comment";
    deprecatedBlock: KindTextElement[];
    summarySection: KindTextElement[];
    remarksBlock: KindTextElement[];
    defaultValueBlock: KindTextElement[];
    returnsBlock: KindTextElement[];
    unstableBlock: KindTextElement[];
    exampleBlocks: KindTextElement[];
    seeBlocks: KindTextElement[];
    mixesBlocks: KindTextElement[];
}

export interface Overload extends BaseNode {}

export interface MethodOverload extends Overload {
    kind: "MethodSignature";
    overloadIndex: number;
    parametersString: string;
    returnTypeExcerpt: ExcerptElement[];
    inheritedFrom: string | null;
    typeParameters: TypeParameter[];
    parameters: Parameter[];
}

export interface PackageSitemap {
    kind: string;
    name: string;
    href: string;
    entry: string;
}

export interface PackageEntryPoint {
    entryPoint: string;
}

export interface PackageVersion {
    version: string;
}

/**
 * Record<packageName, version>
 */
export interface PackageDependencies {
    [x: string]: string;
}
