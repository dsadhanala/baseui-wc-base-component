var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* eslint-disable class-methods-use-this */
import { serializeAttrValue, toCamelCase } from '../helpers';
/**
 * This module create property instance and get/set for all attributes and observedAttributes
 */
var BootstrapElement = /** @class */ (function (_super) {
    __extends(BootstrapElement, _super);
    function BootstrapElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This is re-usable static method, which sets property on the instance prototype based on the given attribute name
     * @param {string} name attribute name
     */
    BootstrapElement.prototype.defineProp = function (name) {
        if (!name)
            return;
        // const classInstance = this;
        var classProto = Object.getPrototypeOf(this);
        var propName = toCamelCase(name);
        if (propName in classProto)
            return;
        Object.defineProperty(classProto, propName, {
            configurable: true,
            get: function () {
                return serializeAttrValue(name, this.getAttribute(name));
            },
            set: function (value) {
                var checkedValue = typeof value !== 'string' ? JSON.stringify(value) : value;
                this.setAttribute(name, checkedValue);
            }
        });
    };
    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {object} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    BootstrapElement.prototype.createAttributesToProperties = function (attributes, observedAttributes) {
        var _this = this;
        if (attributes === void 0) { attributes = {}; }
        if (observedAttributes === void 0) { observedAttributes = []; }
        // attributes to properties
        Object.keys(attributes).forEach(function (attr) {
            var attrName = attributes[attr].name;
            _this.defineProp(attrName);
        });
        if (observedAttributes.length === 0)
            return;
        // observedAttributes to properties
        observedAttributes.forEach(this.defineProp.bind(this));
    };
    /**
     * has attribute
     * @param {string} attribute name
     */
    BootstrapElement.prototype.hasAttr = function (attr) {
        return this.hasAttribute(attr);
    };
    /**
     * set attribute value
     * @param {string} attribute name
     */
    BootstrapElement.prototype.getAttr = function (attr) {
        return this.getAttribute(attr);
    };
    /**
     * set attribute value
     * @param {string} attribute name
     * @param {string} new/changed value for the attribute
     */
    BootstrapElement.prototype.setAttr = function (attr, val) {
        return this.setAttribute(attr, val);
    };
    /**
     * remove attribute
     * @param {string} attribute name
     */
    BootstrapElement.prototype.removeAttr = function (attr) {
        return this.removeAttribute(attr);
    };
    /**
     * helper function to add class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {object} element DOM element
     */
    BootstrapElement.prototype.addClass = function (element, className) {
        element.classList.add(className);
        return element;
    };
    /**
     * helper function to remove class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {object} element DOM element
     */
    BootstrapElement.prototype.removeClass = function (element, className) {
        element.classList.remove(className);
        return element;
    };
    /**
     * helper function to check for has class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @return {boolean} contains true/false
     */
    BootstrapElement.prototype.hasClass = function (element, className) {
        return element.classList.contains(className);
    };
    /**
     * helper function to toggle class name using classList
     * @param {object} element DOM element
     * @param {string} className string of class name
     * @param {boolean} force boolean to use force optionally
     * @return {object} element DOM element
     */
    BootstrapElement.prototype.toggleClass = function (element, className, force) {
        return element.classList.toggle(className, force);
    };
    /**
     * helper to find child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} context Element in which search should be performed
     * @return {object} Element
     */
    BootstrapElement.prototype.find = function (selector, context) {
        if (context === void 0) { context = this; }
        return context.querySelector(selector);
    };
    /**
     * helper to find all child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} context Element in which search should be performed
     * @return {array} Elements that are matched
     */
    BootstrapElement.prototype.findAll = function (selector, context) {
        if (context === void 0) { context = this; }
        return context.querySelectorAll(selector);
    };
    /**
     * simplyfied event handler function to add events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {object} target HTML element that needs event to be added
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     */
    BootstrapElement.prototype.on = function (eventName, target, callback) {
        target.addEventListener(eventName, callback, false);
    };
    /**
     * simplyfied event handler function to remove events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {object} target HTML element that needs event to be added
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     */
    BootstrapElement.prototype.off = function (eventName, target, callback) {
        target.removeEventListener(eventName, callback, false);
    };
    /**
     * trigger native/custom event and pass data between components
     * @param {string} eventName custom event name
     * @param {object} target element reference on which event needs to be triggerd
     * @param {object} eventData custom event data to share
     */
    BootstrapElement.prototype.trigger = function (eventName, target, eventData) {
        var triggerEvent = !eventData
            ? new Event(eventName)
            : new CustomEvent(eventName, { detail: eventData || {} });
        target.dispatchEvent(triggerEvent);
    };
    return BootstrapElement;
}(HTMLElement));
export default BootstrapElement;
//# sourceMappingURL=index.js.map