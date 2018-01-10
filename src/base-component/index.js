import { toCamelCase, HTMLCustomElement } from '../helpers/index.js';
import BootstrapElement from '../mixins/bootstrap-element/index.js';

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

    init() {
        this.isFirstRender = true;
        this.renderRoot = this;

        if (this.constructor.withShadowDom) {
            this.attachShadow({ mode: 'open' });
            this.renderRoot = this.shadowRoot;
        }

        // property observer to listen for value changes
        const { observedProps } = this.constructor;
        if (observedProps) this.ObservePropertyChanges(observedProps);

        this.willConnect();
    }

    handleEvent(e) {
        const hasInstanceMethod = `on${e.type}`;
        if (!this[hasInstanceMethod] || (typeof this[hasInstanceMethod] !== 'function')) return;

        this[hasInstanceMethod](e);
    }

    connectedCallback() {
        this._create();
    }

    _create() {
        // poxy attributes & observed attributes as properties
        const { attributes }         = this;
        const { observedAttributes } = this.constructor;
        this.createAttributesToProperties(attributes, observedAttributes);

        this.onConnect();
        this._beforeRender();
        this.set('enhanced', '');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (!oldVal || oldVal === newVal) return;

        const propName = toCamelCase(attrName);
        this[propName] = newVal;

        this._beforeRender();
    }

    _beforeRender() {
        // console.time(this.constructor.is.name);
        this.willRender();

        if (this.shouldRender) return;
        this.shouldRender = true;

        const asynCallback = () => {
            this.shouldRender = false;

            this.set('is-rendering', '');
            this.render();
            this._afterRender();
        };

        // batch render to improve performance
        Promise.resolve().then(asynCallback);
    }

    _afterRender() {
        if (this.isFirstRender) {
            this.isFirstRender = false;
            this.didConnected();
        }

        this.remove('is-rendering');
        this.didRendered();
        // console.timeEnd(this.constructor.is.name);
    }

    willConnect() {}
    onConnect() {}
    willRender() {}
    render() {}
    didRendered() {}
    didConnected() {}
}

export default BaseCustomElement;
