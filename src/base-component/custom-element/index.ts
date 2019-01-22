import { DEV_FEATURE, ReflectedAttrToProps } from '../../_global-types';
import { toCamelCase } from '../../helpers';
import { BootstrapElement } from '../bootstrap-element';
import { validateRequiredAttributes } from '../validate-required-attributes';

// interface A {
//     x: any;
//   }

// Merge interface B with the abstract class declaration below.
// interface BootstrapElement<T = {}> extends HTMLElement {
//     onclick(ev: MouseEvent): void;
//     onsubmit(ev: Event): void;
// }

// Note that the 'implements A' here is optional... you can remove it if you like.
//   export abstract class B implements A {
//     y: any;
//   }

/**
 * custom element base class
 * below methods available to make this base element flexible
 *  - define('element-name') this will help register customElement only if it is not already deinfined
 *  - willConnect() this will be triggered before connectedCallback()
 *  - onConnect() this will be triggered on connectedCallback()
 *  - didConnect() this will be triggered only once after didRender()
 *  - willRender() will be triggered before render()
 *  - didRender() will be triggered after render()
 *  - setState() this helps shallow merge changes and allow re-render
 */
class BaseUICustomElement<T = {}> extends BootstrapElement {
    [key: string]: any;

    static get is(): string {
        return this.elementName;
    }

    static get observedAttributes(): string[] {
        if (!this.attrToProp) return [];

        const observeAttrs = this.attrToProp;
        return Object.keys(observeAttrs).filter((item) => observeAttrs[item].observe);
    }

    static readonly attrToProp: ReflectedAttrToProps;
    static withShadowDom = false;
    static elementName: string;

    static define(elementName: string, options?: ElementDefinitionOptions | undefined): void {
        const { customElements } = window;
        const isElementExist = customElements.get(elementName);

        if (isElementExist) return;

        this.elementName = elementName;
        customElements.define(elementName, this, options);
    }

    // static hasFullyMounted(component: HTMLElement) {
    // const unDefinedChildren = component.querySelectorAll(':not(:defined)');
    // return Promise.all([...unDefinedChildren].map((el) => customElements.whenDefined(el.localName)));
    // }

    state!: T;
    isFirstRender: boolean;
    isCreated: boolean;
    shouldRender: boolean = false;

    constructor() {
        super();

        this.isFirstRender = true;
        this.isCreated = false;

        if ((this.constructor as typeof BaseUICustomElement).withShadowDom) {
            this.attachShadow({ mode: 'open' });
        }

        this.willConnect();
    }

    connectedCallback() {
        this.create();
    }

    attributeChangedCallback(attrName: string, oldVal: any, newVal: any) {
        /**
         * to optimize and avoid unnecessary re-rendering when attribte values changed
         * this condition checks for below three things
         * {isCreated} check if element connected, if no, avoid re-render
         * {oldVal === newVal} check if current and new value for this attribute are same, if yes, then avoid re-render
         */
        if (!this.isCreated || oldVal === newVal) return;

        this.beforeRender();
    }

    handleEvent(e: Event) {
        const eventType = e.type;
        const hasInstanceMethod = `on${eventType}`;

        if (!this[hasInstanceMethod] || typeof this[hasInstanceMethod] !== 'function') return;

        this[hasInstanceMethod](e);
    }

    disconnectedCallback(): void {
        this.onDisconnect();
    }

    /* tslint:disable:no-empty */
    protected willConnect(): void {}
    protected onConnect(): void {}
    protected onDisconnect(): void {}
    protected didConnect(): void {}
    protected willRender(): void {}
    protected render(properties: this): void {}
    protected didRender(): void {}
    /* tslint:enable:no-empty */

    protected setState(state: Partial<T> | ((this: this, state: T) => Partial<T>), render: boolean = true): void {
        const currentStateObj = this.state;
        const nextState = typeof state === 'function' ? state.call(this, currentStateObj) : state;
        this.state = { ...this.state, ...nextState };

        if (render) this.beforeRender();
    }

    private afterRender() {
        if (this.isFirstRender) {
            this.isFirstRender = false;
            this.didConnect();
        }

        this.removeAttr('is-rendering');
        this.didRender();

        if (DEV_FEATURE) console.timeEnd(this.elementName);
    }

    private create() {
        const reflectedAttrToProps = (this.constructor as typeof BaseUICustomElement).attrToProp;

        // poxy attributes & observed attributes as properties
        if (reflectedAttrToProps) this.createAttributesToProperties(reflectedAttrToProps);

        this.isCreated = true;

        this.onConnect();
        this.beforeRender();
        this.setAttr('enhanced', '');
    }

    private hasRequiredAttributes() {
        interface RequiredAttrsType {
            [key: string]: any;
        }

        // validate required attributes before rendering
        const CTOR = this.constructor as typeof BaseUICustomElement;
        const observeAttrs = CTOR.attrToProp || {};
        const requiredAttrs: { [index: string]: string } = Object.keys(observeAttrs)
            .filter((item) => observeAttrs[item].require)
            .reduce((accum: RequiredAttrsType, attr) => {
                accum[attr] = this[toCamelCase(attr)];
                return accum;
            }, {});
        // console.log(requiredAttrs);
        return validateRequiredAttributes({
            attrs: { ...requiredAttrs },
            ele: CTOR.elementName
        });
    }

    private async beforeRender() {
        this.willRender();

        if (this.shouldRender) return;

        this.shouldRender = true;

        // batch render all changes at once to improve performance with below microtask queue
        await Promise.resolve().then((resolve) => resolve);

        this.shouldRender = false;

        this.setAttr('is-rendering', '');

        if (DEV_FEATURE) console.time(this.elementName);

        // validate all required attributes before render
        if (this.hasRequiredAttributes()) this.render(this);

        this.afterRender();
    }
}

export default BaseUICustomElement;
