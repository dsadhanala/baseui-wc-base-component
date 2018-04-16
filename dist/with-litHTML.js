(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("with-litHTML", [], factory);
	else if(typeof exports === 'object')
		exports["with-litHTML"] = factory();
	else
		root["with-litHTML"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
            this.render();
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

/***/ })
/******/ ]);
});