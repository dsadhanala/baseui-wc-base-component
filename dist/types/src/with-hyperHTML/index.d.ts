import { wire } from 'hyperhtml/esm';
import { default as BaseCustomElement } from '../base-component';
export declare type TemplateArgs = [TemplateStringsArray, any[]];
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
declare class BaseCustomElementWithHyperHTML extends BaseCustomElement {
    readonly domRender: (args_0: TemplateStringsArray, args_1: any[]) => ShadowRoot | this;
    readonly html: (args_0: TemplateStringsArray, args_1: any[]) => any;
    readonly htmlWithContext: typeof wire;
}
export default BaseCustomElementWithHyperHTML;
