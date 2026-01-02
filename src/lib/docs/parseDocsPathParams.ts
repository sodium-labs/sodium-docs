export function parseDocsPathParams(item: string[] | undefined): {
    entryPoints: string[];
    nodeName: string | undefined;
} {
    if (!item?.length) {
        return { entryPoints: [], nodeName: undefined };
    }

    const lastElement = item.at(-1);
    const hasTypeMarker = lastElement?.includes("%3A");

    return {
        entryPoints: hasTypeMarker ? item.slice(0, -1) : lastElement?.length === 0 ? [""] : item,
        nodeName: hasTypeMarker ? lastElement : undefined,
    };
}
