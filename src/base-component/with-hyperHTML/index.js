import { bind, wire } from 'hyperhtml/esm/index.js';
import BaseCustomElement from '../index.js';

/**
 *
 * @param {object} template literal which needs to be wired
 */
export const html = (...args) => wire()(...args);

/**
 *
 * @param {object} template literal that needs to be rendered
 * @param {*} renderRoot defines where to render
 */
export const renderFn = (template, renderRoot) => bind(renderRoot)(template);

/**
 * HOC which uses HyperHTML underneath to render custome elements
 */
class BaseCustomElementWithHyperHTML extends BaseCustomElement {
    get template() {
        return (...args) => bind(this.renderRoot)(...args);
    }

    get html() {
        return html;
    }
}

export default BaseCustomElementWithHyperHTML;
