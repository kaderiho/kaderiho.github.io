import React from 'react';
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import indexTemplate from '../shared/indexTemplate';
import App from '../shared/app';
import { matchPath, StaticRouter } from 'react-router-dom';
import routes from '../shared/routes';

// Create store on server-side
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';

import passport from 'passport';
import dbConfig from './config/db.config';
import mongoose from 'mongoose';
import './models/userModel';

const app = express();

mongoose.connect(dbConfig.dbURI, () => {
    console.dir('Connected to MongoDB');
}, (err) => {
    console.dir(err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(passport.initialize());
app.use(cors());

// Load passport strategies
import localSignupPassportStrategy from './passport/local-signup';
import localLoginPassportStrategy from './passport/local-login';

passport.use('local-signup', localSignupPassportStrategy);
passport.use('local-login', localLoginPassportStrategy);

// The authentication checker middleware
import authCheckMiddleware from './middleware/auth-check';
app.use('/api', authCheckMiddleware);

import authRoutes from './routes/auth';
import apiRoutes from './routes/api';

app.use('/auth', authRoutes);
// app.use('/api', apiRoutes);

app.get('*', (req, res, next) => {
    const activeRoutes = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoutes.fetchInitialData ? activeRoutes.fetchInitialData() : Promise.resolve();
    const store = createStore(allReducers);

    promise.then((data) => {
        const context = { data };
        const markup = renderToString(
            // context - is an object for passing data to the certain component
            <StaticRouter location={req.url} context={context}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </StaticRouter>
        );

        const preLoadedState = store.getState();

        res.send(indexTemplate(markup, preLoadedState));
    }).catch(next);
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
