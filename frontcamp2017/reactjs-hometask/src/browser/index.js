import React from 'react';
import { render } from 'react-dom';
import App from '../shared/app';
import { hydrate } from 'react-dom';

hydrate(
    <App data={window.__INITIAL_DATA__}/>,
    document.getElementById('app')
);