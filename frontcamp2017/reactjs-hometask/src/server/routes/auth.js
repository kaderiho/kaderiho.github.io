import express from 'express';
import passport from 'passport';
import validateInput from '../../shared/validations/signup';

const router = new express.Router();

router.post('/login', (req, res, next) => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        return res.status(401).json(errors);
    }
    
    return passport.authenticate('local-login', (err, token, userData) => {
        if (err) {
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({ form: 'Incorrect email or password'});
            }

            return res.status(400).json({ form: 'Could not process the form.' });
        }

        return res.json({
            message: 'You have successfully logged in!',
            user: userData,
            success: true,
            token
        });
    })(req, res, next);
});

module.exports = router;