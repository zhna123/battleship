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
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    height: 100vh;\n}\n\n.container {\n    display: none;\n    min-width: 760px;\n    height: 100vh;\n}\n\n.line {\n    width: 80%;\n    height: 5px;\n    background-color: lightseagreen;\n    margin: auto;\n}\n\n.title {\n    height: 15%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.8rem;\n    font-weight: bold;\n    color: rgb(88, 86, 86);\n}\n\n.gameboards {\n    height: 60%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n    \n}\n\n.gameboard {\n    height: 90%;\n    width: 40%;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.gameboard .name {\n    height: 10%;\n    text-align: center;\n    color: rgb(88, 86, 86);\n    font-size: 1.2rem;\n}\n\n.gameboard .game_grid {\n    height: 90%;\n    border: 1px solid lightgray;\n    display: flex;\n    flex-direction: column;\n\n    color: lightseagreen;\n}\n\n.row {\n    height: 10%;\n    display: flex;\n    text-align: center;\n\n    border: .5px solid lightgray;\n}\n\n.column {\n    width: 10%;\n    height: 100%;\n    border: .5px solid lightgray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.progress {\n    height: 25%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n\n    padding-bottom: 30px;\n}\n\n.ships_chart {\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n    width: 40%;\n}\n\n.ship {\n    height: 20%;\n    display: flex;\n}\n\n.ship_title {\n    width: 30%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    font-size: .9rem;\n    color: lightseagreen;\n\n}\n\n.ship_state {\n    width: 70%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 3px;\n}\n\n.state_square {\n    width: 18%;\n    height: 80%;\n    border: .5px solid lightseagreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: lightseagreen;\n}\n\n.overlay {\n    display: none;\n    position: absolute;\n    background-color: rgba(211, 211, 211, 0.5);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n}\n\n.game_end {\n    display: none;\n    position: absolute;\n    border: 2px solid lightseagreen;\n    border-radius: 5px;\n    background-color: white;\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    z-index: 200;\n\n    text-align: center;\n    padding-top: 80px;\n    font-size: 2rem;\n    color: lightseagreen;\n    gap: 60px;\n    \n}\n\nbutton {\n    background-color: lightseagreen;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n    font: inherit;\n    cursor: pointer;\n}\n\n.restart {\n    display: block;\n    width: 40%;\n    padding: 5px;\n    margin: auto;\n}\n\n.img {\n    display: block;\n    width: 200px;\n    height: 200px;\n    object-fit: contain;\n    margin: auto;\n}\n\n/* style start forms */\n.form_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#game_form {\n    border: 3px solid lightseagreen;\n    border-radius: 20px;\n    padding: 20px;\n    width: 80%;\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n#game_form > h1 {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.tab.player {\n    width: 60%;\n    margin: auto;\n}\n\ninput[type=text] {\n    width: 70%;\n    height: 30px;\n    margin: 10px;\n    border: 1px solid lightseagreen;\n    border-radius: 5px;\n    padding: 10px;;\n}\n\ninput[type=checkbox] {\n    height: 25px;\n    width: 25px;\n    vertical-align: middle;\n    margin: 10px;\n}\n\nbutton.page {\n    height: 40px;\n    width: 90px;\n    margin: 10px;\n}\n\n  /* place ship form */\n.board_container {\n    height: 500px;\n    margin: 30px auto 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.left {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n.right {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n/* overwrite some of the existing styles */\n\n.left > .ship {\n    flex-direction: column;\n}\n\n.left > .ship > .ship_title {\n    font-size: .8rem;\n    align-items: flex-end;\n    height: 60%;\n    box-sizing: border-box;\n    padding-bottom: 10px;\n}\n\n.left > .ship > .ship_state {\n    height: 40%;\n}\n\n.left > .ship > .ship_state > .state_square {\n    width: 30%;\n}\n\n/* hide all steps by default */\n.tab {\n    display: none;\n}\n\n.over {\n    border: 1px dotted red;\n}\n  \n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body, html {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    height: 100vh;\n}\n\n.container {\n    display: none;\n    min-width: 760px;\n    height: 100vh;\n}\n\n.line {\n    width: 80%;\n    height: 5px;\n    background-color: lightseagreen;\n    margin: auto;\n}\n\n.title {\n    height: 15%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.8rem;\n    font-weight: bold;\n    color: rgb(88, 86, 86);\n}\n\n.gameboards {\n    height: 60%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n    \n}\n\n.gameboard {\n    height: 90%;\n    width: 40%;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.gameboard .name {\n    height: 10%;\n    text-align: center;\n    color: rgb(88, 86, 86);\n    font-size: 1.2rem;\n}\n\n.gameboard .game_grid {\n    height: 90%;\n    border: 1px solid lightgray;\n    display: flex;\n    flex-direction: column;\n\n    color: lightseagreen;\n}\n\n.row {\n    height: 10%;\n    display: flex;\n    text-align: center;\n\n    border: .5px solid lightgray;\n}\n\n.column {\n    width: 10%;\n    height: 100%;\n    border: .5px solid lightgray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.progress {\n    height: 25%;\n\n    display: flex;\n    gap: 120px;\n    justify-content:center;\n    align-items: center;\n\n    padding-bottom: 30px;\n}\n\n.ships_chart {\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n    width: 40%;\n}\n\n.ship {\n    height: 20%;\n    display: flex;\n}\n\n.ship_title {\n    width: 30%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    font-size: .9rem;\n    color: lightseagreen;\n\n}\n\n.ship_state {\n    width: 70%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 3px;\n}\n\n.state_square {\n    width: 18%;\n    height: 80%;\n    border: .5px solid lightseagreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: lightseagreen;\n}\n\n.overlay {\n    display: none;\n    position: absolute;\n    background-color: rgba(211, 211, 211, 0.5);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n}\n\n.game_end {\n    display: none;\n    position: absolute;\n    border: 2px solid lightseagreen;\n    border-radius: 5px;\n    background-color: white;\n    top: 25%;\n    left: 25%;\n    width: 50%;\n    height: 50%;\n    z-index: 200;\n\n    text-align: center;\n    padding-top: 80px;\n    font-size: 2rem;\n    color: lightseagreen;\n    gap: 60px;\n    \n}\n\nbutton {\n    background-color: lightseagreen;\n    border: none;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n    font: inherit;\n    cursor: pointer;\n}\n\n.restart {\n    display: block;\n    width: 40%;\n    padding: 5px;\n    margin: auto;\n}\n\n.img {\n    display: block;\n    width: 200px;\n    height: 200px;\n    object-fit: contain;\n    margin: auto;\n}\n\n/* style start forms */\n.form_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#game_form {\n    border: 3px solid lightseagreen;\n    border-radius: 20px;\n    padding: 20px;\n    width: 80%;\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n#game_form > h1 {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.tab.player {\n    width: 60%;\n    margin: auto;\n}\n\ninput[type=text] {\n    width: 70%;\n    height: 30px;\n    margin: 10px;\n    border: 1px solid lightseagreen;\n    border-radius: 5px;\n    padding: 10px;;\n}\n\ninput[type=checkbox] {\n    height: 25px;\n    width: 25px;\n    vertical-align: middle;\n    margin: 10px;\n}\n\nbutton.page {\n    height: 40px;\n    width: 90px;\n    margin: 10px;\n}\n\n  /* place ship form */\n.board_container {\n    height: 500px;\n    margin: 30px auto 20px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.left {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n.right {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n/* overwrite some of the existing styles */\n\n.left > .ship {\n    flex-direction: column;\n}\n\n.left > .ship > .ship_title {\n    font-size: .8rem;\n    align-items: flex-end;\n    height: 60%;\n    box-sizing: border-box;\n    padding-bottom: 10px;\n}\n\n.left > .ship > .ship_state {\n    height: 40%;\n}\n\n.left > .ship > .ship_state > .state_square {\n    width: 30%;\n}\n\n/* hide all steps by default */\n.tab {\n    display: none;\n}\n\n.over {\n    border: 1px dotted red;\n}\n  \n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "createShipDiv": () => (/* binding */ createShipDiv)
/* harmony export */ });

