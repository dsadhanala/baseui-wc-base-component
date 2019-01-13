import { default as BaseUICustomElement } from '@rootSrc/base-component/custom-element';
import { default as WithHyperHTML } from '@rootSrc/with-hyperHTML/index.ts';
import { default as WithLitHTML } from '@rootSrc/with-litHTML/index.ts';

/**
 * HeaderTextBase
 * @extends HeaderText with BaseUICustomElement
 */
// class HeaderTextBase extends BaseUICustomElement<HeaderTextBaseState> {
//     static withShadowDom = true;
//     renderRoot = this.shadowRoot || this;

//     state = {
//         count: 0
//     };

//     didRender() {
//         const clickHandlerEle = this.find('[js-click-handler]', this.renderRoot) as HTMLElement;
//         this.on('click', clickHandlerEle, this);
//     }

//     onclick(e: MouseEvent): void {
//         this.setState((prevState: HeaderTextBaseState) => ({
//             count: prevState.count + 1
//         }));
//     }

//     render() {
//         const { text } = this;
//         const clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';

//         this.renderRoot.innerHTML = `
//             <h2 class="header-text__htext">
//                 <span js-click-handler>${text}</span>
//                 <span>${clickCount}</span>
//             </h2>
//         `;
//     }
// }
// HeaderTextBase.define('header-text-base');

/**
 * HeaderTextLit
 * @extends HeaderText WithLitHTML
 */
// class HeaderTextLit extends WithLitHTML<HeaderTextBaseState> {
//     static withShadowDom = true;

//     state = {
//         count: 0
//     };

//     onclick() {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }

//     render() {
//         const { domRender, text } = this;
//         const clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';

//         return domRender`
//             <h2 class="header-text__htext">
//                 <span @click="${this}">${text}</span>
//                 <span>${clickCount}</span>
//             </h2>
//         `;
//     }
// }

// HeaderTextLit.define('header-text-lit');

interface HeaderTextState {
    count: number;
}

// interface HeaderTextHyper {
//     text: String;
//     isBoolean: Boolean;
//     isNumber: Number;
//     newAttr: String;
//     checkValue: Number;
//     // onClick(e: Event): void;
// }

class HeaderTextHyper extends WithHyperHTML<HeaderTextState> {
    static get attributesToProps() {
        return {
            text: { type: String, observe: true },
            'is-boolean': { type: Boolean, observe: true },
            'is-number': { type: Number, observe: true },
            'check-value': { type: String, observe: false },
            'new-attr': { type: String, observe: false }
        };
    }

    readonly state = {
        count: 0
    };

    onClick() {
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
    }

    render({ domRender, text, state }: this) {
        // console.log('render called');
        const clickCount = state.count ? ` -> click count ${state.count}` : '';

        return domRender`
            <h2 class="header-text__htext">
                <span onclick="${this}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}

HeaderTextHyper.define('header-text-hyper');

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
