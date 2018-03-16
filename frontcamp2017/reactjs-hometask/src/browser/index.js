import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/components/app';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';
import thunk from 'redux-thunk'

const preloadedState = window.__INITIAL_DATA__;

delete window.__INITIAL_DATA__;

let store = createStore(
    allReducers,
    preloadedState,
    compose(applyMiddleware(thunk), window.devToolsExtension() ? window.devToolsExtension() : f => f)
);

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);