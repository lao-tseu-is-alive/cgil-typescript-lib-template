# Your_Own_Library_Name


Your_Own_Library_Name is a library to help you with...

this project uses 😀:
* [RollupJs](https://rollupjs.org/) for bundling the code as CommonJS, UMD (Browser compatible) and Es2015 Modules.
* [TypeScript](https://www.typescriptlang.org/) to add type intelligence (.d.ts bundle for type-checking generated)
* [EsLint](https://eslint.org/) To analyse and Fix code and ensure quality.
* [TypeDoc](https://typedoc.org/) To generate the documentation based on jsdoc comments 📚
* [Rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser) to minify the generated umd bundle  using [terser](https://github.com/fabiosantoscode/terser)


### How to use it:
just use the template, clone the repo and install dev dependencies with : 
```bash
npm install
```

### How to build Your_Own_Library_Name in dist directory : 
```bash
npm run build
```


### Initial template configuration steps :
This is a template to help you bundle your TypeScript **Your_Own_Library_Name** Library with Rollup.Js in ES, CommonJS and UMD format.

*You better delete this section of the readme once you are ready to go*.

1. Edit file *package.json* and replace **Your_Own_Library_Name** with your real project name.(do the same for **Your_Own_Git_Account_Name**)
2. Put your own TypeScript files in the *src* directory 
3. Adapt all files to your need...

### Documentation

The [Documentation of Your_Own_Library_Name](https://lao-tseu-is-alive.github.io/cgil-typescript-lib-template/docs/) 
is available under the docs directory and can be 
generated from  the jsdoc comments in the source code with **npm run docs**.  



### How to use Your_Own_Library_Name in the browser:
Inside the browser you need to include the minified umd version.
The library is exposed via the **Your_Own_Library_Name** 'namespace'.

You can have a look in the examples directory.

Basically it's just a classical script :
```html
<script src="../dist/Your_Own_Library_Name.umd.js"></script>
```

Then in your javascript code :

```javascript
const myClass = new Your_Own_Library_Name.YourClass('param1', 45 ,'another parameter to your constructor')

```
