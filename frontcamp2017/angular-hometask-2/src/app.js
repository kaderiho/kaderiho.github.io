window.app = angular.module('articlesApp', ['ngRoute', 'ngResource']);

window.app.config(function($routeProvider) {
    const routeConfig = {
        controller: 'articlesCtrl',
        templateUrl: 'articlesApp.html'
    };

    $routeProvider
        .when('/', routeConfig)
        .when('/add', routeConfig)
        .when('/:id/edit', routeConfig)
        .otherwise({
            redirectTo: '/'
        });
});

