(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
var templateCaches = new Map();
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
var lit_html_html = function html(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(strings, values, 'html');
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
var lit_html_svg = function svg(strings) {
    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
    }

    return new SVGTemplateResult(strings, values, 'svg');
};
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult = function () {
    function TemplateResult(strings, values, type) {
        var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;

        _classCallCheck(this, TemplateResult);

        this.strings = strings;
        this.values = values;
        this.type = type;
        this.partCallback = partCallback;
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */


    _createClass(TemplateResult, [{
        key: 'getHTML',
        value: function getHTML() {
            var l = this.strings.length - 1;
            var html = '';
            var isTextBinding = true;
            for (var i = 0; i < l; i++) {
                var s = this.strings[i];
                html += s;
                // We're in a text position if the previous string closed its tags.
                // If it doesn't have any tags, then we use the previous text position
                // state.
                var closing = findTagClose(s);
                isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
                html += isTextBinding ? nodeMarker : marker;
            }
            html += this.strings[l];
            return html;
        }
    }, {
        key: 'getTemplateElement',
        value: function getTemplateElement() {
            var template = document.createElement('template');
            template.innerHTML = this.getHTML();
            return template;
        }
    }]);

    return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an <svg> tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the <svg> tag so that
 * clones only container the original fragment.
 */
var SVGTemplateResult = function (_TemplateResult) {
    _inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
        _classCallCheck(this, SVGTemplateResult);

        return _possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
    }

    _createClass(SVGTemplateResult, [{
        key: 'getHTML',
        value: function getHTML() {
            return '<svg>' + _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
        }
    }, {
        key: 'getTemplateElement',
        value: function getTemplateElement() {
            var template = _get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
            var content = template.content;
            var svgElement = content.firstChild;
            content.removeChild(svgElement);
            reparentNodes(content, svgElement.firstChild);
            return template;
        }
    }]);

    return SVGTemplateResult;
}(TemplateResult);
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function defaultTemplateFactory(result) {
    var templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = new Map();
        templateCaches.set(result.type, templateCache);
    }
    var template = templateCache.get(result.strings);
    if (template === undefined) {
        template = new Template(result, result.getTemplateElement());
        templateCache.set(result.strings, template);
    }
    return template;
}
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param templateFactory a function to create a Template or retreive one from
 *     cache.
 */
function render(result, container) {
    var templateFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTemplateFactory;

    var template = templateFactory(result);
    var instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance = new TemplateInstance(template, result.partCallback, templateFactory);
    container.__templateInstance = instance;
    var fragment = instance._clone();
    instance.update(result.values);
    removeNodes(container, container.firstChild);
    container.appendChild(fragment);
}
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
/**
 * An expression marker used text-posisitions, not attribute positions,
 * in template.
 */
var nodeMarker = '<!--' + marker + '-->';
var markerRegex = new RegExp(marker + '|' + nodeMarker);
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
/**
 * Finds the closing index of the last closed HTML tag.
 * This has 3 possible return values:
 *   - `-1`, meaning there is no tag in str.
 *   - `string.length`, meaning the last opened tag is unclosed.
 *   - Some positive number < str.length, meaning the index of the closing '>'.
 */
function findTagClose(str) {
    var close = str.lastIndexOf('>');
    var open = str.indexOf('<', close + 1);
    return open > -1 ? str.length : close;
}
/**
 * A placeholder for a dynamic expression in an HTML template.
 *
 * There are two built-in part types: AttributePart and NodePart. NodeParts
 * always represent a single dynamic expression, while AttributeParts may
 * represent as many expressions are contained in the attribute.
 *
 * A Template's parts are mutable, so parts can be replaced or modified
 * (possibly to implement different template semantics). The contract is that
 * parts can only be replaced, not removed, added or reordered, and parts must
 * always consume the correct number of values in their `update()` method.
 *
 * TODO(justinfagnani): That requirement is a little fragile. A
 * TemplateInstance could instead be more careful about which values it gives
 * to Part.update().
 */
var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
    _classCallCheck(this, TemplatePart);

    this.type = type;
    this.index = index;
    this.name = name;
    this.rawName = rawName;
    this.strings = strings;
};
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
var Template = function Template(result, element) {
    _classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var content = this.element.content;
    // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
    var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                        NodeFilter.SHOW_TEXT */, null, false);
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];
    // The actual previous node, accounting for removals: if a node is removed
    // it will never be the previousNode.
    var previousNode = void 0;
    // Used to set previousNode at the top of the loop.
    var currentNode = void 0;
    while (walker.nextNode()) {
        index++;
        previousNode = currentNode;
        var node = currentNode = walker.currentNode;
        if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (!node.hasAttributes()) {
                    continue;
                }
                var attributes = node.attributes;
                // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                // attributes are not guaranteed to be returned in document order. In
                // particular, Edge/IE can return them out of order, so we cannot assume
                // a correspondance between part index and attribute index.
                var count = 0;
                for (var i = 0; i < attributes.length; i++) {
                    if (attributes[i].value.indexOf(marker) >= 0) {
                        count++;
                    }
                }
                while (count-- > 0) {
                    // Get the template literal section leading up to the first
                    // expression in this attribute attribute
                    var stringForPart = result.strings[partIndex];
                    // Find the attribute name
                    var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                    // Find the corresponding attribute
                    var attribute = attributes.getNamedItem(attributeNameInPart);
                    var stringsForAttributeValue = attribute.value.split(markerRegex);
                    this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                    node.removeAttribute(attribute.name);
                    partIndex += stringsForAttributeValue.length - 1;
                }
            } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                var nodeValue = node.nodeValue;
                if (nodeValue.indexOf(marker) < 0) {
                    continue;
                }
                var parent = node.parentNode;
                var strings = nodeValue.split(markerRegex);
                var lastIndex = strings.length - 1;
                // We have a part for each match found
                partIndex += lastIndex;
                // We keep this current node, but reset its content to the last
                // literal part. We insert new literal nodes before this so that the
                // tree walker keeps its position correctly.
                node.textContent = strings[lastIndex];
                // Generate a new text node for each literal section
                // These nodes are also used as the markers for node parts
                for (var _i = 0; _i < lastIndex; _i++) {
                    parent.insertBefore(document.createTextNode(strings[_i]), node);
                    this.parts.push(new TemplatePart('node', index++));
                }
            } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === marker) {
            var _parent = node.parentNode;
            // Add a new marker node to be the startNode of the Part if any of the
            // following are true:
            //  * We don't have a previousSibling
            //  * previousSibling is being removed (thus it's not the
            //    `previousNode`)
            //  * previousSibling is not a Text node
            //
            // TODO(justinfagnani): We should be able to use the previousNode here
            // as the marker node and reduce the number of extra nodes we add to a
            // template. See https://github.com/PolymerLabs/lit-html/issues/147
            var previousSibling = node.previousSibling;
            if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
                _parent.insertBefore(document.createTextNode(''), node);
            } else {
                index--;
            }
            this.parts.push(new TemplatePart('node', index++));
            nodesToRemove.push(node);
            // If we don't have a nextSibling add a marker node.
            // We don't have to check if the next node is going to be removed,
            // because that node will induce a new marker if so.
            if (node.nextSibling === null) {
                _parent.insertBefore(document.createTextNode(''), node);
            } else {
                index--;
            }
            currentNode = previousNode;
            partIndex++;
        }
    }
    // Remove text binding nodes after the walk to not disturb the TreeWalker
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            n.parentNode.removeChild(n);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
/**
 * Returns a value ready to be inserted into a Part from a user-provided value.
 *
 * If the user value is a directive, this invokes the directive with the given
 * part. If the value is null, it's converted to undefined to work better
 * with certain DOM APIs, like textContent.
 */
