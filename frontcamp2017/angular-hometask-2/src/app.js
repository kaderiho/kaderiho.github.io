import 'angular';
import 'angular-route';
import 'angular-resource';
import ArticlesFactory from './services/ArticlesFactory';
import articlesCtrl from './controllers/articlesCtrl';
import kaMinLength from './directives/min-length';
import { startFrom, range } from './filters';
import './styles/bootstrap.min.scss';
import Routes from './routes';

const app = angular.module('articlesApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', Routes]);
app.factory('ArticlesFactory', ['$resource', ArticlesFactory]);
app.controller('articlesCtrl', ['$scope', 'ArticlesFactory', '$location', '$routeParams', articlesCtrl]);
app.directive('kaMinLength', kaMinLength);
app.filter('startFrom', startFrom);
app.filter('range', range);

