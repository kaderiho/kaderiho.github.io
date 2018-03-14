const User      = require('mongoose').model('UserModel');
const config    = require('../config/db.config');
const jwt       = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.redirect('auth/login');
    }

    const token = req.headers.authorization.split(' ')[1];

    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) { return res.redirect('auth/login'); }

        const userId = decoded.sub;

        return User.findById(userId, (userErr, user) => {
            if (userErr || !user) {
                return res.redirect('auth/login').end();
            }

            return next();
        });
    });
};
