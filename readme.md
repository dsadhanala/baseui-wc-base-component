# BaseUICustomElement

[![npm](https://img.shields.io/npm/v/baseui-wc-base-component.svg)](https://www.npmjs.com/package/baseui-wc-base-component) [![license](https://img.shields.io/npm/l/baseui-wc-base-component.svg)](https://opensource.org/licenses/MIT)

This base component allows you to create a customElement without repeated bootstrapping code. Optionally you can use rendering library of your choice(vdom, preact, etc.) or just vanilla JS. You can also choose from the provided wrapped component with `lit-html` or `hyperHTML` to efficiently render/re-render templates to DOM, while keeping the component creation API same.

> Note: To keep this package lean, `hyperHTML` and `lit-html` are moved out as external dependencies, please make sure to include based on your choice.

> V1 re-written with Typescript support and improved developer experience with type definition for attribute values, conversion of all attributes default is no-longer works, you have to define them in a `static get attrToProp` method see examples below.

## Install

```
npm i baseui-wc-base-component
```

Since it's an UMD bundle, this can be imported into ES6/CJS/AMD modules in node or in browser environment

**Node:**

```javascript
// ES6
import { BaseUICustomElement } from 'baseui-wc-base-component';
// CJS
const { BaseUICustomElement } = require('baseui-wc-base-component');
// AMD
define('module_name', ['baseui-wc-base-component'], function (BaseUICustomElement){});
```

**Browser:**

```javascript
<script src="https://unpkg.com/baseui-wc-base-component/dist/index.js"></script>
```

## Component lifecycle methods:

Name            | When it gets called
--------------- | --------------------------------------------------------------------------------------------------------------------------------
`willConnect()` | before the component gets attached to the DOM (use this instead of constructor)
`onConnect()`   | on connectedCallback trigger
`didConnect()`  | after the component gets attached to the DOM (only once, after first render)
`willRender()`  | before `render()`
`didRender()`   | after `render()`
`setState()`    | shallow merge state changes and perform re-render
`define()`      | register custom element, helps prevent throwing error when same element is imported into other modules and try to register again

## Other DOM helper methods, refer below [example](#example):

Name                                        | When it gets called
------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`hasAttr(attr, targetEle?)`                 | Returns boolean based on if the attribute exist on the element
`getAttr(attr, targetEle?)`                 | Returns value of the given attribute on the element
`setAttr(attr, value, targetEle?)`          | Sets value to the given attribute on the element
`removeAttr(attr, targetEle?)`              | Removes the given attribute on the element
`addClass(className, targetEle?)`           | Adds class on the given element
`removeClass(className, targetEle?)`        | Removes class on the given element
`hasClass(className, targetEle?)`           | Returns boolean based on if the class exist on the element
`toggleClass(className, targetEle?, force)` | Toggles class on the given element
`find(selector, targetEle?)`                | Search and return element from the DOM based on the given selector and context element
`findAll(selector, targetEle?)`             | Search and return all elements from the DOM based on the given selector and context element
`on(eventName, targetEle?, callback)`       | Adds event listener on the given target element and calls the provided callback function when triggered
`off(eventName, targetEle?, callback)`      | Removes event listener on the given target element
`trigger(eventName, targetEle?, eventData)` | Emits an event (including custom events) on a given target element, note third param takes an object which will create customEvent with event detail object in it to pass information

## Usage
Live preview of below examples from codesandbox
1. [BaseUICustomElement (usage in JS)](https://codesandbox.io/s/mm26428vjy)
1. [BaseUICustomElement (usage in TS)](https://codesandbox.io/s/94kz39mn3w)

### with BaseCustomElement

Optionally you can use rendering library of your choice or just vanilla JS.

```javascript
import { BaseUICustomElement } from 'baseui-wc-base-component';

class HeaderTextBase extends BaseUICustomElement {
    static get attrToProp() {
        return {
            text: { type: String, observe: true, require: true }
        };
    }

    willConnect() {
        this.state = { count: 0 };
    }

    didRender() {
        const clickHandlerEle = this.find('[js-click-handler]');
        this.on('click', clickHandlerEle, this);
    }

    onClick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';
    }

    render({ text, clickCount = '' }: this) {
        this.innerHTML = `
            <h2 class="header-text__htext">
                <span js-click-handler>${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}

HeaderTextBase.define('header-text-base');
```

Usage in HTML:

```html
<header-text-base text="Rendered with base-custom-element"></header-text-base>
```

If you want to use in a Typescript project, can be written like below examples with hyper/lit html rendering.

### with hyperHTML

```typescript
import { CustomElement } from 'baseui-wc-base-component/esm/decorators';
import { Component } from 'baseui-wc-base-component/esm/with-hyperHTML';

interface HeaderTextState {
    count: number;
}

@CustomElement('header-text-hyper')
export class HeaderTextHyper extends Component<HeaderTextState> {
    readonly state = {
        count: 0
    };

    static get attrToProp() {
        return {
            text: { type: String, observe: true, require: true }
        };
    }

    onClick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';
    }

    render({ domRender, text, clickCount }) {
        return domRender`
            <h2 class="header-text__htext">
                <span onclick="${this}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}
```

Usage in HTML:

```html
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```

### with litHTML

```typescript
import { CustomElement } from 'baseui-wc-base-component/esm/decorators';
import { Component } from 'baseui-wc-base-component/esm/with-litHTML';

interface HeaderTextState {
    count: number;
}

@CustomElement('header-text-lit')
class HeaderTextLit extends Component<HeaderTextState> {
    readonly state = {
        count: 0
    };

    static get attrToProp() {
        return {
            text: { type: String, observe: true, require: true }
        };
    }

    onClick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.clickCount = this.state.count ? ` -> click count ${this.state.count}` : '';
    }

    render({ domRender, text, clickCount }) {
        return domRender`
            <h2 class="header-text__htext">
                <span @click="${this}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}
```

Usage in HTML:

```html
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```

## Component with external renderers example
Live preview from codesandbox:   
[Toggle view example (usage in TS)](https://codesandbox.io/s/mm26428vjy)

## TODO add more docs
