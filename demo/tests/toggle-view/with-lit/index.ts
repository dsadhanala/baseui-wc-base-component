import { CustomElement } from '@rootSrc/decorators';
import { Component, html } from '@rootSrc/with-litHTML';
import { listRenderer } from '../renderers';

export const pagingButtonRenderer = (totalPages, currentPage, cb) => {
    const pages = Array.from(new Array(totalPages), (x, index) => index + 1);

    return pages.map(
        (item) => html`
        <button
            class="${item === currentPage ? 'is-active' : null}"
            data-id="${item}"
            @click="${cb}"
        >${item}</button>
    `
    );
};

interface ToggleViewLit {
    view: string;
    sourceUrl: string;
    page: number;
}

@CustomElement('toggle-view-lit')
class ToggleViewLit extends Component {
    static get attrToProp() {
        return {
            view: { type: String, observe: true, require: true },
            'source-url': { type: String, observe: true, require: true }
        };
    }

    readonly state = {
        list: []
    };

    willConnect() {
        this.userSwitchHandler = this.userSwitchHandler.bind(this);
    }

    didConnect() {
        this.fetchList();
    }

    async fetchList() {
        const page = this.page || 1;
        const apiURL = `${this.sourceUrl}&page=${page}`;
        const list = await fetch(apiURL).then((res) => res.json());

        this.setState({ list });
    }

    onClick() {
        this.view = this.view === 'list' ? 'table' : 'list';
    }

    userSwitchHandler(e) {
        this.page = e.target.dataset.id;
        this.fetchList();
    }

    render({ htmlWithContext, domRender, view, userSwitchHandler }: this) {
        const { list } = this.state;

        if (!list || list.length === 0) return false;

        return domRender`
            <section view="${view}" @click="${this}" class="view-wrapper">
                ${listRenderer(list.data, htmlWithContext)}
            </section>

            <div class="switch-page">
                <label>Go to page:</label>
                <span>${pagingButtonRenderer(list.total_pages, list.page, userSwitchHandler)}</span>
            </div>
        `;
    }
}
