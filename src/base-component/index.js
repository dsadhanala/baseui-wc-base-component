/* eslint-disable class-methods-use-this */
import { toCamelCase, HTMLCustomElement } from './helpers';
import BootstrapElement from './bootstrap-element/index.js';

/**
 * custom element base class
 * below methods available to make this base element flexible
 *  - willConnect() this will be triggered before connectedCallback()
 *  - onConnect() this will be triggered on connectedCallback()
 *  - didConnect() this will be triggered only once after didRender()
 *  - willRender() will be triggered before render()
 *  - didRender() will be triggered after render()
 *  - setState() this helps shallow merge changes and allow re-render
 */
class BaseCustomElement extends BootstrapElement(HTMLCustomElement) {
    static get withShadowDom() { return false; }

    init() {
        this.isFirstRender = true;
        this.isCreated = false;

        if (this.constructor.withShadowDom) {
            this.attachShadow({ mode: 'open' });
        }

        this.willConnect();
    }

    handleEvent(e) {
        const hasInstanceMethod = `on${e.type}`;
        if (!this[hasInstanceMethod] || (typeof this[hasInstanceMethod] !== 'function')) return;

        this[hasInstanceMethod](e);
    }

    connectedCallback() {
        // delay execution of connectedCallback to make sure dynamic data added to  the attributes are available to consume
        window.requestAnimationFrame(this._create.bind(this));
    }

    _create() {
        const { attributes }         = this;
        const { observedAttributes } = this.constructor;

        // poxy attributes & observed attributes as properties
        this.createAttributesToProperties(attributes, observedAttributes);

        this.isCreated = true;

        this.onConnect();
        this._beforeRender();
        this.set('enhanced', '');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        /**
         * to optimize and avoid unnecessary re-rendering when attribte values changed
         * this condition checks for below three things
         * {isCreated} check if element connected, if no, avoid re-render
         * {oldVal === newVal} check if current and new value for this attribute are same, if yes, then avoid re-render
         */
        if (!this.isCreated || oldVal === newVal) return;

        const propName = toCamelCase(attrName);

        /**
         * check if attribute changed due to removeAttribute or change of value
         * if removed, delete property set on element instance
         * else, update property with the new value
         */
        if (newVal === null) {
            delete this[propName];
        } else {
            this[propName] = newVal;
        }

        this._beforeRender();
    }

    _beforeRender() {
        this.willRender();

        this.set('is-rendering', '');
        this.render();
        this._afterRender();
    }

    _afterRender() {
        if (this.isFirstRender) {
            this.isFirstRender = false;
            this.didConnect();
        }

        this.remove('is-rendering');
        this.didRender();
    }

    setState(state) {
        const nextState = (typeof state === 'function') ? state.call(this, this.state, this) : state;
        this.state = { ...this.state, ...nextState };
        this.render();
    }

    willConnect() {}
    onConnect() {}
    willRender() {}
    render() {}
    didRender() {}
    didConnect() {}
}

export default BaseCustomElement;
