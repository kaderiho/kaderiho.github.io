const PassportLocalStrategy = require('passport-local').Strategy;
const User  = require('../models/userModel');

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const newUser = new User();

    newUser.email = email.trim();
    newUser.password = password.trim();

    newUser.save((err) => {
        if (err) { return done(err) }

        return done(null);
    })
});