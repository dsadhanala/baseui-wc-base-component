/* eslint-disable class-methods-use-this */
import { serializeAttrValue, toCamelCase } from '../helpers/index.js';

/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
class BootstrapElement extends HTMLElement {
    /**
     * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
     * @param {string} name attribute name
     */
    defineProp(name: string) {
        if (!name) return;

        // const classInstance = this;
        const classProto = Object.getPrototypeOf(this);
        const propName = toCamelCase(name);

        if (propName in classProto) return;

        Object.defineProperty(classProto, propName, {
            configurable: true,
            get() {
                return serializeAttrValue(name, this.getAttribute(name));
            },
            set(value) {
                const checkedValue = typeof value !== 'string' ? JSON.stringify(value) : value;
                this.setAttribute(name, checkedValue);
            }
        });
    }

    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {object} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    createAttributesToProperties(attributes: any = {}, observedAttributes: any[] = []) {
        // attributes to properties
        Object.keys(attributes).forEach((attr) => {
            const attrName = attributes[attr].name;
            this.defineProp(attrName);
        });

        if (observedAttributes.length === 0) return;

        // observedAttributes to properties
        observedAttributes.forEach(this.defineProp.bind(this));
    }

    /**
     * has attribute
     * @param {string} attribute name
     */
    hasAttr(attr: string): boolean {
        return this.hasAttribute(attr);
    }

    /**
     * set attribute value
     * @param {string} attribute name
     */
    getAttr(attr: string) {
        return this.getAttribute(attr);
    }

    /**
     * set attribute value
     * @param {string} attribute name
     * @param {string} new/changed value for the attribute
     */
    setAttr(attr: string, val: string) {
        return this.setAttribute(attr, val);
    }

    /**
     * remove attribute
     * @param {string} attribute name
     */
    removeAttr(attr: string) {
        return this.removeAttribute(attr);
    }

    /**
     * helper function to add class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {object} element DOM element
     */
    addClass(element: Element, className: string): Element {
        element.classList.add(className);
        return element;
    }

    /**
     * helper function to remove class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {object} element DOM element
     */
    removeClass(element: Element, className: string): object {
        element.classList.remove(className);
        return element;
    }

    /**
     * helper function to check for has class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {boolean} contains true/false
     */
    hasClass(element: Element, className: string): boolean {
        return element.classList.contains(className);
    }

    /**
     * helper function to toggle class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @param {boolean} force boolean to use force optionally
     * @return {object} element DOM element
     */
    toggleClass(element: Element, className: string, force: boolean): object {
        return element.classList.toggle(className, force);
    }

    /**
     * helper to find child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} context Element in which search should be performed
     * @return {object} Element
     */
    find(selector: string, context: any = this): object {
        return context.querySelector(selector);
    }

    /**
     * helper to find all child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} context Element in which search should be performed
     * @return {array} Elements that are matched
     */
    findAll(selector: string, context: any = this): any[] {
        return context.querySelectorAll(selector);
    }

    /**
     * simplyfied event handler function
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {object} target HTML element that needs event to be added
     * @param {function} callback function that needs to be triggerd
     */
    on(eventName: string, target: Element, callback: () => void) {
        target.addEventListener(eventName, callback, false);
    }

    /**
     * simplyfied event handler function to remove events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {object} target HTML element that needs event to be added
     * @param {function} callback function that needs to be triggerd
     */
    off(eventName: string, target: Element, callback: () => void) {
        target.removeEventListener(eventName, callback, false);
    }

    /**
     * trigger native/custom event and pass data between components
     * @param {string} eventName custom event name
     * @param {object} target element reference on which event needs to be triggerd
     * @param {object} eventData custom event data to share
     */
    trigger(eventName: string, target: Element, eventData: {}) {
        const triggerEvent = !eventData
            ? new Event(eventName)
            : new CustomEvent(eventName, { detail: eventData || {} });
        target.dispatchEvent(triggerEvent);
    }
}

export default BootstrapElement;
