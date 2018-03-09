import React from 'react';
import { render } from 'react-dom';
import BlogApp from './components/blog-app/blog-app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

const store = createStore(allReducers);

render(
    <Provider store={store}>
        <BlogApp/>
    </Provider>,
    document.getElementById('app')
);