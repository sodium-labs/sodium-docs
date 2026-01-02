"use client";

import { Loader2Icon, TagIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PACKAGES_WITH_ENTRY_POINTS } from "@/lib/constants";
import { DocsParams } from "@/lib/types";

export function VersionSelect({
    versions,
    isLoading,
}: {
    readonly isLoading: boolean;
    readonly versions: { readonly version: string }[];
}) {
    const router = useRouter();
    const params = useParams<DocsParams>();

    const entryPoint = PACKAGES_WITH_ENTRY_POINTS.find(([n]) => n === params.packageName);

    return (
        <Select
            disabled={isLoading}
            aria-label={isLoading ? "Loading versions..." : "Select a version"}
            value={params.version}
            onValueChange={value => {
                const item = versions.find(v => v.version === value);
                if (item)
                    router.push(
                        `/docs/packages/${params.packageName}/${item.version}${entryPoint ? ["", ...entryPoint[1]].join("/") : ""}`,
                    );
            }}
            key={`${params.packageName}-${params.version}`}
        >
            <SelectTrigger className="w-full text-md h-10! pl-2 py-1 bg-[#f3f3f4] dark:bg-[#121214]">
                <TagIcon className="bg-primary/15 size-6 p-1 text-primary border border-primary rounded" />
                {isLoading ? (
                    <>
                        <span>Loading versions...</span>
                        <Loader2Icon
                            aria-hidden
                            className="size-6 ml-auto shrink-0 animate-spin duration-200 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
                            size={24}
                            strokeWidth={1.5}
                        />
                    </>
                ) : (
                    <>
                        <SelectValue />
                        <span className="ml-auto"></span>
                    </>
                )}
            </SelectTrigger>
            <SelectContent position="popper">
                {versions.map(item => (
                    <SelectItem value={item.version} key={item.version}>
                        <span
                            onMouseEnter={() => router.prefetch(`/docs/packages/${params.packageName}/${item.version}`)}
                        >
                            {item.version}
                        </span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
