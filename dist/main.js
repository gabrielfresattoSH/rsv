/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".headerLineTop {\\n  margin-top: -33px; }\\n\\n.content {\\n  top: 3rem; }\\n\\n.juni-new-header-desktop {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0 15px;\\n  height: 45px;\\n  border-bottom: 1px solid #eee;\\n  align-items: center; }\\n  .juni-new-header-desktop #juni-search-bar {\\n    display: flex;\\n    align-items: center;\\n    border: 1px solid #eee;\\n    border-radius: 3px;\\n    flex: 1;\\n    margin: 0 10px;\\n    padding: 0 15px; }\\n    .juni-new-header-desktop #juni-search-bar #CC-headerWidget-Search {\\n      flex: 1;\\n      height: 25px;\\n      display: flex;\\n      align-items: center;\\n      padding: 0;\\n      font-size: 11px;\\n      border: none; }\\n    .juni-new-header-desktop #juni-search-bar > button {\\n      background: none;\\n      border: none;\\n      text-transform: uppercase;\\n      color: #333;\\n      font-weight: 100;\\n      cursor: pointer;\\n      font-size: 9px; }\\n  .juni-new-header-desktop .juni-login-buy {\\n    display: flex;\\n    position: relative; }\\n    .juni-new-header-desktop .juni-login-buy .no-border {\\n      border: 0;\\n      background: none;\\n      font-weight: 100;\\n      font-size: 9px;\\n      text-transform: uppercase;\\n      width: 80px; }\\n    .juni-new-header-desktop .juni-login-buy .bordered.buy {\\n      border: 1px solid #eee;\\n      border-radius: 3px;\\n      height: 30px;\\n      padding: 0 10px;\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-around;\\n      font-size: 9px;\\n      text-transform: uppercase;\\n      background: #fff; }\\n      .juni-new-header-desktop .juni-login-buy .bordered.buy .cart-amount {\\n        font-size: 9px;\\n        background: #bf0000;\\n        border-radius: 50%;\\n        width: 15px;\\n        height: 15px;\\n        color: #fff;\\n        margin-left: 6px;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_class_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/class/Header */ \"./src/js/class/Header.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nnew _js_class_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/class/Header.js":
/*!********************************!*\
  !*** ./src/js/class/Header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/waitForElement */ \"./src/utils/waitForElement.js\");\n/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ \"./src/utils/wait.js\");\n\n\nclass Header {\n  constructor() {\n    this.gridHeader();\n    this.moveSearchBar();\n    this.juniCart(); // Atualiza o carrinho\n\n    this.cartAmount = 0;\n    this.updateBagAmount(this.cartAmount);\n  } // Cria todo o grid do header\n\n\n  async gridHeader() {\n    await Object(_utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => document.querySelector(\".menu_bar\")).then(refElem => {\n      const html = `\n            <header class=\"juni-new-header-desktop\">\n                <img src=\"\" alt=\"Logo mini reserva\" class=\"logo-mini-rsv\" />\n                <div id=\"menu\">Here comes the menu</div>\n                <div id=\"juni-search-bar\">\n                    <button id=\"btn-search-copy\" type=\"button\">\n                        buscar\n                    </button>\n                </div>\n                <div class=\"juni-login-buy\">\n                    <button type=\"button\" class=\"no-border\">\n                        Entrar\n                    </button>\n                    <button class=\"bordered buy\" id=\"juni-cart-btn\">\n                        <span>Comprar</span>\n                        <span id=\"juniBagAmount\" class=\"cart-amount\">\n                            3\n                        </span>\n                    </button>\n                </div>\n            </header>\n        `;\n      refElem.insertAdjacentHTML(\"beforebegin\", html);\n    });\n  } // Move a busca pro novo menu\n\n\n  async moveSearchBar() {\n    Object(_utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => document.getElementById(\"juni-search-bar\")).then(async juniSearchContainer => {\n      await Object(_utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => document.getElementById(\"CC-headerWidget-Search\")).then(defaultSearchInput => {\n        juniSearchContainer.insertAdjacentElement(\"afterbegin\", defaultSearchInput);\n      });\n    });\n  } // Listener no botão da sacola\n\n\n  juniCart() {\n    Object(_utils_waitForElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => document.getElementById(\"juni-cart-btn\")).then(juniCartBtn => {\n      juniCartBtn.addEventListener(\"mouseover\", () => document.querySelector(\".content\").style.display = \"block\");\n    });\n  }\n\n  waitForBagChange() {\n    // Aguarda ter algo no localStorage de carrinho\n    Object(_utils_wait__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => !!localStorage.getItem(\"shoppingCart\")).then(() => {\n      // Aguarda a quantidade de itens no carrinho ser alterada\n      Object(_utils_wait__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => {\n        const {\n          cartAmount\n        } = this;\n        const {\n          numberOfItems\n        } = JSON.parse(localStorage.getItem(\"shoppingCart\"));\n        return cartAmount !== numberOfItems;\n      }).then(() => {\n        console.log(\"Mudou a quantidade do carrinho!!\");\n        const {\n          updateBagAmount\n        } = this;\n        const {\n          numberOfItems\n        } = JSON.parse(localStorage.getItem(\"shoppingCart\"));\n        updateBagAmount(numberOfItems);\n        this.cartAmount = numberOfItems;\n      });\n    });\n  }\n\n  updateBagAmount(number) {\n    Object(_utils_wait__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => !!document.querySelector(\"#juniBagAmount\")).then(() => {\n      const juniBag = document.querySelector(\".juni-login-buy .cart-amount\");\n      juniBag.innerText = number;\n      this.waitForBagChange();\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/class/Header.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ "./src/utils/wait.js":
/*!***************************!*\
  !*** ./src/utils/wait.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (callback => new Promise(resolve => {\n  const interval = setInterval(() => {\n    if (callback()) {\n      resolve();\n      clearInterval(interval);\n    }\n  }, 200);\n}));\n\n//# sourceURL=webpack:///./src/utils/wait.js?");

/***/ }),

/***/ "./src/utils/waitForElement.js":
/*!*************************************!*\
  !*** ./src/utils/waitForElement.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (callback, vanish = false) {\n  return new Promise(resolve => {\n    const interval = setInterval(() => {\n      const elem = callback(); // Pro caso de vc estar aguardando o elemento desaparecer do HTML\n\n      if (vanish) {\n        if (!elem) {\n          resolve();\n          clearInterval(interval);\n        }\n      } else {\n        // Aguardando o elemento aparecerr\n        if (elem) {\n          resolve(elem);\n          clearInterval(interval);\n        }\n      }\n    }, 1000);\n  });\n});\n\n//# sourceURL=webpack:///./src/utils/waitForElement.js?");

/***/ })

/******/ });