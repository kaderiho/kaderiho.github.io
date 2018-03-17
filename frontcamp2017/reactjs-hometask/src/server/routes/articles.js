import renderedApp from '../../shared/renderedApp';
import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    // TODO: check articles in DB and pass them into renderedApp as a state
    res.send(renderedApp(req))
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true });
});

module.exports = router;