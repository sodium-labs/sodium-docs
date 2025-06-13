const fs = require("node:fs");
const path = require("node:path");

const directory = "./public/docs";
const attrRegex = /(href|src)="([^"]+)"/g;

function patchFile(filePath, moduleName) {
    let content = fs.readFileSync(filePath, "utf8");

    content = content.replace(attrRegex, (match, attr, url) => {
        if (url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("#")) {
            return match;
        }

        const newURL = `/${moduleName}/${
            url.startsWith("./") ? url.slice(2) : url.startsWith("../") ? url.slice(3) : url
        }`;

        return `${attr}="${newURL}"`;
    });

    fs.writeFileSync(filePath, content, "utf8");
}

function patchDirectory(dirPath, topLevel, moduleName) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            patchDirectory(fullPath, false, topLevel ? entry.name : moduleName);
        } else if (["html"].includes(entry.name.split(".").at(-1))) {
            patchFile(fullPath, moduleName);
        }
    }
}

patchDirectory(directory, true);
console.log("Docs patched");
