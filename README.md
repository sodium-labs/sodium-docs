# Sodium Docs

The official docs of all the Sodium modules

## How to add a module

1. `git submodule add <url> modules/<name>`
2. Add it in the `modules` const in `docs/build-docs.js`
3. Add it in the `modules` const in `src/modules.ts`

# Update modules

- git submodule update --init --recursive --force
- cd modules/\*
- git checkout main
- git pull origin main
