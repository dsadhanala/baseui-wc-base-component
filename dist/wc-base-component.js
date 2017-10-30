(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wcBaseComponent", [], factory);
	else if(typeof exports === 'object')
		exports["wcBaseComponent"] = factory();
	else
		root["wcBaseComponent"] = factory();
})(this, function() {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mixwith = mod.exports;
  }
})(this, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const _cachedApplicationRef = exports._cachedApplicationRef = Symbol('_cachedApplicationRef');

  const _mixinRef = exports._mixinRef = Symbol('_mixinRef');

  const _originalMixin = exports._originalMixin = Symbol('_originalMixin');

  const wrap = exports.wrap = (mixin, wrapper) => {
    Object.setPrototypeOf(wrapper, mixin);
    if (!mixin[_originalMixin]) {
      mixin[_originalMixin] = mixin;
    }
    return wrapper;
  };

  const Cached = exports.Cached = mixin => wrap(mixin, superclass => {
    // Get or create a symbol used to look up a previous application of mixin
    // to the class. This symbol is unique per mixin definition, so a class will have N
    // applicationRefs if it has had N mixins applied to it. A mixin will have
    // exactly one _cachedApplicationRef used to store its applications.
    let applicationRef = mixin[_cachedApplicationRef];
    if (!applicationRef) {
      applicationRef = mixin[_cachedApplicationRef] = Symbol(mixin.name);
    }
    // Look up an existing application of `mixin` to `c`, return it if found.
    if (superclass.hasOwnProperty(applicationRef)) {
      return superclass[applicationRef];
    }
    // Apply the mixin
    let application = mixin(superclass);
    // Cache the mixin application on the superclass
    superclass[applicationRef] = application;
    return application;
  });

  const HasInstance = exports.HasInstance = mixin => {
    if (Symbol.hasInstance && !mixin.hasOwnProperty(Symbol.hasInstance)) {
      Object.defineProperty(mixin, Symbol.hasInstance, {
        value: function (o) {
          const originalMixin = this[_originalMixin];
          while (o != null) {
            if (o.hasOwnProperty(_mixinRef) && o[_mixinRef] === originalMixin) {
              return true;
            }
            o = Object.getPrototypeOf(o);
          }
          return false;
        }
      });
    }
    return mixin;
  };

  const BareMixin = exports.BareMixin = mixin => wrap(mixin, superclass => {
    // Apply the mixin
    let application = mixin(superclass);

    // Attach a reference from mixin applition to wrapped mixin for RTTI
    // mixin[@@hasInstance] should use this.
    application.prototype[_mixinRef] = mixin[_originalMixin];
    return application;
  });

  const Mixin = exports.Mixin = mixin => Cached(HasInstance(BareMixin(mixin)));

  const mix = exports.mix = superClass => new MixinBuilder(superClass);

  class MixinBuilder {
    constructor(superclass) {
      this.superclass = superclass;
    }

    with() {
      return Array.from(arguments).reduce((c, m) => m(c), this.superclass);
    }

  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toHyphenCase */
/* harmony export (immutable) */ __webpack_exports__["a"] = toCamelCase;
/**
 * Converts string camelcase to hyphennated
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
function toHyphenCase(word) {
  return word.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts string hyphennated to camelcase
 * @param {string} word data that passed to the function
 * @return {string} word converted string
 */
function toCamelCase(word) {
  return word.toLowerCase().replace(/[-_]+([a-z])/g, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args[1].toUpperCase();
  });
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixwith__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixwith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mixwith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
var BootstrapElement = Object(__WEBPACK_IMPORTED_MODULE_0_mixwith__["Mixin"])(function (superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'defineProp',

            /**
             * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
             * @param {string} name attribute name
             */
            value: function defineProp(name) {
                if (!name) return;

                var classInstance = this;
                var classProto = Object.getPrototypeOf(classInstance);
                var propName = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* toCamelCase */])(name);

                if (propName in classProto) return;

                Object.defineProperty(classProto, propName, {
                    configurable: true,
                    get: function get() {
                        return Object(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* default */])(name, this.getAttribute(name));
                    },
                    set: function set(value) {
                        this.setAttribute(name, value);
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
            value: function createAttributesToProperties(attributes, observedAttributes) {
                var _this2 = this;

                // attributes to properties
                Object.keys(attributes).forEach(function (attr) {
                    var attrName = attributes[attr].name;
                    _this2.defineProp(attrName);
                });

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
        }]);

        return _class;
    }(superclass);
});

