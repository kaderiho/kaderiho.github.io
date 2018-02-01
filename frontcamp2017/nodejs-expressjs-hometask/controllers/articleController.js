const articleModel = require('../models/articleModel');

const getArticles = function(req, res) {
    articleModel.find({}, (err, data) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(JSON.stringify(data));
        }
    });
};

const getArticle = function(req, res) {
    articleModel.find({id: +req.params.id}, (err, data) => {
       if (err) {
           res.status(404).send(err);
       } else {
           res.send(data);
       }
    });
};

const updateArticle = function(req, res) {
    articleModel.findByIdAndUpdate(
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

const createArticle = function(req, res) {
    articleModel.create({
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

const deleteArticle = function(req, res) {
    articleModel.findByIdAndRemove(req.params.id, (err, data) => {
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
