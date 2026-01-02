import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
