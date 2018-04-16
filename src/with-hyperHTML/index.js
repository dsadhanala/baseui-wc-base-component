import { bind, wire } from 'hyperhtml/esm/index.js';
import BaseCustomElement from '../base-component';

/**
 *
 * @param {object} template literal that needs to be wired
 */
export const html = (...args) => wire()(...args);

export const htmlWithContext = wire;

/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {HTMLElement} renderRoot defines where to render
 */
export const renderFn = (template, renderRoot) => bind(renderRoot)(template);

/**
 * DOM rendering with HyperHTML which extendes from base custom element
 */
class BaseCustomElementWithHyperHTML extends BaseCustomElement {
    get domRender() {
        return (...args) => bind(this.shadowRoot || this)(...args);
    }

    get html() { return html; }
    get htmlWithContext() { return htmlWithContext; }
}

export default BaseCustomElementWithHyperHTML;
