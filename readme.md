# Base UI: base custom element

- base-custom-element: [![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/base-component.min.js?compression=gzip)](https://unpkg.com/baseui-wc-base-component/dist/base-component.min.js)
- with-hyperHTML: [![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/with-hyperHTML.min.js?compression=gzip)](https://unpkg.com/baseui-wc-base-component/dist/with-hyperHTML.min.js)
- with-litHTML: [![gzip size](http://img.badgesize.io/https://unpkg.com/baseui-wc-base-component/dist/with-litHTML.min.js?compression=gzip)](https://unpkg.com/baseui-wc-base-component/dist/with-litHTML.min)

This base component allows you to create a customElement without repeated bootstrapping code.
Optionally you can use rendering library of your choice(vdom, preact, etc.) or just vanilla JS.
You can also choose from the provided wrapped component with `lit-html` or `hyperHTML` to efficiently render/re-render templates to DOM, while keeping the component creation API same.

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

## Component lifecycle methods:

| Name         | When it gets called                                                             |
|--------------|---------------------------------------------------------------------------------|
| `willConnect`| before the component gets attached to the DOM (use this instead of constructor) |
| `onConnect`  | on connectedCallback trigger                                                    |
| `didConnect` | after the component gets attached to the DOM (only once, after first render)    |
| `willRender` | before `render()`.                                                              |
| `didRender`  | after `render()`                                                                |
| `setState`   | shallow merge state changes and perform re-render                               |

## Simple component example and comparison with all variations:
Please refer below code examples with very basic component which updates text when clicked.

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

customElements.define('header-text-base', HeaderTextBase);

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

customElements.define('header-text-hyper', HeaderTextHyper);
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

customElements.define('header-text-lit', HeaderTextLit);
```

Usage in HTML:

```html
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```

## Complex example
Refer [this codepen](https://codepen.io/dsadhanala/pen/XZZKej) to understand how you can create customElements that are extended from this package.

## TODO add more docs
