const GoogleStrategy    = require('passport-google-oauth20');
var LocalStrategy       = require('passport-local').Strategy;
const User              = require('../models/userModel');
const keys              = require('./keys');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id).then((user) => {
            done(null, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        }, (req, email, password, done) => {
            console.dir('=========== LOCAL LOGIN AUTH');
            process.nextTick(() => {
                User.findOne({ 'local.email' : email}, (err, user) => {

                    if (err) {
                        return done(err);
                    }

                    if (user) {
                        return done(null, false);
                    }

                    let newUser = new User();

                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save().then((createdUser) => {
                        done(null, createdUser);
                    })
                })
            })
        }
    ));

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.dir('LOCAL SIGNUP!!!!');
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function() {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        var newUser            = new User();

                        // set the user's local credentials
                        newUser.local.email    = email;
                        newUser.local.password = newUser.generateHash(password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));

    passport.use(new GoogleStrategy({
            clientSecret: keys.google.clientSecret,
            callbackURL: '/auth/google/redirect',
            clientID: keys.google.clientID
        },
        (accessToken, refreshToken, profile, done) => {
            // Check if user has already logged in
            console.dir('=========== GOOGLE AUTH');

            User.findOne({ 'google.googleId' : profile.id }).then((currentUser) => {
                if (currentUser) {
                    done(null, currentUser);
                } else {
                    new User({
                        google: {
                            username: profile.displayName,
                            googleId: profile.id
                        }
                    }).save().then((createdUser) => {
                        done(null, createdUser);
                    });
                }
            });
        }));
};
