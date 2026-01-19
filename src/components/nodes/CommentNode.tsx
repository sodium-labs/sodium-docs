import { BuiltinDocumentationLinks } from "@/lib/docs/builtinLinks";
import { KindTextElement } from "@/lib/docs/types";
import { Markdown } from "../Markdown";

export async function CommentNode({
    node,
    version,
    className,
}: {
    readonly node?: KindTextElement[];
    readonly version: string;
    className?: string;
}) {
    let oldKind = "";
    let key = "";

    const createNode = (node: KindTextElement) => {
        key += node.text;
        const _oldKind = oldKind;
        oldKind = node.kind;

        switch (node.kind) {
            case "PlainText":
                return (_oldKind === "PlainText" || _oldKind === "FencedCode" ? "\n\n" : "") + node.text;
            case "LinkTag": {
                if (node.resolvedPackage) {
                    return `[${node.text}](/docs/packages/${node.resolvedPackage.packageName}/${node.resolvedPackage.version ?? version}/${node.uri})`;
                }

                if (node.uri) {
                    return `[${node.text}${node.members ?? ""}](${node.uri})`;
                }

                if (node.text in BuiltinDocumentationLinks) {
                    const href = BuiltinDocumentationLinks[node.text as keyof typeof BuiltinDocumentationLinks];
                    return `[${node.text}](${href})`;
                }

                return node.text;
            }
            case "CodeSpan":
                return "`" + node.text + "`";
            case "FencedCode": {
                const { language, text } = node;
                return (oldKind === "" ? "" : "\n\n") + "```" + (language || "") + "\n" + text + "\n```";
            }
            case "SoftBreak":
                return null;
            default:
                return null;
        }
    };

    const markdown = node?.map(createNode).filter(s => s !== null) ?? null;

    return (
        <Markdown small className={className}>
            {markdown?.join("")}
        </Markdown>
    );
}
