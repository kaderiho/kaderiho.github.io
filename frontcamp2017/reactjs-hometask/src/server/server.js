import React from 'react';
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import indexTemplate from '../shared/indexTemplate';
import App from '../shared/app';
import fetchBlogs from '../shared/api';

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res) => {
    fetchBlogs().then((data) => {
        const markup = renderToString(
            <App data={data}/>
        );

        res.send(indexTemplate(markup, data));
    });
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
