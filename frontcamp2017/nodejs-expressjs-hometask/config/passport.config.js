const GoogleStrategy    = require('passport-google-oauth20');
const LocalStrategy     = require('passport-local').Strategy;
const User              = require('../models/userModel');
const passport          = require('passport');
const keys              = require('./keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

// User authorization via local credentials
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
                return done(null, false);
            }

            if (!user.validPassword(password)) {
                return done(null, false);
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
        User.findOne({ 'local.email' :  email }, function(err, user) {
            if (err)
                return done(err);

            if (user) {
                return done(null, false);
            }

            let newUser = new User();

            newUser.local.password = newUser.generateHash(password);
            newUser.local.email = email;

            newUser.save().then((newUser) => {
                return done(null, newUser)
            })
        });
    }));

// User authorization by Google
passport.use(new GoogleStrategy({
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ 'google.googleId' : profile.id }).then((currentUser) => {
            if (currentUser) {
                done(null, currentUser);
            }

            new User({
                google: {
                    username: profile.displayName,
                    googleId: profile.id
                }
            }).save().then((createdUser) => {
                done(null, createdUser);
            });
        });
}));
