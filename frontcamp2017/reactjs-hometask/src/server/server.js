import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import BlogApp from '../client/app.jsx';

const app = express();

app.get('*', (req, res) => {
    res.send(
        `<!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Basic ReactJS app</title>
            </head>
            
            <body>
                <div id="app">${renderToString(<BlogApp/>)}</div>
            </body>
        </html>`
    )
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});