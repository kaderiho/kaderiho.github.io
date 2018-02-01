const blogsRoute    = require('./routes/blogs');
const express       = require('express');
const winston       = require('winston');
const mongoose      = require('mongoose');
const app           = express();

mongoose.connect('mongodb://127.0.0.1/frontcamp');

const loggingHandler = function(req, res, next) {
    winston.info('URL', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

const errorsHandler = function(err, req, res) {
    res.status(err.status || 500);
    res.format({
        'text/plain': () => res.send('Page was not found'),
        'text/html': () => res.render('index', {
            title: 'Hello there',
            message: 'Hello there!'
        }),
        'application/json': () => res.json({ error: 'Page was not found' })
    });
};

// Logging configuration
winston.configure({
    transports: [
        new (winston.transports.File)({ filename: 'logs.log' })
    ]
});

// Server-side rendering output pages
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(loggingHandler);
app.use('/blogs/', blogsRoute);

// Errors handling
app.use((req, res, next) => {
    let err = new Error('Page was not Found');
        err.status = 404;
        next(err);
});
app.use(errorsHandler);

app.listen('3000');
