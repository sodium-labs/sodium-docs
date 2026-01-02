import { NextResponse, type NextRequest } from "next/server";
import { PACKAGES } from "@/lib/constants";
import { fetchLatestVersion } from "@/lib/docs/fetchLatestVersion";

export default async function proxy(request: NextRequest) {
    const mainPackage = PACKAGES[0].name;

    if (request.nextUrl.pathname === "/docs") {
        const latestVersion = await fetchLatestVersion(mainPackage);
        return NextResponse.redirect(new URL(`/docs/packages/${mainPackage}/${latestVersion}`, request.url));
    }

    if (PACKAGES.some(pkg => request.nextUrl.pathname.includes(pkg.name))) {
        const packageName = /\/docs\/packages\/([^/]+)\/.*/.exec(request.nextUrl.pathname)?.[1] ?? mainPackage;
        const latestVersion = await fetchLatestVersion(packageName);
        return NextResponse.redirect(new URL(request.nextUrl.pathname.replace("stable", latestVersion), request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/docs", "/docs/packages/:package/stable/:member*"],
};
