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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/base-component/helpers/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fixBabelExtend = function (O) {
    var gPO = O.getPrototypeOf || function (o) {
        return o.__proto__;
    },
        sPO = O.setPrototypeOf || function (o, p) {
        o.__proto__ = p;
        return o;
    },
        construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect.construct : function (Parent, args, Class) {
        var Constructor,
            a = [null];
        a.push.apply(a, args);
        Constructor = Parent.bind.apply(Parent, a);
        return sPO(new Constructor(), Class.prototype);
    };

    return function fixBabelExtend(Class) {
        var Parent = gPO(Class);
        return sPO(Class, sPO(function Super() {
            return construct(Parent, arguments, gPO(this).constructor);
        }, Parent));
    };
}(Object);

/**
 * set context to allow CE polyfill work as expected
 */
var HTMLCustomElement = _fixBabelExtend(function (_HTMLElement) {
    _inherits(HTMLCustomElement, _HTMLElement);

    function HTMLCustomElement(_) {
        var _this, _ret;

        _classCallCheck(this, HTMLCustomElement);

        return _ret = ((_ = (_this = _possibleConstructorReturn(this, (HTMLCustomElement.__proto__ || Object.getPrototypeOf(HTMLCustomElement)).call(this, _)), _this)).init(), _), _possibleConstructorReturn(_this, _ret);
    } // eslint-disable-line


    _createClass(HTMLCustomElement, [{
        key: "init",
        value: function init() {} // eslint-disable-line

    }]);

    return HTMLCustomElement;
}(HTMLElement));

/**
 * serialize attribute value from string to number/object/boolean/null or string
 * this also checks if the given attribute is a boolean attribute(named as `has-*`) without value, then returns as boolean
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and sent as that type
 */
