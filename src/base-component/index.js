/* eslint-disable class-methods-use-this */
import { toCamelCase, HTMLCustomElement } from '../helpers';
import BootstrapElement from '../mixins/bootstrap-element/index.js';

/**
 * custom element base class
 * below methods available to make this base element flexible
 *  - willConnect() this will be triggered before connectedCallback()
 *  - onConnect() this will be triggered on connectedCallback()
 *  - didConnected() this will be triggered only once after didRendered()
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
        // delay execution of connectedCallback to make sure dynamic data added attributes are available to consume
        window.requestAnimationFrame(this._create.bind(this));
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
    }

    willConnect() {}
    onConnect() {}
    willRender() {}
    render() {}
    didRendered() {}
    didConnected() {}
}

export default BaseCustomElement;
