# Base UI: base custom element

[![npm](https://img.shields.io/npm/v/baseui-wc-base-component.svg)](https://www.npmjs.com/package/baseui-wc-base-component)
[![license](https://img.shields.io/npm/l/baseui-wc-base-component.svg)](https://opensource.org/licenses/MIT)
[![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/base-component.min.js?compression=gzip&label=baseComponent)](https://unpkg.com/baseui-wc-base-component/dist/base-component.min.js)
[![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/with-hyperHTML.min.js?compression=gzip&label=withHyperHTML)](https://unpkg.com/baseui-wc-base-component/dist/with-hyperHTML.min.js)
[![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/with-litHTML.min.js?compression=gzip&label=withLitHTML)](https://unpkg.com/baseui-wc-base-component/dist/with-litHTML.min.js)

This base component allows you to create a customElement without repeated bootstrapping code.
Optionally you can use rendering library of your choice(vdom, preact, etc.) or just vanilla JS.
You can also choose from the provided wrapped component with `lit-html` or `hyperHTML` to efficiently render/re-render templates to DOM, while keeping the component creation API same.

> Note: To keep this package lean, `hyperHTML` and `lit-html` are moved out as external deps, please make sure to include based on your choice.

> V1 re-written with Typescript support and improved developer experience with type definition for attribute values, conversion of all attributes default is no-longer works, you have to define them in a `static get attrToProp` method see examples below.

## Install
```
npm i baseui-wc-base-component
```

Since it's an UMD bundle, this can be imported into ES6/CJS/AMD modules in node or in browser environment

**Node:**
```js
// ES6
import { BaseUICustomElement } from 'baseui-wc-base-component';
// CJS
const { BaseUICustomElement } = require('baseui-wc-base-component');
// AMD
define('module_name', ['baseui-wc-base-component'], function (BaseUICustomElement){});
```

**Browser:**
```js
<script src="https://unpkg.com/baseui-wc-base-component/dist/baseui-wc-base-component.js"></script>
```

## Component methods:

| Name         | When it gets called                                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `willConnect`| before the component gets attached to the DOM (use this instead of constructor)                                                        |
| `onConnect`  | on connectedCallback trigger                                                                                                           |
| `didConnect` | after the component gets attached to the DOM (only once, after first render)                                                           |
| `willRender` | before `render()`                                                                                                                      |
| `didRender`  | after `render()`                                                                                                                       |
| `setState`   | shallow merge state changes and perform re-render                                                                                      |
| `define`     | register custom element, helps prevent throwing error when same element <br> is imported into other modules and try to register again  |

## Simple component example and comparison with all variations:
Please refer below code examples with very basic component which updates text when clicked.

To see the preview of below examples refer this [codepen](https://codepen.io/dsadhanala/pen/jxNNZG)

### with BaseCustomElement
Optionally you can use rendering library of your choice or just vanilla JS.

```js
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

```ts
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

```ts
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

## Complex example
Refer [this codepen](https://codepen.io/dsadhanala/pen/XZZKej) to understand how you can create customElements that are extended from this package.

## TODO add more docs
