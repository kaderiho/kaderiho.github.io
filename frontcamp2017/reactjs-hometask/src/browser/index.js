import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/app';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';

let store = createStore(allReducers);

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);