app.controller('todoCtrl', function($scope, todoService, $routeParams, $location) {
    todoService.getTodos().then((res) => {
        $scope.todoList = res.data;
    });

    $scope.newTodoTitle = '';
    $scope.filterText = '';

    // CREATE new todoItem
    $scope.addTodo = function() {
        if (!$scope.newTodoTitle) {
            return;
        }

        const newTodo = {
            title: $scope.newTodoTitle,
            completed: false,
            isEditing: false,
            date: Date.now()
        };

        todoService.addTodo(newTodo);

        $scope.newTodoTitle = '';
    };

    // EDIT todoItem
    $scope.editTodo = function (todoItem) {
        $location.path(`/${todoItem.date}/edit`);
    };

    $scope.doneEditTodo = function (todoItem) {
        todoService.doneEditTodo(todoItem);
        $location.path(`add/`);
    };

    // DELETE todoItem
    $scope.deleteTodo = function (deletedTodo) {
        todoService.deleteTodo(deletedTodo);
    };

    // FILTER todoItems by date
    $scope.filterTodo = function() {
        todoService.filterTodo(parseInt($scope.filterText));
    };

    $scope.toggleCompleteTodo = function (todoItem) {
        todoService.toggleCompleteTodo(todoItem);
    };

    // TODO: may be there is a better solution instead of using $watch
    $scope.$watch(function () {
        return todoService.filteredTodoList
    }, function (newVal, oldVal) {
        if (typeof newVal !== 'undefined') {
            $scope.todoList = todoService.filteredTodoList;
        }
    });

    if ($routeParams.id) {
        todoService.editTodo(+$routeParams.id);
    }
});