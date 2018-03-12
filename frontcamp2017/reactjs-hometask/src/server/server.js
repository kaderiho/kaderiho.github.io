import React from 'react';
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import indexTemplate from '../shared/index';
import App from '../shared/app';

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res) => {
    const data = 'Tyler';

    const markup = renderToString(
        <App data={data}/>
    );

    res.send(indexTemplate(markup, data));
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
