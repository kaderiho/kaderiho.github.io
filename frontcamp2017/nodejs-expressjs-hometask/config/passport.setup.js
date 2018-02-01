const GoogleStrategy    = require('passport-google-oauth20');
const passport          = require('passport');
const keys              = require('./keys');

passport.use(new GoogleStrategy({
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID
}, (accessToken, refreshToken, profileInformation, done) => {
    console.dir(profileInformation);
}));
