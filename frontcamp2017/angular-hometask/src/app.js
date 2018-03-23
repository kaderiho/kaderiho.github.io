// import angular from 'angular';
//
// import todoAdding from './controllers/todoAdding';
// import todoFilter from './controllers/todoFIlter';
// import todoList from './controllers/todoList';
// import todoService from './services/todoService';
// import kaMinLength from './directives/min-length';
// import './styles/common.css'
//
//
// app.controller('todoFilter', ['$scope', 'todoService', todoFilter]);
// app.controller('todoAdding', ['$scope', 'todoService', todoAdding]);
// app.controller('todoList', ['$scope', 'todoService', todoList]);
//
// app.directive('kaMinLength', kaMinLength);

// app.service('todoService', todoService);

window.app = angular.module('todoApp', ['ngRoute']);

window.app.config(function($routeProvider) {
    const routeConfig = {
        controller: 'todoCtrl',
        templateUrl: 'todoApp.html'

        // resolve: {
        //     store: function (todoStorage) {
        //         return todoStorage.then((module) => {
        //             module.get();
        //             return module;
        //         })
        //     }
        // }
    };

    $routeProvider
        .when('/add', routeConfig)
        .when('/:id/edit', routeConfig)
        .otherwise({
            redirectTo: '/add'
        });
});

