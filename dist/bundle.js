/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    height: 100vh;\n}\n\n.container {\n    display: none;\n    min-width: 760px;\n    height: 100vh;\n}\n\n.line {\n    width: 80%;\n    height: 5px;\n    background-color: lightseagreen;\n    margin: auto;\n}\n\n.title {\n    height: 15%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.8rem;\n    font-weight: bold;\n    color: rgb(88, 86, 86);\n}\n\n.gameboards {\n    height: 60%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n    \n}\n\n.gameboard {\n    height: 90%;\n    width: 40%;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.gameboard .name {\n    height: 10%;\n    text-align: center;\n    color: rgb(88, 86, 86);\n    font-size: 1.2rem;\n}\n\n.gameboard .game_grid {\n    height: 90%;\n    border: 1px solid lightgray;\n    display: flex;\n    flex-direction: column;\n\n    color: lightseagreen;\n}\n\n.row {\n    height: 10%;\n    display: flex;\n    text-align: center;\n\n    border: .5px solid lightgray;\n}\n\n.column {\n    width: 10%;\n    height: 100%;\n    border: .5px solid lightgray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.progress {\n    height: 25%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n\n    padding-bottom: 30px;\n}\n\n.ships_chart {\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n    width: 40%;\n}\n\n.ship {\n    height: 20%;\n    display: flex;\n    gap: 10px;\n}\n\n.ship_title {\n    width: 30%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    font-size: .9rem;\n    color: lightseagreen;\n\n}\n\n.ship_state {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 3px;\n}\n\n.state_square {\n    width: 18%;\n    height: 80%;\n    border: .5px solid lightseagreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: lightseagreen;\n}\n\n.overlay {\n    display: none;\n    position: absolute;\n    background-color: rgba(211, 211, 211, 0.5);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n}\n\n.game_end {\n    display: none;\n    position: absolute;\n    border: 2px solid lightseagreen;\n    border-radius: 5px;\n    background-color: white;\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    z-index: 200;\n\n    text-align: center;\n    padding-top: 80px;\n    font-size: 2rem;\n    color: lightseagreen;\n    gap: 60px;\n    \n}\n\nbutton {\n    background-color: lightseagreen;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n    font: inherit;\n    cursor: pointer;\n}\n\n.restart {\n    display: block;\n    width: 40%;\n    padding: 5px;\n    margin: auto;\n}\n\n.img {\n    display: block;\n    width: 200px;\n    height: 200px;\n    object-fit: contain;\n    margin: auto;\n}\n\n/* style start forms */\n.form_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#game_form {\n    border: 3px solid lightseagreen;\n    border-radius: 20px;\n    padding: 20px;\n    width: 80%;\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n#game_form > h1 {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.tab.player {\n    width: 60%;\n    margin: auto;\n}\n\ninput[type=text] {\n    width: 70%;\n    height: 30px;\n    margin: 10px;\n    border: 1px solid lightseagreen;\n    border-radius: 5px;\n    padding: 10px;;\n}\n\ninput[type=checkbox] {\n    height: 25px;\n    width: 25px;\n    vertical-align: middle;\n    margin: 10px;\n}\n\nbutton.page {\n    height: 40px;\n    width: 90px;\n    margin: 10px;\n}\n\n  /* place ship form */\n.board_container {\n    height: 500px;\n    margin: 30px auto 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.left {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.right {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n/* overwrite some of the existing styles when they are applied to the place ship section */\n\n.left > .ship {\n    display: flex;\n    flex-direction: column;\n}\n\n.left > .ship > .ship_state {\n    justify-content: center;\n}\n\n.left > .ship > .ship_state > .state_square {\n    width: 15px;\n    height: 15px;\n}\n\n/* hide all steps by default */\n.tab {\n    display: none;\n}\n\n.over {\n    border: 1px dotted red;\n}\n\n.over::before {\n    font-weight: lighter;\n    font-size: xx-small;\n    color: red;\n    content: \"Place Ship Here\";\n}\n\n\n  \n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body, html {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    height: 100vh;\n}\n\n.container {\n    display: none;\n    min-width: 760px;\n    height: 100vh;\n}\n\n.line {\n    width: 80%;\n    height: 5px;\n    background-color: lightseagreen;\n    margin: auto;\n}\n\n.title {\n    height: 15%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.8rem;\n    font-weight: bold;\n    color: rgb(88, 86, 86);\n}\n\n.gameboards {\n    height: 60%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n    \n}\n\n.gameboard {\n    height: 90%;\n    width: 40%;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.gameboard .name {\n    height: 10%;\n    text-align: center;\n    color: rgb(88, 86, 86);\n    font-size: 1.2rem;\n}\n\n.gameboard .game_grid {\n    height: 90%;\n    border: 1px solid lightgray;\n    display: flex;\n    flex-direction: column;\n\n    color: lightseagreen;\n}\n\n.row {\n    height: 10%;\n    display: flex;\n    text-align: center;\n\n    border: .5px solid lightgray;\n}\n\n.column {\n    width: 10%;\n    height: 100%;\n    border: .5px solid lightgray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.progress {\n    height: 25%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n\n    padding-bottom: 30px;\n}\n\n.ships_chart {\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n    width: 40%;\n}\n\n.ship {\n    height: 20%;\n    display: flex;\n    gap: 10px;\n}\n\n.ship_title {\n    width: 30%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    font-size: .9rem;\n    color: lightseagreen;\n\n}\n\n.ship_state {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 3px;\n}\n\n.state_square {\n    width: 18%;\n    height: 80%;\n    border: .5px solid lightseagreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: lightseagreen;\n}\n\n.overlay {\n    display: none;\n    position: absolute;\n    background-color: rgba(211, 211, 211, 0.5);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n}\n\n.game_end {\n    display: none;\n    position: absolute;\n    border: 2px solid lightseagreen;\n    border-radius: 5px;\n    background-color: white;\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    z-index: 200;\n\n    text-align: center;\n    padding-top: 80px;\n    font-size: 2rem;\n    color: lightseagreen;\n    gap: 60px;\n    \n}\n\nbutton {\n    background-color: lightseagreen;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n    font: inherit;\n    cursor: pointer;\n}\n\n.restart {\n    display: block;\n    width: 40%;\n    padding: 5px;\n    margin: auto;\n}\n\n.img {\n    display: block;\n    width: 200px;\n    height: 200px;\n    object-fit: contain;\n    margin: auto;\n}\n\n/* style start forms */\n.form_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#game_form {\n    border: 3px solid lightseagreen;\n    border-radius: 20px;\n    padding: 20px;\n    width: 80%;\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n#game_form > h1 {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.tab.player {\n    width: 60%;\n    margin: auto;\n}\n\ninput[type=text] {\n    width: 70%;\n    height: 30px;\n    margin: 10px;\n    border: 1px solid lightseagreen;\n    border-radius: 5px;\n    padding: 10px;;\n}\n\ninput[type=checkbox] {\n    height: 25px;\n    width: 25px;\n    vertical-align: middle;\n    margin: 10px;\n}\n\nbutton.page {\n    height: 40px;\n    width: 90px;\n    margin: 10px;\n}\n\n  /* place ship form */\n.board_container {\n    height: 500px;\n    margin: 30px auto 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.left {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.right {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n/* overwrite some of the existing styles when they are applied to the place ship section */\n\n.left > .ship {\n    display: flex;\n    flex-direction: column;\n}\n\n.left > .ship > .ship_state {\n    justify-content: center;\n}\n\n.left > .ship > .ship_state > .state_square {\n    width: 15px;\n    height: 15px;\n}\n\n/* hide all steps by default */\n.tab {\n    display: none;\n}\n\n.over {\n    border: 1px dotted red;\n}\n\n.over::before {\n    font-weight: lighter;\n    font-size: xx-small;\n    color: red;\n    content: \"Place Ship Here\";\n}\n\n\n  \n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app/common_ui.js":
/*!******************************!*\
  !*** ./src/app/common_ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendGrids": () => (/* binding */ appendGrids),
/* harmony export */   "bVertical": () => (/* binding */ bVertical),
/* harmony export */   "cVertical": () => (/* binding */ cVertical),
/* harmony export */   "createShipDiv": () => (/* binding */ createShipDiv),
/* harmony export */   "dVertical": () => (/* binding */ dVertical),
/* harmony export */   "pVertical": () => (/* binding */ pVertical),
/* harmony export */   "sVertical": () => (/* binding */ sVertical)
/* harmony export */ });
let pVertical = false
let dVertical = false
let sVertical = false
let bVertical = false
let cVertical = false

function createShipDiv(i, draggable=false, orientationControl=false) {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
  
    const shipTitle = document.createElement('div');
    shipTitle.classList.add('ship_title');
    let shipState = document.createElement('div');
    shipState.classList.add('ship_state');
    if (draggable) {
        shipState.draggable = true;
        shipState.style.cursor = 'move';
    }
    // fill in ship names
    switch (i) {
      case 0:
        shipTitle.textContent = 'PATROL';
        initShipState(shipState, 2, 'P');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            pVertical = !pVertical
            shipState = transform(shipState, pVertical) 
          })
        }    
        break;
      case 1:
        shipTitle.textContent = 'DESTROYER';
        initShipState(shipState, 3, 'D');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            dVertical = !dVertical
            shipState = transform(shipState, dVertical) 
          })
        }    
        break;
      case 2:
        shipTitle.textContent = 'SUBMARINE';
        initShipState(shipState, 3, 'S');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            sVertical = !sVertical
            shipState = transform(shipState, sVertical) 
          })
        }    
        break;
      case 3:
        shipTitle.textContent = 'BATTLESHIP';
        initShipState(shipState, 4, 'B');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            bVertical = !bVertical
            shipState = transform(shipState, bVertical) 
          })
        }    
        break;
      case 4:
        shipTitle.textContent = 'CARRIER';
        initShipState(shipState, 5, 'C');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            cVertical = !cVertical
            shipState = transform(shipState, cVertical) 
          })
        }    
        break;
      default:
        break;
    }
    shipDiv.appendChild(shipTitle);
    shipDiv.appendChild(shipState);
    return shipDiv;
}
  
