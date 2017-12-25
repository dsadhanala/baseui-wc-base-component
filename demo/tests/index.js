import { BaseCustomElementWithLitHTML, BaseCustomElementWithHyperHTML } from '../../src';

/**
 * HeaderTextLit
 * @extends BaseCustomElementWithLitHTML
 */
class HeaderTextLit extends BaseCustomElementWithLitHTML {
    static get observedAttributes() { return ['text']; }

    static get is() {
        return {
            name: 'header-text-lit'
        };
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
        const { text, template, onClickCallback } = this;

        return template`
            <h1 disabled$=${true} class="header-text__htext" onclick=${onClickCallback}>${text}</h1>
        `;
    }
}

window.customElements.define(HeaderTextLit.is.name, HeaderTextLit);

/**
 * HeaderTextHyper
 * @extends BaseCustomElementWithHyperHTML
 */
class HeaderTextHyper extends BaseCustomElementWithHyperHTML {
    static get observedAttributes() { return ['text']; }

    static get is() {
        return {
            name: 'header-text-hyper'
        };
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
        const { text, template, onClickCallback } = this;

        return template`
            <h1 disabled=${true} class="header-text__htext" onclick=${onClickCallback}>${text}</h1>
        `;
    }
}

window.customElements.define(HeaderTextHyper.is.name, HeaderTextHyper);

/**
 * ToggleViewLit
 * @extends BaseCustomElementWithLitHTML
 */
class ToggleViewLit extends BaseCustomElementWithLitHTML {
    static get is() {
        return {
            name: 'toggle-view-lit'
        };
    }

    static get observedAttributes() { return ['view', 'list-update']; }

    willConnect() {
        this.toggleHandler = this.toggleHandler.bind(this);
        this.userSwitchHandler = this.userSwitchHandler.bind(this);
    }

    didConnected() {
        this.list = [];
        this.listUpdate = 'new';
        this.fetchList();
    }

    async fetchList() {
        const page = this.page || 1;
        const apiURL = `${this.sourceUrl}&page=${page}`;
        this.list = await fetch(apiURL).then(res => res.json());
        this.listUpdate = `list changed to page ${page}`;
    }

    toggleHandler() {
        this.view = (this.view === 'list') ? 'table' : 'list';
    }

    userSwitchHandler(e) {
        this.page = e.target.dataset.id;
        this.fetchList();
    }

    render() {
        const { html, template, view, list, toggleHandler, userSwitchHandler } = this;

        if (list.length === 0) return false;

        const buildList = listItem => listItem.map(item => html`
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

        return template`
            <section view$="${view}" onclick="${toggleHandler}" class="view-wrapper">${buildList(list.data)}</section>
            <div class="switch-page">
                <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
            </div>
        `;
    }
}

window.customElements.define(ToggleViewLit.is.name, ToggleViewLit);

/**
 * ToggleViewHyper
 * @extends BaseCustomElementWithHyperHTML
 */
class ToggleViewHyper extends BaseCustomElementWithHyperHTML {
    static get is() {
        return {
            name: 'toggle-view-hyper'
        };
    }

    static get observedAttributes() { return ['view', 'list-update']; }

    willConnect() {
        this.toggleHandler = this.toggleHandler.bind(this);
        this.userSwitchHandler = this.userSwitchHandler.bind(this);
    }

    didConnected() {
        this.list = [];
        this.listUpdate = 'new';
        this.fetchList();
    }

    async fetchList() {
        const page = this.page || 1;
        const apiURL = `${this.sourceUrl}&page=${page}`;
        this.list = await fetch(apiURL).then(res => res.json());
        this.listUpdate = `list changed to page ${page}`;

        return this.list;
    }

    toggleHandler() {
        this.view = (this.view === 'list') ? 'table' : 'list';
    }

    userSwitchHandler(e) {
        this.page = e.target.dataset.id;
        this.fetchList();
    }

    render() {
        const { html, template, view, list, toggleHandler, userSwitchHandler } = this;

        if (list.length === 0) return false;

        const buildList = (listItem) => listItem.map(item => html`
            <article>
                <img src="${item.avatar}" alt="${item.first_name}" />
                <strong>${item.first_name}, ${item.last_name}</strong>
            </article>
        `);

        const buildPageList = (totalPages, currentPage, cb) => {
            let pageButton;
            for (let i = 0; i < totalPages; i += 1) {
                pageButton = html`${pageButton}<button class="${((i + 1) === currentPage) ? 'is-active' : ''}" data-id="${i + 1}" onclick="${cb}">${i + 1}</button>`;
            }

            return pageButton;
        };

        return template`
            <section view="${view}" onclick="${toggleHandler}" class="view-wrapper">${buildList(list.data)}</section>
            <div class="switch-page">
                <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
            </div>
        `;
    }
}

window.customElements.define(ToggleViewHyper.is.name, ToggleViewHyper);
