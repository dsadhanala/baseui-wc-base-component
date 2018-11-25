import { default as BootstrapElement } from './bootstrap-element';
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
declare class BaseCustomElement extends BootstrapElement {
    [x: string]: any;
    static readonly withShadowDom: boolean;
    static readonly is: any;
    static element: any;
    static define(elementName: string): void;
    isFirstRender: boolean;
    isCreated: boolean;
    constructor();
    handleEvent(e: MouseEvent): void;
    connectedCallback(): void;
    attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void;
    setState(state: any): void;
    state(): any;
    willConnect(): void;
    onConnect(): void;
    willRender(): void;
    render(): void;
    didRender(): void;
    didConnect(): void;
    private create;
    private beforeRender;
    private afterRender;
}
export default BaseCustomElement;
