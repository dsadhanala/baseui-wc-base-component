import BaseCustomElement, { html } from '../../src/base-component/index.js';

/**
 * HeaderText
 * @extends BaseCustomElement
 */
class HeaderText extends BaseCustomElement {
    static get is() {
        return 'header-text';
    }

    static get template() {
        const renderer = ({ hLevel, text }) => {
            switch (hLevel) {
                case 1:
                    return html`<h1 class="eap-header-text__htext">${text}</h1>`;
                case 2:
                    return html`<h2 class="eap-header-text__htext">${text}</h2>`;
                case 3:
                    return html`<h3 class="eap-header-text__htext">${text}</h3>`;
                default:
                    return html`<h4 class="eap-header-text__htext">${text}</h4>`;
            }
        };

        return renderer;
    }

    static get withShadowDom() { return true; }

    static get observedAttributes() { return ['text']; }

    setup() {
        super.setup();
        const { text, hLevel } = this;

        this.props = { text, hLevel };
    }
}

window.customElements.define(HeaderText.is, HeaderText);

/**
 * ToggleView
 * @extends BaseCustomElement
 */
class ToggleView extends BaseCustomElement {
    static get is() {
        return 'toggle-view';
    }

    static get observedAttributes() { return ['view']; }

    static get template() {
        const buildList = (list) => list.map(item => html`
            <article>
                <img src="${item.avatar}" alt="${item.first_name}, ${item.last_name}" />
                <strong>${item.first_name}, ${item.last_name}</strong>
            </article>
        `);

        const buildPageList = (totalPages, currentPage, cb) => {
            let pageButton;
            for (let i = 0; i < totalPages; i += 1) {
                pageButton = html`${pageButton}<button class$="${((i + 1) === currentPage) ? 'is-active' : ''}" data-id$="${i + 1}" onclick="${cb}">${i + 1}</button>`;
            }

            return pageButton;
        };

        const renderer = (props) => {
            const {
                view, list, toggleHandler, userSwitchHandler
            } = props;

            if (list.length === 0) return false;

            return html`
                <section view$="${view}" onclick="${toggleHandler}" class="view-wrapper">${buildList(list.data)}</section>
                <div class="switch-page">
                    <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
                </div>
            `;
        };

        return renderer;
    }

    toggleHandler() {
        this.view = (this.view === 'list') ? 'table' : 'list';
    }

    userSwitchHandler(e) {
        this.page = e.target.dataset.id;
        this.fetchList();
    }

    setup() {
        super.setup();

        const { view } = this;
        this.props = {
            view,
            list: [],
            toggleHandler: this.toggleHandler.bind(this),
            userSwitchHandler: this.userSwitchHandler.bind(this)
        };

        this.fetchList();
    }

    async fetchList() {
        const apiURL = `${this.sourceUrl}&page=${this.page || 1}`;
        this.props.list = await fetch(apiURL).then(res => res.json());
        this.beforeRender();
    }
}

window.customElements.define(ToggleView.is, ToggleView);
