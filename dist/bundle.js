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
const Player = function(name) {
    const triedCoordinate = [];

    const attack = (coordinate) => {
        // generate a coordinate
        if (coordinate === undefined) {
            const generated = generateCoordinate();
            triedCoordinate.push(generated);
            return generated;
        }
        return coordinate;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateCoordinate() {
        let coordinate = [getRandomInt(10), getRandomInt(10)];
        while (triedCoordinate.includes(coordinate)) {
            coordinate = [getRandomInt(10), getRandomInt(10)];
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

    const hit = (coordinate) => {
        hitCoordinates.push(coordinate);}

    const isSunk = () => {
        if(hitCoordinates.length == numberOfHoles) {
            console.log('mark:' + mark+ ' is sunk!');
            console.log(hitCoordinates.length);
            console.log(numberOfHoles);

            return true;
        }
        return false;
    }

    return {mark, numberOfHoles, hit, isSunk, hitCoordinates};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxzREFBc0QsNkhBQTZILG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsdUJBQXVCLG9CQUFvQixHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixzQ0FBc0MsbUJBQW1CLEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qiw2QkFBNkIsR0FBRyxpQkFBaUIsa0JBQWtCLHNCQUFzQixpQkFBaUIsNkJBQTZCLDBCQUEwQixTQUFTLGdCQUFnQixrQkFBa0IsaUJBQWlCLHNCQUFzQiw2QkFBNkIsR0FBRyxzQkFBc0Isa0JBQWtCLHlCQUF5Qiw2QkFBNkIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQixrQ0FBa0Msb0JBQW9CLDZCQUE2Qiw2QkFBNkIsR0FBRyxVQUFVLGtCQUFrQixvQkFBb0IseUJBQXlCLHFDQUFxQyxHQUFHLGFBQWEsaUJBQWlCLG1CQUFtQixtQ0FBbUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxlQUFlLGtCQUFrQixzQkFBc0IsaUJBQWlCLDZCQUE2QiwwQkFBMEIsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGlCQUFpQixHQUFHLFdBQVcsa0JBQWtCLG9CQUFvQixHQUFHLGlCQUFpQixpQkFBaUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsdUJBQXVCLDJCQUEyQixLQUFLLGlCQUFpQixpQkFBaUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsa0NBQWtDLGVBQWUsR0FBRyxtQkFBbUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsMkJBQTJCLEdBQUcsY0FBYyxvQkFBb0IseUJBQXlCLGlEQUFpRCxhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQixtQkFBbUIsR0FBRyxlQUFlLG9CQUFvQix5QkFBeUIsc0NBQXNDLHlCQUF5Qiw4QkFBOEIsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsMkJBQTJCLHdCQUF3QixzQkFBc0IsMkJBQTJCLGdCQUFnQixTQUFTLFlBQVksc0NBQXNDLG1CQUFtQix5QkFBeUIsbUJBQW1CLHdCQUF3QixvQkFBb0Isc0JBQXNCLEdBQUcsY0FBYyxxQkFBcUIsaUJBQWlCLG1CQUFtQixtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixtQkFBbUIsb0JBQW9CLDBCQUEwQixtQkFBbUIsR0FBRyw4Q0FBOEMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxnQkFBZ0Isc0NBQXNDLDBCQUEwQixvQkFBb0IsaUJBQWlCLHVCQUF1QiwwQkFBMEIsR0FBRyxxQkFBcUIseUJBQXlCLDBCQUEwQixHQUFHLGlCQUFpQixpQkFBaUIsbUJBQW1CLEdBQUcsc0JBQXNCLGlCQUFpQixtQkFBbUIsbUJBQW1CLHNDQUFzQyx5QkFBeUIscUJBQXFCLEdBQUcsMEJBQTBCLG1CQUFtQixrQkFBa0IsNkJBQTZCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLCtDQUErQyxvQkFBb0IsNkJBQTZCLG9CQUFvQixxQ0FBcUMsR0FBRyxXQUFXLHlCQUF5QixzQkFBc0Isb0JBQW9CLDZCQUE2QixvQkFBb0IsR0FBRyxZQUFZLHlCQUF5QixzQkFBc0IsR0FBRyxrRUFBa0UsNkJBQTZCLEdBQUcsaUNBQWlDLHVCQUF1Qiw0QkFBNEIsa0JBQWtCLDZCQUE2QiwyQkFBMkIsR0FBRyxpQ0FBaUMsa0JBQWtCLEdBQUcsaURBQWlELGlCQUFpQixHQUFHLDJDQUEyQyxvQkFBb0IsR0FBRyxXQUFXLDZCQUE2QixHQUFHLDJCQUEyQixnRkFBZ0YsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksc0NBQXNDLDZIQUE2SCxvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLHVCQUF1QixvQkFBb0IsR0FBRyxXQUFXLGlCQUFpQixrQkFBa0Isc0NBQXNDLG1CQUFtQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHdCQUF3Qix3QkFBd0IsNkJBQTZCLEdBQUcsaUJBQWlCLGtCQUFrQixzQkFBc0IsaUJBQWlCLDZCQUE2QiwwQkFBMEIsU0FBUyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixzQkFBc0IsNkJBQTZCLEdBQUcsc0JBQXNCLGtCQUFrQix5QkFBeUIsNkJBQTZCLHdCQUF3QixHQUFHLDJCQUEyQixrQkFBa0Isa0NBQWtDLG9CQUFvQiw2QkFBNkIsNkJBQTZCLEdBQUcsVUFBVSxrQkFBa0Isb0JBQW9CLHlCQUF5QixxQ0FBcUMsR0FBRyxhQUFhLGlCQUFpQixtQkFBbUIsbUNBQW1DLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsZUFBZSxrQkFBa0Isc0JBQXNCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLDZCQUE2QixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLGtCQUFrQixpQkFBaUIsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0IsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsS0FBSyxpQkFBaUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsMEJBQTBCLGtDQUFrQyxlQUFlLEdBQUcsbUJBQW1CLGlCQUFpQixrQkFBa0IsdUNBQXVDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDJCQUEyQixHQUFHLGNBQWMsb0JBQW9CLHlCQUF5QixpREFBaUQsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsZUFBZSxvQkFBb0IseUJBQXlCLHNDQUFzQyx5QkFBeUIsOEJBQThCLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDJCQUEyQix3QkFBd0Isc0JBQXNCLDJCQUEyQixnQkFBZ0IsU0FBUyxZQUFZLHNDQUFzQyxtQkFBbUIseUJBQXlCLG1CQUFtQix3QkFBd0Isb0JBQW9CLHNCQUFzQixHQUFHLGNBQWMscUJBQXFCLGlCQUFpQixtQkFBbUIsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsbUJBQW1CLEdBQUcsOENBQThDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0JBQWdCLHNDQUFzQywwQkFBMEIsb0JBQW9CLGlCQUFpQix1QkFBdUIsMEJBQTBCLEdBQUcscUJBQXFCLHlCQUF5QiwwQkFBMEIsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQixHQUFHLHNCQUFzQixpQkFBaUIsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIsa0JBQWtCLDZCQUE2QixtQkFBbUIsR0FBRyxpQkFBaUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsR0FBRywrQ0FBK0Msb0JBQW9CLDZCQUE2QixvQkFBb0IscUNBQXFDLEdBQUcsV0FBVyx5QkFBeUIsc0JBQXNCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEdBQUcsWUFBWSx5QkFBeUIsc0JBQXNCLEdBQUcsa0VBQWtFLDZCQUE2QixHQUFHLGlDQUFpQyx1QkFBdUIsNEJBQTRCLGtCQUFrQiw2QkFBNkIsMkJBQTJCLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLGlEQUFpRCxpQkFBaUIsR0FBRywyQ0FBMkMsb0JBQW9CLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyx1Q0FBdUM7QUFDL3FYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFK0Y7QUFDckU7QUFDa0I7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsaUVBQXVCO0FBQy9CLFFBQVEsaUVBQXVCO0FBQy9CLFFBQVEsMERBQWdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQWU7O0FBRTNCLFlBQVksaURBQUk7QUFDaEIsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR2dDOztBQUV6RDtBQUNBO0FBQ0Esa0JBQWtCLEtBQUs7QUFDdkIsMEJBQTBCLHlEQUFhO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkV2QztBQUNOO0FBQzJEOztBQUV6Rjs7QUFFQSxvQkFBb0IsbURBQU07QUFDMUIsNkJBQTZCLHNEQUFTOztBQUV0QyxxQkFBcUIsbURBQU07QUFDM0IsOEJBQThCLHNEQUFTO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsK0RBQXNCOztBQUU5QjtBQUNBLFFBQVEsZ0VBQXVCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHLFdBQVc7QUFDdkgsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDLDRGQUE0RixJQUFJO0FBQ2hHO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQywrRkFBK0YsSUFBSTtBQUNuRztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEMsK0ZBQStGLElBQUk7QUFDbkc7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDLGdHQUFnRyxJQUFJO0FBQ3BHO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQyw2RkFBNkYsSUFBSTtBQUNqRztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JNRztBQUNtQzs7QUFFbEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFXO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSztBQUN2QiwyQkFBMkIseURBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRDBCO0FBQytCOztBQUV6RDs7QUFFQSxtQkFBbUIsaURBQUk7QUFDdkIsc0JBQXNCLGlEQUFJO0FBQzFCLHNCQUFzQixpREFBSTtBQUMxQix1QkFBdUIsaURBQUk7QUFDM0Isb0JBQW9CLGlEQUFJOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixvREFBYTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsdURBQWdCOztBQUV6QztBQUNBO0FBQ0EsNkJBQTZCLHVEQUFnQjtBQUM3QztBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDZCQUE2Qix1REFBZ0I7QUFDN0M7O0FBRUEsMEJBQTBCLGtCQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7O0FBRVo7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUN0SXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQiw2Q0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ3RCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaeEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FtQzs7QUFFbkMsMERBQWtCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2NvbW1vbl91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9mb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2Zvcm1fdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9nYW1lX3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvdXRpbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtaW4td2lkdGg6IDc2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDg4LCA4NiwgODYpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGhlaWdodDogNjAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogNDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5uYW1lIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYig4OCwgODYsIDg2KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5nYW1lYm9hcmQgLmdhbWVfZ3JpZCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICAgIGhlaWdodDogMjUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNoaXBzX2NoYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaGlwX3RpdGxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG5cXG59XFxuXFxuLnNoaXBfc3RhdGUge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5zdGF0ZV9zcXVhcmUge1xcbiAgICB3aWR0aDogMTglO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5nYW1lX2VuZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHotaW5kZXg6IDIwMDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogODBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgZ2FwOiA2MHB4O1xcbiAgICBcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIHN0eWxlIHN0YXJ0IGZvcm1zICovXFxuLmZvcm1fY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lX2Zvcm0ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jZ2FtZV9mb3JtID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi50YWIucGxheWVyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDs7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ucGFnZSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuICAvKiBwbGFjZSBzaGlwIGZvcm0gKi9cXG4uYm9hcmRfY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLyogb3ZlcndyaXRlIHNvbWUgb2YgdGhlIGV4aXN0aW5nIHN0eWxlcyAqL1xcblxcbi5sZWZ0ID4gLnNoaXAge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGVmdCA+IC5zaGlwID4gLnNoaXBfdGl0bGUge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAuc2hpcCA+IC5zaGlwX3N0YXRlIHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxufVxcblxcbi5sZWZ0ID4gLnNoaXAgPiAuc2hpcF9zdGF0ZSA+IC5zdGF0ZV9zcXVhcmUge1xcbiAgICB3aWR0aDogMzAlO1xcbn1cXG5cXG4vKiBoaWRlIGFsbCBzdGVwcyBieSBkZWZhdWx0ICovXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5vdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHJlZDtcXG59XFxuICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0hBQXNIO0lBQ3RI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O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztFQUVFLG9CQUFvQjtBQUN0QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUEsMENBQTBDOztBQUUxQztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LCBodG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1pbi13aWR0aDogNzYwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoODgsIDg2LCA4Nik7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lYm9hcmQgLm5hbWUge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDg4LCA4NiwgODYpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmdhbWVib2FyZCAuZ2FtZV9ncmlkIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxufVxcblxcbi5yb3cge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IC41cHggc29saWQgbGlnaHRncmF5O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IC41cHggc29saWQgbGlnaHRncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2dyZXNzIHtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uc2hpcHNfY2hhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNoaXBfdGl0bGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcblxcbn1cXG5cXG4uc2hpcF9zdGF0ZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLnN0YXRlX3NxdWFyZSB7XFxuICAgIHdpZHRoOiAxOCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3JkZXI6IC41cHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmdhbWVfZW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMjUlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgei1pbmRleDogMjAwO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBnYXA6IDYwcHg7XFxuICAgIFxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogc3R5bGUgc3RhcnQgZm9ybXMgKi9cXG4uZm9ybV9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVfZm9ybSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNnYW1lX2Zvcm0gPiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnRhYi5wbGF5ZXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OztcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5wYWdlIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4gIC8qIHBsYWNlIHNoaXAgZm9ybSAqL1xcbi5ib2FyZF9jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW46IDMwcHggYXV0byAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4vKiBvdmVyd3JpdGUgc29tZSBvZiB0aGUgZXhpc3Rpbmcgc3R5bGVzICovXFxuXFxuLmxlZnQgPiAuc2hpcCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5sZWZ0ID4gLnNoaXAgPiAuc2hpcF90aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubGVmdCA+IC5zaGlwID4gLnNoaXBfc3RhdGUge1xcbiAgICBoZWlnaHQ6IDQwJTtcXG59XFxuXFxuLmxlZnQgPiAuc2hpcCA+IC5zaGlwX3N0YXRlID4gLnN0YXRlX3NxdWFyZSB7XFxuICAgIHdpZHRoOiAzMCU7XFxufVxcblxcbi8qIGhpZGUgYWxsIHN0ZXBzIGJ5IGRlZmF1bHQgKi9cXG4udGFiIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm92ZXIge1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgcmVkO1xcbn1cXG4gIFxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5mdW5jdGlvbiBjcmVhdGVTaGlwRGl2KGksIGRyYWdnYWJsZT1mYWxzZSkge1xuICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgXG4gICAgY29uc3Qgc2hpcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NoaXBfdGl0bGUnKTtcbiAgICBjb25zdCBzaGlwU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwU3RhdGUuY2xhc3NMaXN0LmFkZCgnc2hpcF9zdGF0ZScpO1xuICAgIGlmIChkcmFnZ2FibGUpIHtcbiAgICAgICAgc2hpcFN0YXRlLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIHNoaXBTdGF0ZS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gICAgfVxuICAgIC8vIGZpbGwgaW4gc2hpcCBuYW1lc1xuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBzaGlwVGl0bGUudGV4dENvbnRlbnQgPSAnUEFUUk9MJztcbiAgICAgICAgaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIDIsICdQJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBzaGlwVGl0bGUudGV4dENvbnRlbnQgPSAnREVTVFJPWUVSJztcbiAgICAgICAgaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIDMsICdEJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBzaGlwVGl0bGUudGV4dENvbnRlbnQgPSAnU1VCTUFSSU5FJztcbiAgICAgICAgaW5pdFNoaXBTdGF0ZShzaGlwU3RhdGUsIDMsICdTJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBzaGlwVGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgICAgIGluaXRTaGlwU3RhdGUoc2hpcFN0YXRlLCA0LCAnQicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgc2hpcFRpdGxlLnRleHRDb250ZW50ID0gJ0NBUlJJRVInO1xuICAgICAgICBpbml0U2hpcFN0YXRlKHNoaXBTdGF0ZSwgNSwgJ0MnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc2hpcERpdi5hcHBlbmRDaGlsZChzaGlwVGl0bGUpO1xuICAgIHNoaXBEaXYuYXBwZW5kQ2hpbGQoc2hpcFN0YXRlKTtcbiAgICByZXR1cm4gc2hpcERpdjtcbn1cbiAgXG5mdW5jdGlvbiBpbml0U2hpcFN0YXRlKHNoaXBTdGF0ZSwgbnVtYmVyT2ZIb2xlcywgc3ltYm9sKSB7XG4gICAgZm9yKGxldCBpPTA7IGk8bnVtYmVyT2ZIb2xlczsgaSsrKSB7XG4gICAgICBjb25zdCBzdGF0ZVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3RhdGVTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3RhdGVfc3F1YXJlJyk7XG4gICAgICBzdGF0ZVNxdWFyZS50ZXh0Q29udGVudCA9IHN5bWJvbDtcbiAgICAgIHNoaXBTdGF0ZS5hcHBlbmRDaGlsZChzdGF0ZVNxdWFyZSk7XG4gICAgfVxuICAgIHJldHVybiBzaGlwU3RhdGU7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEdyaWRzKGRpdikge1xuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb2x1bW5EaXYuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG4gICAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjb2x1bW5EaXYpO1xuICAgICAgfVxuICAgICAgZGl2LmFwcGVuZENoaWxkKHJvd0Rpdik7XG4gICAgfVxuICAgIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU2hpcERpdiwgYXBwZW5kR3JpZHN9IiwiaW1wb3J0IHsgY3JlYXRlQm9hcmRGb3JQbGFjZW1lbnQsIGNyZWF0ZURyYWdnYWJsZXMsIGNyZWF0ZVNoaXBzRm9yUGxhY2VtZW50IH0gZnJvbSAnLi9mb3JtX3VpJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBjb25zdHJ1Y3RHYW1lVUkgfSBmcm9tICcuL2dhbWVfdWknO1xuXG5jb25zdCBTdGFydEZvcm0gPSBmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGxvYWRGb3JtKCkge1xuICAgICAgICBjcmVhdGVGb3JtKCk7XG4gICAgICAgIHNob3dUYWIoMCk7XG4gICAgICAgIGFkZEJ1dHRvbkNvbnRyb2xzKCk7XG4gICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgICAgICBjcmVhdGVTaGlwc0ZvclBsYWNlbWVudCgpO1xuICAgICAgICBjcmVhdGVCb2FyZEZvclBsYWNlbWVudCgpO1xuICAgICAgICBjcmVhdGVEcmFnZ2FibGVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1RhYihuKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKSk7IFxuICAgICAgICB0YWJzW25dLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHByZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLnByZScpO1xuICAgICAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UubmV4dCcpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1zdWJtaXRdJyk7XG4gICAgICAgIGlmIChuID09IDApIHtcbiAgICAgICAgICAgIHRhYnNbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHByZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICAgICAgICBzdWJtaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYnNbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHByZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBzdWJtaXQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQnV0dG9uQ29udHJvbHMoKSB7XG4gICAgICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS5uZXh0Jyk7XG4gICAgICAgIGNvbnN0IHByZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLnByZScpO1xuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICAgICAgICAgICAgc2hvd1RhYigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcHJlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hvd1RhYigwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI2dhbWVfZm9ybScpO1xuICAgICAgICBjb25zdCBwbGF5ZXJOYW1lID0gZm9ybS5lbGVtZW50c1snbmFtZSddLnZhbHVlO1xuICAgICAgICBpZighcGxheWVyTmFtZSkge1xuICAgICAgICAgICAgYWxlcnQoJ211c3QgZW50ZXIgcGxheWVyIG5hbWUnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jZ2FtZV9mb3JtJyk7XG4gICAgXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IGZvcm0uZWxlbWVudHNbJ25hbWUnXS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaXJzdFBsYXllcjtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZGJveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RQbGF5ZXIgPSBwbGF5ZXJOYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBsYXllciA9ICdDT01QVVRFUic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlRm9ybSgpO1xuICAgICAgICAgICAgY29uc3RydWN0R2FtZVVJKCk7XG5cbiAgICAgICAgICAgIEdhbWUocGxheWVyTmFtZSwgZmlyc3RQbGF5ZXIpLm5ld0dhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgICAgICBjb25zdCBzdGFydEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9jb250YWluZXInKTtcbiAgICAgICAgc3RhcnRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkRm9ybX07XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0Rm9ybTtcblxuXG4iLCJpbXBvcnQgeyBhcHBlbmRHcmlkcywgY3JlYXRlU2hpcERpdiB9IGZyb20gXCIuL2NvbW1vbl91aVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwc0ZvclBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkX2NvbnRhaW5lciA+IC5sZWZ0Jyk7XG4gICAgZm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xuICAgICAgbGVmdERpdi5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRGl2KGksIHRydWUpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRGb3JQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRfY29udGFpbmVyID4gLnJpZ2h0Jyk7XG4gICAgYXBwZW5kR3JpZHMocmlnaHREaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdCAuc2hpcF9zdGF0ZScpKTtcbiAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGhhbmRsZURyYWdFbmQpO1xuICAgIH0pXG5cbiAgICBjb25zdCB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlnaHQgLmNvbHVtbicpKTtcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgaGFuZGxlRHJhZ0VudGVyKTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGhhbmRsZURyYWdMZWF2ZSk7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcwLjQnO1xuXG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICdQJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZSkge1xuICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBjb25zdCB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmlnaHQgLmNvbHVtbicpKTtcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnT3ZlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VudGVyKGUpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICBjb25zdCBuZXh0U2libGluZyA9IHRoaXMubmV4dFNpYmxpbmc7XG4gICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnb3ZlcicpOyBcbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0xlYXZlKGUpIHtcbiAgICAvLyB3b3JrcyB3aGVuIGdvaW5nIGZyb20gbGVmdCB0byByaWdodFxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcm9wKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wcyB0aGUgYnJvd3NlciBmcm9tIHJlZGlyZWN0aW5nLlxuICAgIGNvbnN0IGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBkYXRhO1xuICAgIHRoaXMubmV4dFNpYmxpbmcuaW5uZXJIVE1MID0gZGF0YTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQm9hcmRGb3JQbGFjZW1lbnQsIGNyZWF0ZVNoaXBzRm9yUGxhY2VtZW50LCBjcmVhdGVEcmFnZ2FibGVzfVxuXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHJlbmRlclBsYXllcjFHYW1lYm9hcmQsIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkLCByZW5kZXJSZXN1bHQgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgR2FtZSA9IGZ1bmN0aW9uKHBsYXllck5hbWUsIGZpcnN0UGxheWVyTmFtZSkge1xuXG4gICAgY29uc3QgcGxheWVyMSA9IFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICBjb25zdCBwbGF5ZXIxR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBjb25zdCBhaVBsYXllciA9IFBsYXllcignQ09NUFVURVInKTtcbiAgICBjb25zdCBhaVBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIFxuICAgIGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gc2V0dXAgZ2FtZWJvYXJkc1xuICAgICAgICBwbGF5ZXIxR2FtZWJvYXJkLnNldHVwR2FtZWJvYXJkKCk7XG4gICAgICAgIHJlbmRlclBsYXllcjFHYW1lYm9hcmQocGxheWVyMSwgcGxheWVyMUdhbWVib2FyZC5nYW1lYm9hcmQpXG5cbiAgICAgICAgYWlQbGF5ZXJHYW1lYm9hcmQuc2V0dXBHYW1lYm9hcmQoKTtcbiAgICAgICAgcmVuZGVyQUlQbGF5ZXJHYW1lYm9hcmQoYWlQbGF5ZXIpO1xuXG4gICAgICAgIGlmIChmaXJzdFBsYXllck5hbWUgPT09ICdDT01QVVRFUicpIHtcbiAgICAgICAgICAgIC8vIGNvbXB1dGVyIGdvZXMgZmlyc3RcbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgICAgICBkb0F0dGFjaygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBodW1hbiBnb2VzIGZpcnN0XG4gICAgICAgICAgICBkb0F0dGFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZDpmaXJzdC1jaGlsZCA+IC5nYW1lX2dyaWQnKTtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRDb29yZGluYXRlID0gYWlQbGF5ZXIuYXR0YWNrKCk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKHBsYXllckJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKSk7XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IEFycmF5LmZyb20ocm93LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2x1bW4nKSk7XG4gICAgICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPT0gYXR0YWNrZWRDb29yZGluYXRlWzBdICYmIGNvbHVtbkluZGV4ID09IGF0dGFja2VkQ29vcmRpbmF0ZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyMUdhbWVib2FyZC5nYW1lYm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgYSBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNoaXBTdGF0ZShwbGF5ZXIxR2FtZWJvYXJkLmdhbWVib2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdLCBwbGF5ZXIxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3dJbmRleCwgY29sdW1uSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRibHVlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0F0dGFjaygpIHtcbiAgICAgICAgY29uc3QgYWlCb2FyZERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6bnRoLWNoaWxkKDIpID4gLmdhbWVfZ3JpZCcpXG4gICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKGFpQm9hcmRET00ucXVlcnlTZWxlY3RvckFsbCgnLnJvdycpKTtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gQXJyYXkuZnJvbShyb3cucXVlcnlTZWxlY3RvckFsbCgnLmNvbHVtbicpKTtcbiAgICAgICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIGNvbHVtbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFja0xpc3RlbmVyLmJpbmQobnVsbCwgcm93SW5kZXgsIGNvbHVtbkluZGV4LCBjb2x1bW4pLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhdHRhY2tMaXN0ZW5lcihyb3dJbmRleCwgY29sdW1uSW5kZXgsIGNvbHVtbikge1xuICAgICAgICBjb25zdCBhdHRhY2tlZE1hcmsgPSBhaVBsYXllckdhbWVib2FyZC5nYW1lYm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgICAgICAgaWYgKGF0dGFja2VkTWFyayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb2x1bW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICBjb2x1bW4udGV4dENvbnRlbnQgPSBhdHRhY2tlZE1hcms7XG4gICAgICAgICAgICB1cGRhdGVTaGlwU3RhdGUoYXR0YWNrZWRNYXJrLCBhaVBsYXllcik7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJvZ3JhbVxuICAgICAgICAgICAgYWlQbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93SW5kZXgsIGNvbHVtbkluZGV4XSk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGdhbWUgZW5kc1xuICAgICAgICAgICAgaWYgKGdhbWVFbmRzKGFpUGxheWVyR2FtZWJvYXJkKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lIGVuZCAtIHlvdSB3b24hJylcbiAgICAgICAgICAgICAgICByZW5kZXJSZXN1bHQocGxheWVyMSk7XG4gICAgICAgICAgICAgICAgLy8gZW5kIGdhbWVcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sdW1uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnXG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlckF0dGFjaygpO1xuICAgICAgICBpZihnYW1lRW5kcyhwbGF5ZXIxR2FtZWJvYXJkKSkge1xuICAgICAgICAgICAgLy8gZW5kIGdhbWVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lIGVuZCAtIGNvbXB1dGVyIHdvbiEnKVxuICAgICAgICAgICAgcmVuZGVyUmVzdWx0KGFpUGxheWVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZUVuZHMoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQuYXJlQWxsU3VuaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNoaXBTdGF0ZShzeW1ib2wsIHBsYXllcikge1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKHN5bWJvbCkge1xuICAgICAgICAgICAgY2FzZSAnUCc6XG4gICAgICAgICAgICAgICAgbGV0IHBhdHJvbFNoaXBTdGF0ZTsgXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRyb2xTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDEpID4gLnNoaXA6Zmlyc3QtY2hpbGQgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHJvbFNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMikgPiAuc2hpcDpmaXJzdC1jaGlsZCA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBwYXRyb2xTaGlwU3RhdGUucXVlcnlTZWxlY3RvcihgLnN0YXRlX3NxdWFyZTpudGgtY2hpbGQoJHtpKzF9KWApO1xuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdpbmRpYW5yZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgbGV0IGRlc3Ryb3llclNoaXBTdGF0ZTsgXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZXJTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDEpID4gLnNoaXA6bnRoLWNoaWxkKDIpID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZXN0cm95ZXJTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDIpID4gLnNoaXA6bnRoLWNoaWxkKDIpID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRlc3Ryb3llclNoaXBTdGF0ZS5xdWVyeVNlbGVjdG9yKGAuc3RhdGVfc3F1YXJlOm50aC1jaGlsZCgke2krMX0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2luZGlhbnJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICBsZXQgc3VibWFyaW5lU2hpcFN0YXRlOyBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1hcmluZVNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMSkgPiAuc2hpcDpudGgtY2hpbGQoMykgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1hcmluZVNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMikgPiAuc2hpcDpudGgtY2hpbGQoMykgPiAuc2hpcF9zdGF0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gc3VibWFyaW5lU2hpcFN0YXRlLnF1ZXJ5U2VsZWN0b3IoYC5zdGF0ZV9zcXVhcmU6bnRoLWNoaWxkKCR7aSsxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnaW5kaWFucmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgICAgIGxldCBiYXR0bGVzaGlwU2hpcFN0YXRlOyBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXBTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDEpID4gLnNoaXA6bnRoLWNoaWxkKDQpID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiYXR0bGVzaGlwU2hpcFN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzX2NoYXJ0Om50aC1jaGlsZCgyKSA+IC5zaGlwOm50aC1jaGlsZCg0KSA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBiYXR0bGVzaGlwU2hpcFN0YXRlLnF1ZXJ5U2VsZWN0b3IoYC5zdGF0ZV9zcXVhcmU6bnRoLWNoaWxkKCR7aSsxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnaW5kaWFucmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIGxldCBjYXJyaWVyU2hpcFN0YXRlOyBcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnJpZXJTaGlwU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHNfY2hhcnQ6bnRoLWNoaWxkKDEpID4gLnNoaXA6bGFzdC1jaGlsZCA+IC5zaGlwX3N0YXRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FycmllclNoaXBTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwc19jaGFydDpudGgtY2hpbGQoMikgPiAuc2hpcDpsYXN0LWNoaWxkID4gLnNoaXBfc3RhdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGNhcnJpZXJTaGlwU3RhdGUucXVlcnlTZWxlY3RvcihgLnN0YXRlX3NxdWFyZTpudGgtY2hpbGQoJHtpKzF9KWApO1xuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdpbmRpYW5yZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtuZXdHYW1lfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVTaGlwRGl2LCBhcHBlbmRHcmlkcyB9IGZyb20gJy4vY29tbW9uX3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEdhbWVVSSgpIHtcbiAgICBjcmVhdGVUaXRsZSgpO1xuICAgIGNyZWF0ZUdhbWVib2FyZHMoKTtcbiAgICBjcmVhdGVQcm9ncmVzc0Rpc3BsYXkoKTtcbiAgfVxuICAgIFxuICBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZHMoKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG4gICAgY29uc3QgZ2FtZWJvYXJkMSA9IGRyYXdHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBnYW1lYm9hcmQyID0gZHJhd0dhbWVib2FyZCgpO1xuICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkMSk7XG4gICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChnYW1lYm9hcmQyKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NEaXNwbGF5KCkge1xuICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzJyk7XG4gIFxuICAgIGNvbnN0IHNoaXBzMSA9IGRpc3BsYXlTaGlwcygpO1xuICAgIGNvbnN0IHNoaXBzMiA9IGRpc3BsYXlTaGlwcygpO1xuICBcbiAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZChzaGlwczEpO1xuICAgIHByb2dyZXNzLmFwcGVuZENoaWxkKHNoaXBzMik7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRyYXdHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuICAgIFxuICAgIHJldHVybiBjcmVhdGVCb2FyZExheW91dChnYW1lYm9hcmREaXYpO1xuICAgIFxuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZExheW91dChkaXYpIHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgY29uc3QgZ2FtZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lR3JpZC5jbGFzc0xpc3QuYWRkKCdnYW1lX2dyaWQnKTtcbiAgICBjb25zdCBncmlkcyA9IGFwcGVuZEdyaWRzKGdhbWVHcmlkKTtcbiAgICBkaXYuYXBwZW5kKHBsYXllck5hbWUsIGdyaWRzKTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnc2hpcHNfY2hhcnQnKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICBzaGlwc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVTaGlwRGl2KGkpKVxuICAgIH1cbiAgICByZXR1cm4gc2hpcHNEaXY7XG4gIH1cbiAgXG4gIFxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgcmFuZG9tQm9vbGVhbiwgcmFuZG9tQ29vcmRpbmF0ZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBwYXRyb2wgPSBTaGlwKCdQJywgMik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgnRCcsIDMpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ1MnLCAzKTtcbiAgICBjb25zdCBiYXR0bGVTaGlwID0gU2hpcCgnQicsIDQpO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwKCdDJywgNSk7XG5cbiAgICAvLyAxMFgxMCBncmlkXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gW107XG4gICAgY29uc3QgaW5pdEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gW107XG5cbiAgICBjb25zdCBzZXR1cEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICAgICAgaW5pdEdhbWVib2FyZCgpO1xuICAgICAgICAvLyBwbGFjZSBhbGwgc2hpcHNcbiAgICAgICAgZ2VuZXJhdGVTaGlwUGxhY2VtZW50KDgsIHBhdHJvbCk7XG4gICAgICAgIGdlbmVyYXRlU2hpcFBsYWNlbWVudCg3LCBkZXN0cm95ZXIpO1xuICAgICAgICBnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoNywgc3VibWFyaW5lKVxuICAgICAgICBnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoNiwgYmF0dGxlU2hpcCk7XG4gICAgICAgIGdlbmVyYXRlU2hpcFBsYWNlbWVudCg1LCBjYXJyaWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVNoaXBQbGFjZW1lbnQgPSAoY29vcmRpbmF0ZVVwcGVyUmFuZ2UsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaXNIb3Jpem9udGFsID0gcmFuZG9tQm9vbGVhbigpO1xuICAgICAgICBnZW5lcmF0ZVBsYWNlbWVudChpc0hvcml6b250YWwsIGNvb3JkaW5hdGVVcHBlclJhbmdlLCBzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc05vdE9jY3VwaWVkSG9yaXpvbnRhbGx5ID0gKGNvb3JkaW5hdGUsIG51bWJlck9mSG9sZXMpID0+IHtcbiAgICAgICAgd2hpbGUgKG51bWJlck9mSG9sZXMgPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW1iZXJPZkhvbGVzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZSlcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmRbY29vcmRpbmF0ZVswXSArIChudW1iZXJPZkhvbGVzIC0gMSldW2Nvb3JkaW5hdGVbMV1dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnVtYmVyT2ZIb2xlcy0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTm90T2NjdXBpZWRWZXJ0aWNhbGx5ID0gKGNvb3JkaW5hdGUsIG51bWJlck9mSG9sZXMpID0+IHtcbiAgICAgICAgd2hpbGUgKG51bWJlck9mSG9sZXMgPiAwKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV0gKyAobnVtYmVyT2ZIb2xlcyAtIDEpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG51bWJlck9mSG9sZXMtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVBsYWNlbWVudCA9IChpc0hvcml6b250YWwsIGNvb3JkaW5hdGVVcHBlclJhbmdlLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bWJlck9mSG9sZXMgPSBzaGlwLm51bWJlck9mSG9sZXM7XG4gICAgICAgIGNvbnN0IG1hcmsgPSBzaGlwLm1hcms7XG5cbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKGNvb3JkaW5hdGVVcHBlclJhbmdlKVxuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIHdoaWxlKCFpc05vdE9jY3VwaWVkSG9yaXpvbnRhbGx5KGNvb3JkaW5hdGUsIG51bWJlck9mSG9sZXMpKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZSA9IHJhbmRvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZVVwcGVyUmFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJPZkhvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRbY29vcmRpbmF0ZVswXSArIGldW2Nvb3JkaW5hdGVbMV1dID0gbWFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlKCFpc05vdE9jY3VwaWVkVmVydGljYWxseShjb29yZGluYXRlLCBudW1iZXJPZkhvbGVzKSkge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKGNvb3JkaW5hdGVVcHBlclJhbmdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJPZkhvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXSArIGldID0gbWFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRWYWx1ZSA9IGdhbWVib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXTtcbiAgICAgICAgLy8gaGl0XG4gICAgICAgIGlmIChnYW1lYm9hcmRWYWx1ZSkge1xuICAgICAgICAgICAgc3dpdGNoKGdhbWVib2FyZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnUCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdHJvbC5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRyb2wuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKHBhdHJvbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llci5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95ZXIuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKGRlc3Ryb3llcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1hcmluZS5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHN1Ym1hcmluZS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goc3VibWFyaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgICAgICAgICAgYmF0dGxlU2hpcC5oaXQoY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGJhdHRsZVNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtTaGlwcy5wdXNoKGJhdHRsZVNoaXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgICAgICBjYXJyaWVyLmhpdChjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2Fycmllci5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vua1NoaXBzLnB1c2goY2Fycmllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3Vua1NoaXBzLmxlbmd0aCA9PSA1O1xuICAgIH1cblxuICAgIHJldHVybiB7c2V0dXBHYW1lYm9hcmQsIHJlY2VpdmVBdHRhY2ssIGFyZUFsbFN1bmssIGdhbWVib2FyZH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB0cmllZENvb3JkaW5hdGUgPSBbXTtcblxuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgY29vcmRpbmF0ZVxuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZWQgPSBnZW5lcmF0ZUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgIHRyaWVkQ29vcmRpbmF0ZS5wdXNoKGdlbmVyYXRlZCk7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb29yZGluYXRlKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICAgICAgd2hpbGUgKHRyaWVkQ29vcmRpbmF0ZS5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZSA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIGF0dGFja307XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgV2hvYUltYWdlIGZyb20gJy4uL2ltYWdlcy93aG9hLmdpZidcbi8qXG4gICAgRE9NIG1hbmlwdWxhdGlvbnNcbiovXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXIxR2FtZWJvYXJkKHBsYXllcjEsIGdhbWVib2FyZCkge1xuXG4gICAgY29uc3QgcGxheWVyTmFtZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6Zmlyc3QtY2hpbGQgPiAubmFtZScpO1xuICAgIHBsYXllck5hbWVET00udGV4dENvbnRlbnQgPSBwbGF5ZXIxLm5hbWU7XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6Zmlyc3QtY2hpbGQgPiAuZ2FtZV9ncmlkJylcbiAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbShwbGF5ZXJCb2FyZERPTS5xdWVyeVNlbGVjdG9yQWxsKCcucm93JykpO1xuICAgIHJvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gQXJyYXkuZnJvbShyb3cucXVlcnlTZWxlY3RvckFsbCgnLmNvbHVtbicpKTtcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb2x1bW4udGV4dENvbnRlbnQgPSBnYW1lYm9hcmRbcm93SW5kZXhdW2NvbHVtbkluZGV4XTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkKGFpUGxheWVyKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQ6bnRoLWNoaWxkKDIpID4gLm5hbWUnKTtcbiAgICBwbGF5ZXJOYW1lRE9NLnRleHRDb250ZW50ID0gYWlQbGF5ZXIubmFtZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVzdWx0KHdpbm5lcikge1xuICAgIGNvbnN0IG92ZXJsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIGNvbnN0IGdhbWVFbmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9lbmQnKTtcbiAgICBvdmVybGF5RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGdhbWVFbmREaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBnYW1lRW5kRGl2LnRleHRDb250ZW50ID0gJ1dJTk5FUiBJUzogJyArIHdpbm5lci5uYW1lO1xuXG4gICAgY29uc3QgZW5kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBlbmRJbWFnZS5zcmMgPSBXaG9hSW1hZ2U7XG4gICAgZW5kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1nJyk7XG4gICAgZ2FtZUVuZERpdi5hcHBlbmRDaGlsZChlbmRJbWFnZSk7XG4gICAgXG4gICAgLy8gcmVzdGFydCBidXR0b25cbiAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzdGFydC5jbGFzc0xpc3QuYWRkKCdyZXN0YXJ0Jyk7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9ICdQTEFZIEFHQUlOJztcblxuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG5cbiAgICBnYW1lRW5kRGl2LmFwcGVuZENoaWxkKHJlc3RhcnQpO1xuICAgIFxufVxuXG5leHBvcnQge3JlbmRlclBsYXllcjFHYW1lYm9hcmQsIHJlbmRlckFJUGxheWVyR2FtZWJvYXJkLCByZW5kZXJSZXN1bHR9OyIsIlxuLy8gY3JlYXRlIHNoaXAgZmFjdG9yeSBmdW5jdGlvblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uKG1hcmssIG51bWJlck9mSG9sZXMpIHtcbiAgICBjb25zdCBoaXRDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgY29uc3QgaGl0ID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaGl0Q29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTt9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKGhpdENvb3JkaW5hdGVzLmxlbmd0aCA9PSBudW1iZXJPZkhvbGVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFyazonICsgbWFyaysgJyBpcyBzdW5rIScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGl0Q29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG51bWJlck9mSG9sZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHttYXJrLCBudW1iZXJPZkhvbGVzLCBoaXQsIGlzU3VuaywgaGl0Q29vcmRpbmF0ZXN9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCIvLyByZXR1cm4gaW50ZWdlciBjb29yZGluYXRlIHdpdGggdXBwZXIgcmFuZ2UgblxuLy8gZWc6IHdoZW4gbj05LCByZXR1cm4gY29vcmRpbmF0ZSByYW5nZSAwLTlcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGUobikge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobisxKSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuKzEpKTtcbiAgICByZXR1cm4gW3gsIHldO1xufVxuXG5mdW5jdGlvbiByYW5kb21Cb29sZWFuKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xufVxuXG5leHBvcnQge3JhbmRvbUNvb3JkaW5hdGUsIHJhbmRvbUJvb2xlYW59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFN0YXJ0Rm9ybSBmcm9tICcuL2FwcC9mb3JtJztcblxuU3RhcnRGb3JtLmxvYWRGb3JtKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9