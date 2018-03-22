import angular from 'angular';

import todoAdding from './controllers/todoAdding';
import todoFilter from './controllers/todoFIlter';
import todoList from './controllers/todoList';
import todoService from './services/todoService';
import kaMinLength from './directives/min-length';
import './styles/common.scss'


const app = angular.module('todoApp', []);


app.service('todoService', todoService);
app.directive('kaMinLength', kaMinLength);
app.controller('todoAdding', ['$scope', 'todoService', todoList]);
app.controller('todoAdding', ['$scope', 'todoService', todoAdding]);
app.controller('todoAdding', ['$scope', 'todoService', todoFilter]);
