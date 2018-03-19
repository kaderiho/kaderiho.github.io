app.controller('todoList', function($scope, todoService) {
    $scope.todoList = todoService.todoList;
});