# Sodium Docs

This repository contains the source code for the [Sodium Docs website](https://docs.sodiumlabs.xyz). The project is still under development, so you may encounter issues. If you need help, join [our Discord server](https://discord.gg/8PDXWSHH7k).

## Packages

Each package generates its documentation as a JSON file, which is automatically pushed to
[https://github.com/sodium-labs/artifacts](https://github.com/sodium-labs/artifacts).

The documentation website fetches these files and uses them to generate the documentation pages automatically.

In the future, these generated files will likely be stored in a database, but the current approach is sufficient for now.

## Notes

- Package comment blocks and READMEs are currently parsed mostly server-side without sanitization. Obviously this should be patched in the future.

- Packages with multiple entry points are not supported yet (not tested). In the future they will need to be supported.

- The documentation is currently designed for TypeScript, but we may add support for other languages in the future.

## Source

A portion of this repository is derived from the
[discord.js docs website](https://github.com/discordjs/discord.js/blob/main/apps/website/README.md). Most files have been reworked, mainly because our docs generation works differently.
