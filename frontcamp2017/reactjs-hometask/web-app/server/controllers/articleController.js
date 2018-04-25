const Article = require('../models/ArticleModel');

const getArticles = (req, res, next) => {
    Article.find({})
        .then((data) => res.json(data), (err) => {
            next(err);
        })
};

const getArticle = (req, res, next) => {
    Article.find({ id: +req.params.id })
        .then((data) => res.json(data), (err) => {
            next(err);
        });
};

const updateArticle = (req, res, next) => {
    Article.findByIdAndUpdate(
        { id: +req.params.id },
        { description: req.body.description, title: req.body.title })
        .then((data) => res.json(data), (err) => {
            next(err);
        });
};

const createArticle = (req, res) => {
    Article.create({
        message: req.body.message,
        author: req.body.author,
        date: req.body.date,
        id: req.body.id
    }).then((data) => res.json(data), (err) => {
        next(err);
    })
};

const deleteArticle = (req, res, next) => {
    Article.findByIdAndRemove(req.query.id)
        .then((data) => res.json(data), (err) => {
            next(err);
        })
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;