import type { NextConfig } from "next";

export default {
    reactStrictMode: true,
    poweredByHeader: false,
    async rewrites() {
        return [
            {
                source: "/:module",
                destination: "/docs/:module/index.html",
            },
            {
                source: "/:module/sitemap.xml",
                destination: "/docs/:module/sitemap.xml",
            },
            {
                source: "/:module/assets/:path*",
                destination: "/docs/:module/assets/:path*",
            },
            {
                source: "/:module/:path*",
                destination: "/docs/:module/:path*.html",
            },
        ];
    },
} satisfies NextConfig;
