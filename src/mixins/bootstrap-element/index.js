import { toCamelCase, serializeAttrValue } from './helpers/index.js';

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
                this.setAttribute(name, value);
            }
        });
    }

    /**
     * This loops through all the given attributes, observedAttributes and send it to `defineProp()`
     * @param {array} attributes list of attributes added to the component
     * @param {array} observedAttributes list of observed attributes
     */
    createAttributesToProperties(attributes, observedAttributes) {
        // attributes to properties
        Object.keys(attributes).forEach((attr) => {
            const attrName = attributes[attr].name;
            this.defineProp(attrName);
        });

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
};

export default BootstrapElement;
