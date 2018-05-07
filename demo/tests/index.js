import 'babel-polyfill';
import BaseCustomElement from '../../src/base-component';
import BaseUICustomElementWithLitHTML from '../../src/with-litHTML';
import BaseUICustomElementWithHyperHTML from '../../src/with-hyperHTML';

/**
 ************************************** HeaderText mixin **************************************
 */
const HeaderText = superclass => class extends superclass {
    static get observedAttributes() { return ['text']; }

    willConnect() {
        this.state = { count: 0 };
        this.onClickCallback = this.onClickCallback.bind(this);
    }

    onClickCallback() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        const { domRender, text, onClickCallback } = this;
        const clickCount = (this.state.count) ? ` -> click count ${this.state.count}` : '';

        return domRender`
            <h2 class="header-text__htext">
                <span onclick="${onClickCallback}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
};

/**
 * HeaderTextBase
 * @extends HeaderText with BaseCustomElement
 */
class HeaderTextBase extends HeaderText(BaseCustomElement) {
    didRender() {
        const clickHandlerEle = this.find('[js-click-handler]');
        this.on('click', clickHandlerEle, this);
    }

    onclick() {
        this.onClickCallback();
    }

    render() {
        const { text } = this;
        const clickCount = (this.state.count) ? ` -> click count ${this.state.count}` : '';

        this.innerHTML = `
            <h2 class="header-text__htext">
                <span js-click-handler>${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}
HeaderTextBase.define('header-text-base');

/**
 * HeaderTextLit
 * @extends HeaderText with BaseUICustomElementWithLitHTML
 */
class HeaderTextLit extends HeaderText(BaseUICustomElementWithLitHTML) {}
HeaderTextLit.define('header-text-lit');

/**
 * HeaderTextHyper
 * @extends HeaderText with BaseUICustomElementWithHyperHTML
 */
class HeaderTextHyper extends HeaderText(BaseUICustomElementWithHyperHTML) {}
HeaderTextHyper.define('header-text-hyper');

/**
 ************************************** ToggleView mixin **************************************
 */
const ToggleView = superclass => class extends superclass {
    static get observedAttributes() { return ['view']; }

    willConnect() {
        this.state = {
            list: []
        };

        this.toggleHandler = this.toggleHandler.bind(this);
        this.userSwitchHandler = this.userSwitchHandler.bind(this);
    }

    didConnect() {
        this.fetchList();
    }

    async fetchList() {
        const page = this.page || 1;
        const apiURL = `${this.sourceUrl}&page=${page}`;
        const list = await fetch(apiURL).then(res => res.json());

        this.setState({ list });
    }

    toggleHandler() {
        this.view = (this.view === 'list') ? 'table' : 'list';
    }

    userSwitchHandler(e) {
        this.page = e.target.dataset.id;
        this.fetchList();
    }

    static buildList(listItems, html) {
        return listItems.map(item => html(item)`
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
            html, htmlWithContext, domRender, view, toggleHandler, userSwitchHandler
        } = this;

        const { list } = this.state;

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
                ${this.constructor.buildList(list.data, htmlWithContext)}
            </section>
            <div class="switch-page">
                <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
            </div>
        `;
    }
}
ToggleViewLit.define('toggle-view-lit');

/**
 * ToggleViewHyper
 * @extends ToggleView with BaseUICustomElementWithHyperHTML
 */
class ToggleViewHyper extends ToggleView(BaseUICustomElementWithHyperHTML) {
    render() {
        const {
            html, htmlWithContext, domRender, view, toggleHandler, userSwitchHandler
        } = this;

        const { list } = this.state;

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
                ${this.constructor.buildList(list.data, htmlWithContext)}
            </section>
            <div class="switch-page">
                <label>Go to page:</label>${buildPageList(list.total_pages, list.page, userSwitchHandler)}
            </div>
        `;
    }
}
ToggleViewHyper.define('toggle-view-hyper');
