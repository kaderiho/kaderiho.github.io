import renderedApp from '../../shared/renderedApp';
const Article = require('../models/ArticleModel');
import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    Article.find({}).then((articlesList) => {
        res.send(renderedApp(req, 'articles', articlesList))
    }, (err) => {});
});

module.exports = router;