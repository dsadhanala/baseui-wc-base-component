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
function getPropType(obj, key) {
    return obj[key]; // Inferred type is T[K]
}
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
    BootstrapElement.prototype.defineProp = function (name, reflectedAttrToProps) {
        var _this = this;
        if (!name)
            return;
        var classProto = Object.getPrototypeOf(this);
        var propName = toCamelCase(name);
        if (this.hasOwnProperty(propName)) {
            var value = this[propName];
            delete this[propName];
            this[propName] = value;
        }
        if (propName in classProto)
            return;
        var _a = reflectedAttrToProps[name], type = _a.type, observe = _a.observe;
        var get = function () {
            var value = _this.getAttribute(name);
            // if boolean attribute check if attribute exist or not
            if (true.constructor === type && !value)
                return _this.hasAttribute(name);
            return serializeAttrValue(classProto, name, value, type);
        };
        var set = function (value) {
            if (!observe)
                return;
            var valueAsString = String(value);
            // when value is null or false remove attribute
            if (value == null || valueAsString === 'false')
                return _this.removeAttribute(name);
            // set boolean attribute
            if (valueAsString === 'true')
                return _this.setAttribute(name, '');
            var parsedVal = serializeAttrValue(classProto, name, value, type);
            _this.setAttribute(name, parsedVal);
        };
        Object.defineProperty(classProto, propName, { get: get, set: set, configurable: true });
    };
    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {object} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    BootstrapElement.prototype.createAttributesToProperties = function (reflectedAttrToProps) {
        var _this = this;
        if (reflectedAttrToProps === void 0) { reflectedAttrToProps = {}; }
        Object.keys(reflectedAttrToProps).forEach(function (attrName) { return _this.defineProp(attrName, reflectedAttrToProps); });
    };
    /**
     * has attribute
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    BootstrapElement.prototype.hasAttr = function (attr, target) {
        if (target === void 0) { target = this; }
        return target.hasAttribute(attr);
    };
    /**
     * set attribute value
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    BootstrapElement.prototype.getAttr = function (attr, target) {
        if (target === void 0) { target = this; }
        return target.getAttribute(attr);
    };
    /**
     * set attribute value
     * @param {string} attribute name
     * @param {string} new/changed value for the attribute
     * @param {object} target DOM element
     */
    BootstrapElement.prototype.setAttr = function (attr, val, target) {
        if (target === void 0) { target = this; }
        return target.setAttribute(attr, val);
    };
    /**
     * remove attribute
     * @param {string} attribute name
     * @param {object} target DOM element
     */
    BootstrapElement.prototype.removeAttr = function (attr, target) {
        if (target === void 0) { target = this; }
        return target.removeAttribute(attr);
    };
    /**
     * helper function to add class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {object} element DOM element
     */
    BootstrapElement.prototype.addClass = function (className, target) {
        if (target === void 0) { target = this; }
        target.classList.add(className);
        return target;
    };
    /**
     * helper function to remove class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {object} element DOM element
     */
    BootstrapElement.prototype.removeClass = function (className, target) {
        if (target === void 0) { target = this; }
        target.classList.remove(className);
        return target;
    };
    /**
     * helper function to check for has class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @return {boolean} contains true/false
     */
    BootstrapElement.prototype.hasClass = function (className, target) {
        if (target === void 0) { target = this; }
        return target.classList.contains(className);
    };
    /**
     * helper function to toggle class name using classList
     * @param {string} className string of class name
     * @param {object} target DOM element
     * @param {boolean} force boolean to use force optionally
     * @return {object} element DOM element
     */
    BootstrapElement.prototype.toggleClass = function (className, target, force) {
        if (target === void 0) { target = this; }
        return target.classList.toggle(className, force);
    };
    /**
     * helper to find child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} target Element in which search should be performed
     * @return {object} Element
     */
    BootstrapElement.prototype.find = function (selector, target) {
        if (target === void 0) { target = this; }
        return target.querySelector(selector);
    };
    /**
     * helper to find all child nodes rendered inside
     * @param {string} selector that is used to search the DOM node
     * @param {object} target Element in which search should be performed
     * @return {array} Elements that are matched
     */
    BootstrapElement.prototype.findAll = function (selector, target) {
        if (target === void 0) { target = this; }
        return target.querySelectorAll(selector);
    };
    /**
     * simplyfied event handler function to add events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     * @param {object} target HTML element that needs event to be added
     */
    BootstrapElement.prototype.on = function (eventName, callback, target) {
        if (target === void 0) { target = this; }
        target.addEventListener(eventName, callback, false);
    };
    /**
     * simplyfied event handler function to remove events
     * @param {string} eventName event type ex: click, blur, etc.
     * @param {function | Object} callback function or Object (which has handleEvent method) that needs to be triggerd
     * @param {object} target HTML element that needs event to be added
     */
    BootstrapElement.prototype.off = function (eventName, callback, target) {
        if (target === void 0) { target = this; }
        target.removeEventListener(eventName, callback, false);
    };
    /**
     * trigger native/custom event and pass data between components
     * @param {string} eventName custom event name
     * @param {object} target element reference on which event needs to be triggerd
     * @param {object} eventData custom event data to share
     */
    BootstrapElement.prototype.trigger = function (eventName, target, eventData) {
        if (target === void 0) { target = this; }
        var triggerEvent = !eventData
            ? new Event(eventName)
            : new CustomEvent(eventName, { detail: eventData || {} });
        target.dispatchEvent(triggerEvent);
    };
    return BootstrapElement;
}(HTMLElement));
export default BootstrapElement;
//# sourceMappingURL=index.js.map