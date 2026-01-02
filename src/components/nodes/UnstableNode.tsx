import { KindTextElement } from "@/lib/docs/types";
import { CommentNode } from "./CommentNode";
import { Alert } from "../Alert";

export async function UnstableNode({
    unstableBlock,
    version,
}: {
    readonly unstableBlock: KindTextElement[];
    readonly version: string;
}) {
    return (
        <Alert title="Unstable" type="danger">
            <p className="wrap-break-words">
                <CommentNode node={unstableBlock} version={version} />
            </p>
        </Alert>
    );
}
