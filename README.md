# Monorepo using Yarn, NestJS, React and MFE

Monorepo project with modules: Web, Server, Shared Functions and Shared Configuration;

### Build Branches Status

| Branch        | Build         | Coverage  |
| ------------- |:-------------:| ---------:|
| Develop       | ![CI](https://github.com/oseasjs/monorepo-nestjs-react-mfe/workflows/CI/badge.svg?branch=develop) | [![codecov](https://codecov.io/gh/oseasjs/monorepo-nestjs-react-mfe/branch/develop/graph/badge.svg)](https://codecov.io/gh/oseasjs/monorepo-nestjs-react-mfe/branch/develop) |
| Main          | ![CI](https://github.com/oseasjs/monorepo-nestjs-react-mfe/workflows/CI/badge.svg?branch=main)  | [![codecov](https://codecov.io/gh/oseasjs/monorepo-nestjs-react-mfe/branch/main/graph/badge.svg)](https://codecov.io/gh/oseasjs/monorepo-nestjs-react-mfe/branch/main) |

## Bootstrapped with:
- [Node 14x](https://nodejs.org/en/docs/);
- [Yarn](https://yarnpkg.com/getting-started);
- [NestJS](https://docs.nestjs.com/);
- [ReactJS](https://reactjs.org/docs/getting-started.html);
- [Webpack 5](https://webpack.js.org/guides/getting-started/);
- [Module Federation](https://webpack.js.org/concepts/module-federation/);
- [Github Actions](https://docs.github.com/pt/actions);


# Microfrontend with Single SPA and React

### Build Branches Status

| Branch        | Build         | Coverage  |
| ------------- |:-------------:| ---------:|
| Develop       | ![CI](https://github.com/oseasjs/microfrontend-single-spa/workflows/CI/badge.svg?branch=develop) | [![codecov](https://codecov.io/gh/oseasjs/microfrontend-single-spa/branch/develop/graph/badge.svg)](https://codecov.io/gh/oseasjs/microfrontend-single-spa/branch/develop) |
| Master        | ![CI](https://github.com/oseasjs/microfrontend-single-spa/workflows/CI/badge.svg?branch=master)  | [![codecov](https://codecov.io/gh/oseasjs/microfrontend-single-spa/branch/master/graph/badge.svg)](https://codecov.io/gh/oseasjs/microfrontend-single-spa/branch/master)  |


## Monorepo Modules

* packages/config
* packages/server
* packages/shared
* packages/web

## Microfrontend Modules

* packages/web/home
* packages/web/search
* packages/web/checkout

## Format, Lint, Tests (on root folder)

* format: `yarn format`
* lint: `yarn lint`
* test: `yarn test`

## Running Locally

* Server: 
  * Folder: `packages/server`
  * Run: `yarn start` 
  * url: http://localhost:3000
* Home: 
  * Folder: `packages/web/home`
  * Command: `yarn start` -  
  * url: http://localhost:9020
* Search: 
  * Folder: `packages/web/search`
  * Command: `yarn start` 
  * url: http://localhost:9022
* Checkout: 
  * Folder: `packages/web/chackout`
  * Command: `yarn start` 
  * url: http://localhost:9021

## Inspiration

* Yarn Workspaces (monorepo):
  * https://classic.yarnpkg.com/lang/en/docs/workspaces/
* NX documentation: 
  * https://nx.dev/getting-started/intro
* NX Videos:
  * https://www.youtube.com/watch?v=VKVTzVM0nVM&list=PLakNactNC1dG1CoyVWFppw3X8hnXRhFuy
  * https://www.youtube.com/watch?v=E188J7E_MDU
* Awesome tutorial video by [Diego Fernandes](https://github.com/diego3g):
  * https://www.youtube.com/watch?v=k5TkBcUTJus
* Reference 
  * https://github.com/rocketseat-content/youtube-monorepo
  