function serializeAttrValue(attrName, value) {
    var isObjOrArray = /^[{|[]/g.test(value);
    var hasOrIsBooleanAttr = /^has-|^is-/g.test(attrName);
    var updatedValue = void 0;

    // parse attributue value
    try {
        updatedValue = JSON.parse(value);
    } catch (e) {
        updatedValue = value;

        if (isObjOrArray) {
            updatedValue = null;
            console.error("Warning: Failed serializing attribute(" + attrName + ") value as JSON: " + value);
        }
    }

    // check for has-* or is-* attributes
    if (hasOrIsBooleanAttr) {
        updatedValue = hasOrIsBooleanAttr;
    }

    return updatedValue;
}

/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
function toCamelCase(word) {
    return word.replace(/\b(_|-)([a-z])/g, function (s, f, c) {
        return c.toUpperCase();
    });
}
// CONCATENATED MODULE: ./src/base-component/bootstrap-element/index.js
var bootstrap_element_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function bootstrap_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bootstrap_element_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function bootstrap_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable class-methods-use-this */


/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
var bootstrap_element_BootstrapElement = function BootstrapElement(superclass) {
    return function (_superclass) {
        bootstrap_element_inherits(_class, _superclass);

        function _class() {
            bootstrap_element_classCallCheck(this, _class);

            return bootstrap_element_possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        bootstrap_element_createClass(_class, [{
            key: 'defineProp',

            /**
             * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
             * @param {string} name attribute name
             */
            value: function defineProp(name) {
                if (!name) return;

                var classInstance = this;
                var classProto = Object.getPrototypeOf(classInstance);
                var propName = toCamelCase(name);

                if (propName in classProto) return;

                Object.defineProperty(classProto, propName, {
                    configurable: true,
                    get: function get() {
                        return serializeAttrValue(name, this.getAttribute(name));
                    },
                    set: function set(value) {
                        var checkedValue = typeof value !== 'string' ? JSON.stringify(value) : value;
                        this.setAttribute(name, checkedValue);
                    }
                });
            }

            /**
             * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
             * @param {array} attributes list of attributes added to the component
             * @param {array} observedAttributes list of observed attributes
             */

        }, {
            key: 'createAttributesToProperties',
            value: function createAttributesToProperties() {
                var _this2 = this;

                var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var observedAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

                // attributes to properties
                Object.keys(attributes).forEach(function (attr) {
                    var attrName = attributes[attr].name;
                    _this2.defineProp(attrName);
                });

                if (observedAttributes.length === 0) return;

                // observedAttributes to properties
                observedAttributes.forEach(this.defineProp.bind(this));
            }

            /**
             * has attribute
             * @param {string} attribute name
             */

        }, {
            key: 'has',
            value: function has(attr) {
                return this.hasAttribute(attr);
            }

            /**
             * set attribute value
             * @param {string} attribute name
             */

        }, {
            key: 'get',
            value: function get(attr) {
                return this.getAttribute(attr);
            }

            /**
             * set attribute value
             * @param {string} attribute name
             * @param {string} new/changed value for the attribute
             */

        }, {
            key: 'set',
            value: function set(attr, val) {
                return this.setAttribute(attr, val);
            }

            /**
             * remove attribute
             * @param {string} attribute name
             */

        }, {
            key: 'remove',
            value: function remove(attr) {
                return this.removeAttribute(attr);
            }

            /**
             * helper function to add class name using classList
             * @param {object} element DOM element
             * @param {string} className string of class name
             * @return {object} element DOM element
             */

        }, {
            key: 'addClass',
            value: function addClass(element, className) {
                element.classList.add(className);
                return element;
            }

            /**
             * helper function to remove class name using classList
             * @param {object} element DOM element
             * @param {string} className string of class name
             * @return {object} element DOM element
             */

        }, {
            key: 'removeClass',
            value: function removeClass(element, className) {
                element.classList.remove(className);
                return element;
            }

            /**
             * helper function to check for has class name using classList
             * @param {object} element DOM element
             * @param {string} className string of class name
             * @return {boolean} contains true/false
             */

        }, {
            key: 'hasClass',
            value: function hasClass(element, className) {
                return element.classList.contains(className);
            }

            /**
             * helper function to toggle class name using classList
             * @param {object} element DOM element
             * @param {string} className string of class name
             * @param {boolean} force boolean to use force optionally
             * @return {object} element DOM element
             */

        }, {
            key: 'toggleClass',
            value: function toggleClass(element, className, force) {
                return element.classList.toggle(className, force);
            }

            /**
             * helper to find child nodes rendered inside
             * @param {string} selector that is used to search the DOM node
             * @param {object} context HTMLElement in which search should be performed
             * @return {object} HTMLElement
             */

        }, {
            key: 'find',
            value: function find(selector) {
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

                return context.querySelector(selector);
            }

            /**
             * helper to find all child nodes rendered inside
             * @param {string} selector that is used to search the DOM node
             * @param {object} context HTMLElement in which search should be performed
             * @return {array} HTMLElements that are matched
             */

        }, {
            key: 'findAll',
            value: function findAll(selector) {
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

                return context.querySelectorAll(selector);
            }

            /**
             * simplyfied event handler function
             * @param {object} target HTML element that needs event to be added
             * @param {string} eventName event type ex: click, blur, etc.
             * @param {function} callback function that needs to be triggerd
             */

        }, {
            key: 'on',
            value: function on(eventName, target, callback) {
                target.addEventListener(eventName, callback, false);
            }

            /**
             * simplyfied event handler function to remove events
             * @param {object} target HTML element that needs event to be added
             * @param {string} eventName event type ex: click, blur, etc.
             * @param {function} callback function that needs to be triggerd
             */

        }, {
            key: 'off',
            value: function off(eventName, target, callback) {
                target.removeEventListener(eventName, callback, false);
            }

            /**
             * trigger native/custom event and pass data between components
             * @param {object} target element reference on which event needs to be triggerd
             * @param {string} eventName custom event name
             * @param {object} eventData custom event data to share
             */

        }, {
            key: 'trigger',
            value: function trigger(eventName, target, eventData) {
                var triggerEvent = !eventData ? new Event(eventName) : new CustomEvent(eventName, { detail: eventData || {} });
                target.dispatchEvent(triggerEvent);
            }
        }]);

        return _class;
    }(superclass);
};

/* harmony default export */ var bootstrap_element = (bootstrap_element_BootstrapElement);
// CONCATENATED MODULE: ./src/base-component/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var base_component_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function base_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function base_component_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function base_component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable class-methods-use-this */



/**
 * custom element base class
 * below methods available to make this base element flexible
 *  - willConnect() this will be triggered before connectedCallback()
 *  - onConnect() this will be triggered on connectedCallback()
 *  - didConnect() this will be triggered only once after didRender()
 *  - willRender() will be triggered before render()
 *  - didRender() will be triggered after render()
 *  - setState() this helps shallow merge changes and allow re-render
 */

var base_component_BaseCustomElement = function (_BootstrapElement) {
    base_component_inherits(BaseCustomElement, _BootstrapElement);

    function BaseCustomElement() {
        base_component_classCallCheck(this, BaseCustomElement);

        return base_component_possibleConstructorReturn(this, (BaseCustomElement.__proto__ || Object.getPrototypeOf(BaseCustomElement)).apply(this, arguments));
    }

    base_component_createClass(BaseCustomElement, [{
        key: 'init',
        value: function init() {
            this.isFirstRender = true;
            this.isCreated = false;

            if (this.constructor.withShadowDom) {
                this.attachShadow({ mode: 'open' });
            }

            this.willConnect();
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(e) {
            var hasInstanceMethod = 'on' + e.type;
            if (!this[hasInstanceMethod] || typeof this[hasInstanceMethod] !== 'function') return;

            this[hasInstanceMethod](e);
        }
    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            // delay execution of connectedCallback to make sure dynamic data added to  the attributes are available to consume
            window.requestAnimationFrame(this._create.bind(this));
        }
    }, {
        key: '_create',
        value: function _create() {
            var attributes = this.attributes;
            var observedAttributes = this.constructor.observedAttributes;

            // poxy attributes & observed attributes as properties

            this.createAttributesToProperties(attributes, observedAttributes);

            this.isCreated = true;

            this.onConnect();
            this._beforeRender();
            this.set('enhanced', '');
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            /**
             * to optimize and avoid unnecessary re-rendering when attribte values changed
             * this condition checks for below three things
             * {isCreated} check if element connected, if no, avoid re-render
             * {oldVal === newVal} check if current and new value for this attribute are same, if yes, then avoid re-render
             */
            if (!this.isCreated || oldVal === newVal) return;

            var propName = toCamelCase(attrName);

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

            this._beforeRender();
        }
    }, {
        key: '_beforeRender',
        value: function _beforeRender() {
            this.willRender();

            this.set('is-rendering', '');
            this.render();
            this._afterRender();
        }
    }, {
        key: '_afterRender',
        value: function _afterRender() {
            if (this.isFirstRender) {
                this.isFirstRender = false;
                this.didConnect();
            }

            this.remove('is-rendering');
            this.didRender();
        }
    }, {
        key: 'setState',
        value: function setState(state) {
            var nextState = typeof state === 'function' ? state.call(this, this.state, this) : state;
            this.state = _extends({}, this.state, nextState);
            this._beforeRender();
        }
    }, {
        key: 'willConnect',
        value: function willConnect() {}
    }, {
        key: 'onConnect',
        value: function onConnect() {}
    }, {
        key: 'willRender',
        value: function willRender() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'didRender',
        value: function didRender() {}
    }, {
        key: 'didConnect',
        value: function didConnect() {}
    }], [{
        key: 'withShadowDom',
        get: function get() {
            return false;
        }
    }]);

    return BaseCustomElement;
}(bootstrap_element(HTMLCustomElement));

/* harmony default export */ var base_component = __webpack_exports__["default"] = (base_component_BaseCustomElement);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/constants.js
var G = document.defaultView;

// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
var ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = 2;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_FRAGMENT_NODE = 11;

// HTML related constants
var VOID_ELEMENTS = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;

// SVG related constants
var OWNER_SVG_ELEMENT = 'ownerSVGElement';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

// Custom Elements / MutationObserver constants
var CONNECTED = 'connected';
var DISCONNECTED = 'dis' + CONNECTED;

// hyperHTML related constants
var EXPANDO = '_hyper: ';
var SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;
var UID = EXPANDO + (Math.random() * new Date() | 0) + ';';
var UIDC = '<!--' + UID + '-->';
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/poorlyfills.js


// you know that kind of basics you need to cover
// your use case only but you don't want to bloat the library?
// There's even a package in here:
// https://www.npmjs.com/package/poorlyfills

// used to dispatch simple events
var Event = G.Event;
try {
  new Event('Event');
} catch (o_O) {
  Event = function Event(type) {
    var e = document.createEvent('Event');
    e.initEvent(type, false, false);
    return e;
  };
}


// used to store template literals
var Map = G.Map || function Map() {
  var keys = [],
      values = [];
  return {
    get: function get(obj) {
      return values[keys.indexOf(obj)];
    },
    set: function set(obj, value) {
      values[keys.push(obj) - 1] = value;
    }
  };
};

// used to store wired content
var poorlyfills_WeakMap = G.WeakMap || function WeakMap() {
  return {
    get: function get(obj) {
      return obj[UID];
    },
    set: function set(obj, value) {
      Object.defineProperty(obj, UID, {
        configurable: true,
        value: value
      });
    }
  };
};

// used to store hyper.Components
var WeakSet = G.WeakSet || function WeakSet() {
  var wm = new poorlyfills_WeakMap();
  return {
    add: function add(obj) {
      wm.set(obj, true);
    },
    has: function has(obj) {
      return wm.get(obj) === true;
    }
  };
};

// used to be sure IE9 or older Androids work as expected
var isArray = Array.isArray || function (toString) {
  return function (arr) {
    return toString.call(arr) === '[object Array]';
  };
}({}.toString);

var trim = UID.trim || function () {
  return this.replace(/^\s+|\s+$/g, '');
};
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/classes/Component.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function Component() {
  return this; // this is needed in Edge !!!
}

// Component is lazily setup because it needs
// wire mechanism as lazy content
function Component_setup(content) {
  // there are various weakly referenced variables in here
  // and mostly are to use Component.for(...) static method.
  var children = new poorlyfills_WeakMap();
  var create = Object.create;
  var createEntry = function createEntry(wm, id, component) {
    wm.set(id, component);
    return component;
  };
  var get = function get(Class, info, context, id) {
    switch (typeof id === 'undefined' ? 'undefined' : _typeof(id)) {
      case 'object':
      case 'function':
        var wm = info.w || (info.w = new poorlyfills_WeakMap());
        return wm.get(id) || createEntry(wm, id, new Class(context));
      default:
        var sm = info.p || (info.p = create(null));
        return sm[id] || (sm[id] = new Class(context));
    }
  };
  var set = function set(context) {
    var info = { w: null, p: null };
    children.set(context, info);
    return info;
  };
  // The Component Class
  Object.defineProperties(Component, {
    // Component.for(context[, id]) is a convenient way
    // to automatically relate data/context to children components
    // If not created yet, the new Component(context) is weakly stored
    // and after that same instance would always be returned.
    for: {
      configurable: true,
      value: function value(context, id) {
        var info = children.get(context) || set(context);
        return get(this, info, context, id == null ? 'default' : id);
      }
    }
  });
  Object.defineProperties(Component.prototype, {
    // all events are handled with the component as context
    handleEvent: {
      value: function value(e) {
        var ct = e.currentTarget;
        this['getAttribute' in ct && ct.getAttribute('data-call') || 'on' + e.type](e);
      }
    },
    // components will lazily define html or svg properties
    // as soon as these are invoked within the .render() method
    // Such render() method is not provided by the base class
    // but it must be available through the Component extend.
    // Declared components could implement a
    // render(props) method too and use props as needed.
    html: lazyGetter('html', content),
    svg: lazyGetter('svg', content),
    // the state is a very basic/simple mechanism inspired by Preact
    state: lazyGetter('state', function () {
      return this.defaultState;
    }),
    // it is possible to define a default state that'd be always an object otherwise
    defaultState: {
      get: function get() {
        return {};
      }
    },
    // setting some property state through a new object
    // or a callback, triggers also automatically a render
    // unless explicitly specified to not do so (render === false)
    setState: {
      value: function value(state, render) {
        var target = this.state;
        var source = typeof state === 'function' ? state.call(this, target) : state;
        for (var key in source) {
          target[key] = source[key];
        }if (render !== false) this.render();
        return this;
      }
    }
  });
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
var lazyGetter = function lazyGetter(type, fn) {
  var secret = '_' + type + '$';
  return {
    get: function get() {
      return this[secret] || (this[type] = fn.call(this, type));
    },
    set: function set(value) {
      Object.defineProperty(this, secret, { configurable: true, value: value });
    }
  };
};
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/objects/Intent.js
var intents = {};
var keys = [];
var Intent_hasOwnProperty = intents.hasOwnProperty;

var Intent_length = 0;

/* harmony default export */ var Intent = ({

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: function define(intent, callback) {
    if (!(intent in intents)) {
      Intent_length = keys.push(intent);
    }
    intents[intent] = callback;
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: function invoke(object, callback) {
    for (var i = 0; i < Intent_length; i++) {
      var key = keys[i];
      if (Intent_hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/easy-dom.js
// these are tiny helpers to simplify most common operations needed here
var easy_dom_create = function create(node, type) {
  return doc(node).createElement(type);
};
var doc = function doc(node) {
  return node.ownerDocument || node;
};
var easy_dom_fragment = function fragment(node) {
  return doc(node).createDocumentFragment();
};
var easy_dom_text = function text(node, _text) {
  return doc(node).createTextNode(_text);
};
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/re.js
// TODO:  I'd love to code-cover RegExp too here
//        these are fundamental for this library

var spaces = ' \\f\\n\\r\\t';
var almostEverything = '[^ ' + spaces + '\\/>"\'=]+';
var attrName = '[ ' + spaces + ']+' + almostEverything;
var tagName = '<([A-Za-z]+[A-Za-z0-9:_-]*)((?:';
var attrPartials = '(?:=(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything + '))?)';

var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([ ' + spaces + ']*/?>)', 'g');

var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([ ' + spaces + ']*/>)', 'g');


// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/features-detection.js


var testFragment = easy_dom_fragment(document);

// DOM4 node.append(...many)
var hasAppend = 'append' in testFragment;

// detect old browsers without HTMLTemplateElement content support
var hasContent = 'content' in easy_dom_create(document, 'template');

// IE 11 has problems with cloning templates: it "forgets" empty childNodes
testFragment.appendChild(easy_dom_text(testFragment, 'g'));
testFragment.appendChild(easy_dom_text(testFragment, ''));
var hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;

// old browsers need to fallback to cloneNode
// Custom Elements V0 and V1 will work polyfilled
// but native implementations need importNode instead
// (specially Chromium and its old V0 implementation)
var hasImportNode = 'importNode' in document;
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/utils.js








// appends an array of nodes
// to a generic node/fragment
// When available, uses append passing all arguments at once
// hoping that's somehow faster, even if append has more checks on type
var append = hasAppend ? function (node, childNodes) {
  node.append.apply(node, childNodes);
} : function (node, childNodes) {
  var length = childNodes.length;
  for (var i = 0; i < length; i++) {
    node.appendChild(childNodes[i]);
  }
};

var utils_findAttributes = new RegExp('(' + attrName + '=)([\'"]?)' + UIDC + '\\2', 'gi');
var comments = function comments($0, $1, $2, $3) {
  return '<' + $1 + $2.replace(utils_findAttributes, utils_replaceAttributes) + $3;
};
var utils_replaceAttributes = function replaceAttributes($0, $1, $2) {
  return $1 + ($2 || '"') + UID + ($2 || '"');
};

// given a node and a generic HTML content,
// create either an SVG or an HTML fragment
// where such content will be injected
var utils_createFragment = function createFragment(node, html) {
  return (OWNER_SVG_ELEMENT in node ? SVGFragment : HTMLFragment)(node, html.replace(attrSeeker, comments));
};

// IE/Edge shenanigans proof cloneNode
// it goes through all nodes manually
// instead of relying the engine to suddenly
// merge nodes together
var cloneNode = hasDoomedCloneNode ? function (node) {
  var clone = node.cloneNode();
  var childNodes = node.childNodes ||
  // this is an excess of caution
  // but some node, in IE, might not
  // have childNodes property.
  // The following fallback ensure working code
  // in older IE without compromising performance
  // or any other browser/engine involved.
  /* istanbul ignore next */
  [];
  var length = childNodes.length;
  for (var i = 0; i < length; i++) {
    clone.appendChild(cloneNode(childNodes[i]));
  }
  return clone;
} :
// the following ignore is due code-coverage
// combination of not having document.importNode
// but having a working node.cloneNode.
// This shenario is common on older Android/WebKit browsers
// but basicHTML here tests just two major cases:
// with document.importNode or with broken cloneNode.
/* istanbul ignore next */
function (node) {
  return node.cloneNode(true);
};

// used to import html into fragments
var importNode = hasImportNode ? function (doc, node) {
  return doc.importNode(node, true);
} : function (doc, node) {
  return cloneNode(node);
};

// just recycling a one-off array to use slice
// in every needed place
var slice = [].slice;

// lazy evaluated, returns the unique identity
// of a template literal, as tempalte literal itself.
// By default, ES2015 template literals are unique
// tag`a${1}z` === tag`a${2}z`
// even if interpolated values are different
// the template chunks are in a frozen Array
// that is identical each time you use the same
// literal to represent same static content
// around its own interpolations.
var unique = function unique(template) {
  return _TL(template);
};

// TL returns a unique version of the template
// it needs lazy feature detection
// (cannot trust literals with transpiled code)
var _TL = function TL(template) {
  if (
  // TypeScript template literals are not standard
  template.propertyIsEnumerable('raw') ||
  // Firefox < 55 has not standard implementation neither
  /Firefox\/(\d+)/.test((G.navigator || {}).userAgent) && parseFloat(RegExp.$1) < 55) {
    // in these cases, address templates once
    var templateObjects = {};
    // but always return the same template
    _TL = function TL(template) {
      var key = '_' + template.join(UID);
      return templateObjects[key] || (templateObjects[key] = template);
    };
  } else {
    // make TL an identity like function
    _TL = function TL(template) {
      return template;
    };
  }
  return _TL(template);
};

// create document fragments via native template
// with a fallback for browsers that won't be able
// to deal with some injected element such <td> or others
var HTMLFragment = hasContent ? function (node, html) {
  var container = easy_dom_create(node, 'template');
  container.innerHTML = html;
  return container.content;
} : function (node, html) {
  var container = easy_dom_create(node, 'template');
  var content = easy_dom_fragment(node);
  if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
    var selector = RegExp.$1;
    container.innerHTML = '<table>' + html + '</table>';
    append(content, slice.call(container.querySelectorAll(selector)));
  } else {
    container.innerHTML = html;
    append(content, slice.call(container.childNodes));
  }
  return content;
};

// creates SVG fragment with a fallback for IE that needs SVG
// within the HTML content
var SVGFragment = hasContent ? function (node, html) {
  var content = easy_dom_fragment(node);
  var container = doc(node).createElementNS(SVG_NAMESPACE, 'svg');
  container.innerHTML = html;
  append(content, slice.call(container.childNodes));
  return content;
} : function (node, html) {
  var content = easy_dom_fragment(node);
  var container = easy_dom_create(node, 'div');
  container.innerHTML = '<svg xmlns="' + SVG_NAMESPACE + '">' + html + '</svg>';
  append(content, slice.call(container.firstChild.childNodes));
  return content;
};
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/classes/Wire.js



function Wire(childNodes) {
  this.childNodes = childNodes;
  this.length = childNodes.length;
  this.first = childNodes[0];
  this.last = childNodes[this.length - 1];
}

// when a wire is inserted, all its nodes will follow
Wire.prototype.insert = function insert() {
  var df = easy_dom_fragment(this.first);
  append(df, this.childNodes);
  return df;
};

// when a wire is removed, all its nodes must be removed as well
Wire.prototype.remove = function remove() {
  var first = this.first;
  var last = this.last;
  if (this.length === 2) {
    last.parentNode.removeChild(last);
  } else {
    var range = doc(first).createRange();
    range.setStartBefore(this.childNodes[1]);
    range.setEndAfter(last);
    range.deleteContents();
  }
  return first;
};
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/objects/Path.js


// every template literal interpolation indicates
// a precise target in the DOM the template is representing.
// `<p id=${'attribute'}>some ${'content'}</p>`
// hyperHTML finds only once per template literal,
// hence once per entire application life-cycle,
// all nodes that are related to interpolations.
// These nodes are stored as indexes used to retrieve,
// once per upgrade, nodes that will change on each future update.
// A path example is [2, 0, 1] representing the operation:
// node.childNodes[2].childNodes[0].childNodes[1]
// Attributes are addressed via their owner node and their name.
var Path_createPath = function createPath(node) {
  var path = [];
  var parentNode = void 0;
  switch (node.nodeType) {
    case ELEMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      parentNode = node;
      break;
    case COMMENT_NODE:
      parentNode = node.parentNode;
      prepend(path, parentNode, node);
      break;
    default:
      parentNode = node.ownerElement;
      break;
  }
  for (node = parentNode; parentNode = parentNode.parentNode; node = parentNode) {
    prepend(path, parentNode, node);
  }
  return path;
};

var prepend = function prepend(path, parent, node) {
  path.unshift(path.indexOf.call(parent.childNodes, node));
};

/* harmony default export */ var Path = ({
  create: function create(type, node, name) {
    return { type: type, name: name, node: node, path: Path_createPath(node) };
  },
  find: function find(node, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      node = node.childNodes[path[i]];
    }
    return node;
  }
});
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/objects/Style.js
var Style_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

// style is handled as both string and object
// even if the target is an SVG element (consistency)
/* harmony default export */ var Style = (function (node, original, isSVG) {
  if (isSVG) {
    var style = original.cloneNode(true);
    style.value = '';
    node.setAttributeNode(style);
    return update(style, isSVG);
  }
  return update(node.style, isSVG);
});

// the update takes care or changing/replacing
// only properties that are different or
// in case of string, the whole node
var update = function update(style, isSVG) {
  var oldType = void 0,
      oldValue = void 0;
  return function (newValue) {
    switch (typeof newValue === 'undefined' ? 'undefined' : Style_typeof(newValue)) {
      case 'object':
        if (newValue) {
          if (oldType === 'object') {
            if (!isSVG) {
              if (oldValue !== newValue) {
                for (var key in oldValue) {
                  if (!(key in newValue)) {
                    style[key] = '';
                  }
                }
              }
            }
          } else {
            if (isSVG) style.value = '';else style.cssText = '';
          }
          var info = isSVG ? {} : style;
          for (var _key in newValue) {
            var value = newValue[_key];
            info[_key] = typeof value === 'number' && !IS_NON_DIMENSIONAL.test(_key) ? value + 'px' : value;
          }
          oldType = 'object';
          if (isSVG) style.value = toStyle(oldValue = info);else oldValue = newValue;
          break;
        }
      default:
        if (oldValue != newValue) {
          oldType = 'string';
          oldValue = newValue;
          if (isSVG) style.value = newValue || '';else style.cssText = newValue || '';
        }
        break;
    }
  };
};

var hyphen = /([^A-Z])([A-Z]+)/g;
var ized = function ized($0, $1, $2) {
  return $1 + '-' + $2.toLowerCase();
};
var toStyle = function toStyle(object) {
  var css = [];
  for (var key in object) {
    css.push(key.replace(hyphen, ized), ':', object[key], ';');
  }
  return css.join('');
};
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/shared/domdiff.js
/* AUTOMATICALLY IMPORTED, DO NOT MODIFY */
/*! (c) 2017 Andrea Giammarchi (ISC) */

/**
 * This code is a revisited port of the snabbdom vDOM diffing logic,
 * the same that fuels as fork Vue.js or other libraries.
 * @credits https://github.com/snabbdom/snabbdom
 */

var identity = function identity(O) {
  return O;
};

var domdiff_remove = function remove(parentNode, before, after) {
  var range = parentNode.ownerDocument.createRange();
  range.setStartBefore(before);
  range.setEndAfter(after);
  range.deleteContents();
};

var domdiff = function domdiff(parentNode, // where changes happen
currentNodes, // Array of current items/nodes
futureNodes, // Array of future items/nodes
getNode, // optional way to retrieve a node from an item
beforeNode // optional item/node to use as insertBefore delimiter
) {
  var get = getNode || identity;
  var before = beforeNode == null ? null : get(beforeNode, 0);
  var currentStart = 0,
      futureStart = 0;
  var currentEnd = currentNodes.length - 1;
  var currentStartNode = currentNodes[0];
  var currentEndNode = currentNodes[currentEnd];
  var futureEnd = futureNodes.length - 1;
  var futureStartNode = futureNodes[0];
  var futureEndNode = futureNodes[futureEnd];
  while (currentStart <= currentEnd && futureStart <= futureEnd) {
    if (currentStartNode == null) {
      currentStartNode = currentNodes[++currentStart];
    } else if (currentEndNode == null) {
      currentEndNode = currentNodes[--currentEnd];
    } else if (futureStartNode == null) {
      futureStartNode = futureNodes[++futureStart];
    } else if (futureEndNode == null) {
      futureEndNode = futureNodes[--futureEnd];
    } else if (currentStartNode == futureStartNode) {
      currentStartNode = currentNodes[++currentStart];
      futureStartNode = futureNodes[++futureStart];
    } else if (currentEndNode == futureEndNode) {
      currentEndNode = currentNodes[--currentEnd];
      futureEndNode = futureNodes[--futureEnd];
    } else if (currentStartNode == futureEndNode) {
      parentNode.insertBefore(get(currentStartNode, 1), get(currentEndNode, -0).nextSibling);
      currentStartNode = currentNodes[++currentStart];
      futureEndNode = futureNodes[--futureEnd];
    } else if (currentEndNode == futureStartNode) {
      parentNode.insertBefore(get(currentEndNode, 1), get(currentStartNode, 0));
      currentEndNode = currentNodes[--currentEnd];
      futureStartNode = futureNodes[++futureStart];
    } else {
      var index = currentNodes.indexOf(futureStartNode);
      if (index < 0) {
        parentNode.insertBefore(get(futureStartNode, 1), get(currentStartNode, 0));
        futureStartNode = futureNodes[++futureStart];
      } else {
        var i = index;
        var f = futureStart;
        while (i <= currentEnd && f <= futureEnd && currentNodes[i] === futureNodes[f]) {
          i++;
          f++;
        }
        if (1 < i - index) {
          if (--index === currentStart) {
            parentNode.removeChild(get(currentStartNode, -1));
          } else {
            domdiff_remove(parentNode, get(currentStartNode, -1), get(currentNodes[index], -1));
          }
          currentStart = i;
          futureStart = f;
          currentStartNode = currentNodes[i];
          futureStartNode = futureNodes[f];
        } else {
          var el = currentNodes[index];
          currentNodes[index] = null;
          parentNode.insertBefore(get(el, 1), get(currentStartNode, 0));
          futureStartNode = futureNodes[++futureStart];
        }
      }
    }
  }
  if (currentStart <= currentEnd || futureStart <= futureEnd) {
    if (currentStart > currentEnd) {
      var pin = futureNodes[futureEnd + 1];
      var place = pin == null ? before : get(pin, 0);
      if (futureStart === futureEnd) {
        parentNode.insertBefore(get(futureNodes[futureStart], 1), place);
      } else {
        var fragment = parentNode.ownerDocument.createDocumentFragment();
        while (futureStart <= futureEnd) {
          fragment.appendChild(get(futureNodes[futureStart++], 1));
        }
        parentNode.insertBefore(fragment, place);
      }
    } else {
      if (currentNodes[currentStart] == null) currentStart++;
      if (currentStart === currentEnd) {
        parentNode.removeChild(get(currentNodes[currentStart], -1));
      } else {
        domdiff_remove(parentNode, get(currentNodes[currentStart], -1), get(currentNodes[currentEnd], -1));
      }
    }
  }
  return futureNodes;
};

/* harmony default export */ var shared_domdiff = (domdiff);
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/objects/Updates.js
var Updates_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };









// see /^script$/i.test(nodeName) bit down here
// import { create as createElement, text } from '../shared/easy-dom.js';




// hyper.Component have a connected/disconnected
// mechanism provided by MutationObserver
// This weak set is used to recognize components
// as DOM node that needs to trigger connected/disconnected events
var components = new WeakSet();

// a basic dictionary used to filter already cached attributes
// while looking for special hyperHTML values.
function Cache() {}
Cache.prototype = Object.create(null);

// returns an intent to explicitly inject content as html
var asHTML = function asHTML(html) {
  return { html: html };
};

// returns nodes from wires and components
var Updates_asNode = function asNode(item, i) {
  return 'ELEMENT_NODE' in item ? item : item.constructor === Wire ?
  // in the Wire case, the content can be
  // removed, post-pended, inserted, or pre-pended and
  // all these cases are handled by domdiff already
  /* istanbul ignore next */
  1 / i < 0 ? i ? item.remove() : item.last : i ? item.insert() : item.first : asNode(item.render(), i);
};

// returns true if domdiff can handle the value
var Updates_canDiff = function canDiff(value) {
  return 'ELEMENT_NODE' in value || value instanceof Wire || value instanceof Component;
};

// updates are created once per context upgrade
// within the main render function (../hyper/render.js)
// These are an Array of callbacks to invoke passing
// each interpolation value.
// Updates can be related to any kind of content,
// attributes, or special text-only cases such <style>
// elements or <textarea>
var Updates_create = function create(root, paths) {
  var updates = [];
  var length = paths.length;
  for (var i = 0; i < length; i++) {
    var info = paths[i];
    var node = Path.find(root, info.path);
    switch (info.type) {
      case 'any':
        updates.push(Updates_setAnyContent(node, []));
        break;
      case 'attr':
        updates.push(Updates_setAttribute(node, info.name, info.node));
        break;
      case 'text':
        updates.push(Updates_setTextContent(node));
        node.textContent = '';
        break;
    }
  }
  return updates;
};

// finding all paths is a one-off operation performed
// when a new template literal is used.
// The goal is to map all target nodes that will be
// used to update content/attributes every time
// the same template literal is used to create content.
// The result is a list of paths related to the template
// with all the necessary info to create updates as
// list of callbacks that target directly affected nodes.
var Updates_find = function find(node, paths, parts) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  for (var i = 0; i < length; i++) {
    var child = childNodes[i];
    switch (child.nodeType) {
      case ELEMENT_NODE:
        Updates_findAttributes(child, paths, parts);
        find(child, paths, parts);
        break;
      case COMMENT_NODE:
        if (child.textContent === UID) {
          parts.shift();
          paths.push(
          // basicHTML or other non standard engines
          // might end up having comments in nodes
          // where they shouldn't, hence this check.
          SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ? Path.create('text', node) : Path.create('any', child));
        }
        break;
      case TEXT_NODE:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (SHOULD_USE_TEXT_CONTENT.test(node.nodeName) && trim.call(child.textContent) === UIDC) {
          parts.shift();
          paths.push(Path.create('text', node));
        }
        break;
    }
  }
};

// attributes are searched via unique hyperHTML id value.
// Despite HTML being case insensitive, hyperHTML is able
// to recognize attributes by name in a caseSensitive way.
// This plays well with Custom Elements definitions
// and also with XML-like environments, without trusting
// the resulting DOM but the template literal as the source of truth.
// IE/Edge has a funny bug with attributes and these might be duplicated.
// This is why there is a cache in charge of being sure no duplicated
// attributes are ever considered in future updates.
var Updates_findAttributes = function findAttributes(node, paths, parts) {
  var cache = new Cache();
  var attributes = node.attributes;
  var array = slice.call(attributes);
  var remove = [];
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var attribute = array[i];
    if (attribute.value === UID) {
      var name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (!(name in cache)) {
        var realName = parts.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, '$1');
        cache[name] = attributes[realName] ||
        // the following ignore is covered by browsers
        // while basicHTML is already case-sensitive
        /* istanbul ignore next */
        attributes[realName.toLowerCase()];
        paths.push(Path.create('attr', cache[name], realName));
      }
      remove.push(attribute);
    }
  }
  var len = remove.length;
  for (var _i = 0; _i < len; _i++) {
    // Edge HTML bug #16878726
    var _attribute = remove[_i];
    if (/^id$/i.test(_attribute.name)) node.removeAttribute(_attribute.name);
    // standard browsers would work just fine here
    else node.removeAttributeNode(remove[_i]);
  }

  // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense?
  var nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    // this used to be like that
    // const script = createElement(node, nodeName);
    // then Edge arrived and decided that scripts created
    // through template documents aren't worth executing
    // so it became this ... hopefully it won't hurt in the wild
    var script = document.createElement(nodeName);
    for (var _i2 = 0; _i2 < attributes.length; _i2++) {
      script.setAttributeNode(attributes[_i2].cloneNode(true));
    }
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
};

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
var Updates_invokeAtDistance = function invokeAtDistance(value, callback) {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(Intent.invoke(value, callback)).then(callback);
  }
};

