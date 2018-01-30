var articlesList = require('../models/articleModel.js');

const getArticles = function(req, res) {
    res.send(JSON.stringify(articlesList));
};

const getArticle = function(req, res) {
    let article = articlesList.find((article) => {
        return article.id === +req.params.id;
    });

    article ? res.send(article) : res.send('There is no such article');
};

const updateArticle = function(req, res) {
    let articleIsChanged = false;

    articlesList = articlesList.map((article) => {
        if (article.id === +req.params.id) {
            article.description = req.body.description;
            article.title = req.body.title;
            articleIsChanged = true;
        }

        return article;
    });

    articleIsChanged ? res.send('Article has been updated') : res.send('Article has not been updated');
};

const createArticle = function(req, res) {
    let createdArticle = req.body;

    createdArticle.id = articlesList.length + 1;
    articlesList.push(createdArticle);

    res.send('Article has been saved');
};

const deleteArticle = function(req, res, next) {
    articlesList = articlesList.filter((article) => article.id !== +req.params.id);
    res.send('Article has been deleted');
    next();
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;
