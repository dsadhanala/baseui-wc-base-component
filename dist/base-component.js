(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("base-component", [], factory);
	else if(typeof exports === 'object')
		exports["base-component"] = factory();
	else
		root["base-component"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ })
/******/ ]);
});