// quick and dirty way to check for Promise/ish values
var isPromise_ish = function isPromise_ish(value) {
  return value != null && 'then' in value;
};

// in a hyper(node)`<div>${content}</div>` case
// everything could happen:
//  * it's a JS primitive, stored as text
//  * it's null or undefined, the node should be cleaned
//  * it's a component, update the content by rendering it
//  * it's a promise, update the content once resolved
//  * it's an explicit intent, perform the desired operation
//  * it's an Array, resolve all values if Promises and/or
//    update the node with the resulting list of content
var Updates_setAnyContent = function setAnyContent(node, childNodes) {
  var fastPath = false;
  var oldValue = void 0;
  var anyContent = function anyContent(value) {
    switch (typeof value === 'undefined' ? 'undefined' : Updates_typeof(value)) {
      case 'string':
      case 'number':
      case 'boolean':
        if (fastPath) {
          if (oldValue !== value) {
            oldValue = value;
            childNodes[0].textContent = value;
          }
        } else {
          fastPath = true;
          oldValue = value;
          childNodes = shared_domdiff(node.parentNode, childNodes, [easy_dom_text(node, value)], Updates_asNode, node);
        }
        break;
      case 'object':
      case 'undefined':
        if (value == null) {
          fastPath = false;
          childNodes = shared_domdiff(node.parentNode, childNodes, [], Updates_asNode, node);
          break;
        }
      default:
        fastPath = false;
        oldValue = value;
        if (isArray(value)) {
          if (value.length === 0) {
            if (childNodes.length) {
              childNodes = shared_domdiff(node.parentNode, childNodes, [], Updates_asNode, node);
            }
          } else {
            switch (Updates_typeof(value[0])) {
              case 'string':
              case 'number':
              case 'boolean':
                anyContent({ html: value });
                break;
              case 'object':
                if (isArray(value[0])) {
                  value = value.concat.apply([], value);
                }
                if (isPromise_ish(value[0])) {
                  Promise.all(value).then(anyContent);
                  break;
                }
              default:
                childNodes = shared_domdiff(node.parentNode, childNodes, value, Updates_asNode, node);
                break;
            }
          }
        } else if (Updates_canDiff(value)) {
          childNodes = shared_domdiff(node.parentNode, childNodes, value.nodeType === DOCUMENT_FRAGMENT_NODE ? slice.call(value.childNodes) : [value], Updates_asNode, node);
        } else if (isPromise_ish(value)) {
          value.then(anyContent);
        } else if ('placeholder' in value) {
          Updates_invokeAtDistance(value, anyContent);
        } else if ('text' in value) {
          anyContent(String(value.text));
        } else if ('any' in value) {
          anyContent(value.any);
        } else if ('html' in value) {
          childNodes = shared_domdiff(node.parentNode, childNodes, slice.call(utils_createFragment(node, [].concat(value.html).join('')).childNodes), Updates_asNode, node);
        } else if ('length' in value) {
          anyContent(slice.call(value));
        } else {
          anyContent(Intent.invoke(value, anyContent));
        }
        break;
    }
  };
  return anyContent;
};