function createShipDiv(i, draggable=false) {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
  
    const shipTitle = document.createElement('div');
    shipTitle.classList.add('ship_title');
    const shipState = document.createElement('div');
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
        break;
      case 1:
        shipTitle.textContent = 'DESTROYER';
        initShipState(shipState, 3, 'D');
        break;
      case 2:
        shipTitle.textContent = 'SUBMARINE';
        initShipState(shipState, 3, 'S');
        break;
      case 3:
        shipTitle.textContent = 'BATTLESHIP';
        initShipState(shipState, 4, 'B');
        break;
      case 4:
        shipTitle.textContent = 'CARRIER';
        initShipState(shipState, 5, 'C');
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
    return shipState;
}

function appendGrids(div) {
    for (let i=0; i<10; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      for (let i=0; i<10; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
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
        const submit = document.querySelector('button[type=submit]');
        if (n == 0) {
            tabs[1].style.display = 'none';
            preBtn.style.display = 'none';
            nextBtn.style.display = 'inline';
            submit.style.display = 'none';
        } else {
            tabs[0].style.display = 'none';
            preBtn.style.display = 'inline';
            nextBtn.style.display = 'none';
            submit.style.display = 'inline';
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
        const form = document.querySelector('form#game_form');
    
        form.addEventListener('submit', (e) => {
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
        });
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


function createShipsForPlacement() {
    const leftDiv = document.querySelector('.board_container > .left');
    for (let i=0; i<5; i++) {
      leftDiv.appendChild((0,_common_ui__WEBPACK_IMPORTED_MODULE_0__.createShipDiv)(i, true))
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

    e.dataTransfer.setData('text/plain', 'P');
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    const targets = Array.from(document.querySelectorAll('.right .column'));
    targets.forEach(target => {
        target.classList.remove('over');
    })
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
    const nextSibling = this.nextSibling;
    if (nextSibling) {
        this.nextSibling.classList.add('over'); 
    }  
}

function handleDragLeave(e) {
    // works when going from left to right
    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    const data = e.dataTransfer.getData('text/plain');
    this.innerHTML = data;
    this.nextSibling.innerHTML = data;
    return false;
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
    
    const newGame = () => {

        // setup gameboards
        player1Gameboard.setupGameboard();
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderPlayer1Gameboard)(player1, player1Gameboard.gameboard)

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
    const gameboard = [];
    const initGameboard = () => {
        for(let i=0; i<10; i++) {
            gameboard.push([]);
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
            console.log(numberOfHoles)
            console.log(coordinate)
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

    return {setupGameboard, receiveAttack, areAllSunk, gameboard}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFX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QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9jb21tb25fdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9mb3JtX3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZV91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3V0aWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWluLXdpZHRoOiA3NjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYig4OCwgODYsIDg2KTtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZCAubmFtZSB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoODgsIDg2LCA4Nik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5nYW1lX2dyaWQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgICBoZWlnaHQ6IDI1JTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zaGlwc19jaGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hpcF90aXRsZSB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuXFxufVxcblxcbi5zaGlwX3N0YXRlIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uc3RhdGVfc3F1YXJlIHtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uZ2FtZV9lbmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAyNSU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGdhcDogNjBweDtcXG4gICAgXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBzdHlsZSBzdGFydCBmb3JtcyAqL1xcbi5mb3JtX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZV9mb3JtIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2dhbWVfZm9ybSA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4udGFiLnBsYXllciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7O1xcbn1cXG5cXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYnV0dG9uLnBhZ2Uge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiAgLyogcGxhY2Ugc2hpcCBmb3JtICovXFxuLmJvYXJkX2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLmxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi8qIG92ZXJ3cml0ZSBzb21lIG9mIHRoZSBleGlzdGluZyBzdHlsZXMgKi9cXG5cXG4ubGVmdCA+IC5zaGlwIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxlZnQgPiAuc2hpcCA+IC5zaGlwX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLnNoaXAgPiAuc2hpcF9zdGF0ZSB7XFxuICAgIGhlaWdodDogNDAlO1xcbn1cXG5cXG4ubGVmdCA+IC5zaGlwID4gLnNoaXBfc3RhdGUgPiAuc3RhdGVfc3F1YXJlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLyogaGlkZSBhbGwgc3RlcHMgYnkgZGVmYXVsdCAqL1xcbi50YWIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCByZWQ7XFxufVxcbiAgXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJ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QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7RUFFRSxvQkFBb0I7QUFDdEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBLDBDQUEwQzs7QUFFMUM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSwgaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtaW4td2lkdGg6IDc2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDg4LCA4NiwgODYpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGhlaWdodDogNjAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5uYW1lIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYig4OCwgODYsIDg2KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5nYW1lYm9hcmQgLmdhbWVfZ3JpZCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICAgIGhlaWdodDogMjUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNoaXBzX2NoYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwX3RpdGxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG5cXG59XFxuXFxuLnNoaXBfc3RhdGUge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5zdGF0ZV9zcXVhcmUge1xcbiAgICB3aWR0aDogMTglO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5nYW1lX2VuZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHotaW5kZXg6IDIwMDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogODBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgZ2FwOiA2MHB4O1xcbiAgICBcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIHN0eWxlIHN0YXJ0IGZvcm1zICovXFxuLmZvcm1fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lX2Zvcm0ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jZ2FtZV9mb3JtID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi50YWIucGxheWVyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDs7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ucGFnZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuICAvKiBwbGFjZSBzaGlwIGZvcm0gKi9cXG4uYm9hcmRfY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLyogb3ZlcndyaXRlIHNvbWUgb2YgdGhlIGV4aXN0aW5nIHN0eWxlcyAqL1xcblxcbi5sZWZ0ID4gLnNoaXAge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGVmdCA+IC5zaGlwID4gLnNoaXBfdGl0bGUge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAuc2hpcCA+IC5zaGlwX3N0YXRlIHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxufVxcblxcbi5sZWZ0ID4gLnNoaXAgPiAuc2hpcF9zdGF0ZSA+IC5zdGF0ZV9zcXVhcmUge1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4vKiBoaWRlIGFsbCBzdGVwcyBieSBkZWZhdWx0ICovXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5vdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHJlZDtcXG59XFxuICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gY3JlYXRlU2hpcERpdihpLCBkcmFnZ2FibGU9ZmFsc2UpIHtcbiAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIFxuICAgIGNvbnN0IHNoaXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaGlwX3RpdGxlJyk7XG4gICAgY29uc3Qgc2hpcFN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcFN0YXRlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfc3RhdGUnKTtcbiAgICBpZiAoZHJhZ2dhYmxlKSB7XG4gICAgICAgIHNoaXBTdGF0ZS5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgICBzaGlwU3RhdGUuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICAgIH1cbiAgICAvLyBmaWxsIGluIHNoaXAgbmFtZXNcbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ1BBVFJPTCc7XG4gICAgICAgIGluaXRTaGlwU3RhdGUoc2hpcFN0YXRlLCAyLCAnUCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ0RFU1RST1lFUic7XG4gICAgICAgIGluaXRTaGlwU3RhdGUoc2hpcFN0YXRlLCAzLCAnRCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ1NVQk1BUklORSc7XG4gICAgICAgIGluaXRTaGlwU3RhdGUoc2hpcFN0YXRlLCAzLCAnUycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgICAgICBpbml0U2hpcFN0YXRlKHNoaXBTdGF0ZSwgNCwgJ0InKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHNoaXBUaXRsZS50ZXh0Q29udGVudCA9ICdDQVJSSUVSJztcbiAgICAgICAgaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIDUsICdDJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcFRpdGxlKTtcbiAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBTdGF0ZSk7XG4gICAgcmV0dXJuIHNoaXBEaXY7XG59XG4gIFxuZnVuY3Rpb24gaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIG51bWJlck9mSG9sZXMsIHN5bWJvbCkge1xuICAgIGZvcihsZXQgaT0wOyBpPG51bWJlck9mSG9sZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RhdGVTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN0YXRlU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3N0YXRlX3NxdWFyZScpO1xuICAgICAgc3RhdGVTcXVhcmUudGV4dENvbnRlbnQgPSBzeW1ib2w7XG4gICAgICBzaGlwU3RhdGUuYXBwZW5kQ2hpbGQoc3RhdGVTcXVhcmUpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcFN0YXRlO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRHcmlkcyhkaXYpIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgY29uc3Qgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgICBjb25zdCBjb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29sdW1uRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuICAgICAgICByb3dEaXYuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTtcbiAgICAgIH1cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChyb3dEaXYpO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQge2NyZWF0ZVNoaXBEaXYsIGFwcGVuZEdyaWRzfSIsImltcG9ydCB7IGNyZWF0ZUJvYXJkRm9yUGxhY2VtZW50LCBjcmVhdGVEcmFnZ2FibGVzLCBjcmVhdGVTaGlwc0ZvclBsYWNlbWVudCB9IGZyb20gJy4vZm9ybV91aSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgY29uc3RydWN0R2FtZVVJIH0gZnJvbSAnLi9nYW1lX3VpJztcblxuY29uc3QgU3RhcnRGb3JtID0gZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBsb2FkRm9ybSgpIHtcbiAgICAgICAgY3JlYXRlRm9ybSgpO1xuICAgICAgICBzaG93VGFiKDApO1xuICAgICAgICBhZGRCdXR0b25Db250cm9scygpO1xuICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgICAgICAgY3JlYXRlU2hpcHNGb3JQbGFjZW1lbnQoKTtcbiAgICAgICAgY3JlYXRlQm9hcmRGb3JQbGFjZW1lbnQoKTtcbiAgICAgICAgY3JlYXRlRHJhZ2dhYmxlcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dUYWIobikge1xuICAgICAgICBjb25zdCB0YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJykpOyBcbiAgICAgICAgdGFic1tuXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICBjb25zdCBwcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5wcmUnKTtcbiAgICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLm5leHQnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9c3VibWl0XScpO1xuICAgICAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgICAgICB0YWJzWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgICAgICAgICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJzWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgICAgICAgICAgbmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEJ1dHRvbkNvbnRyb2xzKCkge1xuICAgICAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UubmV4dCcpO1xuICAgICAgICBjb25zdCBwcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5wcmUnKTtcbiAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgICAgIHNob3dUYWIoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHByZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNob3dUYWIoMCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNnYW1lX2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGZvcm0uZWxlbWVudHNbJ25hbWUnXS52YWx1ZTtcbiAgICAgICAgaWYoIXBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdtdXN0IGVudGVyIHBsYXllciBuYW1lJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI2dhbWVfZm9ybScpO1xuICAgIFxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBmb3JtLmVsZW1lbnRzWyduYW1lJ10udmFsdWU7XG4gICAgICAgICAgICBsZXQgZmlyc3RQbGF5ZXI7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICAgICAgaWYgKGNoZWNrZWRib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGZpcnN0UGxheWVyID0gcGxheWVyTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlyc3RQbGF5ZXIgPSAnQ09NUFVURVInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZUZvcm0oKTtcbiAgICAgICAgICAgIGNvbnN0cnVjdEdhbWVVSSgpO1xuXG4gICAgICAgICAgICBHYW1lKHBsYXllck5hbWUsIGZpcnN0UGxheWVyKS5uZXdHYW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fY29udGFpbmVyJyk7XG4gICAgICAgIHN0YXJ0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIFxuICAgICAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZEZvcm19O1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydEZvcm07XG5cblxuIiwiaW1wb3J0IHsgYXBwZW5kR3JpZHMsIGNyZWF0ZVNoaXBEaXYgfSBmcm9tIFwiLi9jb21tb25fdWlcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2hpcHNGb3JQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZF9jb250YWluZXIgPiAubGVmdCcpO1xuICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERpdihpLCB0cnVlKSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkRm9yUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkX2NvbnRhaW5lciA+IC5yaWdodCcpO1xuICAgIGFwcGVuZEdyaWRzKHJpZ2h0RGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlcygpIHtcbiAgICBjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnQgLnNoaXBfc3RhdGUnKSk7XG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcbiAgICB9KVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpZ2h0IC5jb2x1bW4nKSk7XG4gICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWdPdmVyKTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGhhbmRsZURyYWdFbnRlcik7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBoYW5kbGVEcmFnTGVhdmUpO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMC40JztcblxuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCAnUCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGUpIHtcbiAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgY29uc3QgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpZ2h0IC5jb2x1bW4nKSk7XG4gICAgdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ092ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSB0aGlzLm5leHRTaWJsaW5nO1xuICAgIGlmIChuZXh0U2libGluZykge1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ292ZXInKTsgXG4gICAgfSAgXG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gICAgLy8gd29ya3Mgd2hlbiBnb2luZyBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJvcChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gZGF0YTtcbiAgICB0aGlzLm5leHRTaWJsaW5nLmlubmVySFRNTCA9IGRhdGE7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge2NyZWF0ZUJvYXJkRm9yUGxhY2VtZW50LCBjcmVhdGVTaGlwc0ZvclBsYWNlbWVudCwgY3JlYXRlRHJhZ2dhYmxlc31cblxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyByZW5kZXJQbGF5ZXIxR2FtZWJvYXJkLCByZW5kZXJBSVBsYXllckdhbWVib2FyZCwgcmVuZGVyUmVzdWx0IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IEdhbWUgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBmaXJzdFBsYXllck5hbWUpIHtcblxuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgY29uc3QgcGxheWVyMUdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgY29uc3QgYWlQbGF5ZXIgPSBQbGF5ZXIoJ0NPTVBVVEVSJyk7XG4gICAgY29uc3QgYWlQbGF5ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBcbiAgICBjb25zdCBuZXdHYW1lID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIHNldHVwIGdhbWVib2FyZHNcbiAgICAgICAgcGxheWVyMUdhbWVib2FyZC5zZXR1cEdhbWVib2FyZCgpO1xuICAgICAgICByZW5kZXJQbGF5ZXIxR2FtZWJvYXJkKHBsYXllcjEsIHBsYXllcjFHYW1lYm9hcmQuZ2FtZWJvYXJkKVxuXG4gICAgICAgIGFpUGxheWVyR2FtZWJvYXJkLnNldHVwR2FtZWJvYXJkKCk7XG4gICAgICAgIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkKGFpUGxheWVyKTtcblxuICAgICAgICBpZiAoZmlyc3RQbGF5ZXJOYW1lID09PSAnQ09NUFVURVInKSB7XG4gICAgICAgICAgICAvLyBjb21wdXRlciBnb2VzIGZpcnN0XG4gICAgICAgICAgICBjb21wdXRlckF0dGFjaygpO1xuICAgICAgICAgICAgZG9BdHRhY2soKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaHVtYW4gZ29lcyBmaXJzdFxuICAgICAgICAgICAgZG9BdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6Zmlyc3QtY2hpbGQgPiAuZ2FtZV9ncmlkJyk7XG4gICAgICAgIGNvbnN0IGF0dGFja2VkQ29vcmRpbmF0ZSA9IGFpUGxheWVyLmF0dGFjaygpO1xuICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbShwbGF5ZXJCb2FyZERPTS5xdWVyeVNlbGVjdG9yQWxsKCcucm93JykpO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBBcnJheS5mcm9tKHJvdy5xdWVyeVNlbGVjdG9yQWxsKCcuY29sdW1uJykpO1xuICAgICAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09IGF0dGFja2VkQ29vcmRpbmF0ZVswXSAmJiBjb2x1bW5JbmRleCA9PSBhdHRhY2tlZENvb3JkaW5hdGVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcjFHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IGEgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTaGlwU3RhdGUocGxheWVyMUdhbWVib2FyZC5nYW1lYm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4XSwgcGxheWVyMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcjFHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93SW5kZXgsIGNvbHVtbkluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9BdHRhY2soKSB7XG4gICAgICAgIGNvbnN0IGFpQm9hcmRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkOm50aC1jaGlsZCgyKSA+IC5nYW1lX2dyaWQnKVxuICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbShhaUJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKSk7XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IEFycmF5LmZyb20ocm93LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2x1bW4nKSk7XG4gICAgICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBjb2x1bW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRhY2tMaXN0ZW5lci5iaW5kKG51bGwsIHJvd0luZGV4LCBjb2x1bW5JbmRleCwgY29sdW1uKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYXR0YWNrTGlzdGVuZXIocm93SW5kZXgsIGNvbHVtbkluZGV4LCBjb2x1bW4pIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRNYXJrID0gYWlQbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gICAgICAgIGlmIChhdHRhY2tlZE1hcmsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgY29sdW1uLnRleHRDb250ZW50ID0gYXR0YWNrZWRNYXJrO1xuICAgICAgICAgICAgdXBkYXRlU2hpcFN0YXRlKGF0dGFja2VkTWFyaywgYWlQbGF5ZXIpO1xuICAgICAgICAgICAgLy8gdXBkYXRlIHByb2dyYW1cbiAgICAgICAgICAgIGFpUGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3Jvd0luZGV4LCBjb2x1bW5JbmRleF0pO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBnYW1lIGVuZHNcbiAgICAgICAgICAgIGlmIChnYW1lRW5kcyhhaVBsYXllckdhbWVib2FyZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBlbmQgLSB5b3Ugd29uIScpXG4gICAgICAgICAgICAgICAgcmVuZGVyUmVzdWx0KHBsYXllcjEpO1xuICAgICAgICAgICAgICAgIC8vIGVuZCBnYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbHVtbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgaWYoZ2FtZUVuZHMocGxheWVyMUdhbWVib2FyZCkpIHtcbiAgICAgICAgICAgIC8vIGVuZCBnYW1lXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBlbmQgLSBjb21wdXRlciB3b24hJylcbiAgICAgICAgICAgIHJlbmRlclJlc3VsdChhaVBsYXllcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdhbWVFbmRzKGdhbWVib2FyZCkge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLmFyZUFsbFN1bmsoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTaGlwU3RhdGUoc3ltYm9sLCBwbGF5ZXIpIHtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChzeW1ib2wpIHtcbiAgICAgICAgICAgIGNhc2UgJ1AnOlxuICAgICAgICAgICAgICAgIGxldCBwYXRyb2xTaGlwU3RhdGU7IFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0cm9sU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgxKSA+IC5zaGlwOmZpcnN0LWNoaWxkID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXRyb2xTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDIpID4gLnNoaXA6Zmlyc3QtY2hpbGQgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gcGF0cm9sU2hpcFN0YXRlLnF1ZXJ5U2VsZWN0b3IoYC5zdGF0ZV9zcXVhcmU6bnRoLWNoaWxkKCR7aSsxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnaW5kaWFucmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgIGxldCBkZXN0cm95ZXJTaGlwU3RhdGU7IFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVyU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgxKSA+IC5zaGlwOm50aC1jaGlsZCgyKSA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVyU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgyKSA+IC5zaGlwOm50aC1jaGlsZCgyKSA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkZXN0cm95ZXJTaGlwU3RhdGUucXVlcnlTZWxlY3RvcihgLnN0YXRlX3NxdWFyZTpudGgtY2hpbGQoJHtpKzF9KWApO1xuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdpbmRpYW5yZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgbGV0IHN1Ym1hcmluZVNoaXBTdGF0ZTsgXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJtYXJpbmVTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDEpID4gLnNoaXA6bnRoLWNoaWxkKDMpID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJtYXJpbmVTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDIpID4gLnNoaXA6bnRoLWNoaWxkKDMpID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHN1Ym1hcmluZVNoaXBTdGF0ZS5xdWVyeVNlbGVjdG9yKGAuc3RhdGVfc3F1YXJlOm50aC1jaGlsZCgke2krMX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2luZGlhbnJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgICAgICBsZXQgYmF0dGxlc2hpcFNoaXBTdGF0ZTsgXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICAgICAgICAgICAgICBiYXR0bGVzaGlwU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgxKSA+IC5zaGlwOm50aC1jaGlsZCg0KSA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0dGxlc2hpcFNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMikgPiAuc2hpcDpudGgtY2hpbGQoNCkgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTw0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYmF0dGxlc2hpcFNoaXBTdGF0ZS5xdWVyeVNlbGVjdG9yKGAuc3RhdGVfc3F1YXJlOm50aC1jaGlsZCgke2krMX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2luZGlhbnJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICBsZXQgY2FycmllclNoaXBTdGF0ZTsgXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJyaWVyU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgxKSA+IC5zaGlwOmxhc3QtY2hpbGQgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnJpZXJTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDIpID4gLnNoaXA6bGFzdC1jaGlsZCA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBjYXJyaWVyU2hpcFN0YXRlLnF1ZXJ5U2VsZWN0b3IoYC5zdGF0ZV9zcXVhcmU6bnRoLWNoaWxkKCR7aSsxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnaW5kaWFucmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7bmV3R2FtZX1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlU2hpcERpdiwgYXBwZW5kR3JpZHMgfSBmcm9tICcuL2NvbW1vbl91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RHYW1lVUkoKSB7XG4gICAgY3JlYXRlVGl0bGUoKTtcbiAgICBjcmVhdGVHYW1lYm9hcmRzKCk7XG4gICAgY3JlYXRlUHJvZ3Jlc3NEaXNwbGF5KCk7XG4gIH1cbiAgICBcbiAgZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJ1xuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuICAgIGNvbnN0IGdhbWVib2FyZDEgPSBkcmF3R2FtZWJvYXJkKCk7XG4gICAgY29uc3QgZ2FtZWJvYXJkMiA9IGRyYXdHYW1lYm9hcmQoKTtcbiAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKGdhbWVib2FyZDEpO1xuICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkMik7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2dyZXNzRGlzcGxheSgpIHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpO1xuICBcbiAgICBjb25zdCBzaGlwczEgPSBkaXNwbGF5U2hpcHMoKTtcbiAgICBjb25zdCBzaGlwczIgPSBkaXNwbGF5U2hpcHMoKTtcbiAgXG4gICAgcHJvZ3Jlc3MuYXBwZW5kQ2hpbGQoc2hpcHMxKTtcbiAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZChzaGlwczIpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkcmF3R2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZERpdi5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBcbiAgICByZXR1cm4gY3JlYXRlQm9hcmRMYXlvdXQoZ2FtZWJvYXJkRGl2KTtcbiAgICBcbiAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmRMYXlvdXQoZGl2KSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllck5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIGNvbnN0IGdhbWVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZUdyaWQuY2xhc3NMaXN0LmFkZCgnZ2FtZV9ncmlkJyk7XG4gICAgY29uc3QgZ3JpZHMgPSBhcHBlbmRHcmlkcyhnYW1lR3JpZCk7XG4gICAgZGl2LmFwcGVuZChwbGF5ZXJOYW1lLCBncmlkcyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXBzX2NoYXJ0Jyk7XG4gICAgZm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgc2hpcHNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU2hpcERpdihpKSlcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBzRGl2O1xuICB9XG4gIFxuICBcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHJhbmRvbUJvb2xlYW4sIHJhbmRvbUNvb3JkaW5hdGUgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgcGF0cm9sID0gU2hpcCgnUCcsIDIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoJ0QnLCAzKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKCdTJywgMyk7XG4gICAgY29uc3QgYmF0dGxlU2hpcCA9IFNoaXAoJ0InLCA0KTtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCgnQycsIDUpO1xuXG4gICAgLy8gMTBYMTAgZ3JpZFxuICAgIGNvbnN0IGdhbWVib2FyZCA9IFtdO1xuICAgIGNvbnN0IGluaXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspIHtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wdXNoKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG4gICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgIGNvbnN0IHN1bmtTaGlwcyA9IFtdO1xuXG4gICAgY29uc3Qgc2V0dXBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGluaXRHYW1lYm9hcmQoKTtcbiAgICAgICAgLy8gcGxhY2UgYWxsIHNoaXBzXG4gICAgICAgIGdlbmVyYXRlU2hpcFBsYWNlbWVudCg4LCBwYXRyb2wpO1xuICAgICAgICBnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoNywgZGVzdHJveWVyKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwUGxhY2VtZW50KDcsIHN1Ym1hcmluZSlcbiAgICAgICAgZ2VuZXJhdGVTaGlwUGxhY2VtZW50KDYsIGJhdHRsZVNoaXApO1xuICAgICAgICBnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoNSwgY2Fycmllcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVTaGlwUGxhY2VtZW50ID0gKGNvb3JkaW5hdGVVcHBlclJhbmdlLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbUJvb2xlYW4oKTtcbiAgICAgICAgZ2VuZXJhdGVQbGFjZW1lbnQoaXNIb3Jpem9udGFsLCBjb29yZGluYXRlVXBwZXJSYW5nZSwgc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNOb3RPY2N1cGllZEhvcml6b250YWxseSA9IChjb29yZGluYXRlLCBudW1iZXJPZkhvbGVzKSA9PiB7XG4gICAgICAgIHdoaWxlIChudW1iZXJPZkhvbGVzID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobnVtYmVyT2ZIb2xlcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpXG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF0gKyAobnVtYmVyT2ZIb2xlcyAtIDEpXVtjb29yZGluYXRlWzFdXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG51bWJlck9mSG9sZXMtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc05vdE9jY3VwaWVkVmVydGljYWxseSA9IChjb29yZGluYXRlLCBudW1iZXJPZkhvbGVzKSA9PiB7XG4gICAgICAgIHdoaWxlIChudW1iZXJPZkhvbGVzID4gMCkge1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdICsgKG51bWJlck9mSG9sZXMgLSAxKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW1iZXJPZkhvbGVzLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVQbGFjZW1lbnQgPSAoaXNIb3Jpem9udGFsLCBjb29yZGluYXRlVXBwZXJSYW5nZSwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBudW1iZXJPZkhvbGVzID0gc2hpcC5udW1iZXJPZkhvbGVzO1xuICAgICAgICBjb25zdCBtYXJrID0gc2hpcC5tYXJrO1xuXG4gICAgICAgIGxldCBjb29yZGluYXRlID0gcmFuZG9tQ29vcmRpbmF0ZShjb29yZGluYXRlVXBwZXJSYW5nZSlcblxuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICB3aGlsZSghaXNOb3RPY2N1cGllZEhvcml6b250YWxseShjb29yZGluYXRlLCBudW1iZXJPZkhvbGVzKSkge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKGNvb3JkaW5hdGVVcHBlclJhbmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgbnVtYmVyT2ZIb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF0gKyBpXVtjb29yZGluYXRlWzFdXSA9IG1hcms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSghaXNOb3RPY2N1cGllZFZlcnRpY2FsbHkoY29vcmRpbmF0ZSwgbnVtYmVyT2ZIb2xlcykpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlID0gcmFuZG9tQ29vcmRpbmF0ZShjb29yZGluYXRlVXBwZXJSYW5nZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgbnVtYmVyT2ZIb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV0gKyBpXSA9IG1hcms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkVmFsdWUgPSBnYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV07XG4gICAgICAgIC8vIGhpdFxuICAgICAgICBpZiAoZ2FtZWJvYXJkVmFsdWUpIHtcbiAgICAgICAgICAgIHN3aXRjaChnYW1lYm9hcmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ1AnOlxuICAgICAgICAgICAgICAgICAgICBwYXRyb2wuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0cm9sLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW5rU2hpcHMucHVzaChwYXRyb2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZXIuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveWVyLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW5rU2hpcHMucHVzaChkZXN0cm95ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgICAgICAgICBzdWJtYXJpbmUuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZihzdWJtYXJpbmUuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKHN1Ym1hcmluZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZVNoaXAuaGl0KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZihiYXR0bGVTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW5rU2hpcHMucHVzaChiYXR0bGVTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICAgICAgY2Fycmllci5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNhcnJpZXIuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKGNhcnJpZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXJlQWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bmtTaGlwcy5sZW5ndGggPT0gNTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3NldHVwR2FtZWJvYXJkLCByZWNlaXZlQXR0YWNrLCBhcmVBbGxTdW5rLCBnYW1lYm9hcmR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB0cmllZENvb3JkaW5hdGUgPSBbXTtcblxuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgY29vcmRpbmF0ZVxuICAgICAgICBpZiAoIWNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlZCA9IGdlbmVyYXRlQ29vcmRpbmF0ZSgpO1xuICAgICAgICAgICAgdHJpZWRDb29yZGluYXRlLnB1c2goZ2VuZXJhdGVkKTtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvb3JkaW5hdGUoKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlID0gW2dldFJhbmRvbUludCgxMCksIGdldFJhbmRvbUludCgxMCldO1xuICAgICAgICB3aGlsZSAodHJpZWRDb29yZGluYXRlLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlID0gW2dldFJhbmRvbUludCgxMCksIGdldFJhbmRvbUludCgxMCldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgYXR0YWNrfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBXaG9hSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3dob2EuZ2lmJ1xuLypcbiAgICBET00gbWFuaXB1bGF0aW9uc1xuKi9cbmZ1bmN0aW9uIHJlbmRlclBsYXllcjFHYW1lYm9hcmQocGxheWVyMSwgZ2FtZWJvYXJkKSB7XG5cbiAgICBjb25zdCBwbGF5ZXJOYW1lRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZDpmaXJzdC1jaGlsZCA+IC5uYW1lJyk7XG4gICAgcGxheWVyTmFtZURPTS50ZXh0Q29udGVudCA9IHBsYXllcjEubmFtZTtcblxuICAgIGNvbnN0IHBsYXllckJvYXJkRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZDpmaXJzdC1jaGlsZCA+IC5nYW1lX2dyaWQnKVxuICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHBsYXllckJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKSk7XG4gICAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBBcnJheS5mcm9tKHJvdy5xdWVyeVNlbGVjdG9yQWxsKCcuY29sdW1uJykpO1xuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbHVtbi50ZXh0Q29udGVudCA9IGdhbWVib2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyQUlQbGF5ZXJHYW1lYm9hcmQoYWlQbGF5ZXIpIHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZDpudGgtY2hpbGQoMikgPiAubmFtZScpO1xuICAgIHBsYXllck5hbWVET00udGV4dENvbnRlbnQgPSBhaVBsYXllci5uYW1lO1xufVxuXG5mdW5jdGlvbiByZW5kZXJSZXN1bHQod2lubmVyKSB7XG4gICAgY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgY29uc3QgZ2FtZUVuZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX2VuZCcpO1xuICAgIG92ZXJsYXlEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZ2FtZUVuZERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGdhbWVFbmREaXYudGV4dENvbnRlbnQgPSAnV0lOTkVSIElTOiAnICsgd2lubmVyLm5hbWU7XG5cbiAgICBjb25zdCBlbmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGVuZEltYWdlLnNyYyA9IFdob2FJbWFnZTtcbiAgICBlbmRJbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgICBnYW1lRW5kRGl2LmFwcGVuZENoaWxkKGVuZEltYWdlKTtcbiAgICBcbiAgICAvLyByZXN0YXJ0IGJ1dHRvblxuICAgIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3Jlc3RhcnQnKTtcbiAgICByZXN0YXJ0LnRleHRDb250ZW50ID0gJ1BMQVkgQUdBSU4nO1xuXG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcblxuICAgIGdhbWVFbmREaXYuYXBwZW5kQ2hpbGQocmVzdGFydCk7XG4gICAgXG59XG5cbmV4cG9ydCB7cmVuZGVyUGxheWVyMUdhbWVib2FyZCwgcmVuZGVyQUlQbGF5ZXJHYW1lYm9hcmQsIHJlbmRlclJlc3VsdH07IiwiXG4vLyBjcmVhdGUgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBTaGlwID0gZnVuY3Rpb24obWFyaywgbnVtYmVyT2ZIb2xlcykge1xuICAgIGNvbnN0IGhpdENvb3JkaW5hdGVzID0gW107XG5cbiAgICBjb25zdCBoaXQgPSAoY29vcmRpbmF0ZSkgPT4gaGl0Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdENvb3JkaW5hdGVzLmxlbmd0aCA9PSBudW1iZXJPZkhvbGVzO1xuXG4gICAgcmV0dXJuIHttYXJrLCBudW1iZXJPZkhvbGVzLCBoaXQsIGlzU3Vua307XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsIi8vIHJldHVybiBpbnRlZ2VyIGNvb3JkaW5hdGUgd2l0aCB1cHBlciByYW5nZSBuXG4vLyBlZzogd2hlbiBuPTksIHJldHVybiBjb29yZGluYXRlIHJhbmdlIDAtOVxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZShuKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuKzEpKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG4rMSkpO1xuICAgIHJldHVybiBbeCwgeV07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjU7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZXhwb3J0IHtyYW5kb21Db29yZGluYXRlLCByYW5kb21Cb29sZWFuLCBnZXRSYW5kb21JbnR9XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFN0YXJ0Rm9ybSBmcm9tICcuL2FwcC9mb3JtJztcblxuU3RhcnRGb3JtLmxvYWRGb3JtKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9