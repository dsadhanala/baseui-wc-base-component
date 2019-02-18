import { ReflectedAttrToProps } from '../../_global/types';
import { toCamelCase, toCapitalize } from '../../helpers';
import { BootstrapClass } from '../bootstrap-element';
import { define } from '../define';
import { serializeAttrValue } from '../serialize';
import { validateRequiredAttributes } from '../validate-required-attributes';
const environment = process.env.NODE_ENV;

export interface BaseUICustomElement<T = {}> {
    onAbort(ev: UIEvent): void;
    onActivate(this: HTMLElement, ev: Event): any;
    onBeforeactivate(this: HTMLElement, ev: Event): any;
    onBeforecopy(this: HTMLElement, ev: Event): any;
    onBeforecut(this: HTMLElement, ev: Event): any;
    onBeforedeactivate(this: HTMLElement, ev: Event): any;
    onBeforepaste(this: HTMLElement, ev: Event): any;
    onBlur(ev: FocusEvent): void;
    onCanplay(ev: Event): void;
    onCanplaythrough(ev: Event): void;
    onChange(ev: Event): void;
    onClick(ev: MouseEvent): void;
    onContextmenu(ev: PointerEvent): void;
    onCopy(ev: ClipboardEvent): void;
    onCuechange(ev: Event): void;
    onCut(ev: ClipboardEvent): void;
    onDblclick(ev: MouseEvent): void;
    onDeactivate(this: HTMLElement, ev: Event): any;
    onDrag(ev: DragEvent): void;
    onDragend(ev: DragEvent): void;
    onDragenter(ev: DragEvent): void;
    onDragleave(ev: DragEvent): void;
    onDragover(ev: DragEvent): void;
    onDragstart(ev: DragEvent): void;
    onDrop(ev: DragEvent): void;
    onDurationchange(ev: Event): void;
    onEmptied(ev: Event): void;
    onEnded(this: HTMLElement, ev: Event): any;
    onError(ev: ErrorEvent): void;
    onFocus(ev: FocusEvent): void;
    onInput(ev: Event): void;
    onInvalid(ev: Event): void;
    onKeydown(ev: KeyboardEvent): void;
    onKeypress(ev: KeyboardEvent): void;
    onKeyup(ev: KeyboardEvent): void;
    onLoad(ev: Event): void;
    onLoadeddata(ev: Event): void;
    onLoadedmetadata(ev: Event): void;
    onLoadstart(ev: Event): void;
    onMousedown(ev: MouseEvent): void;
    onMouseenter(ev: MouseEvent): void;
    onMouseleave(ev: MouseEvent): void;
    onMousemove(ev: MouseEvent): void;
    onMouseout(ev: MouseEvent): void;
    onMouseover(ev: MouseEvent): void;
    onMouseup(ev: MouseEvent): void;
    onMousewheel(ev: WheelEvent): void;
    onMscontentzoom(this: HTMLElement, ev: Event): any;
    onMsmanipulationstatechanged(ev: Event): void;
    onPaste(ev: ClipboardEvent): void;
    onPause(ev: Event): void;
    onPlay(ev: Event): void;
    onPlaying(ev: Event): void;
    onProgress(ev: ProgressEvent): void;
    onRatechange(ev: Event): void;
    onReset(ev: Event): void;
    onScroll(ev: UIEvent): void;
    onSeeked(ev: Event): void;
    onSeeking(ev: Event): void;
    onSelect(ev: UIEvent): void;
    onSelectstart(ev: Event): void;
    onStalled(ev: Event): void;
    onSubmit(ev: Event): void;
    onSuspend(ev: Event): void;
    onTimeupdate(ev: Event): void;
    onVolumechange(ev: Event): void;
    onWaiting(ev: Event): void;
}

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
export class BaseUICustomElement<T = {}> extends BootstrapClass {
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
        this.elementName = elementName;
        define(elementName, this, options);
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

    attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
        /**
         * to optimize and avoid unnecessary re-rendering when attribte values changed
         * this condition checks for below three things
         * {isCreated} check if element connected, if no, avoid re-render
         * {oldVal === newVal} check if current and new value for this attribute are same, if yes, then avoid re-render
         */
        if (!this.isCreated || oldVal === newVal) return;

        // check for rich data type, set the value to secret getter instance if it's Object or Array
        // this improves rendering performance
        const CTOR = this.constructor as typeof BaseUICustomElement;
        const observeAttrs = CTOR.attrToProp || {};
        const propName = toCamelCase(attrName);

        if (observeAttrs[attrName].type === (Array || Object)) {
            this[`_${propName}`] = serializeAttrValue(attrName, newVal, observeAttrs[attrName].type as any);
        }

        // re-render component
        this.beforeRender();
    }

    // this method helps deligate event callbacks to instance using EventListenerObject
    // so that we can avoid adding `.bind(this)` on each callback instance
    // you can attach instance methods like below
    // `<button onclick=${this}` in render method and then add method `onClick(e) {}` on the class
    handleEvent(e: Event) {
        const eventType = toCapitalize(e.type);
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

        // validate all required attributes before render and log missing required attribute values during development
        if (environment === 'development') this.hasRequiredAttributes();
        this.render(this);

        this.afterRender();
    }
}

export default BaseUICustomElement;
