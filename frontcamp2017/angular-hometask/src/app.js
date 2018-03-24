window.app = angular.module('todoApp', ['ngRoute', 'ngResource']);

window.app.config(function($routeProvider) {
    const routeConfig = {
        controller: 'todoCtrl',
        templateUrl: 'todoApp.html'
    };

    $routeProvider
        .when('/add', routeConfig)
        .when('/:id/edit', routeConfig)
        .otherwise({
            redirectTo: '/add'
        });
});

