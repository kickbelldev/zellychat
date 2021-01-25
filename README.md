# ✨ ZellyPish's React BoilerPlate

> React boilerplate with ❄Snowpack and 🚀Skypack CDN 

## Features:
- [Snowpack 3.0](https://www.snowpack.dev/), The faster frontend build tool.
- [Skypack CDN](https://www.skypack.dev/), Load optimized npm packages with no install and no build tools.
- [Jest](https://jestjs.io/), delightful JavaScript Testing Framework with a focus on simplicity.
- @emotion/react, @emotion/styled for CSS-in-JS
- immer library
- eslint and prettier

## Quick Start

1. `git clone --depth=1 https://github.com/ZellyPish/react-snowpack-boilerplate.git <YOUR_PROJECT_NAME>`
2. `cd <YOUR_PROJECT_NAME>`
3. `yarn` or `npm install`
4. `yarn start` or `npm start`

### Build
- `yarn build` or `npm build`

## How to:

### Adding Packages

searching Packages in [Skypack CDN](https://www.skypack.dev/)

open `snowpack.config.js`, edit below `imports:`

##### 👇for example

```js
// snowpack.config.js

// ...
{
  imports: {
            // ...

            "redux": true, // this will add Redux to our project

            // ...
          },
},
// ...
```

## Known Issues:
- HMR(Hot Module Replacement) not working [Related issue](https://github.com/snowpackjs/snowpack/discussions/2334)

## Todos:
- Babel optimization
- and more