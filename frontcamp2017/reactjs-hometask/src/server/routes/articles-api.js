import express from 'express';

let router = express.Router();

// TODO: Save / delete articles from DB
router.post('/', (req, res) => {
    res.status(200).json({ success: true });
});

module.exports = router;