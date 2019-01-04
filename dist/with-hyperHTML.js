(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("with-hyperHTML", [], factory);
	else if(typeof exports === 'object')
		exports["with-hyperHTML"] = factory();
	else
		root["with-hyperHTML"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(0);
var has = __webpack_require__(3);
var SRC = __webpack_require__(14)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(15).inspectSource = function (it) {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(45);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(27);

// CONCATENATED MODULE: ./src/base-component/helpers/index.ts


/**
 * set context to allow CE polyfill work as expected
 */
// export class HTMLCustomElement extends HTMLElement {
//     constructor(_: any) { return (_ = super(_)).init(), _; } // eslint-disable-line
//     init() { } // eslint-disable-line
// }

/**
 * serialize attribute value from string to number/object/boolean/null or string
 * this also checks if the given attribute is a boolean attribute(named as `has-*`) without value, then returns as boolean
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and returned as O
 */
function serializeAttrValue(attrName, value) {
  const isObjOrArray = /^[{|[]/g.test(value);
  const hasOrIsBooleanAttr = /^has-|^is-/g.test(attrName);
  let updatedValue; // parse attributue value

  try {
    updatedValue = JSON.parse(value);
  } catch (e) {
    updatedValue = value;

    if (isObjOrArray) {
      // this avoid unexpected rendering issues with invalid string passed in
      updatedValue = null;
      console.error(`Warning: Failed serializing attribute(${attrName}) value as JSON: ${value}`);
    }
  } // check for has-* or is-* attributes


  if (hasOrIsBooleanAttr) {
    updatedValue = hasOrIsBooleanAttr;
  }

  return updatedValue;
}
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
// CONCATENATED MODULE: ./src/base-component/bootstrap/index.ts


/* eslint-disable class-methods-use-this */

/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */

class bootstrap_BootstrapElement extends HTMLElement {
  /**
   * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
   * @param {string} name attribute name
   */
  defineProp(name) {
    if (!name) return; // const classInstance = this;

    const classProto = Object.getPrototypeOf(this);
    const propName = toCamelCase(name);
    if (propName in classProto) return;
    Object.defineProperty(classProto, propName, {
      configurable: true,

      get() {
        return serializeAttrValue(name, this.getAttribute(name));
      },

      set(value) {
        const checkedValue = typeof value !== 'string' ? JSON.stringify(value) : value;
        this.setAttribute(name, checkedValue);
      }

    });
  }
  /**
   * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
   * @param {object} attributes list of attributes added to the component
   * @param {array} observedAttributes list of observed attributes
   */


  createAttributesToProperties(attributes = {}, observedAttributes = []) {
    // attributes to properties
    Object.keys(attributes).forEach(attr => {
      const attrName = attributes[attr].name;
      this.defineProp(attrName);
    });
    if (observedAttributes.length === 0) return; // observedAttributes to properties

    observedAttributes.forEach(this.defineProp.bind(this));
  }
  /**
   * has attribute
   * @param {string} attribute name
   */


  hasAttr(attr) {
    return this.hasAttribute(attr);
  }
  /**
   * set attribute value
   * @param {string} attribute name
   */


  getAttr(attr) {
    return this.getAttribute(attr);
  }
  /**
   * set attribute value
   * @param {string} attribute name
   * @param {string} new/changed value for the attribute
   */


  setAttr(attr, val) {
    return this.setAttribute(attr, val);
  }
  /**
   * remove attribute
   * @param {string} attribute name
   */


  removeAttr(attr) {
    return this.removeAttribute(attr);
  }
  /**
   * helper function to add class name using classList
   * @param {object} element DOM element
   * @param {string} className string of class name
   * @return {object} element DOM element
   */


  addClass(element, className) {
    element.classList.add(className);
    return element;
  }
  /**
   * helper function to remove class name using classList
   * @param {object} element DOM element
   * @param {string} className string of class name
   * @return {object} element DOM element
   */


  removeClass(element, className) {
    element.classList.remove(className);
    return element;
  }
  /**
   * helper function to check for has class name using classList
   * @param {object} element DOM element
   * @param {string} className string of class name
   * @return {boolean} contains true/false
   */


  hasClass(element, className) {
    return element.classList.contains(className);
  }
  /**
   * helper function to toggle class name using classList
   * @param {object} element DOM element
   * @param {string} className string of class name
   * @param {boolean} force boolean to use force optionally
   * @return {object} element DOM element
   */


  toggleClass(element, className, force) {
    return element.classList.toggle(className, force);
  }
  /**
   * helper to find child nodes rendered inside
   * @param {string} selector that is used to search the DOM node
   * @param {object} context Element in which search should be performed
   * @return {object} Element
   */


  find(selector, context = this) {
    return context.querySelector(selector);
  }
  /**
   * helper to find all child nodes rendered inside
   * @param {string} selector that is used to search the DOM node
   * @param {object} context Element in which search should be performed
   * @return {array} Elements that are matched
   */


  findAll(selector, context = this) {
    return context.querySelectorAll(selector);
  }
  /**
   * simplyfied event handler function to add events
   * @param {string} eventName event type ex: click, blur, etc.
   * @param {object} target HTML element that needs event to be added
   * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
   */


  on(eventName, target, callback) {
    target.addEventListener(eventName, callback, false);
  }
  /**
   * simplyfied event handler function to remove events
   * @param {string} eventName event type ex: click, blur, etc.
   * @param {object} target HTML element that needs event to be added
   * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
   */


  off(eventName, target, callback) {
    target.removeEventListener(eventName, callback, false);
  }
  /**
   * trigger native/custom event and pass data between components
   * @param {string} eventName custom event name
   * @param {object} target element reference on which event needs to be triggerd
   * @param {object} eventData custom event data to share
   */


  trigger(eventName, target, eventData) {
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
    const observeAttrs = this.attrToProp;
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
    const CLASS = this.constructor;
    const props = CLASS.attrToProp; // console.log('cons', props);

    if (CLASS.withShadowDom) {
      this.attachShadow({
        mode: 'open'
      });
    }

    this.willConnect();
  }

  connectedCallback() {
    // delay execution of connectedCallback to make sure dynamic data added to the attributes are available to consume
    window.requestAnimationFrame(this.create);
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
     * else, update property with the new value
     */

    if (newVal === null) {
      delete this[propName];
    } else {
      this[propName] = newVal;
    }

    this.beforeRender();
  }
  /* tslint:disable:no-empty */


  willConnect() {}

  onConnect() {}

  willRender() {}

  didRender() {}

  didConnect() {}
  /* tslint:enable:no-empty */


  handleEvent(e) {
    const hasInstanceMethod = `on${e.type}`;
    if (!this[hasInstanceMethod] || typeof this[hasInstanceMethod] !== 'function') return;
    this[hasInstanceMethod](e);
  }
  /* tslint:disable:no-empty */


  render() {}
  /* tslint:enable:no-empty */


  setState(state, render = true) {
    const currentStateObj = this.state;
    const nextState = typeof state === 'function' ? state.call(this, currentStateObj) : state;
    this.state = _objectSpread({}, this.state, nextState);
    if (render) this.beforeRender();
  }

  create() {
    const attributes = this.attributes;
    const CLASS = this.constructor; // poxy attributes & observed attributes as properties

    this.createAttributesToProperties(attributes, CLASS.observedAttributes);
    this.isCreated = true;
    this.onConnect();
    this.beforeRender();
    this.setAttr('enhanced', '');
  }

  beforeRender() {
    this.willRender();
    this.setAttr('is-rendering', '');
    this.render();
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

_defineProperty(custom_element_BaseUICustomElement, "attrToProp", void 0);

/* harmony default export */ var custom_element = __webpack_exports__["default"] = (custom_element_BaseUICustomElement);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);
var enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(15);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(23) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(48);
var getKeys = __webpack_require__(20);
var redefine = __webpack_require__(4);
var global = __webpack_require__(1);
var hide = __webpack_require__(0);
var Iterators = __webpack_require__(9);
var wks = __webpack_require__(2);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(0);
var redefine = __webpack_require__(4);
var fails = __webpack_require__(10);
var defined = __webpack_require__(7);
var wks = __webpack_require__(2);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(26)('replace', 2, function (defined, REPLACE, $replace) {
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(6)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(31);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(33)(false);
var IE_PROTO = __webpack_require__(6)('IE_PROTO');

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(35);
var enumBugKeys = __webpack_require__(18);
var IE_PROTO = __webpack_require__(6)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(22)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(30).appendChild(iframe);
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(36);
var descriptor = __webpack_require__(21);
var setToStringTag = __webpack_require__(17);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(0)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(15);
var hide = __webpack_require__(0);
var redefine = __webpack_require__(4);
var ctx = __webpack_require__(39);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(40);
var redefine = __webpack_require__(4);
var hide = __webpack_require__(0);
var Iterators = __webpack_require__(9);
var $iterCreate = __webpack_require__(37);
var setToStringTag = __webpack_require__(17);
var getPrototypeOf = __webpack_require__(29);
var ITERATOR = __webpack_require__(2)('iterator');
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
/* 42 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(42);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(2)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(0)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(47);
var step = __webpack_require__(44);
var Iterators = __webpack_require__(9);
var toIObject = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
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


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/hyperhtml/esm.js
/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(){var e=function(e,n){for(var r=new w(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===s&&t(a,r)}},t=function r(e,t){Le.has(e)&&e.dispatchEvent(t);for(var n=e.children||te(e),i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,p),e(i.addedNodes,h)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],p)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],h)},!1)}}function o(e){var t=Ie.get(this);return t&&t.template===ie(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=ie(e);var t=We.get(e)||c.call(this,e),n=ne(this.ownerDocument,t.fragment),r=Ve.create(n,t.paths);Ie.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function c(e){var t=[],n=e.join(b).replace(qe,Je),r=Y(this,n);Ve.find(r,t,e.slice());var i={fragment:r,paths:t};return We.set(e,i),i}function f(e){return arguments.length<2?null==e?Ue("html"):"string"==typeof e?f.wire(null,e):"raw"in e?Ue("html")(e):"nodeType"in e?f.bind(e):Xe(e,"html"):("raw"in e?Ue("html"):f.wire).apply(null,arguments)}var l=document.defaultView,s=1,d=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,v="http://www.w3.org/2000/svg",h="connected",p="dis"+h,g=/^style|textarea$/i,m="_hyper: "+(Math.random()*new Date|0)+";",b="\x3c!--"+m+"--\x3e",w=l.Event;try{new w("Event")}catch(nt){w=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var y=l.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},N=0,x=l.WeakMap||function(){var e=m+N++;return{get:function(t){return t[e]},set:function(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},E=l.WeakSet||function(){var e=new x;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},C=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),k=m.trim||function(){return this.replace(/^\s+|\s+$/g,"")},A=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||j(this,n,t.call(this,e))},set:function(e){j(this,n,e)}}},j=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},O={},S={},T=[],L=S.hasOwnProperty,M=0,$={attributes:O,define:function(e,t){e.indexOf("-")<0?(e in S||(M=T.push(e)),S[e]=t):O[e]=t},invoke:function(e,t){for(var n=0;n<M;n++){var r=T[n];if(L.call(e,r))return S[r](e[r],t)}}},D=function(e,t){return P(e).createElement(t)},P=function(e){return e.ownerDocument||e},R=function(e){return P(e).createDocumentFragment()},_=function(e,t){return P(e).createTextNode(t)},H=" \\f\\n\\r\\t",z="[ "+H+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",F="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",B="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",Z=new RegExp(F+z+B+"+)([ "+H+"]*/?>)","g"),V=new RegExp(F+z+B+"*)([ "+H+"]*/>)","g"),G=R(document),I="append"in G,W="content"in D(document,"template");G.appendChild(_(G,"g")),G.appendChild(_(G,""));var q=1===G.cloneNode(!0).childNodes.length,J="importNode"in document,K=I?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},Q=new RegExp("("+z+"=)(['\"]?)"+b+"\\2","gi"),U=function(e,t,n,r){return"<"+t+n.replace(Q,X)+r},X=function(e,t,n){return t+(n||'"')+m+(n||'"')},Y=function(e,t){return("ownerSVGElement"in e?ue:ae)(e,t.replace(Z,U))},ee=q?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(ee(n[i]));return t}:function(e){return e.cloneNode(!0)},te=function(e){for(var t=[],n=e.childNodes,r=n.length,i=0;i<r;i++)n[i].nodeType===s&&t.push(n[i]);return t},ne=J?function(e,t){return e.importNode(t,!0)}:function(e,t){return ee(t)},re=[].slice,ie=function(e){return oe(e)},oe=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((l.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};oe=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)}}else oe=function(e){return e};return oe(e)},ae=W?function(e,t){var n=D(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=D(e,"template"),r=R(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",K(r,re.call(n.querySelectorAll(i)))}else n.innerHTML=t,K(r,re.call(n.childNodes));return r},ue=W?function(e,t){var n=R(e),r=P(e).createElementNS(v,"svg");return r.innerHTML=t,K(n,re.call(r.childNodes)),n}:function(e,t){var n=R(e),r=D(e,"div");return r.innerHTML='<svg xmlns="'+v+'">'+t+"</svg>",K(n,re.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=R(this.first);return K(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=P(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ce=function(e){var t=[],n=void 0;switch(e.nodeType){case s:case 11:n=e;break;case 8:n=e.parentNode,fe(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)fe(t,n,e);return t},fe=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},le={create:function(e,t,n){return{type:e,name:n,node:t,path:ce(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},se=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,de=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ve(r,n)}return ve(e.style,n)},ve=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],f="number"!=typeof c||se.test(u)?c:c+"px";/^--/.test(u)?a.setProperty(u,f):a[u]=f}n="object",t?e.value=ge(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},he=/([^A-Z])([A-Z]+)/g,pe=function(e,t,n){return t+"-"+n.toLowerCase()},ge=function(e){var t=[];for(var n in e)t.push(n.replace(he,pe),":",e[n],";");return t.join("")},me=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},be=function(e,t){return e==t},we=function(e){return e},ye=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return-1;for(;n-t>=u;){for(var c=t,f=i;c<n&&f<o&&a(e[c],r[f]);)c++,f++;if(f===o)return t;t=c+1}return-1},Ne=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},xe=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},Ee=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},Ce="undefined"==typeof Map?function(){var e=[],t=[];return{has:function(t){return-1<e.indexOf(t)},get:function(n){return t[e.indexOf(n)]},set:function(n){var r=e.indexOf(n);t[r<0?e.push(n)-1:r]=n}}}:Map,ke=function(e,t,n,r,i,o,a,u){var c=0,f=r<u?r:u,l=Array(f++),s=Array(f);s[0]=-1;for(var d=1;d<f;d++)s[d]=a;for(var v=new Ce,h=o;h<a;h++)v.set(i[h],h);for(var p=t;p<n;p++){var g=v.get(e[p]);null!=g&&-1<(c=Oe(s,f,g))&&(s[c]=g,l[c]={newi:p,oldi:g,prev:l[c-1]})}for(c=--f,--a;s[c]>a;)--c;f=u+r-c;var m=Array(f),b=l[c];for(--n;b;){for(var w=b,y=w.newi,N=w.oldi;n>y;)m[--f]=1,--n;for(;a>N;)m[--f]=-1,--a;m[--f]=0,--n,--a,b=b.prev}for(;n>=t;)m[--f]=1,--n;for(;a>=o;)m[--f]=-1,--a;return m},Ae=function(e,t,n,r,i,o,a){var u=n+o,c=[],f=void 0,l=void 0,s=void 0,d=void 0,v=void 0,h=void 0,p=void 0;e:for(f=0;f<=u;f++){if(f>50)return null;for(p=f-1,v=f?c[f-1]:[0,0],h=c[f]=[],l=-f;l<=f;l+=2){for(d=l===-f||l!==f&&v[p+l-1]<v[p+l+1]?v[p+l+1]:v[p+l-1]+1,s=d-l;d<o&&s<n&&a(r[i+d],e[t+s]);)d++,s++;if(d===o&&s===n)break e;h[f+l]=d}}var g=Array(f/2+u/2),m=g.length-1;for(f=c.length-1;f>=0;f--){for(;d>0&&s>0&&a(r[i+d-1],e[t+s-1]);)g[m--]=0,d--,s--;if(!f)break;p=f-1,v=f?c[f-1]:[0,0],l=d-s,l===-f||l!==f&&v[p+l-1]<v[p+l+1]?(s--,g[m--]=1):(d--,g[m--]=-1)}return g},je=function(e,t,n,r,i,o,a,u,c){for(var f=new Ce,l=e.length,s=a,d=0;d<l;)switch(e[d++]){case 0:i++,s++;break;case 1:f.set(r[i],1),me(t,n,r,i++,i,s<u?t(o[s],1):c);break;case-1:s++}for(d=0;d<l;)switch(e[d++]){case 0:a++;break;case-1:f.has(o[a])?a++:Ee(t,n,o,a++,a)}},Oe=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},Se=function(e,t,n,r,i,o,a,u,c,f,l,s,d){je(Ae(n,r,o,a,u,f,s)||ke(n,r,i,o,a,u,c,f),e,t,n,r,a,u,l,d)},Te=function(e,t,n,r){r||(r={});for(var i=r.compare||be,o=r.node||we,a=null==r.before?null:o(r.before,0),u=t.length,c=u,f=0,l=n.length,s=0;f<c&&s<l&&i(t[f],n[s]);)f++,s++;for(;f<c&&s<l&&i(t[c-1],n[l-1]);)c--,l--;var d=f===c,v=s===l;if(d&&v)return n;if(d&&s<l)return me(o,e,n,s,l,xe(o,t,f,u,a)),n;if(v&&f<c)return Ee(o,e,t,f,c),n;var h=c-f,p=l-s,g=-1;if(h<p){if(-1<(g=ye(n,s,l,t,f,c,i)))return me(o,e,n,s,g,o(t[f],0)),me(o,e,n,g+h,l,xe(o,t,c,u,a)),n}else if(p<h&&-1<(g=ye(t,f,c,n,s,l,i)))return Ee(o,e,t,f,g),Ee(o,e,t,g+p,c),n;return h<2||p<2?(me(o,e,n,s,l,o(t[f],0)),Ee(o,e,t,f,c),n):h===p&&Ne(n,l,t,f,c,i)?(me(o,e,n,s,l,xe(o,t,c,u,a)),n):(Se(o,e,n,s,l,p,t,f,c,h,u,i,a),n)},Le=new E;r.prototype=Object.create(null);var Me=function(e){return{html:e}},$e=function rt(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:rt(e.render(),t)},De=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},Pe=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=le.find(e,o.path);switch(o.type){case"any":n.push(Fe(a,[]));break;case"attr":n.push(Be(a,o.name,o.node));break;case"text":n.push(Ze(a)),a.textContent=""}}return n},Re=function it(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case s:_e(a,t,n),it(a,t,n);break;case 8:a.textContent===m&&(n.shift(),t.push(g.test(e.nodeName)?le.create("text",e):le.create("any",a)));break;case 3:g.test(e.nodeName)&&k.call(a.textContent)===b&&(n.shift(),t.push(le.create("text",e)))}}},_e=function(e,t,n){for(var i=new r,o=e.attributes,a=re.call(o),u=[],c=a.length,f=0;f<c;f++){var l=a[f];if(l.value===m){var s=l.name;if(!(s in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[s]=o[d]||o[d.toLowerCase()],t.push(le.create("attr",i[s],d))}u.push(l)}}for(var v=u.length,h=0;h<v;h++){var p=u[h];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(u[h])}var g=e.nodeName;if(/^script$/i.test(g)){for(var b=document.createElement(g),w=0;w<o.length;w++)b.setAttributeNode(o[w].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}},He=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Me).then(t):Promise.resolve($.invoke(e,t)).then(t)},ze=function(e){return null!=e&&"then"in e},Fe=function(e,t){var n={node:$e,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=Te(e.parentNode,t,[_(e,a)],n));break;case"object":case"undefined":if(null==a){r=!1,t=Te(e.parentNode,t,[],n);break}default:if(r=!1,i=a,C(a))if(0===a.length)t.length&&(t=Te(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(C(a[0])&&(a=a.concat.apply([],a)),ze(a[0])){Promise.all(a).then(o);break}default:t=Te(e.parentNode,t,a,n)}else De(a)?t=Te(e.parentNode,t,11===a.nodeType?re.call(a.childNodes):[a],n):ze(a)?a.then(o):"placeholder"in a?He(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=Te(e.parentNode,t,re.call(Y(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?re.call(a):$.invoke(a,o))}}},Be=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return de(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===h||a===p?(Ge&&(Ge=!1,i()),Le.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1))}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in $.attributes)return function(n){o=$.attributes[t](e,n),e.setAttribute(t,null==o?"":o)};var u=!1,c=n.cloneNode(!0);return function(t){o!==t&&(o=t,c.value!==t&&(null==t?(u&&(u=!1,e.removeAttributeNode(c)),c.value=t):(c.value=t,u||(u=!0,e.setAttributeNode(c)))))}},Ze=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?ze(r)?r.then(n):"placeholder"in r?He(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?re.call(r).join(""):$.invoke(r,n)):e.textContent=null==r?"":r)}},Ve={create:Pe,find:Re},Ge=!0,Ie=new x,We=function(){try{var e=new x,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new y}}(),qe=V,Je=function(e,t,n){return d.test(t)?e:"<"+t+n+"></"+t+">"},Ke=new x,Qe=function(e,t){return null==e?Ue(t||"html"):Xe(e,t||"html")},Ue=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=ie(u);var c=i!==u;return c&&(i=u,r=R(document),n="svg"===e?document.createElementNS(v,"svg"):r,a=o.bind(n)),a.apply(null,arguments),c&&("svg"===e&&K(r,re.call(n.childNodes)),t=Ye(r)),t}},Xe=function(e,t){var n=t.indexOf(":"),r=Ke.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Ke.set(e,r={}),r[i]||(r[i]=Ue(t))},Ye=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==s&&0===k.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},et=function(e){return o.bind(e)},tt=$.define;return f.Component=t,f.bind=et,f.define=tt,f.diff=Te,f.hyper=f,f.wire=Qe,function(e){var n=new x,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new x);return c.get(o)||i(c,o,new e(n));default:var f=u.p||(u.p=r(null));return f[o]||(f[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new y;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:A("html",e),svg:A("svg",e),state:A("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Ue),f}(window);
/* harmony default export */ var esm = (hyperHTML);
const {Component, bind, define, diff, hyper, wire} = hyperHTML;

// EXTERNAL MODULE: ./src/base-component/custom-element/index.ts + 2 modules
var custom_element = __webpack_require__(16);

// CONCATENATED MODULE: ./src/with-hyperHTML/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlWithContext", function() { return htmlWithContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFn", function() { return renderFn; });


/**
 *
 * @param {array} template literal that needs to be wired
 */

const html = (...args) => wire()(...args);
/**
 *
 * To render and update nodes multiple times, bind object as context
 * ex: `items.map(item => htmlWithContext(item)`<li>${item.val}</li>`);`
 * here each item is bound as context to avoid rerendering same template
 */

const htmlWithContext = wire;
/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {HTMLElement} renderRoot defines where to render
 */

const renderFn = (template, renderRoot) => bind(renderRoot)(template);
/**
 * DOM rendering with HyperHTML which extendes from base custom element
 */

class with_hyperHTML_WithHyperHTML extends custom_element["default"] {
  get domRender() {
    return (template, ...values) => bind(this.shadowRoot || this)(template, ...values);
  }

  get html() {
    return html;
  }

  get htmlWithContext() {
    return htmlWithContext;
  }

}

/* harmony default export */ var with_hyperHTML = __webpack_exports__["default"] = (with_hyperHTML_WithHyperHTML);

/***/ })
/******/ ]);
});
//# sourceMappingURL=with-hyperHTML.js.map