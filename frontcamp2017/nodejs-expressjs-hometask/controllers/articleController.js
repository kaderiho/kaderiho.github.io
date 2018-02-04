const Article = require('../models/ArticleModel');

const getArticles = (req, res, next) => {
    Article.find({}, (err, data) => {
        if (err) {
            next(err);
        }
        res.send(JSON.stringify(data));
    });
};

const getArticle = (req, res, next) => {
    Article.find({id: +req.params.id}, (err, data) => {
        if (err) {
            next(err);
        }
        res.send(data);
    });
};

const updateArticle = (req, res, next) => {
    Article.findByIdAndUpdate(
        { id: +req.params.id },
        { description: req.body.description, title: req.body.title },
        (err, data) => {
            if (err) {
                next(err);
            }
            res.send(data);
    });
};

const createArticle = (req, res) => {
    Article.create({
        title: req.body.title,
        description: req.body.description
    }, (err, data) => {
        if (err) {
            next(err);
        }
        res.send(data);
    });
};

const deleteArticle = (req, res, next) => {
    Article.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            next(err);
        }
        res.send(data);
    });
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;
