const passportSetup = require('./config/passport.setup');
const blogsRoute    = require('./routes/blogs');
const indexRoute    = require('./routes/index');
const cookieSession = require('cookie-session');
const authRoutes    = require('./routes/auth');
const keys          = require('./config/keys');
const COOKIE_AGE    = 24 * 60 * 60 * 1000;
const mongoose      = require('mongoose');
const passport      = require('passport');
const express       = require('express');
const winston       = require('winston');
const app           = express();

const loggingHandler = (req, res, next) => {
    winston.info('URL', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

const loginHandler = (req, res, next) => {
    // Redirect user to login page, if he hasn't logged in
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
};

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.format({
        'text/plain': () => res.send(err.message || 'Page was not found'),
        'text/html': () => res.render('home'),
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

app.use(cookieSession({
    keys: [keys.session.cookieKey],
    maxAge: COOKIE_AGE
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(loggingHandler);
app.use('/', indexRoute);
app.use('/auth/', authRoutes);
app.use('/blogs/', loginHandler, blogsRoute);

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
