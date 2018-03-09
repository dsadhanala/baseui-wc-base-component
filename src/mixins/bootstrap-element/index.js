/* eslint-disable class-methods-use-this */
import { toCamelCase, serializeAttrValue } from '../../helpers/index.js';

/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
const BootstrapElement = superclass => class extends superclass {
    /**
     * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
     * @param {string} name attribute name
     */
    defineProp(name) {
        if (!name) return;

        const classInstance = this;
        const classProto    = Object.getPrototypeOf(classInstance);
        const propName      = toCamelCase(name);

        if (propName in classProto) return;

        Object.defineProperty(classProto, propName, {
            configurable: true,
            get() {
                return serializeAttrValue(name, this.getAttribute(name));
            },
            set(value) {
                /*
                 * This method is called when an observable property is removed
                 * even if the component has already rendered as a result. The
                 * call to setAttribute triggers a re-render.
                 * To prevent this behavior, filter out the unnecessary calls.
                 */
                if (!this.getAttribute(name)) return;

                const checkedValue = (typeof value !== 'string') ? JSON.stringify(value) : value;
                this.setAttribute(name, checkedValue);
            }
        });
    }

    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {array} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    createAttributesToProperties(attributes = {}, observedAttributes = []) {
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
    has(attr) {
        return this.hasAttribute(attr);
    }

    /**
     * set attribute value
     * @param {string} attribute name
     */
    get(attr) {
        return this.getAttribute(attr);
    }

    /**
     * set attribute value
     * @param {string} attribute name
     * @param {string} new/changed value for the attribute
     */
    set(attr, val) {
        return this.setAttribute(attr, val);
    }

    /**
     * remove attribute
     * @param {string} attribute name
     */
    remove(attr) {
        return this.removeAttribute(attr);
    }

    /**
     * helper function to add class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {object} element DOM element
     */
    addClass(element, className) {
        element.classList.add(className);
        return element;
    }

    /**
     * helper function to remove class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {object} element DOM element
     */
    removeClass(element, className) {
        element.classList.remove(className);
        return element;
    }

    /**
     * helper function to check for has class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {boolean} contains true/false
     */
    hasClass(element, className) {
        return element.classList.contains(className);
    }

    /**
     * helper function to toggle class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @param {boolean} force boolean to use force optionally
     * @return {object} element DOM element
     */
    toggleClass(element, className, force) {
        return element.classList.toggle(className, force);
    }

    /**
     * helper to find child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} context HTMLElement in which search should be performed
     * @return {object} HTMLElement
     */
    find(selector, context = this) {
        return context.querySelector(selector);
    }

    /**
     * helper to find all child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} context HTMLElement in which search should be performed
     * @return {array} HTMLElements that are matched
     */
    findAll(selector, context = this) {
        return context.querySelectorAll(selector);
    }

    /**
     * simplyfied event handler function
     * @param {object} target HTML element that needs event to be added
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {function} callback function that needs to be triggerd
     */
    on(eventName, target, callback) {
        target.addEventListener(eventName, callback, false);
    }

    /**
     * simplyfied event handler function to remove events
     * @param {object} target HTML element that needs event to be added
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {function} callback function that needs to be triggerd
     */
    off(eventName, target, callback) {
        target.removeEventListener(eventName, callback, false);
    }

    /**
     * trigger native/custom event and pass data between components
     * @param {object} target element reference on which event needs to be triggerd
     * @param {string} eventName custom event name
     * @param {object} eventData custom event data to share
     */
    trigger(eventName, target, eventData) {
        const triggerEvent = (!eventData) ? new Event(eventName) : new CustomEvent(eventName, { detail: eventData || {} });
        target.dispatchEvent(triggerEvent);
    }
};

export default BootstrapElement;
