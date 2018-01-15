import { BaseUICustomElementWithLitHTML, BaseUICustomElement } from '../../dist/baseui-wc-base-component.js';

/**
 ************************************** HeaderText mixin **************************************
 */
const HeaderText = superclass => class extends superclass {
    static get observedAttributes() { return ['text']; }

    constructor() {
        super();
    }

    willConnect() {
        this.count = 0;
        this.onClickCallback = this.onClickCallback.bind(this);
    }

    onClickCallback() {
        this.count += 1;
        this.text = `Changed Title on Click ${this.count}`;
    }

    render() {
        const { domRender, text, onClickCallback } = this;

        return domRender`
            <h2 class="header-text__htext"><span onclick="${onClickCallback}">${text}</span></h2>
        `;
    }
};

/**
 * HeaderTextLit
 * @extends HeaderText with BaseUICustomElementWithLitHTML
 */
class HeaderTextLit extends HeaderText(BaseUICustomElementWithLitHTML) {}
customElements.define('header-text-lit', HeaderTextLit);

/**
 * HeaderTextHyper
 * @extends HeaderText with BaseUICustomElement
 */
class HeaderTextHyper extends HeaderText(BaseUICustomElement) {}
customElements.define('header-text-hyper', HeaderTextHyper);


/**
 ************************************** ToggleView mixin **************************************
 */
const ToggleView = superclass => class extends superclass {
    static get observedAttributes() { return ['view']; }
    static get observedProps() { return ['list']; }

    willConnect() {
        this.state = {
            list: []
        };

        this.toggleHandler = this.toggleHandler.bind(this);
        this.userSwitchHandler = this.userSwitchHandler.bind(this);
    }

    didConnected() {
        this.fetchList();
    }

    async fetchList() {
        const page = this.page || 1;
        const apiURL = `${this.sourceUrl}&page=${page}`;
        this.list = await fetch(apiURL).then(res => res.json());
    }

    toggleHandler() {
        this.view = (this.view === 'list') ? 'table' : 'list';
    }

    userSwitchHandler(e) {
        this.page = e.target.dataset.id;
        this.fetchList();
    }

    static buildList(listItem, html) {
        return listItem.map(item => html`
            <article>
                <img src="${item.avatar}" alt="${`${item.first_name}, ${item.last_name}`}" />
                <strong>${item.first_name}, ${item.last_name}</strong>
            </article>
        `);
    }
};

/**
 * ToggleViewLit
 * @extends ToggleView with BaseUICustomElementWithLitHTML
 */
class ToggleViewLit extends ToggleView(BaseUICustomElementWithLitHTML) {
    render() {
        const {
            html, domRender, view, list, toggleHandler, userSwitchHandler
        } = this;

        if (!list || list.length === 0) return false;

        const buildPageList = (totalPages, currentPage, cb) => {
            let pageButton;
            for (let i = 0; i < totalPages; i += 1) {
                pageButton = html`${pageButton}<button class$="${((i + 1) === currentPage) ? 'is-active' : ''}" data-id$="${i + 1}" onclick="${cb}">${i + 1}</button>`;
            }

            return pageButton;
        };

        return domRender`
            <section view$="${view}" onclick="${toggleHandler}" class="view-wrapper">
                ${this.constructor.buildList(list.data, html)}
            </section>
            <div class="switch-page">
                <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
            </div>
        `;
    }
}

window.customElements.define('toggle-view-lit', ToggleViewLit);

/**
 * ToggleViewHyper
 * @extends ToggleView with BaseUICustomElement
 */
class ToggleViewHyper extends ToggleView(BaseUICustomElement) {
    render() {
        const {
            html, domRender, view, list, toggleHandler, userSwitchHandler
        } = this;

        if (!list || list.length === 0) return false;

        const buildPageList = (totalPages, currentPage, cb) => {
            let pageButton;

            for (let i = 0; i < totalPages; i += 1) {
                pageButton = html`${pageButton}<button class="${((i + 1) === currentPage) ? 'is-active' : ''}" data-id="${i + 1}" onclick="${cb}">${i + 1}</button>`;
            }

            return pageButton;
        };

        return domRender`
            <section view="${view}" onclick="${toggleHandler}" class="view-wrapper">
                ${this.constructor.buildList(list.data, html)}
            </section>
            <div class="switch-page">
                <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
            </div>
        `;
    }
}

window.customElements.define('toggle-view-hyper', ToggleViewHyper);
