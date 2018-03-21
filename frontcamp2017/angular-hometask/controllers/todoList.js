app.controller('todoList', function($scope, todoService) {
    $scope.todoList = todoService.todoList;

    $scope.editTodoItem = function(todoItem) {
        todoItem.isEditing = true;
    };

    $scope.doneEditTodoItem = function(todoItem) {
        todoItem.isEditing = false;
    };
});