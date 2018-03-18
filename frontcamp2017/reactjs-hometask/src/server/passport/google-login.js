const GoogleStrategy    = require('passport-google-oauth20');
const User              = require('../models/userModel');
const keys              = require('../config/keys');

const createUser = function({ password, email, username, googleId }) {
    let newUser = new User();

    newUser.local.password = newUser.generateHash(password);
    newUser.local.email = email;
    newUser.google.username = username;
    newUser.google.googleId = googleId;

    return newUser.save()
};

module.exports = new GoogleStrategy({
        clientSecret: keys.google.clientSecret,
        callbackURL: keys.google.callbackURL,
        clientID: keys.google.clientID
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ 'google.googleId' : profile.id })
            .then((user) => {
                if (user) {
                    done(null, user);
                }

                createUser({ username: profile.displayName, googleId: profile.id }).then((newUser) => {
                    return done(null, newUser)
                }, (err) => {
                    return done(err);
                });
            }, (err) => {
                return done(err);
            })
    }
);