function initShipState(shipState, numberOfHoles, symbol) {
    for(let i=0; i<numberOfHoles; i++) {
      const stateSquare = document.createElement('div');
      stateSquare.classList.add('state_square');
      stateSquare.textContent = symbol;
      shipState.appendChild(stateSquare);
    }
    shipState.id = symbol
    return shipState;
}

function transform(shipState, isVertical) {
  if (isVertical) {
    shipState.style.transform = 'rotate(90deg)';
  } else {
    shipState.style.transform = 'rotate(0)';
  }
  return shipState
}

function appendGrids(div) {
    for (let i=0; i<10; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      for (let j=0; j<10; j++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        columnDiv.id = i.toString() + j.toString();
        rowDiv.appendChild(columnDiv);
      }
      div.appendChild(rowDiv);
    }
    return div;
}



/***/ }),

/***/ "./src/app/form.js":
/*!*************************!*\
  !*** ./src/app/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_ui */ "./src/app/form_ui.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/game.js");
/* harmony import */ var _game_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_ui */ "./src/app/game_ui.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/app/gameboard.js");





const StartForm = function() {

    function loadForm() {
        createForm();
        showTab(0);
        addButtonControls();
        submitForm();
    }

    function createForm() {
        (0,_form_ui__WEBPACK_IMPORTED_MODULE_0__.createShipsForPlacement)();
        (0,_form_ui__WEBPACK_IMPORTED_MODULE_0__.createBoardForPlacement)();
        (0,_form_ui__WEBPACK_IMPORTED_MODULE_0__.createDraggables)();
    }

    function showTab(n) {
        const tabs = Array.from(document.querySelectorAll('.tab')); 
        tabs[n].style.display = 'block';

        const preBtn = document.querySelector('.page.pre');
        const nextBtn = document.querySelector('.page.next');
        const skip = document.querySelector('button[type=submit]#skip');
        const submit = document.querySelector('button[type=submit]#submit');
        if (n == 0) {
            tabs[1].style.display = 'none';
            preBtn.style.display = 'none';
            nextBtn.style.display = 'inline';
            skip.style.display = 'none'
            submit.style.display = 'none';
        } else {
            tabs[0].style.display = 'none';
            preBtn.style.display = 'inline';
            nextBtn.style.display = 'none';
            skip.style.display = 'inline'
            submit.style.display = 'inline';
            submit.style.backgroundColor = 'grey'
            submit.style.cursor = 'auto'
            submit.disabled = true
        }
    }

    function addButtonControls() {
        const nextBtn = document.querySelector('.page.next');
        const preBtn = document.querySelector('.page.pre');
        nextBtn.addEventListener('click', () => {
            if (validateForm()) {
                showTab(1);
            }
        })
        preBtn.addEventListener('click', () => {
            showTab(0);
        })
    }

    function validateForm() {
        const form = document.querySelector('form#game_form');
        const playerName = form.elements['name'].value;
        if(!playerName) {
            alert('must enter player name')
            return false;
        }
        return true;
    }


    function submitForm() {

        const skip = document.querySelector('button[type=submit]#skip');
        const submit = document.querySelector('button[type=submit]#submit');

        const form = document.querySelector('form#game_form');
        skip.addEventListener('click', e => {
            e.preventDefault();

            const playerName = form.elements['name'].value;
            let firstPlayer;

            const checkedbox = document.querySelector('input[type=checkbox]');
            if (checkedbox.checked) {
                firstPlayer = playerName;
            } else {
                firstPlayer = 'COMPUTER';
            }
            
            closeForm();
            (0,_game_ui__WEBPACK_IMPORTED_MODULE_2__.constructGameUI)();

            (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])(playerName, firstPlayer).newGame();
        })
        submit.addEventListener('click', e => {
            e.preventDefault();

            const playerName = form.elements['name'].value;
            let firstPlayer;

            const checkedbox = document.querySelector('input[type=checkbox]');
            if (checkedbox.checked) {
                firstPlayer = playerName;
            } else {
                firstPlayer = 'COMPUTER';
            }
            
            closeForm();
            (0,_game_ui__WEBPACK_IMPORTED_MODULE_2__.constructGameUI)();

            (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])(playerName, firstPlayer).newGame(getUserPlacedBoard());
        })
    }

    function getUserPlacedBoard() {
        const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"])();
        playerGameboard.initGameboard()
        const gameboardArray = playerGameboard.gameboard
    
        const gameBoardDom = document.querySelector('.right')
        console.log(gameBoardDom)
        const rows = Array.from(gameBoardDom.querySelectorAll('.row'));
        rows.forEach((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll('.column'));
            columns.forEach((column, columnIndex) => {
                gameboardArray[rowIndex][columnIndex] = column.textContent ? column.textContent : ''
            })
        })
        return gameboardArray
    }

    function closeForm() {
        const startForm = document.querySelector('.form_container');
        startForm.style.display = 'none';
    
        const mainContainer = document.querySelector('.container');
        mainContainer.style.display = 'block';
    }

    return {loadForm};
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartForm);




/***/ }),

/***/ "./src/app/form_ui.js":
/*!****************************!*\
  !*** ./src/app/form_ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoardForPlacement": () => (/* binding */ createBoardForPlacement),
/* harmony export */   "createDraggables": () => (/* binding */ createDraggables),
/* harmony export */   "createShipsForPlacement": () => (/* binding */ createShipsForPlacement)
/* harmony export */ });
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common_ui */ "./src/app/common_ui.js");



let pPlaced = false
let dPlaced = false
let sPlaced = false
let bPlaced = false
let cPlaced = false

function createShipsForPlacement() {
    const leftDiv = document.querySelector('.board_container > .left');
    for (let i=0; i<5; i++) {
      leftDiv.appendChild((0,_common_ui__WEBPACK_IMPORTED_MODULE_0__.createShipDiv)(i, true, true))
    }
}

function createBoardForPlacement() {
    const rightDiv = document.querySelector('.board_container > .right');
    (0,_common_ui__WEBPACK_IMPORTED_MODULE_0__.appendGrids)(rightDiv);
}

function createDraggables() {
    const ships = Array.from(document.querySelectorAll('.left .ship_state'));
    ships.forEach(ship => {
        ship.addEventListener('dragstart', handleDragStart);
        ship.addEventListener('dragend', handleDragEnd);
    })

    const targets = Array.from(document.querySelectorAll('.right .column'));
    targets.forEach(target => {
        target.addEventListener('dragover', handleDragOver);
        target.addEventListener('dragenter', handleDragEnter);
        target.addEventListener('dragleave', handleDragLeave);
        target.addEventListener('drop', handleDrop);
    })

}

function handleDragStart(e) {
    this.style.opacity = '0.4';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.id);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    const targets = Array.from(document.querySelectorAll('.right .column'));
    targets.forEach(target => {
        if (target.textContent === e.target.id) {
            e.target.draggable = false
            e.target.style.cursor = 'auto'
        }
        target.classList.remove('over');
    })
    if (pPlaced && dPlaced && sPlaced && bPlaced && cPlaced) {
        const submit = document.querySelector('button[type=submit]#submit');
        submit.style.backgroundColor = 'lightseagreen'
        submit.style.cursor = 'pointer'
        submit.disabled = false
    }
}

function handleDragOver(e) {
    // prevent default drop operation
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    e.target.classList.add('over');
}

function handleDragLeave(e) {
    // for each grid
    e.target.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    const data = e.dataTransfer.getData('text/plain');
    let length
    const elementId = e.target.id
    const rowIndex = elementId.split('')[0]
    const colIndex = elementId.split('')[1]
    switch(data) {
        case 'P': 
            length = 2
            pPlaced = true
            if (_common_ui__WEBPACK_IMPORTED_MODULE_0__.pVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                return 
            }
            break
        case 'D':
            length = 3
            dPlaced = true
            if (_common_ui__WEBPACK_IMPORTED_MODULE_0__.dVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                return
            }
            break
        case 'S':
            length = 3
            sPlaced = true
            if (_common_ui__WEBPACK_IMPORTED_MODULE_0__.sVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                return 
            }
            break
        case 'B':
            length = 4
            bPlaced = true
            if (_common_ui__WEBPACK_IMPORTED_MODULE_0__.bVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                const fourthElementId = (Number(rowIndex)+3).toString() + colIndex
                const fourthElement = document.getElementById(fourthElementId)
                fourthElement.innerHTML = data;
                return
            }
            break
        case 'C':
            length = 5
            cPlaced = true
            if (_common_ui__WEBPACK_IMPORTED_MODULE_0__.cVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                const fourthElementId = (Number(rowIndex)+3).toString() + colIndex
                const fourthElement = document.getElementById(fourthElementId)
                fourthElement.innerHTML = data;
                const fifthElementId = (Number(rowIndex)+4).toString() + colIndex
                const fifthElement = document.getElementById(fifthElementId)
                fifthElement.innerHTML = data;
                return 
            }
            break
        default:
            break
    }
        
    if (isPassingEndOfBoard(e, length) || !isSpaceEmpty(e, length)) {
        return
    }
    
    this.innerHTML = data;
    let nextSibling = this.nextSibling
    for(let i=0; i<length-1; i++) {
        if (nextSibling) {
            nextSibling.innerHTML = data;
            nextSibling = nextSibling.nextSibling
        }
    }
    return false;
}

function isPassingEndOfBoard(e, length) {
    const elementId = e.target.id
    const rowIndex = elementId.split('')[0]
    const colIndex = elementId.split('')[1]
    if (colIndex > (10 - length)) {
        return true
    }
    return false
}

function isSpaceEmpty(e, length) {
    if (e.target.textContent !== '') {
        return false
    }
    let nextSibling = e.target.nextSibling
    for(let i=0; i<length-1; i++) {
        if (nextSibling && nextSibling.textContent !== '') {
            return false
        }
        nextSibling = nextSibling.nextSibling
    }
    return true
}

function isVerticalSpaceEmpty(e, length) {
    const currentElementId = e.target.id
    let rowIndex = currentElementId.split('')[0]
    let colIndex = currentElementId.split('')[1]
    while(length > 0) {
        const elementId = rowIndex + colIndex
        const element = document.getElementById(elementId)
        if (!element || element.textContent !== '') {
            return false
        }
        rowIndex++
        length--
    }
    return true
}





