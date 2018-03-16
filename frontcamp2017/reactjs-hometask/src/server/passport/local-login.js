const PassportLocalStrategy = require('passport-local').Strategy;
const User                  = require('mongoose').model('UserModel');
const config                = require('../config/db.config');
const jwt                   = require('jsonwebtoken');

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    return User.findOne({ email : email }, (err, user) => {
        if (err) { return done(err); }

        if (!user) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }

        return user.comparePassword(password, (passwordErr, isMatch) => {
            if (err) {return done(err);}

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            const payload = {
                sub: user._id,
                email
            };

            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                email: user.email
            };

            return done(null, token, data);
        })
    })
});
