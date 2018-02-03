const passportConfig    = require('./config/passport.config');
const dbConfig          = require('./config/db.config');
const blogsRoute        = require('./routes/blogs');
const cookieSession     = require('cookie-session');
const authRoutes        = require('./routes/auth');
const keys              = require('./config/keys');
const flash             = require('connect-flash');
const mongoose          = require('mongoose');
const passport          = require('passport');
const express           = require('express');
const winston           = require('winston');

const COOKIE_AGE        = 24 * 60 * 60 * 1000;
const app               = express();

const loggingHandler = (req, res, next) => {
    winston.info('URL', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

const loggedInHandler = (req, res, next) => {
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
        'text/html': () => res.render('index', (req, res) => res.send({ user: req.user })),
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
mongoose.connect(dbConfig.dbURI, () => {
    console.dir('Connected to MongoDB');
}, (err) => {
    console.dir(err);
});

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieSession({ keys: [keys.session.cookieKey], maxAge: COOKIE_AGE}));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(loggingHandler);
app.use(flash());

app.use('/auth/', authRoutes);
app.use('/blogs/', loggedInHandler, blogsRoute);
require('./routes/index')(app, passport);

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
