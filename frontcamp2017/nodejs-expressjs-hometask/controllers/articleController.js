const Article = require('../models/ArticleModel');

const getArticles = (req, res) => {
    Article.find({}, (err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(JSON.stringify(data));
        }
    });
};

const getArticle = (req, res) => {
    Article.find({id: +req.params.id}, (err, data) => {
       if (err) {
           res.status(404).send(err);
       } else {
           res.send(data);
       }
    });
};

const updateArticle = (req, res) => {
    Article.findByIdAndUpdate(
        { id: +req.params.id },
        { description: req.body.description, title: req.body.title },
        (err, data) => {
            if (err) {
                res.status(404).send(err);
            } else {
                res.send(data);
            }
    });
};

const createArticle = (req, res) => {
    Article.create({
        title: req.body.title,
        description: req.body.description
    }, (err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(data);
        }
    });
};

const deleteArticle = (req, res) => {
    Article.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(data);
        }
    });
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;