var getValue = function getValue(part, value) {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (isDirective(value)) {
        value = value(part);
        return directiveValue;
    }
    return value === null ? undefined : value;
};
var directive = function directive(f) {
    f.__litDirective = true;
    return f;
};
var isDirective = function isDirective(o) {
    return typeof o === 'function' && o.__litDirective === true;
};
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var directiveValue = {};
var isPrimitiveValue = function isPrimitiveValue(value) {
    return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
};
var AttributePart = function () {
    function AttributePart(instance, element, name, strings) {
        _classCallCheck(this, AttributePart);

        this.instance = instance;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.size = strings.length - 1;
        this._previousValues = [];
    }

    _createClass(AttributePart, [{
        key: '_interpolate',
        value: function _interpolate(values, startIndex) {
            var strings = this.strings;
            var l = strings.length - 1;
            var text = '';
            for (var i = 0; i < l; i++) {
                text += strings[i];
                var v = getValue(this, values[startIndex + i]);
                if (v && v !== directiveValue && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var t = _step2.value;

                            // TODO: we need to recursively call getValue into iterables...
                            text += t;
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                } else {
                    text += v;
                }
            }
            return text + strings[l];
        }
    }, {
        key: '_equalToPreviousValues',
        value: function _equalToPreviousValues(values, startIndex) {
            for (var i = startIndex; i < startIndex + this.size; i++) {
                if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'setValue',
        value: function setValue(values, startIndex) {
            if (this._equalToPreviousValues(values, startIndex)) {
                return;
            }
            var s = this.strings;
            var value = void 0;
            if (s.length === 2 && s[0] === '' && s[1] === '') {
                // An expression that occupies the whole attribute value will leave
                // leading and trailing empty strings.
                value = getValue(this, values[startIndex]);
                if (Array.isArray(value)) {
                    value = value.join('');
                }
            } else {
                value = this._interpolate(values, startIndex);
            }
            if (value !== directiveValue) {
                this.element.setAttribute(this.name, value);
            }
            this._previousValues = values;
        }
    }]);

    return AttributePart;
}();
var NodePart = function () {
    function NodePart(instance, startNode, endNode) {
        _classCallCheck(this, NodePart);

        this.instance = instance;
        this.startNode = startNode;
        this.endNode = endNode;
        this._previousValue = undefined;
    }

    _createClass(NodePart, [{
        key: 'setValue',
        value: function setValue(value) {
            value = getValue(this, value);
            if (value === directiveValue) {
                return;
            }
            if (isPrimitiveValue(value)) {
                // Handle primitive values
                // If the value didn't change, do nothing
                if (value === this._previousValue) {
                    return;
                }
                this._setText(value);
            } else if (value instanceof TemplateResult) {
                this._setTemplateResult(value);
            } else if (Array.isArray(value) || value[Symbol.iterator]) {
                this._setIterable(value);
            } else if (value instanceof Node) {
                this._setNode(value);
            } else if (value.then !== undefined) {
                this._setPromise(value);
            } else {
                // Fallback, will render the string representation
                this._setText(value);
            }
        }
    }, {
        key: '_insert',
        value: function _insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
    }, {
        key: '_setNode',
        value: function _setNode(value) {
            if (this._previousValue === value) {
                return;
            }
            this.clear();
            this._insert(value);
            this._previousValue = value;
        }
    }, {
        key: '_setText',
        value: function _setText(value) {
            var node = this.startNode.nextSibling;
            value = value === undefined ? '' : value;
            if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if _previousValue is
                // primitive?
                node.textContent = value;
            } else {
                this._setNode(document.createTextNode(value));
            }
            this._previousValue = value;
        }
    }, {
        key: '_setTemplateResult',
        value: function _setTemplateResult(value) {
            var template = this.instance._getTemplate(value);
            var instance = void 0;
            if (this._previousValue && this._previousValue.template === template) {
                instance = this._previousValue;
            } else {
                instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
                this._setNode(instance._clone());
                this._previousValue = instance;
            }
            instance.update(value.values);
        }
    }, {
        key: '_setIterable',
        value: function _setIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _previousValue is an array, then the previous render was of an
            // iterable and _previousValue will contain the NodeParts from the previous
            // render. If _previousValue is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this._previousValue)) {
                this.clear();
                this._previousValue = [];
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            var itemParts = this._previousValue;
            var partIndex = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;

                    // Try to reuse an existing part
                    var itemPart = itemParts[partIndex];
                    // If no existing part, create a new one
                    if (itemPart === undefined) {
                        // If we're creating the first item part, it's startNode should be the
                        // container's startNode
                        var itemStart = this.startNode;
                        // If we're not creating the first part, create a new separator marker
                        // node, and fix up the previous part's endNode to point to it
                        if (partIndex > 0) {
                            var previousPart = itemParts[partIndex - 1];
                            itemStart = previousPart.endNode = document.createTextNode('');
                            this._insert(itemStart);
                        }
                        itemPart = new NodePart(this.instance, itemStart, this.endNode);
                        itemParts.push(itemPart);
                    }
                    itemPart.setValue(item);
                    partIndex++;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (partIndex === 0) {
                this.clear();
                this._previousValue = undefined;
            } else if (partIndex < itemParts.length) {
                var lastPart = itemParts[partIndex - 1];
                // Truncate the parts array so _previousValue reflects the current state
                itemParts.length = partIndex;
                this.clear(lastPart.endNode.previousSibling);
                lastPart.endNode = this.endNode;
            }
        }
    }, {
        key: '_setPromise',
        value: function _setPromise(value) {
            var _this2 = this;

            this._previousValue = value;
            value.then(function (v) {
                if (_this2._previousValue === value) {
                    _this2.setValue(v);
                }
            });
        }
    }, {
        key: 'clear',
        value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }]);

    return NodePart;
}();
var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
        return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    } else if (templatePart.type === 'node') {
        return new NodePart(instance, node, node.nextSibling);
    }
    throw new Error('Unknown part type ' + templatePart.type);
};
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
var TemplateInstance = function () {
    function TemplateInstance(template, partCallback, getTemplate) {
        _classCallCheck(this, TemplateInstance);

        this._parts = [];
        this.template = template;
        this._partCallback = partCallback;
        this._getTemplate = getTemplate;
    }

    _createClass(TemplateInstance, [{
        key: 'update',
        value: function update(values) {
            var valueIndex = 0;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this._parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var part = _step4.value;

                    if (part.size === undefined) {
                        part.setValue(values[valueIndex]);
                        valueIndex++;
                    } else {
                        part.setValue(values, valueIndex);
                        valueIndex += part.size;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }, {
        key: '_clone',
        value: function _clone() {
            var fragment = document.importNode(this.template.element.content, true);
            var parts = this.template.parts;
            if (parts.length > 0) {
                // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                // null
                var _walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                                      NodeFilter.SHOW_TEXT */, null, false);
                var _index = -1;
                for (var i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    while (_index < part.index) {
                        _index++;
                        _walker.nextNode();
                    }
                    this._parts.push(this._partCallback(this, part, _walker.currentNode));
                }
            }
            return fragment;
        }
    }]);

    return TemplateInstance;
}();
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var node = start;
    while (node !== end) {
        var n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
var removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var node = startNode;
    while (node !== endNode) {
        var n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
//# sourceMappingURL=lit-html.js.map
// CONCATENATED MODULE: ./node_modules/lit-html/lib/lit-extended.js
var lit_extended_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function lit_extended_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lit_extended_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function lit_extended_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


/**
 * Interprets a template literal as a lit-extended HTML template.
 */
var lit_extended_html = function html(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(strings, values, 'html', lit_extended_extendedPartCallback);
};
/**
 * Interprets a template literal as a lit-extended SVG template.
 */
var lit_extended_svg = function svg(strings) {
    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
    }

    return new SVGTemplateResult(strings, values, 'svg', lit_extended_extendedPartCallback);
};
/**
 * A PartCallback which allows templates to set properties and declarative
 * event handlers.
 *
 * Properties are set by default, instead of attributes. Attribute names in
 * lit-html templates preserve case, so properties are case sensitive. If an
 * expression takes up an entire attribute value, then the property is set to
 * that value. If an expression is interpolated with a string or other
 * expressions then the property is set to the string result of the
 * interpolation.
 *
 * To set an attribute instead of a property, append a `$` suffix to the
 * attribute name.
 *
 * Example:
 *
 *     html`<button class$="primary">Buy Now</button>`
 *
 * To set an event handler, prefix the attribute name with `on-`:
 *
 * Example:
 *
 *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
 *
 */
var lit_extended_extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
        if (templatePart.rawName.startsWith('on-')) {
            var eventName = templatePart.rawName.slice(3);
            return new lit_extended_EventPart(instance, node, eventName);
        }
        if (templatePart.name.endsWith('$')) {
            var name = templatePart.name.slice(0, -1);
            return new AttributePart(instance, node, name, templatePart.strings);
        }
        if (templatePart.name.endsWith('?')) {
            var _name = templatePart.name.slice(0, -1);
            return new lit_extended_BooleanAttributePart(instance, node, _name, templatePart.strings);
        }
        return new lit_extended_PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
    }
    return defaultPartCallback(instance, templatePart, node);
};
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
var lit_extended_BooleanAttributePart = function (_AttributePart) {
    lit_extended_inherits(BooleanAttributePart, _AttributePart);

    function BooleanAttributePart() {
        lit_extended_classCallCheck(this, BooleanAttributePart);

        return lit_extended_possibleConstructorReturn(this, (BooleanAttributePart.__proto__ || Object.getPrototypeOf(BooleanAttributePart)).apply(this, arguments));
    }

    lit_extended_createClass(BooleanAttributePart, [{
        key: 'setValue',
        value: function setValue(values, startIndex) {
            var s = this.strings;
            if (s.length === 2 && s[0] === '' && s[1] === '') {
                var value = getValue(this, values[startIndex]);
                if (value === directiveValue) {
                    return;
                }
                if (value) {
                    this.element.setAttribute(this.name, '');
                } else {
                    this.element.removeAttribute(this.name);
                }
            } else {
                throw new Error('boolean attributes can only contain a single expression');
            }
        }
    }]);

    return BooleanAttributePart;
}(AttributePart);
var lit_extended_PropertyPart = function (_AttributePart2) {
    lit_extended_inherits(PropertyPart, _AttributePart2);

    function PropertyPart() {
        lit_extended_classCallCheck(this, PropertyPart);

        return lit_extended_possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
    }

    lit_extended_createClass(PropertyPart, [{
        key: 'setValue',
        value: function setValue(values, startIndex) {
            var s = this.strings;
            var value = void 0;
            if (this._equalToPreviousValues(values, startIndex)) {
                return;
            }
            if (s.length === 2 && s[0] === '' && s[1] === '') {
                // An expression that occupies the whole attribute value will leave
                // leading and trailing empty strings.
                value = getValue(this, values[startIndex]);
            } else {
                // Interpolation, so interpolate
                value = this._interpolate(values, startIndex);
            }
            if (value !== directiveValue) {
                this.element[this.name] = value;
            }
            this._previousValues = values;
        }
    }]);

    return PropertyPart;
}(AttributePart);
var lit_extended_EventPart = function () {
    function EventPart(instance, element, eventName) {
        lit_extended_classCallCheck(this, EventPart);

        this.instance = instance;
        this.element = element;
        this.eventName = eventName;
    }

    lit_extended_createClass(EventPart, [{
        key: 'setValue',
        value: function setValue(value) {
            var listener = getValue(this, value);
            var previous = this._listener;
            if (listener === previous) {
                return;
            }
            this._listener = listener;
            if (previous != null) {
                this.element.removeEventListener(this.eventName, previous);
            }
            if (listener != null) {
                this.element.addEventListener(this.eventName, listener);
            }
        }
    }]);

    return EventPart;
}();
//# sourceMappingURL=lit-extended.js.map
// EXTERNAL MODULE: ./src/base-component/index.js + 2 modules
var base_component = __webpack_require__(0);

