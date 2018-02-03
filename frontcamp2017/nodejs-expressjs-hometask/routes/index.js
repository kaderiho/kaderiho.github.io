module.exports = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('index', {
            user: req.user
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/auth/signup',
        failureFlash : true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/auth/login',
        failureFlash : true
    }));
};