/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
declare class BootstrapElement extends HTMLElement {
    /**
     * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
     * @param {string} name attribute name
     */
    defineProp(name: string, reflectedAttrToProps: any): void;
    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {object} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    createAttributesToProperties(reflectedAttrToProps?: any): void;
    /**
     * has attribute
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    hasAttr(attr: string, target?: Element): boolean;
    /**
     * set attribute value
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    getAttr(attr: string, target?: Element): string | null;
    /**
     * set attribute value
     * @param {string} attribute name
     * @param {string} new/changed value for the attribute
     * @param {object} target DOM element
     */
    setAttr(attr: string, val: string, target?: Element): void;
    /**
     * remove attribute
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    removeAttr(attr: string, target?: Element): void;
    /**
     * helper function to add class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {object} element DOM element
     */
    addClass(className: string, target?: Element): Element;
    /**
     * helper function to remove class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {object} element DOM element
     */
    removeClass(className: string, target?: Element): object;
    /**
     * helper function to check for has class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {boolean} contains true/false
     */
    hasClass(className: string, target?: Element): boolean;
    /**
     * helper function to toggle class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @param {boolean} force boolean to use force optionally
     * @return {object} element DOM element
     */
    toggleClass(className: string, target: Element | undefined, force: boolean): boolean;
    /**
     * helper to find child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} target Element in which search should be performed
     * @return {object} Element
     */
    find(selector: string, target?: NodeSelector): Element | null;
    /**
     * helper to find all child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} target Element in which search should be performed
     * @return {array} Elements that are matched
     */
    findAll(selector: string, target?: NodeSelector): NodeListOf<Element>;
    /**
     * simplyfied event handler function to add events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     * @param {object} target HTML element that needs event to be added
     */
    on(eventName: string, callback: EventListenerOrEventListenerObject, target?: HTMLElement): void;
    /**
     * simplyfied event handler function to remove events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     * @param {object} target HTML element that needs event to be added
     */
    off(eventName: string, callback: EventListenerOrEventListenerObject, target?: HTMLElement): void;
    /**
     * trigger native/custom event and pass data between components
     * @param {string} eventName custom event name
     * @param {object} target element reference on which event needs to be triggerd
     * @param {object} eventData custom event data to share
     */
    trigger(eventName: string, target: HTMLElement | undefined, eventData: {}): void;
}
export default BootstrapElement;
