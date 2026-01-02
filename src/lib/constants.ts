export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://docs.sodiumlabs.xyz"
        : `http://localhost:${process.env.PORT ?? 3000}`;

export const DESCRIPTION = "The documentation of the Sodium packages";

export const SODIUM_LABS_URL = "https://sodiumlabs.xyz";

export const STATUS_URL = "https://status.sodiumlabs.xyz";

export const GITHUB_NAME = "sodium-labs";

export const GITHUB_URL = "https://github.com/sodium-labs";

export const DISCORD_URL = "https://discord.gg/8PDXWSHH7k";

export const SODIUM_LABS_NPM_USER = "@sodiumlabs";

export const PACKAGES = [
    { user: SODIUM_LABS_URL, name: "plume-api", repository: "sodium-labs/plume-api.js" },
    { user: SODIUM_LABS_URL, name: "plume-url", repository: "sodium-labs/plume-url.js" },
    { user: SODIUM_LABS_URL, name: "gamecord" },
    { user: SODIUM_LABS_URL, name: "gdapi" },
];

/**
 * [name, ["entrypoint", "path"]]
 */
export const PACKAGES_WITH_ENTRY_POINTS: [string, string[]][] = [];