// there are four kind of attributes, and related behavior:
//  * events, with a name starting with `on`, to add/remove event listeners
//  * special, with a name present in their inherited prototype, accessed directly
//  * regular, accessed through get/setAttribute standard DOM methods
//  * style, the only regular attribute that also accepts an object as value
//    so that you can style=${{width: 120}}. In this case, the behavior has been
//    fully inspired by Preact library and its simplicity.
var Updates_setAttribute = function setAttribute(node, name, original) {
  var isSVG = OWNER_SVG_ELEMENT in node;
  var oldValue = void 0;
  // if the attribute is the style one
  // handle it differently from others
  if (name === 'style') {
    return Style(node, original, isSVG);
  }
  // the name is an event one,
  // add/remove event listeners accordingly
  else if (/^on/.test(name)) {
      var type = name.slice(2);
      if (type === CONNECTED || type === DISCONNECTED) {
        if (notObserving) {
          notObserving = false;
          observe();
        }
        components.add(node);
      } else if (name.toLowerCase() in node) {
        type = type.toLowerCase();
      }
      return function (newValue) {
        if (oldValue !== newValue) {
          if (oldValue) node.removeEventListener(type, oldValue, false);
          oldValue = newValue;
          if (newValue) node.addEventListener(type, newValue, false);
        }
      };
    }
    // the attribute is special ('value' in input)
    // and it's not SVG *or* the name is exactly data,
    // in this case assign the value directly
    else if (name === 'data' || !isSVG && name in node) {
        return function (newValue) {
          if (oldValue !== newValue) {
            oldValue = newValue;
            if (node[name] !== newValue) {
              node[name] = newValue;
              if (newValue == null) {
                node.removeAttribute(name);
              }
            }
          }
        };
      }
      // in every other case, use the attribute node as it is
      // update only the value, set it as node only when/if needed
      else {
          var owner = false;
          var attribute = original.cloneNode(true);
          return function (newValue) {
            if (oldValue !== newValue) {
              oldValue = newValue;
              if (attribute.value !== newValue) {
                if (newValue == null) {
                  if (owner) {
                    owner = false;
                    node.removeAttributeNode(attribute);
                  }
                  attribute.value = newValue;
                } else {
                  attribute.value = newValue;
                  if (!owner) {
                    owner = true;
                    node.setAttributeNode(attribute);
                  }
                }
              }
            }
          };
        }
};