/***/ }),

/***/ "./src/app/game.js":
/*!*************************!*\
  !*** ./src/app/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/app/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/app/player.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/app/render.js");




const Game = function(playerName, firstPlayerName) {

    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(playerName);
    const player1Gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const aiPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('COMPUTER');
    const aiPlayerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
    const newGame = (userEnteredGameBoard) => {

        if (userEnteredGameBoard) {
            player1Gameboard.setGameboard(userEnteredGameBoard)
            ;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderPlayer1Gameboard)(player1, player1Gameboard.gameboard)
        } else {
            // setup gameboards
            player1Gameboard.setupGameboard();
            (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderPlayer1Gameboard)(player1, player1Gameboard.gameboard)
        }

        aiPlayerGameboard.setupGameboard();
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderAIPlayerGameboard)(aiPlayer);

        if (firstPlayerName === 'COMPUTER') {
            // computer goes first
            computerAttack();
            doAttack();
            
        } else {
            // human goes first
            doAttack();
        }
    }

    function computerAttack() {
        const playerBoardDOM = document.querySelector('.gameboard:first-child > .game_grid');
        const attackedCoordinate = aiPlayer.attack();
        const rows = Array.from(playerBoardDOM.querySelectorAll('.row'));
        rows.forEach((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll('.column'));
            columns.forEach((column, columnIndex) => {
                if (rowIndex == attackedCoordinate[0] && columnIndex == attackedCoordinate[1]) {
                    if (player1Gameboard.gameboard[rowIndex][columnIndex] !== undefined) {
                        // get a hit
                        column.style.backgroundColor = 'indianred';
                        updateShipState(player1Gameboard.gameboard[rowIndex][columnIndex], player1);

                        player1Gameboard.receiveAttack([rowIndex, columnIndex]);
                    } else {
                        column.style.backgroundColor = 'lightblue'
                    }
                }
            })
        })
    }

    function doAttack() {
        const aiBoardDOM = document.querySelector('.gameboard:nth-child(2) > .game_grid')
        const rows = Array.from(aiBoardDOM.querySelectorAll('.row'));
        rows.forEach((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll('.column'));
            columns.forEach((column, columnIndex) => {
                // add event listener
                column.addEventListener('click', attackListener.bind(null, rowIndex, columnIndex, column), {once: true})
            })
        })
    }
    
    function attackListener(rowIndex, columnIndex, column) {
        const attackedMark = aiPlayerGameboard.gameboard[rowIndex][columnIndex];
        if (attackedMark !== undefined) {
            column.style.backgroundColor = 'indianred';
            column.textContent = attackedMark;
            updateShipState(attackedMark, aiPlayer);
            // update program
            aiPlayerGameboard.receiveAttack([rowIndex, columnIndex]);

            // check if game ends
            if (gameEnds(aiPlayerGameboard)) {
                console.log('game end - you won!')
                ;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderResult)(player1);
                // end game
                return;
            } 
        } else {
            column.style.backgroundColor = 'lightblue'
        }

        computerAttack();
        if(gameEnds(player1Gameboard)) {
            // end game
            console.log('game end - computer won!')
            ;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderResult)(aiPlayer);
            return;
        }        
    }

    function gameEnds(gameboard) {
        return gameboard.areAllSunk();
    }

    function updateShipState(symbol, player) {
        
        switch(symbol) {
            case 'P':
                let patrolShipState; 
                if (player === player1) {
                    patrolShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:first-child > .ship_state');
                } else {
                    patrolShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:first-child > .ship_state');
                }
                for(let i=0; i<2; i++) {
                    const square = patrolShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'D':
                let destroyerShipState; 
                if (player === player1) {
                    destroyerShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:nth-child(2) > .ship_state');
                } else {
                    destroyerShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:nth-child(2) > .ship_state');
                }
                for(let i=0; i<3; i++) {
                    const square = destroyerShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'S':
                let submarineShipState; 
                if (player === player1) {
                    submarineShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:nth-child(3) > .ship_state');
                } else {
                    submarineShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:nth-child(3) > .ship_state');
                }
                for(let i=0; i<3; i++) {
                    const square = submarineShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'B':
                let battleshipShipState; 
                if (player === player1) {
                    battleshipShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:nth-child(4) > .ship_state');
                } else {
                    battleshipShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:nth-child(4) > .ship_state');
                }
                for(let i=0; i<4; i++) {
                    const square = battleshipShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'C':
                let carrierShipState; 
                if (player === player1) {
                    carrierShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:last-child > .ship_state');
                } else {
                    carrierShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:last-child > .ship_state');
                }
                for(let i=0; i<5; i++) {
                    const square = carrierShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            default:
                break;
                
        }
    }


    return {newGame}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/app/game_ui.js":
/*!****************************!*\
  !*** ./src/app/game_ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constructGameUI": () => (/* binding */ constructGameUI)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common_ui */ "./src/app/common_ui.js");



function constructGameUI() {
    createTitle();
    createGameboards();
    createProgressDisplay();
  }
    
  function createTitle() {
    const title = document.querySelector('.title');
    title.textContent = 'BATTLESHIP'
  }
  
  function createGameboards() {
    const gameboards = document.querySelector('.gameboards');
    const gameboard1 = drawGameboard();
    const gameboard2 = drawGameboard();
    gameboards.appendChild(gameboard1);
    gameboards.appendChild(gameboard2);
  }
  
  function createProgressDisplay() {
    const progress = document.querySelector('.progress');
  
    const ships1 = displayShips();
    const ships2 = displayShips();
  
    progress.appendChild(ships1);
    progress.appendChild(ships2);
  }
  
  function drawGameboard() {
    const gameboardDiv = document.createElement('div');
    gameboardDiv.classList.add('gameboard');
    
    return createBoardLayout(gameboardDiv);
    
  }
  
  function createBoardLayout(div) {
    const playerName = document.createElement('div');
    playerName.classList.add('name');
    const gameGrid = document.createElement('div');
    gameGrid.classList.add('game_grid');
    const grids = (0,_common_ui__WEBPACK_IMPORTED_MODULE_1__.appendGrids)(gameGrid);
    div.append(playerName, grids);
    return div;
  }

  function displayShips() {
    const shipsDiv = document.createElement('div');
    shipsDiv.classList.add('ships_chart');
    for (let i=0; i<5; i++) {
      shipsDiv.appendChild((0,_common_ui__WEBPACK_IMPORTED_MODULE_1__.createShipDiv)(i))
    }
    return shipsDiv;
  }
  
  


/***/ }),

/***/ "./src/app/gameboard.js":
/*!******************************!*\
  !*** ./src/app/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/app/ship.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/app/util.js");



const Gameboard = function() {

    const patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('P', 2);
    const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('D', 3);
    const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('S', 3);
    const battleShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('B', 4);
    const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('C', 5);

    // 10X10 grid
    let gameboard = [];
    const initGameboard = () => {
        for(let i=0; i<10; i++) {
            gameboard.push([]);
        }
    }

    function setGameboard(playerGameboard) {
        for(let i=0; i<10; i++) {
            gameboard.push(playerGameboard[i])
        }
    }

    const missedShots = [];
    const missedAttacks = [];
    const sunkShips = [];

    const setupGameboard = () => {
        initGameboard();
        // place all ships
        generateShipPlacement(8, patrol);
        generateShipPlacement(7, destroyer);
        generateShipPlacement(7, submarine)
        generateShipPlacement(6, battleShip);
        generateShipPlacement(5, carrier);
    }

    const generateShipPlacement = (coordinateUpperRange, ship) => {
        const isHorizontal = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomBoolean)();
        generatePlacement(isHorizontal, coordinateUpperRange, ship);
    }

    const isNotOccupiedHorizontally = (coordinate, numberOfHoles) => {
        while (numberOfHoles > 0) {
            if (gameboard[coordinate[0] + (numberOfHoles - 1)][coordinate[1]]) {
                return false;
            }
            numberOfHoles--;
        }
        return true;
    }

    const isNotOccupiedVertically = (coordinate, numberOfHoles) => {
        while (numberOfHoles > 0) {
            if (gameboard[coordinate[0]][coordinate[1] + (numberOfHoles - 1)]) {
                return false;
            }
            numberOfHoles--;
        }
        return true;
    }

    const generatePlacement = (isHorizontal, coordinateUpperRange, ship) => {
        const numberOfHoles = ship.numberOfHoles;
        const mark = ship.mark;

        let coordinate = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomCoordinate)(coordinateUpperRange)

        if (isHorizontal) {
            while(!isNotOccupiedHorizontally(coordinate, numberOfHoles)) {
                coordinate = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomCoordinate)(coordinateUpperRange);
            }
            for (let i=0; i< numberOfHoles; i++) {
                gameboard[coordinate[0] + i][coordinate[1]] = mark;
            }
        } else {
            while(!isNotOccupiedVertically(coordinate, numberOfHoles)) {
                coordinate = (0,_util__WEBPACK_IMPORTED_MODULE_1__.randomCoordinate)(coordinateUpperRange);
            }

            for (let i=0; i< numberOfHoles; i++) {
                gameboard[coordinate[0]][coordinate[1] + i] = mark;
            }
        }
    }

    const receiveAttack = (coordinate) => {
        const gameboardValue = gameboard[coordinate[0]][coordinate[1]];
        // hit
        if (gameboardValue) {
            switch(gameboardValue) {
                case 'P':
                    patrol.hit(coordinate);
                    if (patrol.isSunk()) {
                        sunkShips.push(patrol);
                    }
                    break;
                case 'D':
                    destroyer.hit(coordinate);
                    if (destroyer.isSunk()) {
                        sunkShips.push(destroyer);
                    }
                    break;
                case 'S':
                    submarine.hit(coordinate);
                    if(submarine.isSunk()) {
                        sunkShips.push(submarine);
                    }
                    break;
                case 'B':
                    battleShip.hit(coordinate);
                    if(battleShip.isSunk()) {
                        sunkShips.push(battleShip);
                    }
                    break;
                case 'C':
                    carrier.hit(coordinate);
                    if(carrier.isSunk()) {
                        sunkShips.push(carrier);
                    }
                default:
                    break;
            }
        } else {
            missedShots.push(coordinate);
        }
    }

    const areAllSunk = () => {
        return sunkShips.length == 5;
    }

    return {setupGameboard, receiveAttack, areAllSunk, gameboard, initGameboard, setGameboard}

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/app/player.js":
/*!***************************!*\
  !*** ./src/app/player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/app/util.js");


const Player = function(name) {
    const triedCoordinate = [];

    const attack = (coordinate) => {
        // generate a coordinate
        if (!coordinate) {
            const generated = generateCoordinate();
            triedCoordinate.push(generated);
            return generated;
        }
        return coordinate;
    }


    function generateCoordinate() {
        let coordinate = [(0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(10), (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(10)];
        while (triedCoordinate.includes(coordinate)) {
            coordinate = [(0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(10), (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(10)];
        }
        return coordinate;
    }

    return {name, attack};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/app/render.js":
/*!***************************!*\
  !*** ./src/app/render.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAIPlayerGameboard": () => (/* binding */ renderAIPlayerGameboard),
