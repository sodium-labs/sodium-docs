const fs = require("node:fs");
const path = require("node:path");
const cp = require("node:child_process");

async function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory() && e.name !== "node_modules") {
            if (fs.existsSync(path.join(full, "package.json"))) {
                console.log(`npm install in ${full}`);
                cp.execSync("npm install", { cwd: full, stdio: "inherit" });
            }
            await walk(full);
        }
    }
}

walk(path.join(process.cwd(), "modules"));
