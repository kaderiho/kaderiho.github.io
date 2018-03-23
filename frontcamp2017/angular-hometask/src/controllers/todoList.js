app.controller('todoList', function ($scope, todoService) {
    $scope.todoList = todoService.filteredTodoList;

    $scope.editTodo = function (todoItem) {
        todoService.editTodo(todoItem);
    };

    $scope.doneEditTodo = function (todoItem) {
        todoService.doneEditTodo(todoItem);
    };

    $scope.toggleCompeteTodo = function (todoItem) {
        todoService.toggleCompeteTodo(todoItem);
    };

    $scope.deleteTodo = function (deletedTodo) {
        todoService.deleteTodo(deletedTodo);
    };

    // TODO: may be there is a better solution instead of using $watch
    $scope.$watch(function () {
        return todoService.filteredTodoList
    }, function (newVal, oldVal) {
        if (typeof newVal !== 'undefined') {
            $scope.todoList = todoService.filteredTodoList;
        }
    });
});