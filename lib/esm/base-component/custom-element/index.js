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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { DEV_FEATURE } from '../../_global-types';
import { toCamelCase } from '../../helpers';
import { BootstrapElement } from '../bootstrap-element';
import { validateRequiredAttributes } from '../validate-required-attributes';
// interface A {
//     x: any;
//   }
// Merge interface B with the abstract class declaration below.
// interface BootstrapElement<T = {}> extends HTMLElement {
//     onclick(ev: MouseEvent): void;
//     onsubmit(ev: Event): void;
// }
// Note that the 'implements A' here is optional... you can remove it if you like.
//   export abstract class B implements A {
//     y: any;
//   }
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
        _this.shouldRender = false;
        _this.isFirstRender = true;
        _this.isCreated = false;
        if (_this.constructor.withShadowDom) {
            _this.attachShadow({ mode: 'open' });
        }
        _this.willConnect();
        return _this;
    }
    Object.defineProperty(BaseUICustomElement, "is", {
        get: function () {
            return this.elementName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUICustomElement, "observedAttributes", {
        get: function () {
            if (!this.attrToProp)
                return [];
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
        this.elementName = elementName;
        customElements.define(elementName, this, options);
    };
    BaseUICustomElement.prototype.connectedCallback = function () {
        this.create();
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
        this.beforeRender();
    };
    BaseUICustomElement.prototype.handleEvent = function (e) {
        var eventType = e.type;
        var hasInstanceMethod = "on" + eventType;
        if (!this[hasInstanceMethod] || typeof this[hasInstanceMethod] !== 'function')
            return;
        this[hasInstanceMethod](e);
    };
    BaseUICustomElement.prototype.disconnectedCallback = function () {
        this.onDisconnect();
    };
    /* tslint:disable:no-empty */
    BaseUICustomElement.prototype.willConnect = function () { };
    BaseUICustomElement.prototype.onConnect = function () { };
    BaseUICustomElement.prototype.onDisconnect = function () { };
    BaseUICustomElement.prototype.didConnect = function () { };
    BaseUICustomElement.prototype.willRender = function () { };
    BaseUICustomElement.prototype.render = function (properties) { };
    BaseUICustomElement.prototype.didRender = function () { };
    /* tslint:enable:no-empty */
    BaseUICustomElement.prototype.setState = function (state, render) {
        if (render === void 0) { render = true; }
        var currentStateObj = this.state;
        var nextState = typeof state === 'function' ? state.call(this, currentStateObj) : state;
        this.state = __assign({}, this.state, nextState);
        if (render)
            this.beforeRender();
    };
    BaseUICustomElement.prototype.afterRender = function () {
        if (this.isFirstRender) {
            this.isFirstRender = false;
            this.didConnect();
        }
        this.removeAttr('is-rendering');
        this.didRender();
        if (DEV_FEATURE)
            console.timeEnd(this.elementName);
    };
    BaseUICustomElement.prototype.create = function () {
        var reflectedAttrToProps = this.constructor.attrToProp;
        // poxy attributes & observed attributes as properties
        if (reflectedAttrToProps)
            this.createAttributesToProperties(reflectedAttrToProps);
        this.isCreated = true;
        this.onConnect();
        this.beforeRender();
        this.setAttr('enhanced', '');
    };
    BaseUICustomElement.prototype.hasRequiredAttributes = function () {
        var _this = this;
        // validate required attributes before rendering
        var CTOR = this.constructor;
        var observeAttrs = CTOR.attrToProp || {};
        var requiredAttrs = Object.keys(observeAttrs)
            .filter(function (item) { return observeAttrs[item].require; })
            .reduce(function (accum, attr) {
            accum[attr] = _this[toCamelCase(attr)];
            return accum;
        }, {});
        // console.log(requiredAttrs);
        return validateRequiredAttributes({
            attrs: __assign({}, requiredAttrs),
            ele: CTOR.elementName
        });
    };
    BaseUICustomElement.prototype.beforeRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.willRender();
                        if (this.shouldRender)
                            return [2 /*return*/];
                        this.shouldRender = true;
                        // batch render all changes at once to improve performance with below microtask queue
                        return [4 /*yield*/, Promise.resolve().then(function (resolve) { return resolve; })];
                    case 1:
                        // batch render all changes at once to improve performance with below microtask queue
                        _a.sent();
                        this.shouldRender = false;
                        this.setAttr('is-rendering', '');
                        if (DEV_FEATURE)
                            console.time(this.elementName);
                        // validate all required attributes before render
                        if (this.hasRequiredAttributes())
                            this.render(this);
                        this.afterRender();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseUICustomElement.withShadowDom = false;
    return BaseUICustomElement;
}(BootstrapElement));
export default BaseUICustomElement;
//# sourceMappingURL=index.js.map