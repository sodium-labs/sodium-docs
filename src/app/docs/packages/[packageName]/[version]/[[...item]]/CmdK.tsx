import { CmdKNoSRR } from "@/components/CmdK";
import { fetchDependencies } from "@/lib/docs/fetchDependencies";
import { DocsParams } from "@/lib/types";

export async function CmdK({ params }: { params: Promise<DocsParams> }) {
    const { packageName, version } = await params;
    const dependencies = await fetchDependencies({ packageName, version });

    return <CmdKNoSRR dependencies={dependencies} />;
}
