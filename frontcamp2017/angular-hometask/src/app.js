import 'angular';
import 'angular-route';
import 'angular-resource';
import TodoFactory from './services/todoFactory';
import TodoCtrl from './controllers/todoCtrl';
import kaMinLength from './directives/min-length';
import Routes from './routes';

const app = angular.module('todoApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', Routes]);
app.factory('TodoFactory', ['$resource', TodoFactory]);
app.controller('todoCtrl', ['$scope', 'TodoFactory', '$location', '$routeParams', TodoCtrl]);
app.directive('kaMinLength', kaMinLength);

export default app;


