const moduleName = "$$MODULE_NAME$$";

function fixLinks() {
    ["href", "src"].forEach(attr => {
        document.querySelectorAll("[" + attr + "]").forEach(el => {
            let val = el.getAttribute(attr);
            if (val && !val.startsWith("http") && !val.startsWith("mailto:") && !val.startsWith("#")) {
                if (val.startsWith(`/${moduleName}/`)) val = val.slice(`/${moduleName}/`.length);
                if (val.startsWith(`/${moduleName}`)) val = val.slice(`/${moduleName}`.length);

                let newURL = `/${moduleName}/${
                    val.startsWith("./") ? val.slice(2) : val.startsWith("../") ? val.slice(3) : val
                }`;

                if (newURL.includes(".html")) newURL = newURL.replaceAll(".html", "");
                if (newURL.endsWith("/index")) newURL = newURL.slice(0, -6);
                if (newURL.endsWith("/")) newURL = newURL.slice(0, -1);

                el.setAttribute(attr, newURL);
            }
        });
    });
}

const observer = new MutationObserver(() => {
    fixLinks();
});

observer.observe(document.body, { childList: true, subtree: true });

fixLinks();