// CONCATENATED MODULE: ./src/with-litHTML/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlWithContext", function() { return with_litHTML_htmlWithContext; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "html", function() { return lit_extended_html; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "renderFn", function() { return render; });
var with_litHTML_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function with_litHTML_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function with_litHTML_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function with_litHTML_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * html(template)
 * *** @param {object} template literal which needs to be wired
 *
 * renderFn((template, renderRoot)
 * *** @param {object} template literal that needs to be rendered
 * *** @param {*} renderRoot defines where to render
 */


// this extra function call is to keep API consistent with hyperHTML wire
var with_litHTML_htmlWithContext = function htmlWithContext() {
  return function () {
    return lit_extended_html.apply(undefined, arguments);
  };
};

/**
 * DOM rendering with litHtml which extendes from base custom element
 */

var with_litHTML_BaseCustomElementWithLitHTML = function (_BaseCustomElement) {
  with_litHTML_inherits(BaseCustomElementWithLitHTML, _BaseCustomElement);

  function BaseCustomElementWithLitHTML() {
    with_litHTML_classCallCheck(this, BaseCustomElementWithLitHTML);

    return with_litHTML_possibleConstructorReturn(this, (BaseCustomElementWithLitHTML.__proto__ || Object.getPrototypeOf(BaseCustomElementWithLitHTML)).apply(this, arguments));
  }

  with_litHTML_createClass(BaseCustomElementWithLitHTML, [{
    key: 'domRender',
    get: function get() {
      var _this2 = this;

      return function () {
        return render(lit_extended_html.apply(undefined, arguments), _this2.shadowRoot || _this2);
      };
    }
  }, {
    key: 'html',
    get: function get() {
      return lit_extended_html;
    }
  }, {
    key: 'htmlWithContext',
    get: function get() {
      return with_litHTML_htmlWithContext;
    }
  }]);

  return BaseCustomElementWithLitHTML;
}(base_component["default"]);

/* harmony default export */ var with_litHTML = __webpack_exports__["default"] = (with_litHTML_BaseCustomElementWithLitHTML);

/***/ }),
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function throwError(reason) {
    var newErr = new Error(reason);

    return function (e) {
        newErr.originalError = e;
        throw newErr;
    };
}

/* harmony default export */ __webpack_exports__["default"] = (throwError);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_component_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _base_component_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _with_hyperHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withHyperHTML", function() { return _with_hyperHTML__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlHyper", function() { return _with_hyperHTML__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony import */ var _with_litHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLitHTML", function() { return _with_litHTML__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlLit", function() { return _with_litHTML__WEBPACK_IMPORTED_MODULE_2__["html"]; });

/* harmony import */ var _throw_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _throw_error__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })
/******/ ]);
});