import { default as BootstrapElement } from '../bootstrap';
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
declare class BaseUICustomElement<T = {}> extends BootstrapElement {
    [key: string]: any;
    static readonly is: string;
    static readonly observedAttributes: string[];
    static withShadowDom: boolean;
    static element: string;
    static readonly attrToProp: any;
    static define(elementName: string, options?: ElementDefinitionOptions | undefined): void;
    state: T;
    isFirstRender: boolean;
    isCreated: boolean;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void;
    willConnect(): void;
    onConnect(): void;
    willRender(): void;
    didRender(): void;
    didConnect(): void;
    handleEvent(e: Event): void;
    protected render(): void;
    protected setState(state: Partial<T> | ((this: this, state: T) => Partial<T>), render?: boolean): void;
    private create;
    private beforeRender;
    private afterRender;
}
export default BaseUICustomElement;
