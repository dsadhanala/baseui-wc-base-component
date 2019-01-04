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
import { html, render, svg } from 'lit-html';
import { default as BaseUICustomElement } from '../base-component/custom-element';
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
export { html, render, svg };
// this extra function call is to keep API consistent with hyperHTML wire
export var htmlWithContext = function () { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return html.apply(void 0, args);
}; };
/**
 * DOM rendering with litHtml which extendes from base custom element
 */
var WithLitHTML = /** @class */ (function (_super) {
    __extends(WithLitHTML, _super);
    function WithLitHTML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WithLitHTML.prototype, "domRender", {
        get: function () {
            var _this = this;
            return function (template) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                }
                return render(html.apply(void 0, [template].concat(values)), _this.shadowRoot || _this);
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WithLitHTML.prototype, "html", {
        get: function () {
            return html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WithLitHTML.prototype, "svg", {
        get: function () {
            return svg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WithLitHTML.prototype, "htmlWithContext", {
        get: function () {
            return htmlWithContext;
        },
        enumerable: true,
        configurable: true
    });
    return WithLitHTML;
}(BaseUICustomElement));
export default WithLitHTML;
//# sourceMappingURL=index.js.map