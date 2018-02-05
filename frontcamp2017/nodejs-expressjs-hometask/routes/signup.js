const router    = require('express').Router();
const passport  = require('passport');

router.get('/', (req, res) => {
    res.render('signup', { message: req.flash('signupMessage') });
});

router.post('/', passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
}));

module.exports = router;