/* harmony default export */ __webpack_exports__["a"] = (BootstrapElement);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_component__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCustomElement", function() { return __WEBPACK_IMPORTED_MODULE_0__base_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_bootstrap_element__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapElement", function() { return __WEBPACK_IMPORTED_MODULE_1__mixins_bootstrap_element__["a"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lit_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixwith__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixwith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mixwith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_bootstrap_element__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * custom element base class for eap elements library, which extends from HTMLElement class
 */

var BaseCustomElement = function (_mix$with) {
    _inherits(BaseCustomElement, _mix$with);

    function BaseCustomElement() {
        _classCallCheck(this, BaseCustomElement);

        return _possibleConstructorReturn(this, (BaseCustomElement.__proto__ || Object.getPrototypeOf(BaseCustomElement)).apply(this, arguments));
    }

    _createClass(BaseCustomElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.setup();
            this.beforeRender();

            this.set('enhanced', '');
        }
    }, {
        key: 'setup',
        value: function setup() {
            var attributes = this.attributes || {};
            var observedAttributes = this.constructor.observedAttributes || [];
            this.createAttributesToProperties(attributes, observedAttributes);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            if (!oldVal || oldVal === newVal) return;
            var propName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* toCamelCase */])(attrName);
            this[propName] = newVal;

            this.props = _extends({}, this.props, _defineProperty({}, propName, newVal));

            this.renderComponent(this.props);
        }
    }, {
        key: 'beforeRender',
        value: function beforeRender() {
            this.renderComponent();
        }
    }, {
        key: 'renderComponent',
        value: function renderComponent() {
            var markup = this.constructor.getTemplate(this.props);
            if (!markup) return;

            Object(__WEBPACK_IMPORTED_MODULE_0_lit_html__["a" /* render */])(markup, this);

            this.afterRender();
        }
    }, {
        key: 'afterRender',
        value: function afterRender() {}
    }]);

    return BaseCustomElement;
}(Object(__WEBPACK_IMPORTED_MODULE_1_mixwith__["mix"])(HTMLElement).with(__WEBPACK_IMPORTED_MODULE_3__mixins_bootstrap_element__["a" /* default */]));

/* harmony default export */ __webpack_exports__["a"] = (BaseCustomElement);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export html */
/* unused harmony export svg */
/* unused harmony export TemplateResult */
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* unused harmony export TemplatePart */
/* unused harmony export Template */
/* unused harmony export getValue */
/* unused harmony export directive */
/* unused harmony export AttributePart */
/* unused harmony export NodePart */
/* unused harmony export defaultPartCallback */
/* unused harmony export TemplateInstance */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
 * TypeScript has a problem with precompiling templates literals
 * https://github.com/Microsoft/TypeScript/issues/17956
 *
 * TODO(justinfagnani): Run tests compiled to ES5 with both Babel and
 * TypeScript to verify correctness.
 */
var envCachesTemplates = function (t) {
    return t() === t();
}(function () {
    return function (s) {
        return s;
    }(_templateObject);
});
// The first argument to JS template tags retain identity across multiple
// calls to a tag for the same literal, so we can cache work done per literal
// in a Map.
var templates = new Map();
var svgTemplates = new Map();
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
var html = function html(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return litTag(strings, values, templates, false);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
var svg = function svg(strings) {
    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
    }

    return litTag(strings, values, svgTemplates, true);
};
function litTag(strings, values, templates, isSvg) {
    var key = envCachesTemplates ? strings : strings.join('{{--uniqueness-workaround--}}');
    var template = templates.get(key);
    if (template === undefined) {
        template = new Template(strings, isSvg);
        templates.set(key, template);
    }
    return new TemplateResult(template, values);
}
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
var TemplateResult = function TemplateResult(template, values) {
    _classCallCheck(this, TemplateResult);

    this.template = template;
    this.values = values;
};
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 */
function render(result, container) {
    var partCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPartCallback;

    var instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === result.template && instance._partCallback === partCallback) {
        instance.update(result.values);
        return;
    }
    // First render, create a new TemplateInstance and append it
    instance = new TemplateInstance(result.template, partCallback);
    container.__templateInstance = instance;
    var fragment = instance._clone();
    instance.update(result.values);
    var child = void 0;
    while (child = container.lastChild) {
        container.removeChild(child);
    }
    container.appendChild(fragment);
}
/**
 * An expression marker with embedded unique key to avoid
 * https://github.com/PolymerLabs/lit-html/issues/62
 */
