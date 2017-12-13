import { render as renderFn, html } from '../../node_modules/lit-html/lib/lit-extended.js';
import { toCamelCase } from '../mixins/bootstrap-element/helpers/index.js';
import BootstrapElement from '../mixins/bootstrap-element/index.js';

/**
 * custom element base class for eap elements library, which extends from HTMLElement class
 */
class BaseCustomElement extends BootstrapElement(HTMLElement) {
    static get withShadowDom() { return false; }

    constructor() {
        super();

        this.renderRoot = this;

        if (this.constructor.withShadowDom) {
            this.attachShadow({ mode: 'open' });
            this.renderRoot = this.shadowRoot;
        }
    }

    connectedCallback() {
        this.setup();
        this.beforeRender();

        this.set('is-enhanced', '');
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

        this.beforeRender();
    }

    beforeRender() {
        if (this.shouldRender) return;
        this.shouldRender = true;

        const asynCallback = () => {
            this.shouldRender = false;

            this.set('is-rendering', '');
            this.render();
        };

        // batch render to improve performance
        Promise.resolve().then(asynCallback);
    }

    render() {
        const template = this.constructor.template(this.props);
        if (!template) return;
        console.time(`${this.constructor.is} - start`);
        renderFn(template, this.renderRoot);
        console.timeEnd(`${this.constructor.is} - end`);
        this.afterRender();
    }

    afterRender() {
        this.remove('is-rendering');
    }
}

export default BaseCustomElement;
export { html };
