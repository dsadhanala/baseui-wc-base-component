import { ReflectedAttrToProps } from '../../_global-types';
import { BootstrapElement } from '../bootstrap-element';
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
    static readonly attrToProp: ReflectedAttrToProps;
    static withShadowDom: boolean;
    static elementName: string;
    static define(elementName: string, options?: ElementDefinitionOptions | undefined): void;
    state: T;
    isFirstRender: boolean;
    isCreated: boolean;
    shouldRender: boolean;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(attrName: string, oldVal: any, newVal: any): void;
    handleEvent(e: Event): void;
    disconnectedCallback(): void;
    protected willConnect(): void;
    protected onConnect(): void;
    protected onDisconnect(): void;
    protected didConnect(): void;
    protected willRender(): void;
    protected render(properties: this): void;
    protected didRender(): void;
    protected setState(state: Partial<T> | ((this: this, state: T) => Partial<T>), render?: boolean): void;
    private afterRender;
    private create;
    private hasRequiredAttributes;
    private beforeRender;
}
export default BaseUICustomElement;
