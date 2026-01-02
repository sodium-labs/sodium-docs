import { NextResponse, type NextRequest } from "next/server";
import { fetchSitemap } from "@/lib/docs/fetchSitemap";
import { PackageSitemap } from "@/lib/docs/types";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const packageName = searchParams.get("packageName");
    const version = searchParams.get("version");
    const query = searchParams.get("q");

    if (!packageName || !version || !query) {
        return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const sitemap = await fetchSitemap({
        entryPoint: "",
        packageName,
        version,
    });

    if (!sitemap) {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    const results = search(query, sitemap);

    return NextResponse.json(
        results.map(r => ({
            id: r.href,
            kind: r.kind,
            name: r.name,
            path: `/docs/packages/${packageName}/${version}/${r.href}`,
        })),
    );
}

function search(query: string, names: PackageSitemap[], limit = 25): PackageSitemap[] {
    if (!query.trim()) return [];

    const scored = names
        .map(entry => ({
            entry,
            score: score(query, entry.name),
        }))
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    return scored.map(r => r.entry);
}

function score(query: string, name: string): number {
    const q = normalize(query);
    const n = normalize(name);

    if (n === q) return 1000;
    if (n.startsWith(q)) return 800;
    if (n.includes(q)) return 600;

    const dist = levenshtein(q, n);
    return Math.max(0, 400 - dist * 40);
}

function levenshtein(a: string, b: string, max = 10): number {
    if (Math.abs(a.length - b.length) > max) return max + 1;

    const v0 = Array.from({ length: b.length + 1 }).fill(0) as number[];
    const v1 = Array.from({ length: b.length + 1 }).fill(0) as number[];

    for (let i = 0; i <= b.length; i++) v0[i] = i;

    for (let i = 0; i < a.length; i++) {
        v1[0] = i + 1;
        let min = v1[0];

        for (let j = 0; j < b.length; j++) {
            const cost = a[i] === b[j] ? 0 : 1;
            v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
            min = Math.min(min, v1[j + 1]);
        }

        if (min > max) return max + 1;
        for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
    }

    return v1[b.length];
}

function normalize(s: string): string {
    return s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
