import Link from "next/link";
import { resolveNodeKindLinkClass } from "@/lib/kind";
import { cn } from "@/lib/utils";

export async function InheritedFromNode({
    node,
    packageName,
    version,
}: {
    readonly node: string;
    readonly packageName: string;
    readonly version: string;
}) {
    return (
        <p className="pl-4 wrap-break-words">
            <span className="font-semibold text-zinc-400">Inherited from:</span>{" "}
            <Link
                className={cn("font-mono", resolveNodeKindLinkClass("Class"))}
                href={`/docs/packages/${packageName}/${version}/${node}`}
                // @ts-expect-error - unstable_dynamicOnHover is not part of the public types
                unstable_dynamicOnHover
            >
                {node.slice(0, node.indexOf(":"))}
            </Link>
        </p>
    );
}
