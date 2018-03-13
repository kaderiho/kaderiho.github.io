import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/app';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';

const preloadedState = window.__INITIAL_DATA__;

delete window.__INITIAL_DATA__;

let store = createStore(allReducers, preloadedState);

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);