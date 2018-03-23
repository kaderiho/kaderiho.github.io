app.controller('todoCtrl', function($scope, todoService) {
    $scope.addingTodo = {
        completed: false,
        title: ''
    };

    $scope.todoAddClick = function() {
        todoService.addTodo({
            completed: $scope.addingTodo.completed,
            title: $scope.addingTodo.title,
            isEditing: false,
            date: Date.now()
        });
        $scope.addingTodo.title = '';
    };

    $scope.filterText = '';

    $scope.filterTodo = function() {
        todoService.filterTodo(parseInt($scope.filterText));
    }

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