# BATTLESHIP

## Introduction
1. BATTLESHIP simulates the classic battleship game. 
2. Ship arrangements on the gameboards are generated randomly.
3. Player will play against computer.
4. Player can choose who goes first.

## Game Demo
[BATTLESHIP DEMO](link)

## Future Work
1. Player chooses ship arrangements by entering coordinates or drag/drop
2. Human players mode - support playing on mobile device

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

## Images
1. Add rules in config file - see webpack.config.js for example
2. import image to script file

## Useful settings
* Use source map by adding `devtool: 'inline-source-map',` to config file
* Watch mode - add `"watch": "webpack --watch"` to script section of `package.json`

## JEST Setup 

1. Install jest `npm install --save-dev jest`
2. Add to package.json
```
{
  "scripts": {
    "test": "jest"
  }
}
```
3. Run `npm test`

