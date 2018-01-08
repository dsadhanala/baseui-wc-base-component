import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { trigger } from 'baseui-wc-utils/src/dom/event-handlers';
import { BaseUICustomElement } from '../../baseui-wc-base-component';

const stores = {};

class PageStore extends BaseUICustomElement {
    static get is() { return { name: 'page-store' }; }

    static reduceReducers(...reducers) {
        return (previous, current) => reducers.reduce((p, r) => r(p, current), previous);
    }

    didConnected() {
        this.rootReducer = (s = {}) => s;
        this.storeName   = 'PAGE_STORE';
        this.asyncReducers = {};

        this.onStateChanage     = this.onStateChanage.bind(this);
        this.createReducer      = this.createReducer.bind(this);
        this.injectAsyncReducer = this.injectAsyncReducer.bind(this);

        this.initiateStore();

        // notify store ready
        this.onStoreReady();

        // attach store listener
        const { storeName, onStateChanage } = this;

        if (!stores[storeName]) return;

        this.unsubscribe = stores[storeName].store.subscribe(onStateChanage);
    }

    onStoreReady() {
        trigger('storeready', this, { store: this.getStore() });
    }

    onStateChanage() {
        trigger('statechange', this, { state: this.getState() });
    }

    initiateStore(initialState = {}) {
        const { storeName, createReducer } = this;

        if (stores[storeName]) return;

        stores[storeName] = {
            store: createStore(createReducer(), initialState, devToolsEnhancer())
        };

        // add injectAsyncReducer to the store API
        stores[storeName].store = {
            ...stores[storeName].store,
            injectAsyncReducer: this.injectAsyncReducer
        };
    }

    createReducer(asyncReducers = {}) {
        const { rootReducer } = this;
        return combineReducers({ rootReducer, ...asyncReducers });
    }

    injectAsyncReducer(defaultStore, name, asyncReducer) {
        this.asyncReducers[name] = asyncReducer; // eslint-disable-line
        defaultStore.replaceReducer(this.createReducer(this.asyncReducers));
    }

    getState() {
        return stores[this.storeName].store.getState();
    }

    getStore() {
        return stores[this.storeName].store;
    }

    /* clean up events and store change listeners (if any) */
    disconnectedCallback() {
        this.unsubscribe();
    }
}

window.customElements.define(PageStore.is.name, PageStore);

export default PageStore;
