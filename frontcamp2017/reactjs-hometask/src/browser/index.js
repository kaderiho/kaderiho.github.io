import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/components/app';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';
import setAuthorizationToken from './utils/setAuthorizationToken';
import thunk from 'redux-thunk'
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/authActions';

const preloadedState = window.__INITIAL_DATA__;

delete window.__INITIAL_DATA__;

let store = createStore(
    allReducers,
    preloadedState,
    compose(applyMiddleware(thunk), window.devToolsExtension() ? window.devToolsExtension() : f => f)
);

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.getItem('jwtToken'));
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);