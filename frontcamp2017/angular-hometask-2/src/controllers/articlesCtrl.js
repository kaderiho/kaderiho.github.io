app.controller('articlesCtrl', ['$scope', 'ArticlesFactory', function($scope, ArticlesFactory) {
    $scope.articlesList = ArticlesFactory.getArticles();
    $scope.isArticleFormVisible = false;
    $scope.newArticleDescription = '';
    $scope.newArticleTitle = '';

    $scope.addArticle = function() {
        if (!$scope.newArticleDescription.length || !$scope.newArticleTitle.length) {
            return;
        }

        ArticlesFactory.addArticle({
            date: Date.now(),
            isEditing: false,
            isComleted: false,
            title: $scope.newArticleTitle,
            description: $scope.newArticleDescription
        });

        $scope.isArticleFormVisible = false;
        $scope.newArticleDescription = '';
        $scope.newArticleTitle = '';
    };

    $scope.editArticle = function() {

    };

    $scope.showArticleForm = function() {
        $scope.isArticleFormVisible = true;
    }
}]);