import { resolveNodeKindColor } from "@/lib/kind";

export async function NodeKindDisplay({
    background = false,
    node,
}: {
    readonly background?: boolean;
    readonly node: { kind: string };
}) {
    const color = resolveNodeKindColor(node.kind);
    return (
        <span className={background ? `${color.background} ${color.text}` : color.text}>{node.kind.toLowerCase()}</span>
    );
}
