var express     = require('express');
var winston     = require('winston');
var router      = express.Router();

router.get('*', (req, res, next) => {
    winston.info('URL', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
});

module.exports = router;