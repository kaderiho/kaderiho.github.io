const router    = require('express').Router();
const passport  = require('passport');

router.get('/login', (req, res) => {
    res.render('login', { message: req.flash('loginMessage') });
});

router.get('/signup', (req, res) => {
    res.render('signup', { message: req.flash('signupMessage') });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

module.exports = router;