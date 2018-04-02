const Article = require('../models/articleModel');

const getArticles = (req, res, next) => {
    Article.find({})
        .then((data) => res.json(data), (err) => {
            next(err);
        })
};

const getArticle = (req, res, next) => {
    Article.find({ _id: req.params.id })
        .then((data) => res.json(data), (err) => {
            next(err);
        });
};

const updateArticle = (req, res, next) => {
    Article.findByIdAndUpdate(
        req.params.id,
        { description: req.body.description, title: req.body.title })
        .then((data) => res.json(data), (err) => {
            next(err);
        });
};

const createArticle = (req, res) => {
    Article.create({ title: req.body.title, description: req.body.description })
        .then((data) => res.json(data), (err) => {
            next(err);
        })
};

const deleteArticle = (req, res, next) => {
    Article.findByIdAndRemove(req.params.id)
        .then((data) => res.json(data), (err) => {
            next(err);
        })
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;