/* harmony export */   "renderPlayer1Gameboard": () => (/* binding */ renderPlayer1Gameboard),
/* harmony export */   "renderResult": () => (/* binding */ renderResult)
/* harmony export */ });
/* harmony import */ var _images_whoa_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/whoa.gif */ "./src/images/whoa.gif");

/*
    DOM manipulations
*/
function renderPlayer1Gameboard(player1, gameboard) {

    const playerNameDOM = document.querySelector('.gameboard:first-child > .name');
    playerNameDOM.textContent = player1.name;

    const playerBoardDOM = document.querySelector('.gameboard:first-child > .game_grid')
    const rows = Array.from(playerBoardDOM.querySelectorAll('.row'));
    rows.forEach((row, rowIndex) => {
        const columns = Array.from(row.querySelectorAll('.column'));
        columns.forEach((column, columnIndex) => {
            column.textContent = gameboard[rowIndex][columnIndex];
        })
    })

}

function renderAIPlayerGameboard(aiPlayer) {
    const playerNameDOM = document.querySelector('.gameboard:nth-child(2) > .name');
    playerNameDOM.textContent = aiPlayer.name;
}

function renderResult(winner) {
    const overlayDiv = document.querySelector('.overlay');
    const gameEndDiv = document.querySelector('.game_end');
    overlayDiv.style.display = 'block';
    gameEndDiv.style.display = 'block';

    gameEndDiv.textContent = 'WINNER IS: ' + winner.name;

    const endImage = new Image();
    endImage.src = _images_whoa_gif__WEBPACK_IMPORTED_MODULE_0__;
    endImage.classList.add('img');
    gameEndDiv.appendChild(endImage);
    
    // restart button
    const restart = document.createElement('button');
    restart.classList.add('restart');
    restart.textContent = 'PLAY AGAIN';

    restart.addEventListener('click', () => {
        location.reload();
    })

    gameEndDiv.appendChild(restart);
    
}



/***/ }),

/***/ "./src/app/ship.js":
/*!*************************!*\
  !*** ./src/app/ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// create ship factory function
const Ship = function(mark, numberOfHoles) {
    const hitCoordinates = [];

    const hit = (coordinate) => hitCoordinates.push(coordinate);

    const isSunk = () => hitCoordinates.length == numberOfHoles;

    return {mark, numberOfHoles, hit, isSunk};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/app/util.js":
/*!*************************!*\
  !*** ./src/app/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "randomBoolean": () => (/* binding */ randomBoolean),
/* harmony export */   "randomCoordinate": () => (/* binding */ randomCoordinate)
/* harmony export */ });
// return integer coordinate with upper range n
// eg: when n=9, return coordinate range 0-9
function randomCoordinate(n) {
    const x = Math.floor(Math.random() * (n+1));
    const y = Math.floor(Math.random() * (n+1));
    return [x, y];
}

function randomBoolean() {
    return Math.random() < 0.5;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}







/***/ }),

/***/ "./src/images/whoa.gif":
/*!*****************************!*\
  !*** ./src/images/whoa.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5516347cd29f5455f9f.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/form */ "./src/app/form.js");


