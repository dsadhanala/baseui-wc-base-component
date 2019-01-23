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
import { bind, wire } from 'hyperhtml/esm';
import { default as BaseUICustomElement } from '../base-component/custom-element';
/**
 *
 * @param {array} template literal that needs to be wired
 */
export var html = function (template) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return wire().apply(void 0, [template].concat(values));
};
/**
 *
 * To render and update nodes multiple times, bind object as context
 * ex: `items.map(item => htmlWithContext(item)`<li>${item.val}</li>`);`
 * here each item is bound as context to avoid rerendering same template
 */
export var htmlWithContext = wire;
/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {HTMLElement} renderRoot defines where to render
 */
export var renderFn = function (template, renderRoot) { return bind(renderRoot)(template); };
/**
 * DOM rendering with HyperHTML which extendes from base custom element
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Component.prototype, "domRender", {
        get: function () {
            var _this = this;
            return function (template) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                }
                return bind(_this.shadowRoot || _this).apply(void 0, [template].concat(values));
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "html", {
        get: function () {
            return html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "htmlWithContext", {
        get: function () {
            return htmlWithContext;
        },
        enumerable: true,
        configurable: true
    });
    return Component;
}(BaseUICustomElement));
export { Component };
export default {
    Component: Component,
    html: html,
    htmlWithContext: htmlWithContext
};
//# sourceMappingURL=index.js.map