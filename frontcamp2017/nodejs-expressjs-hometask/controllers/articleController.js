var articlesList = require('../models/articleModel.js');

const getArticles = function(req, res, next) {
    res.send(JSON.stringify(articlesList));
    next();
};

const getArticle = function(req, res, next) {
    let articleId = +req.originalUrl.split('/').slice(-1)[0];

    let article = articlesList.find((article) => {
        return article.id === articleId;
    });

    article ? res.send(article) : res.send('There is no such article');
    next();
};

const updateArticle = function(req, res, next) {
    let updatedArticleId = +req.originalUrl.split('/').slice(-1)[0];
    let articleIsChanged = false;

    articlesList = articlesList.map((article) => {
        if (article.id === updatedArticleId) {
            articleIsChanged = true;
            article.title = req.body.title;
            article.description = req.body.description;
        }

        return article;
    });

    articleIsChanged ? res.send('Article has been updated') : res.send('Article has not been updated');
    next();
};

const createArticle = function(req, res, next) {
    let createdArticle = req.body;

    createdArticle.id = articlesList.length + 1;
    articlesList.push(createdArticle);

    res.send('Article has been saved');
    next();
};

const deleteArticle = function(req, res, next) {
    let deleteArticleId = +req.originalUrl.split('/').slice(-1)[0];

    articlesList = articlesList.filter((article) => article.id !== deleteArticleId);
    res.send('Article has been deleted');
    next();
};

module.exports.deleteArticle = deleteArticle;
module.exports.createArticle = createArticle;
module.exports.updateArticle = updateArticle;
module.exports.getArticles = getArticles;
module.exports.getArticle = getArticle;
