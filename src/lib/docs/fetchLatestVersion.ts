import { unstable_cache } from "next/cache";
import { fetchVersions } from "./fetchVersions";
import { isValidPackage } from "./validation";

export async function fetchLatestVersion(packageName: string) {
    return fetchLatestVersionCached(packageName);
}

const fetchLatestVersionCached = unstable_cache(
    async (packageName: string): Promise<string> => {
        if (!isValidPackage(packageName)) return "";

        try {
            const versions = await fetchVersions(packageName);
            if (!versions || versions.length === 0) return "";

            const parse = (v: string) =>
                v
                    .split(".")
                    .slice(0, 3)
                    .map(s => {
                        const n = parseInt(s, 10);
                        return Number.isNaN(n) ? 0 : n;
                    });

            const compare = (a: string, b: string) => {
                const pa = parse(a),
                    pb = parse(b);
                for (let i = 0; i < 3; i++) {
                    if (pa[i] !== pb[i]) return pa[i] - pb[i];
                }
                return 0;
            };

            const latest = versions.reduce(
                (best, cur) => (compare(cur.version, best.version) > 0 ? cur : best),
                versions[0],
            );

            return latest.version;
        } catch {
            return "";
        }
    },
    undefined,
    { revalidate: 60 * 1 },
);
