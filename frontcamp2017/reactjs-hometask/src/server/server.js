import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import BlogApp from '../client/components/blog-app/blog-app';
import indexTemplate from './templates/index'

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    const appTemplate = renderToString(<BlogApp/>);
    const outputTemplate = indexTemplate(appTemplate);

    res.send(outputTemplate);
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});