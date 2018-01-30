var loggingRoute    = require('./routes/logging.js');
var blogsRoute      = require('./routes/blogs.js');
var express         = require('express');
var winston         = require('winston');
var app             = express();

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
app.use('/blogs/', blogsRoute);

// Error handlers middleware
app.use((req, res) => {
    res.status(404);

    if (req.accepts('html')) {
        res.render('index', {title: 'Hello there', message: 'Hello there!'});
        return;
    }

    if (req.accepts('json')) {
        res.send({ error: 'Page was not found' });
        return;
    }

    res.type('txt').send('Page was not found');
});

// Logging any requests
app.use('/', loggingRoute);

app.listen('3000');