var attributeMarker = '{{lit-' + Math.random() + '}}';
/**
 * Regex to scan the string preceding an expression to see if we're in a text
 * context, and not an attribute context.
 *
 * This works by seeing if we have a `>` not followed by a `<`. If there is a
 * `<` closer to the end of the strings, then we're inside a tag.
 */
var textRegex = />[^<]*$/;
var hasTagsRegex = /[^<]*/;
var textMarkerContent = '_-lit-html-_';
var textMarker = '<!--' + textMarkerContent + '-->';
var attrOrTextRegex = new RegExp(attributeMarker + '|' + textMarker);
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
var Template = function () {
    function Template(strings) {
        var svg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Template);

        this.parts = [];
        this.svg = svg;
        this.element = document.createElement('template');
        this.element.innerHTML = this._getHtml(strings, svg);
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        var walker = document.createTreeWalker(this.element.content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
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
                    for (var i = 0; i < attributes.length; i++) {
                        var attribute = attributes.item(i);
                        var attributeStrings = attribute.value.split(attrOrTextRegex);
                        if (attributeStrings.length > 1) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute attribute
                            var attributeString = strings[partIndex];
                            // Trim the trailing literal value if this is an interpolation
                            var rawNameString = attributeString.substring(0, attributeString.length - attributeStrings[0].length);
                            // Find the attribute name
                            var rawName = rawNameString.match(/((?:\w|[.\-_$])+)=["']?$/)[1];
                            this.parts.push(new TemplatePart('attribute', index, attribute.name, rawName, attributeStrings));
                            node.removeAttribute(attribute.name);
                            partIndex += attributeStrings.length - 1;
                            i--;
                        }
                    }
                } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    var nodeValue = node.nodeValue;
                    var _strings = nodeValue.split(attributeMarker);
                    if (_strings.length > 1) {
                        var parent = node.parentNode;
                        var lastIndex = _strings.length - 1;
                        // We have a part for each match found
                        partIndex += lastIndex;
                        // We keep this current node, but reset its content to the last
                        // literal part. We insert new literal nodes before this so that the
                        // tree walker keeps its position correctly.
                        node.textContent = _strings[lastIndex];
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (var _i = 0; _i < lastIndex; _i++) {
                            parent.insertBefore(document.createTextNode(_strings[_i]), node);
                            this.parts.push(new TemplatePart('node', index++));
                        }
                    } else {
                        // Strip whitespace-only nodes, only between elements, or at the
                        // beginning or end of elements.
                        var previousSibling = node.previousSibling;
                        var nextSibling = node.nextSibling;
                        if ((previousSibling === null || previousSibling.nodeType === 1 /* Node.ELEMENT_NODE */) && (nextSibling === null || nextSibling.nodeType === 1 /* Node.ELEMENT_NODE */) && nodeValue.trim() === '') {
                            nodesToRemove.push(node);
                            currentNode = previousNode;
                            index--;
                        }
                    }
                } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === textMarkerContent) {
                var _parent = node.parentNode;
                // If we don't have a previous node add a marker node.
                // If the previousSibling is removed, because it's another part
                // placholder, or empty text, add a marker node.
                if (node.previousSibling === null || node.previousSibling !== previousNode) {
                    _parent.insertBefore(new Text(), node);
                } else {
                    index--;
                }
                this.parts.push(new TemplatePart('node', index++));
                nodesToRemove.push(node);
                // If we don't have a next node add a marker node.
                // We don't have to check if the next node is going to be removed,
                // because that node will induce a marker if so.
                if (node.nextSibling === null) {
                    _parent.insertBefore(new Text(), node);
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
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */


    _createClass(Template, [{
        key: '_getHtml',
        value: function _getHtml(strings, svg) {
            var l = strings.length;
            var a = [];
            var isTextBinding = false;
            for (var i = 0; i < l - 1; i++) {
                var s = strings[i];
                a.push(s);
                // We're in a text position if the previous string matches the
                // textRegex. If it doesn't and the previous string has no tags, then
                // we use the previous text position state.
                isTextBinding = s.match(textRegex) !== null || s.match(hasTagsRegex) !== null && isTextBinding;
                a.push(isTextBinding ? textMarker : attributeMarker);
            }
            a.push(strings[l - 1]);
            var html = a.join('');
            return svg ? '<svg>' + html + '</svg>' : html;
        }
    }]);

    return Template;
}();
var getValue = function getValue(part, value) {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (value != null && value.__litDirective === true) {
        value = value(part);
    }
    return value === null ? undefined : value;
};
var directive = function directive(f) {
    f.__litDirective = true;
    return f;
};
var AttributePart = function () {
    function AttributePart(instance, element, name, strings) {
        _classCallCheck(this, AttributePart);

        this.instance = instance;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.size = strings.length - 1;
    }

    _createClass(AttributePart, [{
        key: 'setValue',
        value: function setValue(values, startIndex) {
            var strings = this.strings;
            var text = '';
            for (var i = 0; i < strings.length; i++) {
                text += strings[i];
                if (i < strings.length - 1) {
                    var v = getValue(this, values[startIndex + i]);
                    if (v && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
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
            }
            this.element.setAttribute(this.name, text);
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
            if (value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function')) {
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
            this.clear();
            this._insert(value);
            this._previousValue = value;
        }
    }, {
        key: '_setText',
        value: function _setText(value) {
            var node = this.startNode.nextSibling;
            if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if _previousValue is
                // primitive?
                node.textContent = value;
            } else {
                this._setNode(document.createTextNode(value === undefined ? '' : value));
            }
            this._previousValue = value;
        }
    }, {
        key: '_setTemplateResult',
        value: function _setTemplateResult(value) {
            var instance = void 0;
            if (this._previousValue && this._previousValue.template === value.template) {
                instance = this._previousValue;
            } else {
                instance = new TemplateInstance(value.template, this.instance._partCallback);
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
            var _this = this;

            value.then(function (v) {
                if (_this._previousValue === value) {
                    _this.setValue(v);
                }
            });
            this._previousValue = value;
        }
    }, {
        key: 'clear',
        value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

            var node = void 0;
            while ((node = startNode.nextSibling) !== this.endNode) {
                node.parentNode.removeChild(node);
            }
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
    function TemplateInstance(template) {
        var partCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPartCallback;

        _classCallCheck(this, TemplateInstance);

        this._parts = [];
        this.template = template;
        this._partCallback = partCallback;
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
            if (this.template.parts.length > 0) {
                // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                // null
                var _walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT */, null, false);
                var parts = this.template.parts;
                var _index = 0;
                var _partIndex = 0;
                var templatePart = parts[0];
                var node = _walker.nextNode();
                while (node != null && _partIndex < parts.length) {
                    if (_index === templatePart.index) {
                        this._parts.push(this._partCallback(this, templatePart, node));
                        templatePart = parts[++_partIndex];
                    } else {
                        _index++;
                        node = _walker.nextNode();
                    }
                }
            }
            if (this.template.svg) {
                var svgElement = fragment.firstChild;
                fragment.removeChild(svgElement);
                var nodes = svgElement.childNodes;
                for (var i = 0; i < nodes.length; i++) {
                    fragment.appendChild(nodes.item(i));
                }
            }
            return fragment;
        }
    }]);

    return TemplateInstance;
}();
//# sourceMappingURL=lit-html.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * serialize attribute value from string to number/object/boolean/null or string
 * this also checks if the given attribute is a boolean attribute(named as `has-*`) without value, then returns as boolean
 * @param {string} attrName key/name of the attribute
 * @param {string} value of the attribute that needs to be serialize
 * @return {any} based on the type of the given value, it will be parsed and sent as that type
 */
function serializeAttrValue(attrName, value) {
    var isObjOrArray = /^[{|[]/g.test(value);
    var hasBooleanAttr = /^has-/g.test(attrName);
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

    // check for has-* attributes
    if (hasBooleanAttr) {
        updatedValue = hasBooleanAttr;
    }

    return updatedValue;
}

/* harmony default export */ __webpack_exports__["a"] = (serializeAttrValue);

/***/ })
/******/ ]);
});