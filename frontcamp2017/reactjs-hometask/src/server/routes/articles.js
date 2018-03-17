import renderedApp from '../../shared/renderedApp';
import express from 'express';

let router = express.Router();

// TODO: check articles in DB and pass them into renderedApp as a state
router.get('/', (req, res) => {
    res.send(renderedApp(req))
});

module.exports = router;