const ArticlesFactory = function($resource) {
    let ArticlesModel = $resource('data/articles.json', null,
        {
            'get': {method: 'GET'},
            'save': {method: 'POST'},
            'query': {method: 'GET', isArray: true},
            'remove': {method: 'DELETE'},
            'delete': {method: 'DELETE'}
        }
    );
    let articlesList = ArticlesModel.query();

    return {
        getArticles: function() {
            return articlesList;
        },

        addArticle: function(article) {
            articlesList.push(article);
        },

        getArticle: function(articleId) {
            return articlesList.filter((article) => article.date === articleId)[0];
        },

        updateArticle: function(article) {
            articlesList.map((articleItem) => {
                if (articleItem.date === article.date) {
                    articleItem.description = article.description;
                    articleItem.title = article.title;
                }

                return articleItem;
            });
        }
    }
};

export default ArticlesFactory;