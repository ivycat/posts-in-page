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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_list_block_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list-block/index.js */ "./src/post-list-block/index.js");


/***/ }),

/***/ "./src/post-list-block/index.js":
/*!**************************************!*\
  !*** ./src/post-list-block/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_13__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








//import registerBlockType from wp.blocks;

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__["registerBlockType"])('posts-in-page-block/post-list-block', {
  title: 'Posts In Page',
  description: 'Block to display post list on page.',
  icon: 'list-view',
  category: 'widgets',
  attributes: {
    postTypes: {
      type: 'array'
    },
    selectedPostType: {
      type: 'string',
      default: 'post'
    },
    taxonomies: {
      type: 'array'
    },
    termsList: {
      type: 'array'
    },
    selectedTaxonomies: {
      type: 'string',
      default: 'all'
    },
    selectedTerms: {
      type: 'array',
      default: ''
    },
    postsPerPage: {
      type: 'string'
    },
    showContent: {
      type: 'boolean',
      default: true
    },
    showExcerpt: {
      type: 'boolean',
      default: false
    },
    showFeaturedImage: {
      type: 'boolean',
      default: true
    },
    showPagination: {
      type: 'boolean',
      default: true
    },
    nextText: {
      type: 'string',
      default: 'Next'
    },
    previousText: {
      type: 'string',
      default: 'Previous'
    },
    order: {
      type: 'string'
    },
    orderBy: {
      type: 'string',
      default: 'date'
    },
    excludePost: {
      type: 'string'
    },
    includePost: {
      type: 'string'
    },
    offset: {
      type: 'number',
      default: 0
    },
    ignoreStickyPosts: {
      type: 'boolean',
      default: true
    },
    noPostFoundText: {
      type: 'string',
      default: 'No Posts Found...!'
    },
    startDate: {
      type: 'string'
    },
    endDate: {
      type: 'string'
    },
    showPostDates: {
      type: 'boolean',
      default: false
    },
    showBeforeToday: {
      type: 'boolean',
      default: false
    },
    beforeTodayCount: {
      type: 'number',
      default: 1
    },
    beforeTodayPeriod: {
      type: 'string',
      default: 'today'
    }
  },
  edit: /*#__PURE__*/function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(edit, _Component);
    var _super = _createSuper(edit);
    //standard constructor for a component
    function edit() {
      var _this;
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, edit);
      _this = _super.apply(this, arguments);
      _this.state = {
        postTypesState: _this.props.attributes.postTypes
      };
      _this.onChangeContent = _this.onChangeContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeTaxonomy = _this.onChangeTaxonomy.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeTerm = _this.onChangeTerm.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updatePostsPerPage = _this.updatePostsPerPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateEnableContent = _this.updateEnableContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateEnableExcerpt = _this.updateEnableExcerpt.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateEnableFeaturedImage = _this.updateEnableFeaturedImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updatePagination = _this.updatePagination.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onOrderChange = _this.onOrderChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onOrderByChange = _this.onOrderByChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeExcludePost = _this.onChangeExcludePost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeIncludePost = _this.onChangeIncludePost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeOffset = _this.onChangeOffset.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateNextText = _this.updateNextText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updatePreviousText = _this.updatePreviousText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateNoPostFoundText = _this.updateNoPostFoundText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateStartDate = _this.updateStartDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateEndDate = _this.updateEndDate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateShowPostDates = _this.updateShowPostDates.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateShowBeforeToday = _this.updateShowBeforeToday.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeBeforeTodayCount = _this.onChangeBeforeTodayCount.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.onChangeBeforeTodayPeriod = _this.onChangeBeforeTodayPeriod.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.updateIgnoreStickyPosts = _this.updateIgnoreStickyPosts.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      return _this;
    }
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(edit, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        var posttypeOptions = [];
        wp.apiFetch({
          path: '/wp/v2/types'
        }).then(function (posttypes) {
          for (var _i = 0, _Object$entries = Object.entries(posttypes); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              item = _Object$entries$_i[1];
            posttypeOptions.push({
              value: item.slug,
              label: item.name
            });
          }
          //this.props.setAttributes({ postTypes: posttypeOptions });
          _this2.setState({
            postTypesState: posttypeOptions
          });
        });
        this.props.setAttributes({
          postTypes: posttypeOptions
        });
        wp.apiFetch({
          path: '/wp/v2/taxonomies?type=' + this.props.attributes.selectedPostType
        }).then(function (taxonomies) {
          return _this2.props.setAttributes({
            taxonomies: taxonomies
          });
        });
      }
    }, {
      key: "onChangeContent",
      value: function onChangeContent(selectedPostType) {
        var _this3 = this;
        var newTaxonomis = "";
        wp.apiFetch({
          path: '/wp/v2/taxonomies?type=' + selectedPostType
        }).then(function (taxonomies) {
          _this3.props.setAttributes({
            taxonomies: taxonomies
          });
          _this3.props.setAttributes({
            selectedPostType: selectedPostType
          });
          _this3.props.setAttributes({
            selectedTaxonomies: 'all'
          });
          _this3.props.setAttributes({
            selectedTerms: ''
          });
        });
        // console.log(newTaxonomis);
        // this.props.setAttributes({ selectedPostType: selectedPostType });
        // this.props.setAttributes({ selectedTaxonomies: 'all' });
        // this.props.setAttributes({ selectedTerms: '' });
      }
    }, {
      key: "onChangeTaxonomy",
      value: function onChangeTaxonomy(selectedTaxonomies) {
        var _this4 = this;
        this.props.setAttributes({
          selectedTaxonomies: selectedTaxonomies
        });
        wp.apiFetch({
          path: '/wp/v2/all-terms?term=' + selectedTaxonomies
        }).then(function (terms) {
          _this4.props.setAttributes({
            termsList: terms
          });
          _this4.props.setAttributes({
            selectedTerms: ''
          });
        });
        //this.props.setAttributes({ selectedTerms: '' });
      }
    }, {
      key: "onChangeTerm",
      value: function onChangeTerm(selectedTerms) {
        this.props.setAttributes({
          selectedTerms: selectedTerms
        });
      }
    }, {
      key: "updatePostsPerPage",
      value: function updatePostsPerPage(e) {
        this.props.setAttributes({
          postsPerPage: e.target.value
        });
      }
    }, {
      key: "updateEnableContent",
      value: function updateEnableContent() {
        if (this.props.attributes.showContent == false) {
          if (this.props.attributes.showExcerpt == true) {
            this.props.setAttributes({
              showExcerpt: false
            });
          }
        }
        this.props.setAttributes({
          showContent: !this.props.attributes.showContent
        });
      }
    }, {
      key: "updateEnableExcerpt",
      value: function updateEnableExcerpt() {
        if (this.props.attributes.showExcerpt == false) {
          if (this.props.attributes.showContent == true) {
            this.props.setAttributes({
              showContent: false
            });
          }
        }
        this.props.setAttributes({
          showExcerpt: !this.props.attributes.showExcerpt
        });
      }
    }, {
      key: "updateEnableFeaturedImage",
      value: function updateEnableFeaturedImage() {
        this.props.setAttributes({
          showFeaturedImage: !this.props.attributes.showFeaturedImage
        });
      }
    }, {
      key: "updatePagination",
      value: function updatePagination() {
        this.props.setAttributes({
          showPagination: !this.props.attributes.showPagination
        });
      }
    }, {
      key: "updateNextText",
      value: function updateNextText(e) {
        this.props.setAttributes({
          nextText: e.target.value
        });
      }
    }, {
      key: "updatePreviousText",
      value: function updatePreviousText(e) {
        this.props.setAttributes({
          previousText: e.target.value
        });
      }
    }, {
      key: "onOrderChange",
      value: function onOrderChange(e) {
        this.props.setAttributes({
          order: e.target.value
        });
      }
    }, {
      key: "onOrderByChange",
      value: function onOrderByChange(e) {
        this.props.setAttributes({
          orderBy: e.target.value
        });
      }
    }, {
      key: "onChangeExcludePost",
      value: function onChangeExcludePost(e) {
        this.props.setAttributes({
          excludePost: e.target.value
        });
      }
    }, {
      key: "onChangeIncludePost",
      value: function onChangeIncludePost(e) {
        this.props.setAttributes({
          includePost: e.target.value
        });
      }
    }, {
      key: "onChangeOffset",
      value: function onChangeOffset(offset) {
        this.props.setAttributes({
          offset: offset
        });
      }
    }, {
      key: "updateIgnoreStickyPosts",
      value: function updateIgnoreStickyPosts() {
        this.props.setAttributes({
          ignoreStickyPosts: !this.props.attributes.ignoreStickyPosts
        });
      }
    }, {
      key: "updateNoPostFoundText",
      value: function updateNoPostFoundText(e) {
        this.props.setAttributes({
          noPostFoundText: e.target.value
        });
      }
    }, {
      key: "updateStartDate",
      value: function updateStartDate(newStartDate) {
        this.props.setAttributes({
          startDate: newStartDate
        });
      }
    }, {
      key: "updateEndDate",
      value: function updateEndDate(newEndDate) {
        this.props.setAttributes({
          endDate: newEndDate
        });
      }
    }, {
      key: "updateShowPostDates",
      value: function updateShowPostDates() {
        if (this.props.attributes.showPostDates == false) {
          if (this.props.attributes.showBeforeToday == true) {
            this.props.setAttributes({
              showBeforeToday: false
            });
          }
        }
        this.props.setAttributes({
          showPostDates: !this.props.attributes.showPostDates
        });
      }
    }, {
      key: "updateShowBeforeToday",
      value: function updateShowBeforeToday() {
        if (this.props.attributes.showBeforeToday == false) {
          if (this.props.attributes.showPostDates == true) {
            this.props.setAttributes({
              showPostDates: false
            });
          }
        }
        this.props.setAttributes({
          showBeforeToday: !this.props.attributes.showBeforeToday
        });
      }
    }, {
      key: "onChangeBeforeTodayCount",
      value: function onChangeBeforeTodayCount(beforeTodayCount) {
        this.props.setAttributes({
          beforeTodayCount: beforeTodayCount
        });
      }
    }, {
      key: "onChangeBeforeTodayPeriod",
      value: function onChangeBeforeTodayPeriod(e) {
        this.props.setAttributes({
          beforeTodayPeriod: e.target.value
        });
      }
    }, {
      key: "render",
      value: function render() {
        var postTypesState = this.state.postTypesState;
        var attributes = this.props.attributes;
        var postTypes = attributes.postTypes,
          selectedPostType = attributes.selectedPostType,
          taxonomies = attributes.taxonomies,
          selectedTaxonomies = attributes.selectedTaxonomies,
          selectedTerms = attributes.selectedTerms,
          postsPerPage = attributes.postsPerPage,
          showContent = attributes.showContent,
          showExcerpt = attributes.showExcerpt,
          showFeaturedImage = attributes.showFeaturedImage,
          showPagination = attributes.showPagination,
          nextText = attributes.nextText,
          previousText = attributes.previousText,
          order = attributes.order,
          orderBy = attributes.orderBy,
          excludePost = attributes.excludePost,
          includePost = attributes.includePost,
          offset = attributes.offset,
          ignoreStickyPosts = attributes.ignoreStickyPosts,
          termsList = attributes.termsList,
          noPostFoundText = attributes.noPostFoundText,
          showPostDates = attributes.showPostDates,
          startDate = attributes.startDate,
          endDate = attributes.endDate,
          showBeforeToday = attributes.showBeforeToday,
          beforeTodayCount = attributes.beforeTodayCount,
          beforeTodayPeriod = attributes.beforeTodayPeriod;
        if (postTypes) {
          var postTypeArray = Object.values(postTypes);
        }
        if (postTypesState) {
          var postTypeArrayState = Object.values(postTypesState);
        }
        var uniqueTaxonomyValues = [];
        if (taxonomies) {
          var taxonomiesArray = Object.values(taxonomies);
          uniqueTaxonomyValues.push({
            value: 'all',
            label: '-- Select --'
          });
          taxonomiesArray.map(function (item, index) {
            uniqueTaxonomyValues.push({
              value: item.slug,
              label: item.name
            });
          });
        }
        var uniqueTermValues = [];
        if (termsList) {
          var termsListArray = Object.values(termsList);
          //uniqueTermValues.push({value: '', label: '-- Select --'});
          termsListArray.map(function (item, index) {
            uniqueTermValues.push({
              value: item.slug,
              label: item.name
            });
          });
        }
        var labelText = '';
        if (beforeTodayPeriod == 'today') {
          labelText = 'Display posts published on ' + beforeTodayCount + ' ' + ' day(s) before today.';
        } else {
          labelText = 'Display posts published on ' + beforeTodayCount + ' ' + beforeTodayPeriod + '(s) before today.';
        }
        return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InspectorControls"], {
          className: "test-test-test"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
          title: 'Post Type and Taxonomy Settings'
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["SelectControl"], {
          label: "Select PostType",
          value: selectedPostType,
          options: postTypeArrayState,
          onChange: this.onChangeContent
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["SelectControl"], {
          label: "Select Taxonomy",
          value: selectedTaxonomies,
          options: uniqueTaxonomyValues,
          onChange: this.onChangeTaxonomy
        })), 'all' != selectedTaxonomies && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["SelectControl"], {
          className: "pip-select-term",
          label: "Select Term",
          multiple: true,
          value: selectedTerms,
          options: uniqueTermValues,
          onChange: this.onChangeTerm
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
          title: 'General Settings',
          initialOpen: false
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Number of Posts per Page"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
          type: "number",
          onChange: this.updatePostsPerPage,
          value: postsPerPage
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Order"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("select", {
          onChange: this.onOrderChange,
          value: order
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "DESC"
        }, "Descending"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "ASC"
        }, "Ascending"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Order By"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("select", {
          onChange: this.onOrderByChange,
          value: orderBy
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "ID"
        }, "ID"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "title"
        }, "title"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "date"
        }, "date"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Exclude Posts (Use Post IDS)"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
          type: "text",
          onChange: this.onChangeExcludePost,
          value: excludePost
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Include Posts (Use Post IDS)"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
          type: "text",
          onChange: this.onChangeIncludePost,
          value: includePost
        }))), postsPerPage > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["RangeControl"], {
          label: "Offset (Skip number of posts)",
          value: offset,
          onChange: this.onChangeOffset,
          min: 0,
          max: 50,
          step: 1
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Ignore sticky posts"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: ignoreStickyPosts,
          onChange: this.updateIgnoreStickyPosts
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "No Posts Found Text"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
          type: "text",
          onChange: this.updateNoPostFoundText,
          value: noPostFoundText
        })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
          title: 'Content Display Settings',
          initialOpen: false
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Show Content"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: showContent,
          onChange: this.updateEnableContent
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Show Excerpt"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: showExcerpt,
          onChange: this.updateEnableExcerpt
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Display Featured Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: showFeaturedImage,
          onChange: this.updateEnableFeaturedImage
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
          title: 'Pagination Settings',
          initialOpen: false
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Show Pagination"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: showPagination,
          onChange: this.updatePagination
        })), showPagination && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Pagination Next Label"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
          type: "text",
          onChange: this.updateNextText,
          value: nextText
        }))), showPagination && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Pagination Previous Label"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("input", {
          type: "text",
          onChange: this.updatePreviousText,
          value: previousText
        })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelBody"], {
          title: 'Date Settings',
          initialOpen: false
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Show Posts within specific dates")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: showPostDates,
          onChange: this.updateShowPostDates
        })), showPostDates && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Post start date"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["DateTimePicker"], {
          currentDate: startDate,
          onChange: this.updateStartDate,
          is12Hour: true
        }))), showPostDates && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Post end date"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["DateTimePicker"], {
          currentDate: endDate,
          onChange: this.updateEndDate,
          is12Hour: true
        }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", null, "Choose the relative date of included posts.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["FormToggle"], {
          checked: showBeforeToday,
          onChange: this.updateShowBeforeToday
        })), showBeforeToday && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("select", {
          onChange: this.onChangeBeforeTodayPeriod,
          value: beforeTodayPeriod
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "today"
        }, "Today"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "week"
        }, "Week"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "month"
        }, "Month"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("option", {
          value: "year"
        }, "Year"))), showBeforeToday && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["RangeControl"], {
          label: "minus",
          value: beforeTodayCount,
          onChange: this.onChangeBeforeTodayCount,
          min: 1,
          max: 12,
          step: 1
        })), showBeforeToday && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", {
          className: "CustomDateText"
        }, labelText)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_13___default.a, {
          block: "posts-in-page-block/post-list-block",
          attributes: {
            selectedPostType: selectedPostType,
            selectedTaxonomies: selectedTaxonomies,
            selectedTerms: selectedTerms,
            postsPerPage: postsPerPage,
            showContent: showContent,
            showExcerpt: showExcerpt,
            showFeaturedImage: showFeaturedImage,
            showPagination: showPagination,
            nextText: nextText,
            previousText: previousText,
            order: order,
            orderBy: orderBy,
            excludePost: excludePost,
            includePost: includePost,
            offset: offset,
            ignoreStickyPosts: ignoreStickyPosts,
            noPostFoundText: noPostFoundText,
            showPostDates: showPostDates,
            startDate: startDate,
            endDate: endDate,
            showBeforeToday: showBeforeToday,
            beforeTodayCount: beforeTodayCount,
            beforeTodayPeriod: beforeTodayPeriod
          }
        }))];
      }
    }]);
    return edit;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]),
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map