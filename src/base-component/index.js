import { toCamelCase } from '../mixins/bootstrap-element/helpers/index.js';
import BootstrapElement from '../mixins/bootstrap-element/index.js';

// set context to allow CE polyfill work as expected
class HTMLCustomElement extends HTMLElement {
    constructor(_) { return (_ = super(_))._init(), _; } // eslint-disable-line
    _init() {}
}

/**
 * custom element base class
 * below methods available to make this base element flexible
 *  - willConnect() this will be triggered before connectedCollaback()
 *  - didConnected() this will be triggered after connectedCallback() and before willRender()
 *  - willRender() will be triggered before render()
 *  - didRendered() will be triggered after render()
 */
class BaseCustomElement extends BootstrapElement(HTMLCustomElement) {
    static get withShadowDom() { return false; }

    _init() {
        this.renderRoot = this;

        if (this.constructor.withShadowDom) {
            this.attachShadow({ mode: 'open' });
            this.renderRoot = this.shadowRoot;
        }

        this.willConnect();
    }

    connectedCallback() {
        this._create();
    }

    _create() {
        const attributes         = this.attributes || {};
        const observedAttributes = this.constructor.observedAttributes || [];
        this.createAttributesToProperties(attributes, observedAttributes);

        this.didConnected();
        this._beforeRender();
        this.set('is-enhanced', '');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (!oldVal || oldVal === newVal) return;

        const propName = toCamelCase(attrName);
        this[propName] = newVal;

        this._beforeRender();
    }

    _beforeRender() {
        this.willRender();

        if (this.shouldRender) return;
        this.shouldRender = true;

        const asynCallback = () => {
            this.shouldRender = false;

            this.set('is-rendering', '');
            console.time(this.constructor.is.name);
            this.render();
            console.timeEnd(this.constructor.is.name);
            this._afterRender();
        };

        // batch render to improve performance
        Promise.resolve().then(asynCallback);
    }

    _afterRender() {
        this.remove('is-rendering');
        this.didRendered();
    }

    willConnect() {}
    didConnected() {}
    willRender() {}
    render() {}
    didRendered() {}
}

export default BaseCustomElement;
