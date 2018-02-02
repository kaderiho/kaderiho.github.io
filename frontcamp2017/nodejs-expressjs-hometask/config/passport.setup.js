const GoogleStrategy    = require('passport-google-oauth20');
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

passport.use(new GoogleStrategy({
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID
}, (accessToken, refreshToken, profile, done) => {
    // Check if user has already logged in
    User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
            done(null, currentUser);
        } else {
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((createdUser) => {
                done(null, createdUser);
            });
        }
    });
}));
