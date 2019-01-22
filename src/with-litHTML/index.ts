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

// this extra function call is to keep API consistent with hyperHTML wire
export const htmlWithContext = () => (template: TemplateStringsArray, ...values: any[]) => html(template, ...values);

/**
 * DOM rendering with litHtml which extendes from base custom element
 */
export class Component<T = {}> extends BaseUICustomElement<T> {
    get domRender() {
        return (template: TemplateStringsArray, ...values: any[]) =>
            render(html(template, ...values), this.shadowRoot || this);
    }

    get html() {
        return html;
    }

    get svg() {
        return svg;
    }

    get htmlWithContext() {
        return htmlWithContext;
    }
}

export default {
    Component,
    html,
    htmlWithContext
};
