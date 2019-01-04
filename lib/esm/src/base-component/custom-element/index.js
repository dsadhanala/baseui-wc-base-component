var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { default as BootstrapElement } from '../bootstrap';
import { toCamelCase } from '../helpers';
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
var BaseUICustomElement = /** @class */ (function (_super) {
    __extends(BaseUICustomElement, _super);
    function BaseUICustomElement() {
        var _this = _super.call(this) || this;
        _this.isFirstRender = true;
        _this.isCreated = false;
        _this.create = _this.create.bind(_this);
        var CLASS = _this.constructor;
        var props = CLASS.attrToProp;
        // console.log('cons', props);
        if (CLASS.withShadowDom) {
            _this.attachShadow({ mode: 'open' });
        }
        _this.willConnect();
        return _this;
    }
    Object.defineProperty(BaseUICustomElement, "is", {
        get: function () {
            return this.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUICustomElement, "observedAttributes", {
        get: function () {
            // console.log('observedAttributes');
            var observeAttrs = this.attrToProp;
            return Object.keys(observeAttrs).filter(function (item) { return observeAttrs[item].observe; });
        },
        enumerable: true,
        configurable: true
    });
    BaseUICustomElement.define = function (elementName, options) {
        var customElements = window.customElements;
        var isElementExist = customElements.get(elementName);
        if (isElementExist)
            return;
        this.element = elementName;
        customElements.define(elementName, this, options);
    };
    BaseUICustomElement.prototype.connectedCallback = function () {
        // delay execution of connectedCallback to make sure dynamic data added to the attributes are available to consume
        window.requestAnimationFrame(this.create);
    };
    BaseUICustomElement.prototype.attributeChangedCallback = function (attrName, oldVal, newVal) {
        /**
         * to optimize and avoid unnecessary re-rendering when attribte values changed
         * this condition checks for below three things
         * {isCreated} check if element connected, if no, avoid re-render
         * {oldVal === newVal} check if current and new value for this attribute are same, if yes, then avoid re-render
         */
        if (!this.isCreated || oldVal === newVal)
            return;
        var propName = toCamelCase(attrName);
        /**
         * check if attribute changed due to removeAttribute or change of value
         * if removed, delete property set on element instance
         * else, update property with the new value
         */
        if (newVal === null) {
            delete this[propName];
        }
        else {
            this[propName] = newVal;
        }
        this.beforeRender();
    };
    /* tslint:disable:no-empty */
    BaseUICustomElement.prototype.willConnect = function () { };
    BaseUICustomElement.prototype.onConnect = function () { };
    BaseUICustomElement.prototype.willRender = function () { };
    BaseUICustomElement.prototype.didRender = function () { };
    BaseUICustomElement.prototype.didConnect = function () { };
    /* tslint:enable:no-empty */
    BaseUICustomElement.prototype.handleEvent = function (e) {
        var hasInstanceMethod = "on" + e.type;
        if (!this[hasInstanceMethod] || typeof this[hasInstanceMethod] !== 'function')
            return;
        this[hasInstanceMethod](e);
    };
    /* tslint:disable:no-empty */
    BaseUICustomElement.prototype.render = function () { };
    /* tslint:enable:no-empty */
    BaseUICustomElement.prototype.setState = function (state, render) {
        if (render === void 0) { render = true; }
        var currentStateObj = this.state;
        var nextState = typeof state === 'function' ? state.call(this, currentStateObj) : state;
        this.state = __assign({}, this.state, nextState);
        if (render)
            this.beforeRender();
    };
    BaseUICustomElement.prototype.create = function () {
        var attributes = this.attributes;
        var CLASS = this.constructor;
        // poxy attributes & observed attributes as properties
        this.createAttributesToProperties(attributes, CLASS.observedAttributes);
        this.isCreated = true;
        this.onConnect();
        this.beforeRender();
        this.setAttr('enhanced', '');
    };
    BaseUICustomElement.prototype.beforeRender = function () {
        this.willRender();
        this.setAttr('is-rendering', '');
        this.render();
        this.afterRender();
    };
    BaseUICustomElement.prototype.afterRender = function () {
        if (this.isFirstRender) {
            this.isFirstRender = false;
            this.didConnect();
        }
        this.removeAttr('is-rendering');
        this.didRender();
    };
    BaseUICustomElement.withShadowDom = false;
    return BaseUICustomElement;
}(BootstrapElement));
export default BaseUICustomElement;
//# sourceMappingURL=index.js.map