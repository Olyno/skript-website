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

## Contribute

### Edit documentation

 1. Go in [skript-website-public](https://github.com/Olyno/skript-website-public) repository
 2. Replace ``docs.json`` file with the new one
 3. Enjoy!

### Add a contributor

 1. Go in [skript-website-public](https://github.com/Olyno/skript-website-public) repository
 2. Go in the ``developers.json`` file
 3. Like others, add yours
 4. Enjoy!

### Add a tutorial

 1. Go in [skript-website-public](https://github.com/Olyno/skript-website-public) repository
 2. Go in the ``tutorials.json`` file
 3. Like others, add yours
 4. Go in the ``tutorials`` directory
 5. Like others, write your tutorial page
 6. Enjoy!