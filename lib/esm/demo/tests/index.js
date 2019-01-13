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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { default as WithHyperHTML } from '@rootSrc/with-hyperHTML/index.ts';
// interface HeaderTextHyper {
//     text: String;
//     isBoolean: Boolean;
//     isNumber: Number;
//     newAttr: String;
//     checkValue: Number;
//     // onClick(e: Event): void;
// }
var HeaderTextHyper = /** @class */ (function (_super) {
    __extends(HeaderTextHyper, _super);
    function HeaderTextHyper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            count: 0
        };
        return _this;
    }
    Object.defineProperty(HeaderTextHyper, "attributesToProps", {
        get: function () {
            return {
                text: { type: String, observe: true },
                'is-boolean': { type: Boolean, observe: true },
                'is-number': { type: Number, observe: true },
                'check-value': { type: String, observe: false },
                'new-attr': { type: String, observe: false }
            };
        },
        enumerable: true,
        configurable: true
    });
    HeaderTextHyper.prototype.onClick = function () {
        // this.text = 'change';
        // console.log(this.hasClass('hyper'));
        this.text = 'new text content';
        this.isBoolean = this.isBoolean ? false : true;
        this.isNumber = this.isNumber + 1;
        // console.log('check', this.checkValue);
        // console.log('some', this.someOther);
        // console.log(this.newAttr);
        // this.setState((prevState) => ({
        //     count: prevState.count + 1
        // }));
    };
    HeaderTextHyper.prototype.render = function (_a) {
        var domRender = _a.domRender, text = _a.text, state = _a.state;
        // console.log('render called');
        var clickCount = state.count ? " -> click count " + state.count : '';
        return domRender(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <h2 class=\"header-text__htext\">\n                <span onclick=\"", "\">", "</span>\n                <span>", "</span>\n            </h2>\n        "], ["\n            <h2 class=\"header-text__htext\">\n                <span onclick=\"", "\">", "</span>\n                <span>", "</span>\n            </h2>\n        "])), this, text, clickCount);
    };
    return HeaderTextHyper;
}(WithHyperHTML));
HeaderTextHyper.define('header-text-hyper');
var templateObject_1;
// /**
//  ************************************** ToggleView mixin **************************************
//  */
// const ToggleView = (superclass) =>
//     class extends superclass {
//         static get observedAttributes() {
//             return ['view'];
//         }
//         static buildList(listItems, html) {
//             return listItems.map(
//                 (item) => html(item)`
//             <article>
//                 <img src="${item.avatar}" alt="${`${item.first_name}, ${item.last_name}`}" />
//                 <strong>${item.first_name}, ${item.last_name}</strong>
//             </article>
//         `
//             );
//         }
//         willConnect() {
//             this.state = {
//                 list: []
//             };
//             this.toggleHandler = this.toggleHandler.bind(this);
//             this.userSwitchHandler = this.userSwitchHandler.bind(this);
//         }
//         didConnect() {
//             this.fetchList();
//         }
//         async fetchList() {
//             const page = this.page || 1;
//             const apiURL = `${this.sourceUrl}&page=${page}`;
//             const list = await fetch(apiURL).then((res) => res.json());
//             this.setState({
//                 list
//             });
//         }
//         toggleHandler() {
//             this.view = this.view === 'list' ? 'table' : 'list';
//         }
//         userSwitchHandler(e) {
//             this.page = e.target.dataset.id;
//             this.fetchList();
//         }
//     };
// /**
//  * ToggleViewLit
//  * @extends ToggleView with BaseUICustomElementWithLitHTML
//  */
// class ToggleViewLit extends ToggleView(BaseUICustomElementWithLitHTML) {
//     render() {
//         const { html, htmlWithContext, domRender, view, toggleHandler, userSwitchHandler } = this;
//         const { list } = this.state;
//         if (!list || list.length === 0) return false;
//         const buildPageList = (totalPages, currentPage, cb) => {
//             let pageButton;
//             for (let i = 0; i < totalPages; i += 1) {
//                 pageButton = html`${pageButton}<button class$="${
//                     i + 1 === currentPage ? 'is-active' : ''
//                 }" data-id$="${i + 1}" onclick="${cb}">${i + 1}</button>`;
//             }
//             return pageButton;
//         };
//         return domRender`
//             <section view$="${view}" onclick="${toggleHandler}" class="view-wrapper">
//                 ${this.constructor.buildList(list.data, htmlWithContext)}
//             </section>
//             <div class="switch-page">
//                 <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
//             </div>
//         `;
//     }
// }
// ToggleViewLit.define('toggle-view-lit');
// /**
//  * ToggleViewHyper
//  * @extends ToggleView with BaseUICustomElementWithHyperHTML
//  */
// class ToggleViewHyper extends ToggleView(BaseUICustomElementWithHyperHTML) {
//     render() {
//         const { html, htmlWithContext, domRender, view, toggleHandler, userSwitchHandler } = this;
//         const { list } = this.state;
//         if (!list || list.length === 0) return false;
//         const buildPageList = (totalPages, currentPage, cb) => {
//             let pageButton;
//             for (let i = 0; i < totalPages; i += 1) {
//                 pageButton = html`${pageButton}<button class="${
//                     i + 1 === currentPage ? 'is-active' : ''
//                 }" data-id="${i + 1}" onclick="${cb}">${i + 1}</button>`;
//             }
//             return pageButton;
//         };
//         return domRender`
//             <section view="${view}" onclick="${toggleHandler}" class="view-wrapper">
//                 ${this.constructor.buildList(list.data, htmlWithContext)}
//             </section>
//             <div class="switch-page">
//                 <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
//             </div>
//         `;
//     }
// }
// ToggleViewHyper.define('toggle-view-hyper');
//# sourceMappingURL=index.js.map