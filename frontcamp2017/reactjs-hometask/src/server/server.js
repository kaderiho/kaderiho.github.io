import React from 'react';
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import indexTemplate from '../shared/indexTemplate';
import App from '../shared/app';
import { matchPath, StaticRouter } from 'react-router-dom';
import routes from '../shared/routes';

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res, next) => {
    const activeRoutes = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoutes.fetchInitialData ? activeRoutes.fetchInitialData() : Promise.resolve();

    promise.then((data) => {
        const context = { data };
        const markup = renderToString(
            // context - is an object for passing data to the certain component
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );

        res.send(indexTemplate(markup, data));
    }).catch(next);
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
