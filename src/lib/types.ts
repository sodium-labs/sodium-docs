export type DocsParams = Awaited<PageProps<"/docs/packages/[packageName]/[version]/[[...item]]">["params"]>;

export interface SearchResult {
    id: string;
    kind: string;
    name: string;
    path: string;
}
