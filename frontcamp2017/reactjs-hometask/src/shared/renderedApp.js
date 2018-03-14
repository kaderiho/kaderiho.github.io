// Create store on server-side
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';
import indexTemplate from '../shared/indexTemplate';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './app';

const renderedApp = function(req) {
    const store = createStore(allReducers);
    const context = {};
    const markup = renderToString(
        // context - is an object for passing data to the certain component
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    );

    const preLoadedState = store.getState();

    return indexTemplate(markup, preLoadedState);
};

export default renderedApp;

