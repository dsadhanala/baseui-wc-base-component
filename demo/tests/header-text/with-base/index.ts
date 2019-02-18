import { default as BaseUICustomElement } from '@rootSrc/base-component/custom-element';
import { CustomElement } from '@rootSrc/decorators';

interface HeaderTextState {
    count: number;
}

@CustomElement('header-text-base')
export class HeaderTextBase extends BaseUICustomElement<HeaderTextState> {
    readonly state = {
        count: 0
    };

    static get attrToProp() {
        return {
            text: { type: String, observe: true, require: true }
        };
    }

    didRender() {
        const clickHandlerEle = this.find('[js-click-handler]');
        this.on('click', clickHandlerEle, this);
    }

    onClick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';
    }

    render({ text, clickCount = '' }: this) {
        this.innerHTML = `
            <h2 class="header-text__htext">
                <span js-click-handler>${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}
