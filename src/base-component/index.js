import { render } from 'lit-html';
import { mix } from 'mixwith';
import { toCamelCase } from '../utils';
import BootstrapElement from '../mixins/bootstrap-element';

/**
 * custom element base class for eap elements library, which extends from HTMLElement class
 */
class BaseCustomElement extends mix(HTMLElement).with(BootstrapElement) {
    connectedCallback() {
        this.setup();
        this.beforeRender();

        this.set('enhanced', '');
    }

    setup() {
        const attributes         = this.attributes || {};
        const observedAttributes = this.constructor.observedAttributes || [];
        this.createAttributesToProperties(attributes, observedAttributes);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (!oldVal || oldVal === newVal) return;
        const propName = toCamelCase(attrName);
        this[propName] = newVal;

        this.props = {
            ...this.props,
            [propName]: newVal
        };

        this.renderComponent(this.props);
    }

    beforeRender() {
        this.renderComponent();
    }

    renderComponent() {
        const markup = this.constructor.getTemplate(this.props);
        if (!markup) return;

        render(markup, this);

        this.afterRender();
    }

    afterRender() {}
}

export default BaseCustomElement;
