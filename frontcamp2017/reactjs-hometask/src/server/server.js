// import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import indexTemplate from './templates/index'
//
// const port = 3000;
// const app = express();
//
// app.use(express.static('dist'));
//
// app.get('/', (req, res) => {
//     const appTemplate = renderToString(<BlogApp/>);
//     const outputTemplate = indexTemplate(appTemplate);
//
//     res.send(outputTemplate);
// });
//
// app.listen(3000, () => {
//     console.log('Server is running on: 3000 port')
// });

import React from 'react';
import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import indexTemplate from './templates/index';
import App from '../shared/app';
import { matchPath } from 'react-dom'

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res) => {
    const name = 'Tyler';
    const markup = renderToString(
        <App data={name}/>
    );

    res.send(indexTemplate(markup, name));
});

app.listen(3000, () => {
    console.log('Server is running on: 3000 port')
});
