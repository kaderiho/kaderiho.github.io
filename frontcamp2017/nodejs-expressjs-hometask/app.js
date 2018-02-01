const passportSetup = require('./config/passport.setup');
const blogsRoute    = require('./routes/blogs');
const authRoutes    = require('./routes/auth');
const keys          = require('./config/keys');
const mongoose      = require('mongoose');
const passport      = require('passport');
const express       = require('express');
const winston       = require('winston');
const app           = express();

const loggingHandler = function(req, res, next) {
    winston.info('URL', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

const errorHandler = function(err, req, res, next) {
    res.status(err.status || 500);
    res.format({
        'text/plain': () => res.send(err.message || 'Page was not found'),
        'text/html': () => res.render('home', {
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

// Connect to the DB
mongoose.connect(keys.mongodb.dbURI, () => {
    console.dir('Connected to mongo DB');
});

// Server-side rendering output pages
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(loggingHandler);
app.use('/blogs/', blogsRoute);
app.use('/auth/', authRoutes);

// Errors handling
app.use((req, res, next) => {
    let err = new Error('Page was not Found');
        err.status = 404;
        next(err);
});
app.use(errorHandler);

app.listen('3000', () => {
    console.dir('App is listening for request on port 3000')
});