// style or textareas don't accept HTML as content
// it's pointless to transform or analyze anything
// different from text there but it's worth checking
// for possible defined intents.
var Updates_setTextContent = function setTextContent(node) {
  var oldValue = void 0;
  var textContent = function textContent(value) {
    if (oldValue !== value) {
      oldValue = value;
      if ((typeof value === 'undefined' ? 'undefined' : Updates_typeof(value)) === 'object' && value) {
        if (isPromise_ish(value)) {
          value.then(textContent);
        } else if ('placeholder' in value) {
          Updates_invokeAtDistance(value, textContent);
        } else if ('text' in value) {
          textContent(String(value.text));
        } else if ('any' in value) {
          textContent(value.any);
        } else if ('html' in value) {
          textContent([].concat(value.html).join(''));
        } else if ('length' in value) {
          textContent(slice.call(value).join(''));
        } else {
          textContent(Intent.invoke(value, textContent));
        }
      } else {
        node.textContent = value == null ? '' : value;
      }
    }
  };
  return textContent;
};

/* harmony default export */ var Updates = ({ create: Updates_create, find: Updates_find });

// hyper.Components might need connected/disconnected notifications
// used by components and their onconnect/ondisconnect callbacks.
// When one of these callbacks is encountered,
// the document starts being observed.
var notObserving = true;
function observe() {

  // when hyper.Component related DOM nodes
  // are appended or removed from the live tree
  // these might listen to connected/disconnected events
  // This utility is in charge of finding all components
  // involved in the DOM update/change and dispatch
  // related information to them
  var dispatchAll = function dispatchAll(nodes, type) {
    var event = new Event(type);
    var length = nodes.length;
    for (var i = 0; i < length; i++) {
      var node = nodes[i];
      if (node.nodeType === ELEMENT_NODE) {
        dispatchTarget(node, event);
      }
    }
  };

  // the way it's done is via the components weak set
  // and recursively looking for nested components too
  var dispatchTarget = function dispatchTarget(node, event) {
    if (components.has(node)) {
      node.dispatchEvent(event);
    }

    var children = node.children;
    var length = children.length;
    for (var i = 0; i < length; i++) {
      dispatchTarget(children[i], event);
    }
  };

  // The MutationObserver is the best way to implement that
  // but there is a fallback to deprecated DOMNodeInserted/Removed
  // so that even older browsers/engines can help components life-cycle
  try {
    new MutationObserver(function (records) {
      var length = records.length;
      for (var i = 0; i < length; i++) {
        var record = records[i];
        dispatchAll(record.removedNodes, DISCONNECTED);
        dispatchAll(record.addedNodes, CONNECTED);
      }
    }).observe(document, { subtree: true, childList: true });
  } catch (o_O) {
    document.addEventListener('DOMNodeRemoved', function (event) {
      dispatchAll([event.target], DISCONNECTED);
    }, false);
    document.addEventListener('DOMNodeInserted', function (event) {
      dispatchAll([event.target], CONNECTED);
    }, false);
  }
}
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/hyper/render.js







