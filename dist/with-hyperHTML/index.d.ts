import { wire } from 'hyperhtml/esm';
import { default as BaseUICustomElement } from '../base-component/custom-element';
/**
 *
 * @param {array} template literal that needs to be wired
 */
export declare const html: (template: TemplateStringsArray, ...values: any[]) => any;
/**
 *
 * To render and update nodes multiple times, bind object as context
 * ex: `items.map(item => htmlWithContext(item)`<li>${item.val}</li>`);`
 * here each item is bound as context to avoid rerendering same template
 */
export declare const htmlWithContext: typeof wire;
/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {HTMLElement} renderRoot defines where to render
 */
export declare const renderFn: (template: TemplateStringsArray, renderRoot: HTMLElement) => HTMLElement;
/**
 * DOM rendering with HyperHTML which extendes from base custom element
 */
export declare class Component<T = {}> extends BaseUICustomElement<T> {
    readonly domRender: (template: TemplateStringsArray, ...values: any[]) => ShadowRoot | this;
    readonly html: (template: TemplateStringsArray, ...values: any[]) => any;
    readonly htmlWithContext: typeof wire;
}
declare const _default: {
    Component: typeof Component;
    html: (template: TemplateStringsArray, ...values: any[]) => any;
    htmlWithContext: typeof wire;
};
export default _default;
