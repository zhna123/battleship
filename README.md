# battleship

## webpack setup - basic

1. install webpack locally
```
npm init -y
npm install webpack webpack-cli --save-dev

```
2. setup directory structure
```
/dist/index.html
/src/index.js
```

3. create configuration file `webpack.config.js`. eg:
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

4. create a bundle
* install dependency locally using `npm install`
* import denpendency in the script using `import` statement
* load the bundle from html file using `script` tag: `<script src="bundle.js"></script>`

5. run webpack by running \
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

## loading CSS

1. `npm install --save-dev style-loader css-loader`
2. edit config file by adding `style-loader` and `css-loader` to the module configuration
3. now we can import css into the script `import './style.css'`

## useful settings
* use source map by adding `devtool: 'inline-source-map',` to config file
* watch mode - add `"watch": "webpack --watch"` to script section of `package.json`