// a weak collection of contexts that
// are already known to hyperHTML
var bewitched = new poorlyfills_WeakMap();

// the collection of all template literals
// since these are unique and immutable
// for the whole application life-cycle
var templates = new Map();

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render(template) {
  var wicked = bewitched.get(this);
  if (wicked && wicked.template === unique(template)) {
    render_update.apply(wicked.updates, arguments);
  } else {
    upgrade.apply(this, arguments);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  template = unique(template);
  var info = templates.get(template) || createTemplate.call(this, template);
  var fragment = importNode(this.ownerDocument, info.fragment);
  var updates = Updates.create(fragment, info.paths);
  bewitched.set(this, { template: template, updates: updates });
  render_update.apply(updates, arguments);
  this.textContent = '';
  this.appendChild(fragment);
}

// an update simply loops over all mapped DOM operations
function render_update() {
  var length = arguments.length;
  for (var i = 1; i < length; i++) {
    this[i - 1](arguments[i]);
  }
}

// a template can be used to create a document fragment
// aware of all interpolations and with a list
// of paths used to find once those nodes that need updates,
// no matter if these are attributes, text nodes, or regular one
function createTemplate(template) {
  var paths = [];
  var html = template.join(UIDC).replace(SC_RE, render_SC_PLACE);
  var fragment = utils_createFragment(this, html);
  Updates.find(fragment, paths, template.slice());
  var info = { fragment: fragment, paths: paths };
  templates.set(template, info);
  return info;
}

// some node could be special though, like a custom element
// with a self closing tag, which should work through these changes.
var SC_RE = selfClosing;
var render_SC_PLACE = function SC_PLACE($0, $1, $2) {
  return VOID_ELEMENTS.test($1) ? $0 : '<' + $1 + $2 + '></' + $1 + '>';
};

/* harmony default export */ var hyper_render = (render);
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/hyper/wire.js







// all wires used per each context
var wires = new poorlyfills_WeakMap();

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
var wire_wire = function wire(obj, type) {
  return obj == null ? wire_content(type || 'html') : weakly(obj, type || 'html');
};

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
var wire_content = function content(type) {
  var wire = void 0,
      container = void 0,
      content = void 0,
      template = void 0,
      updates = void 0;
  return function (statics) {
    statics = unique(statics);
    var setup = template !== statics;
    if (setup) {
      template = statics;
      content = easy_dom_fragment(document);
      container = type === 'svg' ? document.createElementNS(SVG_NAMESPACE, 'svg') : content;
      updates = hyper_render.bind(container);
    }
    updates.apply(null, arguments);
    if (setup) {
      if (type === 'svg') {
        append(content, slice.call(container.childNodes));
      }
      wire = wire_wireContent(content);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
var weakly = function weakly(obj, type) {
  var i = type.indexOf(':');
  var wire = wires.get(obj);
  var id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire) wires.set(obj, wire = {});
  return wire[id] || (wire[id] = wire_content(type));
};

// a document fragment loses its nodes as soon
// as it's appended into another node.
// This would easily lose wired content
// so that on a second render call, the parent
// node wouldn't know which node was there
// associated to the interpolation.
// To prevent hyperHTML to forget about wired nodes,
// these are either returned as Array or, if there's ony one entry,
// as single referenced node that won't disappear from the fragment.
// The initial fragment, at this point, would be used as unique reference.
var wire_wireContent = function wireContent(node) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  var wireNodes = [];
  for (var i = 0; i < length; i++) {
    var child = childNodes[i];
    if (child.nodeType === ELEMENT_NODE || trim.call(child.textContent).length !== 0) {
      wireNodes.push(child);
    }
  }
  return wireNodes.length === 1 ? wireNodes[0] : new Wire(wireNodes);
};


/* harmony default export */ var hyper_wire = (wire_wire);
// CONCATENATED MODULE: ./node_modules/hyperhtml/esm/index.js
/*! (c) Andrea Giammarchi (ISC) */







// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
var esm_bind = function bind(context) {
  return hyper_render.bind(context);
};
var define = Intent.define;

hyper.Component = Component;
hyper.bind = esm_bind;
hyper.define = define;
hyper.diff = shared_domdiff;
hyper.hyper = hyper;
hyper.wire = hyper_wire;

// the wire content is the lazy defined
// html or svg property of each hyper.Component
Component_setup(wire_content);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ? HTML == null ? wire_content('html') : typeof HTML === 'string' ? hyper.wire(null, HTML) : 'raw' in HTML ? wire_content('html')(HTML) : 'nodeType' in HTML ? hyper.bind(HTML) : weakly(HTML, 'html') : ('raw' in HTML ? wire_content('html') : hyper.wire).apply(null, arguments);
}
// EXTERNAL MODULE: ./src/base-component/index.js + 2 modules
var base_component = __webpack_require__(0);

// CONCATENATED MODULE: ./src/with-hyperHTML/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return with_hyperHTML_html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlWithContext", function() { return htmlWithContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFn", function() { return with_hyperHTML_renderFn; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 *
 * @param {object} template literal that needs to be wired
 */
var with_hyperHTML_html = function html() {
  return hyper_wire().apply(undefined, arguments);
};

var htmlWithContext = hyper_wire;

/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {HTMLElement} renderRoot defines where to render
 */
var with_hyperHTML_renderFn = function renderFn(template, renderRoot) {
  return esm_bind(renderRoot)(template);
};

/**
 * DOM rendering with HyperHTML which extendes from base custom element
 */

var with_hyperHTML_BaseCustomElementWithHyperHTML = function (_BaseCustomElement) {
  _inherits(BaseCustomElementWithHyperHTML, _BaseCustomElement);

  function BaseCustomElementWithHyperHTML() {
    _classCallCheck(this, BaseCustomElementWithHyperHTML);

    return _possibleConstructorReturn(this, (BaseCustomElementWithHyperHTML.__proto__ || Object.getPrototypeOf(BaseCustomElementWithHyperHTML)).apply(this, arguments));
  }

  _createClass(BaseCustomElementWithHyperHTML, [{
    key: 'domRender',
    get: function get() {
      var _this2 = this;

      return function () {
        return esm_bind(_this2.shadowRoot || _this2).apply(undefined, arguments);
      };
    }
  }, {
    key: 'html',
    get: function get() {
      return with_hyperHTML_html;
    }
  }, {
    key: 'htmlWithContext',
    get: function get() {
      return htmlWithContext;
    }
  }]);

  return BaseCustomElementWithHyperHTML;
}(base_component["default"]);

/* harmony default export */ var with_hyperHTML = __webpack_exports__["default"] = (with_hyperHTML_BaseCustomElementWithHyperHTML);

/***/ })
/******/ ]);
});