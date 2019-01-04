import { html, render, svg } from 'lit-html';
import { default as BaseUICustomElement } from '../base-component/custom-element';
/**
 * html(template)
 * *** @param {object} template literal which needs to be wired
 *
 * render((template, renderRoot)
 * *** @param {object} template literal that needs to be rendered
 * *** @param {*} renderRoot defines where to render
 *
 * svg(template)
 * *** @param {object} template literal which needs to be wired
 */
export { html, render, svg };
export declare const htmlWithContext: () => (args_0: TemplateStringsArray, args_1: any[]) => import("lit-html").TemplateResult;
/**
 * DOM rendering with litHtml which extendes from base custom element
 */
declare class WithLitHTML<T = {}> extends BaseUICustomElement<T> {
    readonly domRender: (template: TemplateStringsArray, ...values: any[]) => void;
    readonly html: (strings: TemplateStringsArray, ...values: any[]) => import("lit-html").TemplateResult;
    readonly svg: (strings: TemplateStringsArray, ...values: any[]) => import("lit-html").SVGTemplateResult;
    readonly htmlWithContext: () => (args_0: TemplateStringsArray, args_1: any[]) => import("lit-html").TemplateResult;
}
export default WithLitHTML;
