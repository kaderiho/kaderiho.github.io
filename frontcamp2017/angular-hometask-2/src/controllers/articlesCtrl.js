app.controller('articlesCtrl', ['$scope', 'ArticlesFactory', '$location', '$routeParams',
    function($scope, ArticlesFactory, $location, $routeParams) {
    $scope.isArticleFormVisible = $location.path().indexOf('/add') !== -1;
    $scope.articlesList = ArticlesFactory.getArticles();
    $scope.articleForm = {
        description: '',
        title: '',
        date: null
    };

    $scope.totalPagesCount = Math.ceil($scope.articlesList.length / $scope.itemsPerPage);
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;

    $scope.navigate = function(nextPage) {
        $scope.currentPage = nextPage;
    };

    $scope.updateArticle = function() {
        ArticlesFactory.updateArticle({
            description: $scope.articleForm.description,
            title: $scope.articleForm.title,
            date: $scope.articleForm.date
        });

        $scope.isArticleFormVisible = false;
        $location.path('/');
    };

    $scope.addArticle = function() {
        if (!$scope.articleForm.description.length || !$scope.articleForm.title.length) {
            return;
        }

        ArticlesFactory.addArticle({
            description: $scope.articleForm.description,
            title: $scope.articleForm.title,
            isCompleted: false,
            date: Date.now(),
            isEditing: false
        });

        $scope.isArticleFormVisible = false;
        $location.path('/');
    };

    $scope.showArticleForm = function() {
        $location.path(`/add`);
    };

    $scope.editArticle = function(article) {
        $location.path(`/${article.date}/edit`);
    };

    if ($routeParams.id) {
        let article = ArticlesFactory.getArticle(+$routeParams.id);

        $scope.articleForm = {
            description: article.description,
            title: article.title,
            date: article.date
        };

        $scope.isArticleFormVisible = true;
    }
}]);