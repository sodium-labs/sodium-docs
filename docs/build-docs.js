const fs = require("node:fs");
const td = require("typedoc");

const modules = ["plume-api.js", "plume-url.js", "gdapi"];

if (!fs.existsSync("docs/assets")) {
    fs.mkdirSync("docs/assets");
}

const buildModuleDocs = async name => {
    const date = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Europe/Paris",
    }).format(new Date());

    const customFile = fs.readFileSync("docs/custom.js").toString();
    fs.writeFileSync(`docs/assets/custom-${name}.js`, customFile.replace("$$MODULE_NAME$$", name));

    // Application.bootstrap also exists, which will not load plugins
    // Also accepts an array of option readers if you want to disable
    // TypeDoc's tsconfig.json/package.json/typedoc.json option readers
    const app = await td.Application.bootstrapWithPlugins({
        entryPoints: [`./modules/${name}/src/index.ts`],
        exclude: ["*.test.ts"],
        tsconfig: `modules/${name}/tsconfig.json`,
        out: `public/docs/${name}`,
        basePath: `./modules/${name}`,
        modules,
        customJs: `./docs/assets/custom-${name}.js`,
        customCss: "./docs/custom.css",
        plugin: ["typedoc-material-theme", "typedoc-plugin-zod", "./docs/typedoc-theme-plugin.js"],
        themeColor: "#7499d6",
        gitRemote: `https://github.com/sodium-labs/${name}.git`,
        sourceLinkTemplate: `https://github.com/sodium-labs/${name}/blob/main/{path}#L{line}`,
        gitRevision: "main",
        includeVersion: true,
        navigation: {
            includeGroups: true,
        },
        groupOrder: ["Classes", "Functions", "Variables", "*"],
        customFooterHtml: `Last update: ${date}`,
        hideGenerator: true,
        navigationLinks: {
            Menu: "https://docs.sodiumlabs.xyz",
            Discord: "https://discord.gg/8PDXWSHH7k",
            GitHub: "https://github.com/sodium-labs",
        },
        visibilityFilters: {
            private: false,
            protected: false,
            inherited: true,
            external: false,
        },
        headings: {
            readme: true,
        },
        hostedBaseUrl: `https://docs.sodiumlabs.xyz/${name}`,
        useHostedBaseUrlForAbsoluteLinks: true,
        favicon: "src/app/favicon.ico",
        externalSymbolLinkMappings: {
            global: {
                Buffer: "https://nodejs.org/api/buffer.html#buffer",
            },
            typescript: {
                Promise: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
                ArrayBuffer:
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",
                ArrayBufferLike:
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",
            },
        },
    });

    // May be undefined if errors are encountered.
    const project = await app.convert();

    if (project) {
        // Generate configured outputs
        await app.generateOutputs(project);
    } else {
        console.error(`Failed to generate docs for ${name}`);
    }
};

const buildDocs = async () => {
    console.log("Generating docs...");

    for (const name of modules) {
        await buildModuleDocs(name);
    }

    console.log("Cleaning temp files...");

    fs.rmSync("docs/assets", { recursive: true });

    console.log("Docs generated");
};

buildDocs();
