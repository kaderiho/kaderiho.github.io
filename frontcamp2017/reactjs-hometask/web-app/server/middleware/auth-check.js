const User      = require('mongoose').model('UserModel');
const config    = require('../config/db.config');
const jwt       = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        return res.redirect('auth/login');
    }

    const token = authorizationHeader.split(' ')[1];

    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) { return res.status(401); }

        const userId = decoded.sub;

        return User.findById(userId, (userErr, user) => {
            if (userErr || !user) {
                return res.status(401).end();
            }

            return next();
        });
    });
};
