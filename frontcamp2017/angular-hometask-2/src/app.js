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

window.app
    .filter('startFrom', function() {
        return function(data, startFrom) {
            return data.slice(startFrom);
        }
    })
    .filter('range', function() {
        return function(input, total) {
            total = parseInt(total);

            for (let i= 0; i <total; i++) {
                input.push(i);
            }

            return input;
        };
    });

