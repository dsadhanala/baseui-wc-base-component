# Base UI: base custom element

[![npm](https://img.shields.io/npm/v/baseui-wc-base-component.svg)](https://www.npmjs.com/package/baseui-wc-base-component)
[![license](https://img.shields.io/npm/l/baseui-wc-base-component.svg)](https://opensource.org/licenses/MIT)
[![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/base-component.min.js?compression=gzip&label=baseComponent)](https://unpkg.com/baseui-wc-base-component/dist/base-component.min.js)
[![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/with-hyperHTML.min.js?compression=gzip&label=withHyperHTML)](https://unpkg.com/baseui-wc-base-component/dist/with-hyperHTML.min.js)
[![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/with-litHTML.min.js?compression=gzip&label=withLitHTML)](https://unpkg.com/baseui-wc-base-component/dist/with-litHTML.min.js)

This base component allows you to create a customElement without repeated bootstrapping code.
Optionally you can use rendering library of your choice(vdom, preact, etc.) or just vanilla JS.
You can also choose from the provided wrapped component with `lit-html` or `hyperHTML` to efficiently render/re-render templates to DOM, while keeping the component creation API same.

> Note:
If you use `customElements.define('element-name', ElementClass);` and import components more than once on the same page throws exception as it tries to register same element more than once. So use `ElementClass.define('element-name')` instead, which is a static method on the element instance helps prevent this issue.

## Install
```
npm i baseui-wc-base-component
```

Since it's an UMD bundle, this can be imported into ES6/CJS/AMD modules in node or in browser environment

**Node:**
```js
// ES6
import { BaseComponent } from 'baseui-wc-base-component';
// CJS
const { BaseComponent } = require('baseui-wc-base-component');
// AMD
define('module_name', ['baseui-wc-base-component'], function (BaseComponent){});
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
import BaseComponent from 'baseui-wc-base-component/base-component';

class HeaderTextBase extends BaseComponent {
    static get observedAttributes() { return ['text']; }

    willConnect() {
        this.state = { count: 0 };
    }

    didRender() {
        const clickHandlerEle = this.find('[js-click-handler]');
        this.on('click', clickHandlerEle, this);
    }

    onclick() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        /* choose your own rendering library or use vanilla JS like below */
        const { text } = this;
        const clickCount = (this.state.count) ? ` -> click count ${this.state.count}` : '';

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

### with hyperHTML

```js
import BaseComponent from 'baseui-wc-base-component/with-hyperHTML';

class HeaderTextHyper extends BaseComponent {
    static get observedAttributes() { return ['text']; }

    willConnect() {
        this.state = { count: 0 };
        this.onClickCallback = this.onClickCallback.bind(this);
    }

    onClickCallback() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        const { domRender, text, onClickCallback } = this;
        const clickCount = (this.state.count) ? ` -> click count ${this.state.count}` : '';

        return domRender`
            <h2 class="header-text__htext">
                <span onclick="${onClickCallback}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}

HeaderTextHyper.define('header-text-hyper');
```

Usage in HTML:

```html
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```


### with litHTML

```js
import BaseComponent from 'baseui-wc-base-component/with-litHTML';

class HeaderTextLit extends BaseComponent {
    static get observedAttributes() { return ['text']; }

    willConnect() {
        this.state = { count: 0 };
        this.onClickCallback = this.onClickCallback.bind(this);
    }

    onClickCallback() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        const { domRender, text, onClickCallback } = this;
        const clickCount = (this.state.count) ? ` -> click count ${this.state.count}` : '';

        return domRender`
            <h2 class="header-text__htext">
                <span onclick="${onClickCallback}">${text}</span>
                <span>${clickCount}</span>
            </h2>
        `;
    }
}

HeaderTextLit.define('header-text-lit');
```

Usage in HTML:

```html
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```

## Complex example
Refer [this codepen](https://codepen.io/dsadhanala/pen/XZZKej) to understand how you can create customElements that are extended from this package.

## TODO add more docs
