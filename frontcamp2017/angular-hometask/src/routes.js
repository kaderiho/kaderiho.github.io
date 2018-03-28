const Routes = function($routeProvider) {
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
};

export default Routes;