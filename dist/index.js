(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lit-html"), require("hyperhtml"));
	else if(typeof define === 'function' && define.amd)
		define("baseuiwcelement", ["lit-html", "hyperhtml"], factory);
	else if(typeof exports === 'object')
		exports["baseuiwcelement"] = factory(require("lit-html"), require("hyperhtml"));
	else
		root["baseuiwcelement"] = factory(root["lit-html"], root["hyperhtml"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(1);
var has = __webpack_require__(5);
var SRC = __webpack_require__(16)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(17).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(45);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(47);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(17);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(50);
var getKeys = __webpack_require__(21);
var redefine = __webpack_require__(6);
var global = __webpack_require__(2);
var hide = __webpack_require__(1);
var Iterators = __webpack_require__(11);
var wks = __webpack_require__(3);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(29);

// CONCATENATED MODULE: ./src/base-component/helpers/index.ts


/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} camelcase string
 */
function toCamelCase(word) {
  return word.replace(/\b(_|-)([a-z])/g, (s, f, c) => c.toUpperCase());
}
/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} hyphennated string
 */

function toHyphenCase(word) {
  return word.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
/**
 * Converts string to capitalcase
 * @param {string} word data that passed to the function
 * @return {string} capitalized string
 */

function toCapitalCase(word) {
  if (typeof word !== 'string') return '';
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
/**
 * logError helps log composed error when property types mismatch
 */

function logError({
  attrName,
  validate,
  expected,
  actual
}) {
  if (validate) return;
  throw new Error(`PropType mismatch for attribute "${attrName}": Expected value type is "${expected}" but received "${actual}"`);
}
function parsedArrayOrObjectValue(attrName, value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    throw new Error(`Failed serializing attribute(${attrName}) value as JSON: ${value}`);
  }
}
/**
 * serialize attribute value from string
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and returned as O
 */

function serializeAttrValue(proto, attrName, value, type) {
  // when property is defined as string type
  if (type === String) {
    logError({
      attrName,
      validate: value.constructor === type,
      expected: 'string',
      actual: typeof value
    });
    return type(value);
  } // when property is defined as number type


  if (type === Number) {
    const parsedVal = type(value);
    logError({
      attrName,
      validate: !isNaN(parsedVal),
      expected: 'number',
      actual: typeof value
    });
    return parsedVal;
  } // when property is defined as array type


  if (type === Array) {
    const parsedVal = parsedArrayOrObjectValue(attrName, value);
    logError({
      attrName,
      validate: parsedVal instanceof type,
      expected: 'array',
      actual: typeof parsedVal
    });
    return parsedVal;
  } // when property is defined as object type


  if (type === Object) {
    const parsedVal = parsedArrayOrObjectValue(attrName, value);
    logError({
      attrName,
      validate: parsedVal instanceof type,
      expected: 'object',
      actual: typeof parsedVal
    });
    return parsedVal;
  }
}
// CONCATENATED MODULE: ./src/base-component/bootstrap/index.ts


/* eslint-disable class-methods-use-this */


function getPropType(obj, key) {
  return obj[key]; // Inferred type is T[K]
}

/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
class bootstrap_BootstrapElement extends HTMLElement {
  /**
   * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
   * @param {string} name attribute name
   */
  defineProp(name, reflectedAttrToProps) {
    if (!name) return;
    const classProto = Object.getPrototypeOf(this);
    const propName = toCamelCase(name);

    if (this.hasOwnProperty(propName)) {
      const value = this[propName];
      delete this[propName];
      this[propName] = value;
    }

    if (propName in classProto) return;
    const _reflectedAttrToProps = reflectedAttrToProps[name],
          type = _reflectedAttrToProps.type,
          observe = _reflectedAttrToProps.observe;

    const get = () => {
      const value = this.getAttribute(name); // if boolean attribute check if attribute exist or not

      if (true.constructor === type && !value) return this.hasAttribute(name); // when value is undefined/null/empty string log error

      if (!value) return console.error(`Can't read value "${value}" from attribute "${name}"`);
      return serializeAttrValue(classProto, name, value, type);
    };

    const set = value => {
      if (!observe) return;
      const valueAsString = String(value); // when value is null or false remove attribute

      if (value == null || valueAsString === 'false') return this.removeAttribute(name); // set boolean attribute

      if (valueAsString === 'true') return this.setAttribute(name, ''); // when value is undefined/null/empty string log error

      if (!value) return console.error(`Invalid value "${value}" assigned to the attribute "${name}"`);
      const parsedVal = serializeAttrValue(classProto, name, value, type);
      this.setAttribute(name, parsedVal);
    };

    Object.defineProperty(classProto, propName, {
      get,
      set,
      configurable: true
    });
  }
  /**
   * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
   * @param {object} attributes list of attributes added to the component
   * @param {array} observedAttributes list of observed attributes
   */


  createAttributesToProperties(reflectedAttrToProps = {}) {
    Object.keys(reflectedAttrToProps).forEach(attrName => this.defineProp(attrName, reflectedAttrToProps));
  }
  /**
   * has attribute
   * @param {string} attribute name
   * @param {object} target DOM element
   */


  hasAttr(attr, target = this) {
    return target.hasAttribute(attr);
  }
  /**
   * set attribute value
   * @param {string} attribute name
   * @param {object} target DOM element
   */


  getAttr(attr, target = this) {
    return target.getAttribute(attr);
  }
  /**
   * set attribute value
   * @param {string} attribute name
   * @param {string} new/changed value for the attribute
   * @param {object} target DOM element
   */


  setAttr(attr, val, target = this) {
    return target.setAttribute(attr, val);
  }
  /**
   * remove attribute
   * @param {string} attribute name
   * @param {object} target DOM element
   */


  removeAttr(attr, target = this) {
    return target.removeAttribute(attr);
  }
  /**
   * helper function to add class name using classList
   * @param {string} className string of class name
   * @param {object} target DOM element
   * @return {object} element DOM element
   */


  addClass(className, target = this) {
    target.classList.add(className);
    return target;
  }
  /**
   * helper function to remove class name using classList
   * @param {string} className string of class name
   * @param {object} target DOM element
   * @return {object} element DOM element
   */


  removeClass(className, target = this) {
    target.classList.remove(className);
    return target;
  }
  /**
   * helper function to check for has class name using classList
   * @param {string} className string of class name
   * @param {object} target DOM element
   * @return {boolean} contains true/false
   */


  hasClass(className, target = this) {
    return target.classList.contains(className);
  }
  /**
   * helper function to toggle class name using classList
   * @param {string} className string of class name
   * @param {object} target DOM element
   * @param {boolean} force boolean to use force optionally
   * @return {object} element DOM element
   */


  toggleClass(className, target = this, force) {
    return target.classList.toggle(className, force);
  }
  /**
   * helper to find child nodes rendered inside
   * @param {string} selector that is used to search the DOM node
   * @param {object} target Element in which search should be performed
   * @return {object} Element
   */


  find(selector, target = this) {
    return target.querySelector(selector);
  }
  /**
   * helper to find all child nodes rendered inside
   * @param {string} selector that is used to search the DOM node
   * @param {object} target Element in which search should be performed
   * @return {array} Elements that are matched
   */


  findAll(selector, target = this) {
    return target.querySelectorAll(selector);
  }
  /**
   * simplyfied event handler function to add events
   * @param {string} eventName event type ex: click, blur, etc.
   * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
   * @param {object} target HTML element that needs event to be added
   */


  on(eventName, callback, target = this) {
    target.addEventListener(eventName, callback, false);
  }
  /**
   * simplyfied event handler function to remove events
   * @param {string} eventName event type ex: click, blur, etc.
   * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
   * @param {object} target HTML element that needs event to be added
   */


  off(eventName, callback, target = this) {
    target.removeEventListener(eventName, callback, false);
  }
  /**
   * trigger native/custom event and pass data between components
   * @param {string} eventName custom event name
   * @param {object} target element reference on which event needs to be triggerd
   * @param {object} eventData custom event data to share
   */


  trigger(eventName, target = this, eventData) {
    const triggerEvent = !eventData ? new Event(eventName) : new CustomEvent(eventName, {
      detail: eventData || {}
    });
    target.dispatchEvent(triggerEvent);
  }

}

/* harmony default export */ var bootstrap = (bootstrap_BootstrapElement);
// CONCATENATED MODULE: ./src/base-component/custom-element/index.ts


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * custom element base class
 * below methods available to make this base element flexible
 *  - define('element-name') this will help register customElement only if it is not already deinfined
 *  - willConnect() this will be triggered before connectedCallback()
 *  - onConnect() this will be triggered on connectedCallback()
 *  - didConnect() this will be triggered only once after didRender()
 *  - willRender() will be triggered before render()
 *  - didRender() will be triggered after render()
 *  - setState() this helps shallow merge changes and allow re-render
 */

class custom_element_BaseUICustomElement extends bootstrap {
  static get is() {
    return this.element;
  }

  static get observedAttributes() {
    // console.log('observedAttributes');
    const observeAttrs = this.attributesToProps;
    return Object.keys(observeAttrs).filter(item => observeAttrs[item].observe);
  }

  static define(elementName, options) {
    const _window = window,
          customElements = _window.customElements;
    const isElementExist = customElements.get(elementName);
    if (isElementExist) return;
    this.element = elementName;
    customElements.define(elementName, this, options);
  }

  constructor() {
    super();

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "isFirstRender", void 0);

    _defineProperty(this, "isCreated", void 0);

    this.isFirstRender = true;
    this.isCreated = false;
    this.create = this.create.bind(this);

    if (this.constructor.withShadowDom) {
      this.attachShadow({
        mode: 'open'
      });
    }

    this.willConnect();
  }

  connectedCallback() {
    // delay execution of connectedCallback to make sure dynamic data added to the attributes are available to consume
    window.requestAnimationFrame(this.create); // this.create();
    // return Promise.resolve().then(() => this.create());
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    /**
     * to optimize and avoid unnecessary re-rendering when attribte values changed
     * this condition checks for below three things
     * {isCreated} check if element connected, if no, avoid re-render
     * {oldVal === newVal} check if current and new value for this attribute are same, if yes, then avoid re-render
     */
    if (!this.isCreated || oldVal === newVal) return;
    const propName = toCamelCase(attrName);
    /**
     * check if attribute changed due to removeAttribute or change of value
     * if removed, delete property set on element instance
     */

    if (newVal === null) {
      delete this[propName];
    }

    this.beforeRender();
  }

  handleEvent(e) {
    const eventType = toCapitalCase(e.type); // time being Capitalize event type as method name

    const hasInstanceMethod = `on${eventType}`;
    if (!this[hasInstanceMethod] || typeof this[hasInstanceMethod] !== 'function') return;
    this[hasInstanceMethod](e);
  }
  /* tslint:disable:no-empty */


  willConnect() {}

  onConnect() {}

  willRender() {}

  didRender() {}

  didConnect() {}

  render(properties) {}
  /* tslint:enable:no-empty */


  setState(state, render = true) {
    const currentStateObj = this.state;
    const nextState = typeof state === 'function' ? state.call(this, currentStateObj) : state;
    this.state = _objectSpread({}, this.state, nextState);
    if (render) this.beforeRender();
  }

  create() {
    const reflectedAttrToProps = this.constructor.attributesToProps; // poxy attributes & observed attributes as properties

    this.createAttributesToProperties(reflectedAttrToProps);
    this.isCreated = true;
    this.onConnect();
    this.beforeRender();
    this.setAttr('enhanced', '');
  }

  beforeRender() {
    this.willRender();
    this.setAttr('is-rendering', '');
    this.render(this);
    this.afterRender();
  }

  afterRender() {
    if (this.isFirstRender) {
      this.isFirstRender = false;
      this.didConnect();
    }

    this.removeAttr('is-rendering');
    this.didRender();
  }

}

_defineProperty(custom_element_BaseUICustomElement, "withShadowDom", false);

_defineProperty(custom_element_BaseUICustomElement, "element", void 0);

_defineProperty(custom_element_BaseUICustomElement, "attributesToProps", void 0);

/* harmony default export */ var custom_element = (custom_element_BaseUICustomElement);
// EXTERNAL MODULE: external "hyperhtml"
var external_hyperhtml_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/with-hyperHTML/index.ts


/**
 *
 * @param {array} template literal that needs to be wired
 */

const html = (...args) => Object(external_hyperhtml_["wire"])()(...args);
/**
 *
 * To render and update nodes multiple times, bind object as context
 * ex: `items.map(item => htmlWithContext(item)`<li>${item.val}</li>`);`
 * here each item is bound as context to avoid rerendering same template
 */

const htmlWithContext = external_hyperhtml_["wire"];
/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {HTMLElement} renderRoot defines where to render
 */

const renderFn = (template, renderRoot) => Object(external_hyperhtml_["bind"])(renderRoot)(template);
/**
 * DOM rendering with HyperHTML which extendes from base custom element
 */

class with_hyperHTML_WithHyperHTML extends custom_element {
  get domRender() {
    return (template, ...values) => Object(external_hyperhtml_["bind"])(this.shadowRoot || this)(template, ...values);
  }

  get html() {
    return html;
  }

  get htmlWithContext() {
    return htmlWithContext;
  }

}

/* harmony default export */ var with_hyperHTML = (with_hyperHTML_WithHyperHTML);
// EXTERNAL MODULE: external "lit-html"
var external_lit_html_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/with-litHTML/index.ts


/**
 * html(template)
 * *** @param {object} template literal which needs to be wired
 *
 * render((template, renderRoot)
 * *** @param {object} template literal that needs to be rendered
 * *** @param {*} renderRoot defines where to render
 *
 * svg(template)
 * *** @param {object} template literal which needs to be wired
 */

 // this extra function call is to keep API consistent with hyperHTML wire

const with_litHTML_htmlWithContext = () => (...args) => Object(external_lit_html_["html"])(...args);
/**
 * DOM rendering with litHtml which extendes from base custom element
 */

class with_litHTML_WithLitHTML extends custom_element {
  get domRender() {
    return (template, ...values) => Object(external_lit_html_["render"])(Object(external_lit_html_["html"])(template, ...values), this.shadowRoot || this);
  }

  get html() {
    return external_lit_html_["html"];
  }

  get svg() {
    return external_lit_html_["svg"];
  }

  get htmlWithContext() {
    return with_litHTML_htmlWithContext;
  }

}

/* harmony default export */ var with_litHTML = (with_litHTML_WithLitHTML);
// CONCATENATED MODULE: ./src/throw-error/index.ts
function throwError(reason) {
  const newErr = new Error(reason);
  return error => {
    newErr.originalError = error;
    throw newErr;
  };
}

/* harmony default export */ var throw_error = (throwError);
// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BaseUICustomElement", function() { return custom_element; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "withHyperHTML", function() { return with_hyperHTML; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "htmlHyper", function() { return html; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "withLitHTML", function() { return with_litHTML; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "htmlLit", function() { return external_lit_html_["html"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "throwError", function() { return throw_error; });





/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(1);
var redefine = __webpack_require__(6);
var fails = __webpack_require__(12);
var defined = __webpack_require__(9);
var wks = __webpack_require__(3);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(28)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(9);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(30);
var IE_PROTO = __webpack_require__(8)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(33);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(35)(false);
var IE_PROTO = __webpack_require__(8)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(37);
var enumBugKeys = __webpack_require__(19);
var IE_PROTO = __webpack_require__(8)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(23)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(32).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(18);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(1)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(40);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(17);
var hide = __webpack_require__(1);
var redefine = __webpack_require__(6);
var ctx = __webpack_require__(41);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(42);
var redefine = __webpack_require__(6);
var hide = __webpack_require__(1);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(39);
var setToStringTag = __webpack_require__(18);
var getPrototypeOf = __webpack_require__(31);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(44);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(3)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(1)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(49);
var step = __webpack_require__(46);
var Iterators = __webpack_require__(11);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(43)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map