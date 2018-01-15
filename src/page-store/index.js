import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { trigger } from '../helpers';
import BaseCustomElement from '../base-component';
import { PAGE_STORE, STORE_NAME, EVENT_STORE_READY, EVENT_STORE_CHANGE } from './consts';

const stores = {};

class PageStore extends BaseCustomElement {
    static mergeReducers(...reducers) {
        return (prevState, action) => reducers.reduce((state, reducer) => reducer(state, action), prevState);
    }

    didConnected() {
        this.rootReducer = (s = {}) => s;
        this.storeName = `${STORE_NAME}`;
        this.asyncReducers = {};

        this.onStateChanage = this.onStateChanage.bind(this);
        this.createReducer = this.createReducer.bind(this);
        this.injectAsyncReducer = this.injectAsyncReducer.bind(this);

        if (!stores[this.storeName]) {
            this.initiateStore();
        }

        // notify store ready
        this.onStoreReady();

        // attach store listener
        const { storeName, onStateChanage } = this;

        if (!stores[storeName]) return;

        this.unsubscribe = stores[storeName].store.subscribe(onStateChanage);
    }

    onStoreReady() {
        trigger(`${EVENT_STORE_READY}`, this, { store: this.getStore() });
    }

    onStateChanage() {
        trigger(`${EVENT_STORE_CHANGE}`, this, { state: this.getState() });
    }

    initiateStore(initialState = {}) {
        const { storeName, createReducer } = this;
        let middleware = s => s;

        if (process.env.NODE_ENV !== 'production') {
            middleware = applyMiddleware(reduxLogger);
        }

        stores[storeName] = {
            store: createStore(createReducer(), initialState, composeWithDevTools(middleware))
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

window.customElements.define(`${PAGE_STORE}`, PageStore);

export default PageStore;
