const { JSX, ParameterType } = require("typedoc");

/** @param {import("typedoc").Application} app */
exports.load = function load(app) {
    app.options.addDeclaration({ name: "modules", type: ParameterType.Array, elementType: "string" });

    app.renderer.hooks.on("sidebar.begin", () => {
        const modules = app.options.getValue("modules");

        return JSX.createElement(
            "div",
            { class: "custom-module-selector" },
            JSX.createElement(
                "select",
                {
                    id: "module-select",
                    onchange: "if (this.value) window.location.href = this.value;",
                },
                [
                    JSX.createElement("option", { value: "" }, "Select a module..."),
                    ...modules.map(m => JSX.createElement("option", { value: `/${m}` }, m)),
                ],
            ),
        );
    });

    app.renderer.hooks.on("head.begin", () => {
        return JSX.createElement(
            "script",
            null,
            JSX.createElement(JSX.Raw, {
                html: "localStorage.setItem('tsd-theme', localStorage.getItem('tsd-theme') || 'dark')",
            }),
        );
    });
};
