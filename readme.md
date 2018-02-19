# Base UI: base custom element
This base element allows you to choose either `lit-html` or `hyperHTML` to efficiently render and re-render templates to DOM, while keeping the component creation API same.

#### Install
```
npm i baseui-wc-base-component
```

It's a UMD bundle so can be imported into ES6/CJS/AMD modules in node or in browser environment

```
import { BaseUICustomElement } from 'baseui-wc-base-component';
const { BaseUICustomElement } = require('baseui-wc-base-component');
define('module_name', ['baseui-wc-base-component'], function (BaseUICustomElement){});
```

Browser
```
<script src="https://unpkg.com/baseui-wc-base-component/dist/baseui-wc-base-component.js"></script>
```

Component lifecycle methods:
1. **willConnect()**

    This will be triggered before connectedCallback(), kind of constructor where you can add properties and bind methods to instance.

1. **onConnect()**

    This will be triggered when element added to the DOM and element upgraded to customElement

1. **didConnect()**

    This will be triggered **only once**, right after first render complete

1. **willRender()**

    This will be triggered before every render

1. **didRender()**

    This will be triggered after every render

1. **setState()**

    Shallow merge changes and perform re-render

See below examples or this [codepen](https://codepen.io/dsadhanala/pen/XZZKej) to understand how you can create customElements extends from this module.

#### Example with hyperHTML

```
import { BaseUICustomElement } from 'baseui-wc-base-component';

class HeaderTextHyper extends BaseUICustomElement {
    static get observedAttributes() { return ['text']; }

    willConnect() {
        this.state = { count: 0 };
        this.onClickCallback = this.onClickCallback.bind(this);
    }

    onClickCallback() {
        this.setState((prevState) => ({ count: prevState.count + 1}));
    }

    render() {
        const { domRender, text, onClickCallback } = this;

        return domRender`
            <h2 class="header-text__htext"><span onclick="${onClickCallback}">${text}</span></h2>
        `;
    }
};

customElements.define('header-text-hyper', HeaderTextHyper);
```

HTML:

```
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```


#### Example with litHTML

```
import { BaseUICustomElementWithLitHTML } from 'baseui-wc-base-component';

class HeaderTextLit extends BaseUICustomElementWithLitHTML {
    static get observedAttributes() { return ['text']; }

    willConnect() {
        this.state = { count: 0 };
        this.onClickCallback = this.onClickCallback.bind(this);
    }

    onClickCallback() {
        this.setState((prevState) => ({ count: prevState.count + 1}));
    }

    render() {
        const { domRender, text, onClickCallback } = this;

        return domRender`
            <h2 class="header-text__htext"><span onclick="${onClickCallback}">${text}</span></h2>
        `;
    }
};

customElements.define('header-text-lit', HeaderTextLit);
```

HTML:

```
<header-text-hyper text="Title text component: hyper-html"></header-text-hyper>
```

#### TODO add more docs
