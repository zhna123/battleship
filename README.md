# BATTLESHIP

## Introduction
1. BATTLESHIP simulates the classic battleship game. 
2. Player will play against computer.
3. Player can choose who goes first.

## Game Demo
[BATTLESHIP DEMO](link)

## Further Work
Two human players mode - support playing on mobile device

## Other
1. The project is set up with webpack
2. Unit testing - JEST

## Webpack Setup - Basics

1. Install webpack locally
```
npm init -y
npm install webpack webpack-cli --save-dev

```
2. Setup directory structure
```
/dist/index.html
/src/index.js
```

3. Create configuration file `webpack.config.js`. eg:
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

4. Create a bundle
* install dependency locally using `npm install`
* import denpendency in the script using `import` statement
* load the bundle from html file using `script` tag: `<script src="bundle.js"></script>`

5. Run webpack by running \
`npx webpack --config webpack.config.js` \
or by editting `package.json`
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
},
```
then run
```
npm run build
```

## Loading CSS

1. `npm install --save-dev style-loader css-loader`
2. Edit config file by adding `style-loader` and `css-loader` to the module configuration
3. Now we can import css into the script `import './style.css'`

## Useful settings
* Use source map by adding `devtool: 'inline-source-map',` to config file
* Watch mode - add `"watch": "webpack --watch"` to script section of `package.json`
