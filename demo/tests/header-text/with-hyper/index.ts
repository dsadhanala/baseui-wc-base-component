import { CustomElement } from '@rootSrc/decorators';
import { Component } from '@rootSrc/with-hyperHTML';

interface HeaderTextState {
    count: number;
}

@CustomElement('header-text-hyper')
export class HeaderTextHyper extends Component<HeaderTextState> {
    readonly state = {
        count: 0
    };

    static get attrToProp() {
        return {
            text: { type: String, observe: true, require: true }
        };
    }

    onClick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';
    }

    render({ domRender, text, clickCount }) {
        return domRender`
            <h2 class="header-text__htext">
                <span onclick="${this}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}
