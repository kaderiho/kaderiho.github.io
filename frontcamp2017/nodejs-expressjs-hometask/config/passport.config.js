const GoogleStrategy    = require('passport-google-oauth20');
const LocalStrategy     = require('passport-local').Strategy;
const User              = require('../models/userModel');
const passport          = require('passport');
const keys              = require('./keys');

const createUser = function({ password, email, username, googleId }) {
    let newUser = new User();

    newUser.local.password = newUser.generateHash(password);
    newUser.local.email = email;
    newUser.google.username = username;
    newUser.google.googleId = googleId;

    return newUser.save()
};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

// User authorization with local credentials
passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passReqToCallback : true,
        passwordField : 'password'
    }, (req, email, password, done) => {
        User.findOne({ 'local.email' : email}, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, req.flash('loginMessage', 'There is no such user'));
            }

            if (!user.validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'The password is incorrect'));
            }

            return done(null, user);
        })
    }
));

// User registration with local credentials
passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passReqToCallback : true,
        passwordField : 'password'
    },
    (req, email, password, done) => {
        User.findOne({ 'local.email' :  email }, (err, user) => {
            if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'The user already exists'));
            }

            createUser({ email, password }).then((newUser) => {
                return done(null, newUser)
            }, (err) => {
                return done(err);
            });
        });
    }));

// User authorization by Google
passport.use(new GoogleStrategy({
        clientSecret: keys.google.clientSecret,
        callbackURL: keys.google.callbackURL,
        clientID: keys.google.clientID
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ 'google.googleId' : profile.id }, (err, currentUser) => {
            if (err) {
                return done(err);
            }

            if (currentUser) {
                done(null, currentUser);
            }

            createUser({ username: profile.displayName, googleId: profile.id }).then((newUser) => {
                return done(null, newUser)
            }, (err) => {
                return done(err);
            });
        });
}));
