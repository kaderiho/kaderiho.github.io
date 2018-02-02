const router    = require('express').Router();
const passport  = require('passport');

router.get('/', (req, res) => {
    res.render('index', {
        user: req.user
    });
});

module.exports = router;