import { ReflectedAttrToProps } from '../../_global/types';
import { toCamelCase } from '../../helpers';
import { serializeAttrValue } from '../serialize';

/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
export abstract class BootstrapClass extends HTMLElement {
    [key: string]: any;

    /**
     * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
     * @param {string} name attribute name
     */
    defineProp(name: string, reflectedAttrToProps: any): void {
        if (!name) return;

        const propName = toCamelCase(name);
        const { type, observe } = reflectedAttrToProps[name];

        const get = () => {
            const value = this.getAttribute(name);

            // boolean attribute, then check if attribute exist or not
            if (true.constructor === type && !value) return this.hasAttribute(name);

            // attribute value is defined as Array or Object
            if (type === (Array || Object) && this[`_${propName}`]) {
                return this[`_${propName}`];
            }

            // return serialized value from the attribute
            if (typeof value === 'string') return serializeAttrValue(name, value, type);
        };

        const set = (value: any) => {
            if (!observe) return false;

            const valueAsString = String(value);

            // when value is null or false remove attribute
            if (value == null || valueAsString === 'false') return this.removeAttribute(name);

            // set boolean attribute
            if (valueAsString === 'true') return this.setAttribute(name, '');

            // when value is a empty string then simply set that as attribute value and skip parsing
            if (value === '' || typeof value === 'string') {
                const parsedVal = value === '' ? '' : serializeAttrValue(name, value, type);
                return this.setAttribute(name, parsedVal);
            }

            // update/create attribute value as string, when it's used for rich data
            if (type === (Array || Object)) {
                const stringifiedValue = JSON.stringify(value);
                this[`_${propName}`] = value;
                this.setAttribute(name, stringifiedValue);
            }
        };

        Object.defineProperty(this, propName, { get, set, configurable: true });
    }

    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {object} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    createAttributesToProperties(reflectedAttrToProps: ReflectedAttrToProps): void {
        Object.keys(reflectedAttrToProps).forEach((attrName) => this.defineProp(attrName, reflectedAttrToProps));
    }

    /**
     * has attribute
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    hasAttr(attr: string, target: Element = this): boolean {
        return target.hasAttribute(attr);
    }

    /**
     * set attribute value
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    getAttr(attr: string, target: Element = this): string | null {
        return target.getAttribute(attr);
    }

    /**
     * set attribute value
     * @param {string} attribute name
     * @param {string} new/changed value for the attribute
     * @param {object} target DOM element
     */
    setAttr(attr: string, val: string, target: Element = this): void {
        target.setAttribute(attr, val);
    }

    /**
     * remove attribute
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    removeAttr(attr: string, target: Element = this): void {
        target.removeAttribute(attr);
    }

    /**
     * helper function to add class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {object} element DOM element
     */
    addClass(className: string, target: Element = this): Element {
        target.classList.add(className);
        return target;
    }

    /**
     * helper function to remove class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {object} element DOM element
     */
    removeClass(className: string, target: Element = this): Element {
        target.classList.remove(className);
        return target;
    }

    /**
     * helper function to check for has class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {boolean} contains true/false
     */
    hasClass(className: string, target: Element = this): boolean {
        return target.classList.contains(className);
    }

    /**
     * helper function to toggle class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @param {boolean} force boolean to use force optionally
     * @return {object} element DOM element
     */
    toggleClass(className: string, target: Element = this, force: boolean): boolean {
        return target.classList.toggle(className, force);
    }

    /**
     * helper to find child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} target Element in which search should be performed
     * @return {object} Element
     */
    find(selector: string, target: NodeSelector = this): Element | null {
        return target.querySelector(selector);
    }

    /**
     * helper to find all child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} target Element in which search should be performed
     * @return {array} Elements that are matched
     */
    findAll(selector: string, target: NodeSelector = this): NodeListOf<Element> {
        return target.querySelectorAll(selector);
    }

    /**
     * simplyfied event handler function to add events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {object} target HTML element that needs event to be added
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     */
    on(eventName: string, target: HTMLElement = this, callback: EventListenerOrEventListenerObject): void {
        target.addEventListener(eventName, callback, false);
    }

    /**
     * simplyfied event handler function to remove events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {object} target HTML element that needs event to be added
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     */
    off(eventName: string, target: HTMLElement = this, callback: EventListenerOrEventListenerObject): void {
        target.removeEventListener(eventName, callback, false);
    }

    /**
     * trigger native/custom event and pass data between components
     * @param {string} eventName custom event name
     * @param {object} target element reference on which event needs to be triggerd
     * @param {object} eventData custom event data to share
     */
    trigger(eventName: string, target: HTMLElement = this, eventData?: {}): void {
        const triggerEvent = !eventData
            ? new Event(eventName)
            : new CustomEvent(eventName, { detail: eventData || {} });
        target.dispatchEvent(triggerEvent);
    }
}

export default BootstrapClass;
