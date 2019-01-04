import { wire } from 'hyperhtml/esm';
import { default as BaseUICustomElement } from '../base-component/custom-element';
/**
 *
 * @param {array} template literal that needs to be wired
 */
export declare const html: (args_0: TemplateStringsArray, args_1: any[]) => any;
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
declare class WithHyperHTML<T = {}> extends BaseUICustomElement<T> {
    readonly domRender: (template: TemplateStringsArray, ...values: any[]) => ShadowRoot | this;
    readonly html: (args_0: TemplateStringsArray, args_1: any[]) => any;
    readonly htmlWithContext: typeof wire;
}
export default WithHyperHTML;
