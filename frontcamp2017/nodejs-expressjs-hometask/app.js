const blogsRoute    = require('./routes/blogs');
const cookieSession = require('cookie-session');
const authRoutes    = require('./routes/auth');
const keys          = require('./config/keys');
const flash         = require('connect-flash');
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
        'text/html': () => res.render('index', (req, res) => {
            res.send({
                user: req.user
            })
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
require('./config/passport.setup')(passport);

// Server-side rendering output pages
app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieSession({
    keys: [keys.session.cookieKey],
    maxAge: COOKIE_AGE
}));
app.use(express.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(loggingHandler);
app.use(flash());

app.use('/auth/', authRoutes);
app.use('/blogs/', loginHandler, blogsRoute);

app.get('/', (req, res) => {
    res.render('index', {
        user: req.user
    });
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/auth/signup',
    failureFlash : true // allow flash messages
}));

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/auth/login',
    failureFlash : true
}));

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
