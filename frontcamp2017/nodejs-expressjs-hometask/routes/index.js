const router    = require('express').Router();
const passport  = require('passport');

router.get('/', (req, res) => {
    res.format({
        'text/html': () => res.render('index', {
            user: req.user
        })
    });
});

module.exports = router;