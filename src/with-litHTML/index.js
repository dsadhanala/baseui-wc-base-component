import { render as renderFn, html } from 'lit-html/lib/lit-extended.js';
import BaseCustomElement from '../base-component';

/**
 * html(template)
 * *** @param {object} template literal which needs to be wired
 *
 * renderFn((template, renderRoot)
 * *** @param {object} template literal that needs to be rendered
 * *** @param {*} renderRoot defines where to render
 */
export { html, renderFn };

// this extra function call is to keep API consistent with hyperHTML wire
export const htmlWithContext = () => (...args) => html(...args);

/**
 * DOM rendering with litHtml which extendes from base custom element
 */
class BaseCustomElementWithLitHTML extends BaseCustomElement {
    get domRender() {
        return (...args) => renderFn(html(...args), (this.shadowRoot || this));
    }

    get html() { return html; }

    get htmlWithContext() { return htmlWithContext; }
}

export default BaseCustomElementWithLitHTML;
