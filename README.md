# Webpack

## Learning objectives

- Use webpack to bundle JavaScript.

## Description
**Webpack** is a static module bundler for modern JavaScript applications. It's intelligent enough to build all app dependencies based just on your file imports. It starts from a list of modules defined as *entry points* and recursively builds a *dependency graph* that includes every module the application needs. 

### Why is webpack important?
Historically webpack enabled developers to use ES6 modules before any browser implemented support for using them. 
Today webpack also allows for stylesheets and non-code assets, such as images and web fonts, to be used just like module imports thanks to its *dependency graph* and *loaders*. It cares for performance in production and provides a great experience for developers.

Usefull links I used to get started: 

- [Getting started with webpack](https://webpack.js.org/guides/getting-started/).
- [Asset management](https://webpack.js.org/guides/asset-management/).
- [Output management](https://webpack.js.org/guides/output-management/).
- [Development](https://webpack.js.org/guides/development/).
