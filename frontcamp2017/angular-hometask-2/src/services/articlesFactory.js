app.factory('ArticlesFactory', function($resource) {
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
        }
    }
});