_app_form__WEBPACK_IMPORTED_MODULE_0__["default"].loadForm();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxzREFBc0QsNkhBQTZILG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsdUJBQXVCLG9CQUFvQixHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixzQ0FBc0MsbUJBQW1CLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qiw2QkFBNkIsR0FBRyxpQkFBaUIsa0JBQWtCLHNCQUFzQixpQkFBaUIsNkJBQTZCLDBCQUEwQixTQUFTLGdCQUFnQixrQkFBa0IsaUJBQWlCLHNCQUFzQiw2QkFBNkIsR0FBRyxzQkFBc0Isa0JBQWtCLHlCQUF5Qiw2QkFBNkIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQixrQ0FBa0Msb0JBQW9CLDZCQUE2Qiw2QkFBNkIsR0FBRyxVQUFVLGtCQUFrQixvQkFBb0IseUJBQXlCLHFDQUFxQyxHQUFHLGFBQWEsaUJBQWlCLG1CQUFtQixtQ0FBbUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxlQUFlLGtCQUFrQixzQkFBc0IsaUJBQWlCLDZCQUE2QiwwQkFBMEIsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLG9CQUFvQixnQkFBZ0IsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsS0FBSyxpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsMEJBQTBCLGtDQUFrQyxlQUFlLEdBQUcsbUJBQW1CLGlCQUFpQixrQkFBa0IsdUNBQXVDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDJCQUEyQixHQUFHLGNBQWMsb0JBQW9CLHlCQUF5QixpREFBaUQsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsZUFBZSxvQkFBb0IseUJBQXlCLHNDQUFzQyx5QkFBeUIsOEJBQThCLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDJCQUEyQix3QkFBd0Isc0JBQXNCLDJCQUEyQixnQkFBZ0IsU0FBUyxZQUFZLHNDQUFzQyxtQkFBbUIseUJBQXlCLG1CQUFtQix3QkFBd0Isb0JBQW9CLHNCQUFzQixHQUFHLGNBQWMscUJBQXFCLGlCQUFpQixtQkFBbUIsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsbUJBQW1CLEdBQUcsOENBQThDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0JBQWdCLHNDQUFzQywwQkFBMEIsb0JBQW9CLGlCQUFpQix1QkFBdUIsMEJBQTBCLEdBQUcscUJBQXFCLHlCQUF5QiwwQkFBMEIsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQixHQUFHLHNCQUFzQixpQkFBaUIsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIsa0JBQWtCLDZCQUE2QixtQkFBbUIsR0FBRyxpQkFBaUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsR0FBRywrQ0FBK0Msb0JBQW9CLDZCQUE2QixvQkFBb0IscUNBQXFDLEdBQUcsV0FBVyx5QkFBeUIsc0JBQXNCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEdBQUcsWUFBWSx5QkFBeUIsc0JBQXNCLEdBQUcsa0hBQWtILG9CQUFvQiw2QkFBNkIsR0FBRyxpQ0FBaUMsOEJBQThCLEdBQUcsaURBQWlELGtCQUFrQixtQkFBbUIsR0FBRywyQ0FBMkMsb0JBQW9CLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxtQkFBbUIsMkJBQTJCLDBCQUEwQixpQkFBaUIsbUNBQW1DLEdBQUcsK0JBQStCLGdGQUFnRixZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVks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Q0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ1puQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQnREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBbUM7O0FBRW5DLDBEQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9jb21tb25fdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9mb3JtX3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZV91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3V0aWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLXdpZHRoOiA3NjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYig4OCwgODYsIDg2KTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZCAubmFtZSB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoODgsIDg2LCA4Nik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5nYW1lX2dyaWQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zaGlwc19jaGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwX3RpdGxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG5cXG59XFxuXFxuLnNoaXBfc3RhdGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uc3RhdGVfc3F1YXJlIHtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uZ2FtZV9lbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGdhcDogNjBweDtcXG4gICAgXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBzdHlsZSBzdGFydCBmb3JtcyAqL1xcbi5mb3JtX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZV9mb3JtIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2dhbWVfZm9ybSA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4udGFiLnBsYXllciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7O1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYnV0dG9uLnBhZ2Uge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiAgLyogcGxhY2Ugc2hpcCBmb3JtICovXFxuLmJvYXJkX2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLmxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4vKiBvdmVyd3JpdGUgc29tZSBvZiB0aGUgZXhpc3Rpbmcgc3R5bGVzIHdoZW4gdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcGxhY2Ugc2hpcCBzZWN0aW9uICovXFxuXFxuLmxlZnQgPiAuc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sZWZ0ID4gLnNoaXAgPiAuc2hpcF9zdGF0ZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5zaGlwID4gLnNoaXBfc3RhdGUgPiAuc3RhdGVfc3F1YXJlIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLyogaGlkZSBhbGwgc3RlcHMgYnkgZGVmYXVsdCAqL1xcbi50YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCByZWQ7XFxufVxcblxcbi5vdmVyOjpiZWZvcmUge1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgY29udGVudDogXFxcIlBsYWNlIFNoaXAgSGVyZVxcXCI7XFxufVxcblxcblxcbiAgXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNIQUFzSDtJQUN0SCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJB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O0lBQ3RCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUEsMEZBQTBGOztBQUUxRjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLXdpZHRoOiA3NjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYig4OCwgODYsIDg2KTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZCAubmFtZSB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoODgsIDg2LCA4Nik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5nYW1lX2dyaWQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zaGlwc19jaGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaGlwX3RpdGxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG5cXG59XFxuXFxuLnNoaXBfc3RhdGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uc3RhdGVfc3F1YXJlIHtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uZ2FtZV9lbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGdhcDogNjBweDtcXG4gICAgXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBzdHlsZSBzdGFydCBmb3JtcyAqL1xcbi5mb3JtX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZV9mb3JtIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2dhbWVfZm9ybSA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4udGFiLnBsYXllciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7O1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYnV0dG9uLnBhZ2Uge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiAgLyogcGxhY2Ugc2hpcCBmb3JtICovXFxuLmJvYXJkX2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLmxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4vKiBvdmVyd3JpdGUgc29tZSBvZiB0aGUgZXhpc3Rpbmcgc3R5bGVzIHdoZW4gdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcGxhY2Ugc2hpcCBzZWN0aW9uICovXFxuXFxuLmxlZnQgPiAuc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sZWZ0ID4gLnNoaXAgPiAuc2hpcF9zdGF0ZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5zaGlwID4gLnNoaXBfc3RhdGUgPiAuc3RhdGVfc3F1YXJlIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG59XFxuXFxuLyogaGlkZSBhbGwgc3RlcHMgYnkgZGVmYXVsdCAqL1xcbi50YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCByZWQ7XFxufVxcblxcbi5vdmVyOjpiZWZvcmUge1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgY29udGVudDogXFxcIlBsYWNlIFNoaXAgSGVyZVxcXCI7XFxufVxcblxcblxcbiAgXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgbGV0IHBWZXJ0aWNhbCA9IGZhbHNlXG5leHBvcnQgbGV0IGRWZXJ0aWNhbCA9IGZhbHNlXG5leHBvcnQgbGV0IHNWZXJ0aWNhbCA9IGZhbHNlXG5leHBvcnQgbGV0IGJWZXJ0aWNhbCA9IGZhbHNlXG5leHBvcnQgbGV0IGNWZXJ0aWNhbCA9IGZhbHNlXG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBEaXYoaSwgZHJhZ2dhYmxlPWZhbHNlLCBvcmllbnRhdGlvbkNvbnRyb2w9ZmFsc2UpIHtcbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIFxuICAgIGNvbnN0IHNoaXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RpdGxlJyk7XG4gICAgbGV0IHNoaXBTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBTdGF0ZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3N0YXRlJyk7XG4gICAgaWYgKGRyYWdnYWJsZSkge1xuICAgICAgICBzaGlwU3RhdGUuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgc2hpcFN0YXRlLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICB9XG4gICAgLy8gZmlsbCBpbiBzaGlwIG5hbWVzXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHNoaXBUaXRsZS50ZXh0Q29udGVudCA9ICdQQVRST0wnO1xuICAgICAgICBpbml0U2hpcFN0YXRlKHNoaXBTdGF0ZSwgMiwgJ1AnKTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uQ29udHJvbCkge1xuICAgICAgICAgIHNoaXBTdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBwVmVydGljYWwgPSAhcFZlcnRpY2FsXG4gICAgICAgICAgICBzaGlwU3RhdGUgPSB0cmFuc2Zvcm0oc2hpcFN0YXRlLCBwVmVydGljYWwpIFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBzaGlwVGl0bGUudGV4dENvbnRlbnQgPSAnREVTVFJPWUVSJztcbiAgICAgICAgaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIDMsICdEJyk7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbkNvbnRyb2wpIHtcbiAgICAgICAgICBzaGlwU3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZFZlcnRpY2FsID0gIWRWZXJ0aWNhbFxuICAgICAgICAgICAgc2hpcFN0YXRlID0gdHJhbnNmb3JtKHNoaXBTdGF0ZSwgZFZlcnRpY2FsKSBcbiAgICAgICAgICB9KVxuICAgICAgICB9ICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ1NVQk1BUklORSc7XG4gICAgICAgIGluaXRTaGlwU3RhdGUoc2hpcFN0YXRlLCAzLCAnUycpO1xuICAgICAgICBpZiAob3JpZW50YXRpb25Db250cm9sKSB7XG4gICAgICAgICAgc2hpcFN0YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHNWZXJ0aWNhbCA9ICFzVmVydGljYWxcbiAgICAgICAgICAgIHNoaXBTdGF0ZSA9IHRyYW5zZm9ybShzaGlwU3RhdGUsIHNWZXJ0aWNhbCkgXG4gICAgICAgICAgfSlcbiAgICAgICAgfSAgICBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHNoaXBUaXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICAgICAgaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIDQsICdCJyk7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbkNvbnRyb2wpIHtcbiAgICAgICAgICBzaGlwU3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgYlZlcnRpY2FsID0gIWJWZXJ0aWNhbFxuICAgICAgICAgICAgc2hpcFN0YXRlID0gdHJhbnNmb3JtKHNoaXBTdGF0ZSwgYlZlcnRpY2FsKSBcbiAgICAgICAgICB9KVxuICAgICAgICB9ICAgIFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ0NBUlJJRVInO1xuICAgICAgICBpbml0U2hpcFN0YXRlKHNoaXBTdGF0ZSwgNSwgJ0MnKTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uQ29udHJvbCkge1xuICAgICAgICAgIHNoaXBTdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBjVmVydGljYWwgPSAhY1ZlcnRpY2FsXG4gICAgICAgICAgICBzaGlwU3RhdGUgPSB0cmFuc2Zvcm0oc2hpcFN0YXRlLCBjVmVydGljYWwpIFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcFRpdGxlKTtcbiAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBTdGF0ZSk7XG4gICAgcmV0dXJuIHNoaXBEaXY7XG59XG4gIFxuZnVuY3Rpb24gaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIG51bWJlck9mSG9sZXMsIHN5bWJvbCkge1xuICAgIGZvcihsZXQgaT0wOyBpPG51bWJlck9mSG9sZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RhdGVTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN0YXRlU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N0YXRlX3NxdWFyZScpO1xuICAgICAgc3RhdGVTcXVhcmUudGV4dENvbnRlbnQgPSBzeW1ib2w7XG4gICAgICBzaGlwU3RhdGUuYXBwZW5kQ2hpbGQoc3RhdGVTcXVhcmUpO1xuICAgIH1cbiAgICBzaGlwU3RhdGUuaWQgPSBzeW1ib2xcbiAgICByZXR1cm4gc2hpcFN0YXRlO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oc2hpcFN0YXRlLCBpc1ZlcnRpY2FsKSB7XG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgc2hpcFN0YXRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgfSBlbHNlIHtcbiAgICBzaGlwU3RhdGUuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwKSc7XG4gIH1cbiAgcmV0dXJuIHNoaXBTdGF0ZVxufVxuXG5mdW5jdGlvbiBhcHBlbmRHcmlkcyhkaXYpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKykge1xuICAgICAgICBjb25zdCBjb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29sdW1uRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuICAgICAgICBjb2x1bW5EaXYuaWQgPSBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCk7XG4gICAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjb2x1bW5EaXYpO1xuICAgICAgfVxuICAgICAgZGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XG4gICAgfVxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU2hpcERpdiwgYXBwZW5kR3JpZHN9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmRGb3JQbGFjZW1lbnQsIGNyZWF0ZURyYWdnYWJsZXMsIGNyZWF0ZVNoaXBzRm9yUGxhY2VtZW50IH0gZnJvbSAnLi9mb3JtX3VpJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBjb25zdHJ1Y3RHYW1lVUkgfSBmcm9tICcuL2dhbWVfdWknO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IFN0YXJ0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gbG9hZEZvcm0oKSB7XG4gICAgICAgIGNyZWF0ZUZvcm0oKTtcbiAgICAgICAgc2hvd1RhYigwKTtcbiAgICAgICAgYWRkQnV0dG9uQ29udHJvbHMoKTtcbiAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gICAgICAgIGNyZWF0ZVNoaXBzRm9yUGxhY2VtZW50KCk7XG4gICAgICAgIGNyZWF0ZUJvYXJkRm9yUGxhY2VtZW50KCk7XG4gICAgICAgIGNyZWF0ZURyYWdnYWJsZXMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93VGFiKG4pIHtcbiAgICAgICAgY29uc3QgdGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpKTsgXG4gICAgICAgIHRhYnNbbl0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgY29uc3QgcHJlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UucHJlJyk7XG4gICAgICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5uZXh0Jyk7XG4gICAgICAgIGNvbnN0IHNraXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdI3NraXAnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XSNzdWJtaXQnKTtcbiAgICAgICAgaWYgKG4gPT0gMCkge1xuICAgICAgICAgICAgdGFic1sxXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcHJlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgICAgICAgIHNraXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJzWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgICAgICAgICAgbmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgc2tpcC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICAgICAgICAgIHN1Ym1pdC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICAgICAgICBzdWJtaXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknXG4gICAgICAgICAgICBzdWJtaXQuc3R5bGUuY3Vyc29yID0gJ2F1dG8nXG4gICAgICAgICAgICBzdWJtaXQuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRCdXR0b25Db250cm9scygpIHtcbiAgICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLm5leHQnKTtcbiAgICAgICAgY29uc3QgcHJlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UucHJlJyk7XG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcbiAgICAgICAgICAgICAgICBzaG93VGFiKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaG93VGFiKDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jZ2FtZV9mb3JtJyk7XG4gICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBmb3JtLmVsZW1lbnRzWyduYW1lJ10udmFsdWU7XG4gICAgICAgIGlmKCFwbGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBhbGVydCgnbXVzdCBlbnRlciBwbGF5ZXIgbmFtZScpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xuXG4gICAgICAgIGNvbnN0IHNraXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdI3NraXAnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XSNzdWJtaXQnKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNnYW1lX2Zvcm0nKTtcbiAgICAgICAgc2tpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gZm9ybS5lbGVtZW50c1snbmFtZSddLnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpcnN0UGxheWVyO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBsYXllciA9IHBsYXllck5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpcnN0UGxheWVyID0gJ0NPTVBVVEVSJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xvc2VGb3JtKCk7XG4gICAgICAgICAgICBjb25zdHJ1Y3RHYW1lVUkoKTtcblxuICAgICAgICAgICAgR2FtZShwbGF5ZXJOYW1lLCBmaXJzdFBsYXllcikubmV3R2FtZSgpO1xuICAgICAgICB9KVxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGZvcm0uZWxlbWVudHNbJ25hbWUnXS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaXJzdFBsYXllcjtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZGJveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RQbGF5ZXIgPSBwbGF5ZXJOYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBsYXllciA9ICdDT01QVVRFUic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgY29uc3RydWN0R2FtZVVJKCk7XG5cbiAgICAgICAgICAgIEdhbWUocGxheWVyTmFtZSwgZmlyc3RQbGF5ZXIpLm5ld0dhbWUoZ2V0VXNlclBsYWNlZEJvYXJkKCkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFVzZXJQbGFjZWRCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgICAgIHBsYXllckdhbWVib2FyZC5pbml0R2FtZWJvYXJkKClcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkQXJyYXkgPSBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkXG4gICAgXG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWVCb2FyZERvbSlcbiAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20oZ2FtZUJvYXJkRG9tLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKSk7XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IEFycmF5LmZyb20ocm93LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2x1bW4nKSk7XG4gICAgICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRBcnJheVtyb3dJbmRleF1bY29sdW1uSW5kZXhdID0gY29sdW1uLnRleHRDb250ZW50ID8gY29sdW1uLnRleHRDb250ZW50IDogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBnYW1lYm9hcmRBcnJheVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fY29udGFpbmVyJyk7XG4gICAgICAgIHN0YXJ0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIFxuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZEZvcm19O1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydEZvcm07XG5cblxuIiwiaW1wb3J0IHsgYXBwZW5kR3JpZHMsIGJWZXJ0aWNhbCwgY1ZlcnRpY2FsLCBjcmVhdGVTaGlwRGl2LCBkVmVydGljYWwsIHNWZXJ0aWNhbCB9IGZyb20gXCIuL2NvbW1vbl91aVwiO1xuaW1wb3J0IHsgcFZlcnRpY2FsIH0gZnJvbSBcIi4vY29tbW9uX3VpXCI7XG5cbmxldCBwUGxhY2VkID0gZmFsc2VcbmxldCBkUGxhY2VkID0gZmFsc2VcbmxldCBzUGxhY2VkID0gZmFsc2VcbmxldCBiUGxhY2VkID0gZmFsc2VcbmxldCBjUGxhY2VkID0gZmFsc2VcblxuZnVuY3Rpb24gY3JlYXRlU2hpcHNGb3JQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZF9jb250YWluZXIgPiAubGVmdCcpO1xuICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERpdihpLCB0cnVlLCB0cnVlKSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkRm9yUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkX2NvbnRhaW5lciA+IC5yaWdodCcpO1xuICAgIGFwcGVuZEdyaWRzKHJpZ2h0RGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlcygpIHtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnQgLnNoaXBfc3RhdGUnKSk7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcbiAgICB9KVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpZ2h0IC5jb2x1bW4nKSk7XG4gICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWdPdmVyKTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMC40JztcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChlKSB7XG4gICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIGNvbnN0IHRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaWdodCAuY29sdW1uJykpO1xuICAgIHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0LnRleHRDb250ZW50ID09PSBlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgZS50YXJnZXQuZHJhZ2dhYmxlID0gZmFsc2VcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdhdXRvJ1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgfSlcbiAgICBpZiAocFBsYWNlZCAmJiBkUGxhY2VkICYmIHNQbGFjZWQgJiYgYlBsYWNlZCAmJiBjUGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0jc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRzZWFncmVlbidcbiAgICAgICAgc3VibWl0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICBzdWJtaXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ092ZXIoZSkge1xuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBkcm9wIG9wZXJhdGlvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnTGVhdmUoZSkge1xuICAgIC8vIGZvciBlYWNoIGdyaWRcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyb3AoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3BzIHRoZSBicm93c2VyIGZyb20gcmVkaXJlY3RpbmcuXG4gICAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBsZXQgbGVuZ3RoXG4gICAgY29uc3QgZWxlbWVudElkID0gZS50YXJnZXQuaWRcbiAgICBjb25zdCByb3dJbmRleCA9IGVsZW1lbnRJZC5zcGxpdCgnJylbMF1cbiAgICBjb25zdCBjb2xJbmRleCA9IGVsZW1lbnRJZC5zcGxpdCgnJylbMV1cbiAgICBzd2l0Y2goZGF0YSkge1xuICAgICAgICBjYXNlICdQJzogXG4gICAgICAgICAgICBsZW5ndGggPSAyXG4gICAgICAgICAgICBwUGxhY2VkID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHBWZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNWZXJ0aWNhbFNwYWNlRW1wdHkoZSwgbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnRJZCA9IChOdW1iZXIocm93SW5kZXgpKzEpLnRvU3RyaW5nKCkgKyBjb2xJbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEVsZW1lbnRJZClcbiAgICAgICAgICAgICAgICBuZXh0RWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgbGVuZ3RoID0gM1xuICAgICAgICAgICAgZFBsYWNlZCA9IHRydWVcbiAgICAgICAgICAgIGlmIChkVmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmVydGljYWxTcGFjZUVtcHR5KGUsIGxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gZGF0YVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50SWQgPSAoTnVtYmVyKHJvd0luZGV4KSsxKS50b1N0cmluZygpICsgY29sSW5kZXhcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5leHRFbGVtZW50SWQpXG4gICAgICAgICAgICAgICAgbmV4dEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aHJpZEVsZW1lbnRJZCA9IChOdW1iZXIocm93SW5kZXgpKzIpLnRvU3RyaW5nKCkgKyBjb2xJbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRocmlkRWxlbWVudElkKVxuICAgICAgICAgICAgICAgIHRoaXJkRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBsZW5ndGggPSAzXG4gICAgICAgICAgICBzUGxhY2VkID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNWZXJ0aWNhbFNwYWNlRW1wdHkoZSwgbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnRJZCA9IChOdW1iZXIocm93SW5kZXgpKzEpLnRvU3RyaW5nKCkgKyBjb2xJbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEVsZW1lbnRJZClcbiAgICAgICAgICAgICAgICBuZXh0RWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRocmlkRWxlbWVudElkID0gKE51bWJlcihyb3dJbmRleCkrMikudG9TdHJpbmcoKSArIGNvbEluZGV4XG4gICAgICAgICAgICAgICAgY29uc3QgdGhpcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhyaWRFbGVtZW50SWQpXG4gICAgICAgICAgICAgICAgdGhpcmRFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICBsZW5ndGggPSA0XG4gICAgICAgICAgICBiUGxhY2VkID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKGJWZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNWZXJ0aWNhbFNwYWNlRW1wdHkoZSwgbGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBkYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnRJZCA9IChOdW1iZXIocm93SW5kZXgpKzEpLnRvU3RyaW5nKCkgKyBjb2xJbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV4dEVsZW1lbnRJZClcbiAgICAgICAgICAgICAgICBuZXh0RWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRocmlkRWxlbWVudElkID0gKE51bWJlcihyb3dJbmRleCkrMikudG9TdHJpbmcoKSArIGNvbEluZGV4XG4gICAgICAgICAgICAgICAgY29uc3QgdGhpcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhyaWRFbGVtZW50SWQpXG4gICAgICAgICAgICAgICAgdGhpcmRFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgZm91cnRoRWxlbWVudElkID0gKE51bWJlcihyb3dJbmRleCkrMykudG9TdHJpbmcoKSArIGNvbEluZGV4XG4gICAgICAgICAgICAgICAgY29uc3QgZm91cnRoRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvdXJ0aEVsZW1lbnRJZClcbiAgICAgICAgICAgICAgICBmb3VydGhFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGxlbmd0aCA9IDVcbiAgICAgICAgICAgIGNQbGFjZWQgPSB0cnVlXG4gICAgICAgICAgICBpZiAoY1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZlcnRpY2FsU3BhY2VFbXB0eShlLCBsZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGRhdGFcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudElkID0gKE51bWJlcihyb3dJbmRleCkrMSkudG9TdHJpbmcoKSArIGNvbEluZGV4XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXh0RWxlbWVudElkKVxuICAgICAgICAgICAgICAgIG5leHRFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhyaWRFbGVtZW50SWQgPSAoTnVtYmVyKHJvd0luZGV4KSsyKS50b1N0cmluZygpICsgY29sSW5kZXhcbiAgICAgICAgICAgICAgICBjb25zdCB0aGlyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aHJpZEVsZW1lbnRJZClcbiAgICAgICAgICAgICAgICB0aGlyZEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VydGhFbGVtZW50SWQgPSAoTnVtYmVyKHJvd0luZGV4KSszKS50b1N0cmluZygpICsgY29sSW5kZXhcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VydGhFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm91cnRoRWxlbWVudElkKVxuICAgICAgICAgICAgICAgIGZvdXJ0aEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWZ0aEVsZW1lbnRJZCA9IChOdW1iZXIocm93SW5kZXgpKzQpLnRvU3RyaW5nKCkgKyBjb2xJbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZnRoRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZnRoRWxlbWVudElkKVxuICAgICAgICAgICAgICAgIGZpZnRoRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgIH1cbiAgICAgICAgXG4gICAgaWYgKGlzUGFzc2luZ0VuZE9mQm9hcmQoZSwgbGVuZ3RoKSB8fCAhaXNTcGFjZUVtcHR5KGUsIGxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIHRoaXMuaW5uZXJIVE1MID0gZGF0YTtcbiAgICBsZXQgbmV4dFNpYmxpbmcgPSB0aGlzLm5leHRTaWJsaW5nXG4gICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoLTE7IGkrKykge1xuICAgICAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIG5leHRTaWJsaW5nLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1Bhc3NpbmdFbmRPZkJvYXJkKGUsIGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3Qgcm93SW5kZXggPSBlbGVtZW50SWQuc3BsaXQoJycpWzBdXG4gICAgY29uc3QgY29sSW5kZXggPSBlbGVtZW50SWQuc3BsaXQoJycpWzFdXG4gICAgaWYgKGNvbEluZGV4ID4gKDEwIC0gbGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gaXNTcGFjZUVtcHR5KGUsIGxlbmd0aCkge1xuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBuZXh0U2libGluZyA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nXG4gICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoLTE7IGkrKykge1xuICAgICAgICBpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcudGV4dENvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzVmVydGljYWxTcGFjZUVtcHR5KGUsIGxlbmd0aCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50SWQgPSBlLnRhcmdldC5pZFxuICAgIGxldCByb3dJbmRleCA9IGN1cnJlbnRFbGVtZW50SWQuc3BsaXQoJycpWzBdXG4gICAgbGV0IGNvbEluZGV4ID0gY3VycmVudEVsZW1lbnRJZC5zcGxpdCgnJylbMV1cbiAgICB3aGlsZShsZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJZCA9IHJvd0luZGV4ICsgY29sSW5kZXhcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZClcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByb3dJbmRleCsrXG4gICAgICAgIGxlbmd0aC0tXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCB7Y3JlYXRlQm9hcmRGb3JQbGFjZW1lbnQsIGNyZWF0ZVNoaXBzRm9yUGxhY2VtZW50LCBjcmVhdGVEcmFnZ2FibGVzfVxuXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlclBsYXllcjFHYW1lYm9hcmQsIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkLCByZW5kZXJSZXN1bHQgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgR2FtZSA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIGZpcnN0UGxheWVyTmFtZSkge1xuXG4gICAgY29uc3QgcGxheWVyMSA9IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICBjb25zdCBwbGF5ZXIxR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBhaVBsYXllciA9IFBsYXllcignQ09NUFVURVInKTtcbiAgICBjb25zdCBhaVBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIFxuICAgIGNvbnN0IG5ld0dhbWUgPSAodXNlckVudGVyZWRHYW1lQm9hcmQpID0+IHtcblxuICAgICAgICBpZiAodXNlckVudGVyZWRHYW1lQm9hcmQpIHtcbiAgICAgICAgICAgIHBsYXllcjFHYW1lYm9hcmQuc2V0R2FtZWJvYXJkKHVzZXJFbnRlcmVkR2FtZUJvYXJkKVxuICAgICAgICAgICAgcmVuZGVyUGxheWVyMUdhbWVib2FyZChwbGF5ZXIxLCBwbGF5ZXIxR2FtZWJvYXJkLmdhbWVib2FyZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldHVwIGdhbWVib2FyZHNcbiAgICAgICAgICAgIHBsYXllcjFHYW1lYm9hcmQuc2V0dXBHYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIHJlbmRlclBsYXllcjFHYW1lYm9hcmQocGxheWVyMSwgcGxheWVyMUdhbWVib2FyZC5nYW1lYm9hcmQpXG4gICAgICAgIH1cblxuICAgICAgICBhaVBsYXllckdhbWVib2FyZC5zZXR1cEdhbWVib2FyZCgpO1xuICAgICAgICByZW5kZXJBSVBsYXllckdhbWVib2FyZChhaVBsYXllcik7XG5cbiAgICAgICAgaWYgKGZpcnN0UGxheWVyTmFtZSA9PT0gJ0NPTVBVVEVSJykge1xuICAgICAgICAgICAgLy8gY29tcHV0ZXIgZ29lcyBmaXJzdFxuICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgICAgIGRvQXR0YWNrKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGh1bWFuIGdvZXMgZmlyc3RcbiAgICAgICAgICAgIGRvQXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkOmZpcnN0LWNoaWxkID4gLmdhbWVfZ3JpZCcpO1xuICAgICAgICBjb25zdCBhdHRhY2tlZENvb3JkaW5hdGUgPSBhaVBsYXllci5hdHRhY2soKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20ocGxheWVyQm9hcmRET00ucXVlcnlTZWxlY3RvckFsbCgnLnJvdycpKTtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gQXJyYXkuZnJvbShyb3cucXVlcnlTZWxlY3RvckFsbCgnLmNvbHVtbicpKTtcbiAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PSBhdHRhY2tlZENvb3JkaW5hdGVbMF0gJiYgY29sdW1uSW5kZXggPT0gYXR0YWNrZWRDb29yZGluYXRlWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxR2FtZWJvYXJkLmdhbWVib2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCBhIGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2hpcFN0YXRlKHBsYXllcjFHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0sIHBsYXllcjEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIxR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvQXR0YWNrKCkge1xuICAgICAgICBjb25zdCBhaUJvYXJkRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZDpudGgtY2hpbGQoMikgPiAuZ2FtZV9ncmlkJylcbiAgICAgICAgY29uc3Qgcm93cyA9IEFycmF5LmZyb20oYWlCb2FyZERPTS5xdWVyeVNlbGVjdG9yQWxsKCcucm93JykpO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBBcnJheS5mcm9tKHJvdy5xdWVyeVNlbGVjdG9yQWxsKCcuY29sdW1uJykpO1xuICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgY29sdW1uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXR0YWNrTGlzdGVuZXIuYmluZChudWxsLCByb3dJbmRleCwgY29sdW1uSW5kZXgsIGNvbHVtbiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGF0dGFja0xpc3RlbmVyKHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja2VkTWFyayA9IGFpUGxheWVyR2FtZWJvYXJkLmdhbWVib2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgICAgICBpZiAoYXR0YWNrZWRNYXJrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbHVtbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgIGNvbHVtbi50ZXh0Q29udGVudCA9IGF0dGFja2VkTWFyaztcbiAgICAgICAgICAgIHVwZGF0ZVNoaXBTdGF0ZShhdHRhY2tlZE1hcmssIGFpUGxheWVyKTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9ncmFtXG4gICAgICAgICAgICBhaVBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3dJbmRleCwgY29sdW1uSW5kZXhdKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZ2FtZSBlbmRzXG4gICAgICAgICAgICBpZiAoZ2FtZUVuZHMoYWlQbGF5ZXJHYW1lYm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dhbWUgZW5kIC0geW91IHdvbiEnKVxuICAgICAgICAgICAgICAgIHJlbmRlclJlc3VsdChwbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICAvLyBlbmQgZ2FtZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2x1bW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgIGlmKGdhbWVFbmRzKHBsYXllcjFHYW1lYm9hcmQpKSB7XG4gICAgICAgICAgICAvLyBlbmQgZ2FtZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dhbWUgZW5kIC0gY29tcHV0ZXIgd29uIScpXG4gICAgICAgICAgICByZW5kZXJSZXN1bHQoYWlQbGF5ZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnYW1lRW5kcyhnYW1lYm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5hcmVBbGxTdW5rKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2hpcFN0YXRlKHN5bWJvbCwgcGxheWVyKSB7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goc3ltYm9sKSB7XG4gICAgICAgICAgICBjYXNlICdQJzpcbiAgICAgICAgICAgICAgICBsZXQgcGF0cm9sU2hpcFN0YXRlOyBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHJvbFNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMSkgPiAuc2hpcDpmaXJzdC1jaGlsZCA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0cm9sU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgyKSA+IC5zaGlwOmZpcnN0LWNoaWxkID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8MjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHBhdHJvbFNoaXBTdGF0ZS5xdWVyeVNlbGVjdG9yKGAuc3RhdGVfc3F1YXJlOm50aC1jaGlsZCgke2krMX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2luZGlhbnJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgICAgICBsZXQgZGVzdHJveWVyU2hpcFN0YXRlOyBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llclNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMSkgPiAuc2hpcDpudGgtY2hpbGQoMikgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llclNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMikgPiAuc2hpcDpudGgtY2hpbGQoMikgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZGVzdHJveWVyU2hpcFN0YXRlLnF1ZXJ5U2VsZWN0b3IoYC5zdGF0ZV9zcXVhcmU6bnRoLWNoaWxkKCR7aSsxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnaW5kaWFucmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgIGxldCBzdWJtYXJpbmVTaGlwU3RhdGU7IFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWFyaW5lU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgxKSA+IC5zaGlwOm50aC1jaGlsZCgzKSA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWFyaW5lU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgyKSA+IC5zaGlwOm50aC1jaGlsZCgzKSA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzdWJtYXJpbmVTaGlwU3RhdGUucXVlcnlTZWxlY3RvcihgLnN0YXRlX3NxdWFyZTpudGgtY2hpbGQoJHtpKzF9KWApO1xuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdpbmRpYW5yZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICAgICAgbGV0IGJhdHRsZXNoaXBTaGlwU3RhdGU7IFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0dGxlc2hpcFNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMSkgPiAuc2hpcDpudGgtY2hpbGQoNCkgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXBTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDIpID4gLnNoaXA6bnRoLWNoaWxkKDQpID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8NDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGJhdHRsZXNoaXBTaGlwU3RhdGUucXVlcnlTZWxlY3RvcihgLnN0YXRlX3NxdWFyZTpudGgtY2hpbGQoJHtpKzF9KWApO1xuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdpbmRpYW5yZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgbGV0IGNhcnJpZXJTaGlwU3RhdGU7IFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FycmllclNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMSkgPiAuc2hpcDpsYXN0LWNoaWxkID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYXJyaWVyU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgyKSA+IC5zaGlwOmxhc3QtY2hpbGQgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gY2FycmllclNoaXBTdGF0ZS5xdWVyeVNlbGVjdG9yKGAuc3RhdGVfc3F1YXJlOm50aC1jaGlsZCgke2krMX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2luZGlhbnJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge25ld0dhbWV9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVNoaXBEaXYsIGFwcGVuZEdyaWRzIH0gZnJvbSAnLi9jb21tb25fdWknO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0R2FtZVVJKCkge1xuICAgIGNyZWF0ZVRpdGxlKCk7XG4gICAgY3JlYXRlR2FtZWJvYXJkcygpO1xuICAgIGNyZWF0ZVByb2dyZXNzRGlzcGxheSgpO1xuICB9XG4gICAgXG4gIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCdcbiAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkcygpIHtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcbiAgICBjb25zdCBnYW1lYm9hcmQxID0gZHJhd0dhbWVib2FyZCgpO1xuICAgIGNvbnN0IGdhbWVib2FyZDIgPSBkcmF3R2FtZWJvYXJkKCk7XG4gICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChnYW1lYm9hcmQxKTtcbiAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKGdhbWVib2FyZDIpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVQcm9ncmVzc0Rpc3BsYXkoKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKTtcbiAgXG4gICAgY29uc3Qgc2hpcHMxID0gZGlzcGxheVNoaXBzKCk7XG4gICAgY29uc3Qgc2hpcHMyID0gZGlzcGxheVNoaXBzKCk7XG4gIFxuICAgIHByb2dyZXNzLmFwcGVuZENoaWxkKHNoaXBzMSk7XG4gICAgcHJvZ3Jlc3MuYXBwZW5kQ2hpbGQoc2hpcHMyKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gZHJhd0dhbWVib2FyZCgpIHtcbiAgICBjb25zdCBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgXG4gICAgcmV0dXJuIGNyZWF0ZUJvYXJkTGF5b3V0KGdhbWVib2FyZERpdik7XG4gICAgXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkTGF5b3V0KGRpdikge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBjb25zdCBnYW1lR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVHcmlkLmNsYXNzTGlzdC5hZGQoJ2dhbWVfZ3JpZCcpO1xuICAgIGNvbnN0IGdyaWRzID0gYXBwZW5kR3JpZHMoZ2FtZUdyaWQpO1xuICAgIGRpdi5hcHBlbmQocGxheWVyTmFtZSwgZ3JpZHMpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5U2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdzaGlwc19jaGFydCcpO1xuICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgIHNoaXBzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVNoaXBEaXYoaSkpXG4gICAgfVxuICAgIHJldHVybiBzaGlwc0RpdjtcbiAgfVxuICBcbiAgXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyByYW5kb21Cb29sZWFuLCByYW5kb21Db29yZGluYXRlIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHBhdHJvbCA9IFNoaXAoJ1AnLCAyKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdEJywgMyk7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgnUycsIDMpO1xuICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBTaGlwKCdCJywgNCk7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXAoJ0MnLCA1KTtcblxuICAgIC8vIDEwWDEwIGdyaWRcbiAgICBsZXQgZ2FtZWJvYXJkID0gW107XG4gICAgY29uc3QgaW5pdEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0R2FtZWJvYXJkKHBsYXllckdhbWVib2FyZCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmQucHVzaChwbGF5ZXJHYW1lYm9hcmRbaV0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtaXNzZWRTaG90cyA9IFtdO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHNldHVwR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgICAgICBpbml0R2FtZWJvYXJkKCk7XG4gICAgICAgIC8vIHBsYWNlIGFsbCBzaGlwc1xuICAgICAgICBnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoOCwgcGF0cm9sKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwUGxhY2VtZW50KDcsIGRlc3Ryb3llcik7XG4gICAgICAgIGdlbmVyYXRlU2hpcFBsYWNlbWVudCg3LCBzdWJtYXJpbmUpXG4gICAgICAgIGdlbmVyYXRlU2hpcFBsYWNlbWVudCg2LCBiYXR0bGVTaGlwKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwUGxhY2VtZW50KDUsIGNhcnJpZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlU2hpcFBsYWNlbWVudCA9IChjb29yZGluYXRlVXBwZXJSYW5nZSwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hvcml6b250YWwgPSByYW5kb21Cb29sZWFuKCk7XG4gICAgICAgIGdlbmVyYXRlUGxhY2VtZW50KGlzSG9yaXpvbnRhbCwgY29vcmRpbmF0ZVVwcGVyUmFuZ2UsIHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTm90T2NjdXBpZWRIb3Jpem9udGFsbHkgPSAoY29vcmRpbmF0ZSwgbnVtYmVyT2ZIb2xlcykgPT4ge1xuICAgICAgICB3aGlsZSAobnVtYmVyT2ZIb2xlcyA+IDApIHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmRbY29vcmRpbmF0ZVswXSArIChudW1iZXJPZkhvbGVzIC0gMSldW2Nvb3JkaW5hdGVbMV1dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnVtYmVyT2ZIb2xlcy0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTm90T2NjdXBpZWRWZXJ0aWNhbGx5ID0gKGNvb3JkaW5hdGUsIG51bWJlck9mSG9sZXMpID0+IHtcbiAgICAgICAgd2hpbGUgKG51bWJlck9mSG9sZXMgPiAwKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV0gKyAobnVtYmVyT2ZIb2xlcyAtIDEpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG51bWJlck9mSG9sZXMtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVBsYWNlbWVudCA9IChpc0hvcml6b250YWwsIGNvb3JkaW5hdGVVcHBlclJhbmdlLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mSG9sZXMgPSBzaGlwLm51bWJlck9mSG9sZXM7XG4gICAgICAgIGNvbnN0IG1hcmsgPSBzaGlwLm1hcms7XG5cbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKGNvb3JkaW5hdGVVcHBlclJhbmdlKVxuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIHdoaWxlKCFpc05vdE9jY3VwaWVkSG9yaXpvbnRhbGx5KGNvb3JkaW5hdGUsIG51bWJlck9mSG9sZXMpKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHJhbmRvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZVVwcGVyUmFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJPZkhvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRbY29vcmRpbmF0ZVswXSArIGldW2Nvb3JkaW5hdGVbMV1dID0gbWFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlKCFpc05vdE9jY3VwaWVkVmVydGljYWxseShjb29yZGluYXRlLCBudW1iZXJPZkhvbGVzKSkge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKGNvb3JkaW5hdGVVcHBlclJhbmdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJPZkhvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXSArIGldID0gbWFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRWYWx1ZSA9IGdhbWVib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXTtcbiAgICAgICAgLy8gaGl0XG4gICAgICAgIGlmIChnYW1lYm9hcmRWYWx1ZSkge1xuICAgICAgICAgICAgc3dpdGNoKGdhbWVib2FyZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnUCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdHJvbC5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRyb2wuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKHBhdHJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llci5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95ZXIuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKGRlc3Ryb3llcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1hcmluZS5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHN1Ym1hcmluZS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goc3VibWFyaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgICAgICAgICAgYmF0dGxlU2hpcC5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGJhdHRsZVNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKGJhdHRsZVNoaXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgICAgICBjYXJyaWVyLmhpdChjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2Fycmllci5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goY2Fycmllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aCA9PSA1O1xuICAgIH1cblxuICAgIHJldHVybiB7c2V0dXBHYW1lYm9hcmQsIHJlY2VpdmVBdHRhY2ssIGFyZUFsbFN1bmssIGdhbWVib2FyZCwgaW5pdEdhbWVib2FyZCwgc2V0R2FtZWJvYXJkfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdHJpZWRDb29yZGluYXRlID0gW107XG5cbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAvLyBnZW5lcmF0ZSBhIGNvb3JkaW5hdGVcbiAgICAgICAgaWYgKCFjb29yZGluYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZWQgPSBnZW5lcmF0ZUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgIHRyaWVkQ29vcmRpbmF0ZS5wdXNoKGdlbmVyYXRlZCk7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb29yZGluYXRlKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICAgICAgd2hpbGUgKHRyaWVkQ29vcmRpbmF0ZS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIGF0dGFja307XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgV2hvYUltYWdlIGZyb20gJy4uL2ltYWdlcy93aG9hLmdpZidcbi8qXG4gICAgRE9NIG1hbmlwdWxhdGlvbnNcbiovXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXIxR2FtZWJvYXJkKHBsYXllcjEsIGdhbWVib2FyZCkge1xuXG4gICAgY29uc3QgcGxheWVyTmFtZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6Zmlyc3QtY2hpbGQgPiAubmFtZScpO1xuICAgIHBsYXllck5hbWVET00udGV4dENvbnRlbnQgPSBwbGF5ZXIxLm5hbWU7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6Zmlyc3QtY2hpbGQgPiAuZ2FtZV9ncmlkJylcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbShwbGF5ZXJCb2FyZERPTS5xdWVyeVNlbGVjdG9yQWxsKCcucm93JykpO1xuICAgIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gQXJyYXkuZnJvbShyb3cucXVlcnlTZWxlY3RvckFsbCgnLmNvbHVtbicpKTtcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb2x1bW4udGV4dENvbnRlbnQgPSBnYW1lYm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkKGFpUGxheWVyKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6bnRoLWNoaWxkKDIpID4gLm5hbWUnKTtcbiAgICBwbGF5ZXJOYW1lRE9NLnRleHRDb250ZW50ID0gYWlQbGF5ZXIubmFtZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVzdWx0KHdpbm5lcikge1xuICAgIGNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIGNvbnN0IGdhbWVFbmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9lbmQnKTtcbiAgICBvdmVybGF5RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGdhbWVFbmREaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBnYW1lRW5kRGl2LnRleHRDb250ZW50ID0gJ1dJTk5FUiBJUzogJyArIHdpbm5lci5uYW1lO1xuXG4gICAgY29uc3QgZW5kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBlbmRJbWFnZS5zcmMgPSBXaG9hSW1hZ2U7XG4gICAgZW5kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1nJyk7XG4gICAgZ2FtZUVuZERpdi5hcHBlbmRDaGlsZChlbmRJbWFnZSk7XG4gICAgXG4gICAgLy8gcmVzdGFydCBidXR0b25cbiAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzdGFydC5jbGFzc0xpc3QuYWRkKCdyZXN0YXJ0Jyk7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9ICdQTEFZIEFHQUlOJztcblxuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG5cbiAgICBnYW1lRW5kRGl2LmFwcGVuZENoaWxkKHJlc3RhcnQpO1xuICAgIFxufVxuXG5leHBvcnQge3JlbmRlclBsYXllcjFHYW1lYm9hcmQsIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkLCByZW5kZXJSZXN1bHR9OyIsIlxuLy8gY3JlYXRlIHNoaXAgZmFjdG9yeSBmdW5jdGlvblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uKG1hcmssIG51bWJlck9mSG9sZXMpIHtcbiAgICBjb25zdCBoaXRDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgY29uc3QgaGl0ID0gKGNvb3JkaW5hdGUpID0+IGhpdENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRDb29yZGluYXRlcy5sZW5ndGggPT0gbnVtYmVyT2ZIb2xlcztcblxuICAgIHJldHVybiB7bWFyaywgbnVtYmVyT2ZIb2xlcywgaGl0LCBpc1N1bmt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCIvLyByZXR1cm4gaW50ZWdlciBjb29yZGluYXRlIHdpdGggdXBwZXIgcmFuZ2UgblxuLy8gZWc6IHdoZW4gbj05LCByZXR1cm4gY29vcmRpbmF0ZSByYW5nZSAwLTlcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGUobikge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobisxKSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuKzEpKTtcbiAgICByZXR1cm4gW3gsIHldO1xufVxuXG5mdW5jdGlvbiByYW5kb21Cb29sZWFuKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCB7cmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tQm9vbGVhbiwgZ2V0UmFuZG9tSW50fVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTdGFydEZvcm0gZnJvbSAnLi9hcHAvZm9ybSc7XG5cblN0YXJ0Rm9ybS5sb2FkRm9ybSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==