# Skript Documentation

Here is the source code of [Skript website](https://skriptlang.github.io/Skript/).

What the website uses:

 * Bulma
 * FontAwesome
 * Svelte
 * Sapper

## Export Documentation

To export the documentation, run these commands in your terminal:

**Using NPM:**

```
npm install
git submodule init
git submodule update
npm run export
```

**Using YARN (recommanded):**

```
yarn
git submodule init
git submodule update
yarn export
```

Submodules will sync you to the public part, where tutorials and more stuff are.

It will generate the website as static website at ``__sapper__/export``.