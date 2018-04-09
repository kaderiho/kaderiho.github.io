import validateInput from '../../shared/validations/signup';
import renderedApp from '../renderedApp';
import passport from 'passport';
import express from 'express';

const router = new express.Router();

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
                return res.status(400).json({ form: 'The email has already token'});
            }

            return res.status(400).json({ form: 'Could not process the form.'});
        }

        return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! Now you should be able to log in.'
        })
    })(req, res, next)
});

module.exports = router;