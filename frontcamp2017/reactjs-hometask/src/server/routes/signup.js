import express from 'express';
import renderedApp from '../../shared/renderedApp';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import passport from 'passport';

const router = new express.Router();

const validateInput = function(data) {
    let errors = {};

    if (!validator.isEmail(data.email)) {
        errors.email = 'Its should be an email';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'The password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};

router.get('/', (req, res, next) => {
    res.send(renderedApp(req));
});

router.post('/', (req, res, next) => {
    // Validation of user's credentials
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    return passport.authenticate('local-signup', (err) => {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(409).json({
                    success: false,
                    message: 'Check the form for errors.',
                    errors: {
                        email: 'This email is already taken.'
                    }
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process the form.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        })
    })(req, res, next)
});

module.exports = router;