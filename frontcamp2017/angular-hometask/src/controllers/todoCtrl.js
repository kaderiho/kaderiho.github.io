app.controller('todoCtrl', ['$scope', 'TodoFactory', '$location', '$routeParams',
    function($scope, TodoFactory, $location, $routeParams) {
        $scope.newTodoTitle = '';
        $scope.todoList = TodoFactory.getTodos();

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

            TodoFactory.addTodo(newTodo);

            $scope.newTodoTitle = '';
        };

        $scope.deleteTodo = function (deletedTodo) {
            TodoFactory.deleteTodo(deletedTodo);
        };

        $scope.toggleCompleteTodo = function (todoItem) {
            TodoFactory.toggleCompleteTodo(todoItem);
        };

        $scope.editTodo = function (todoItem) {
            $location.path(`/${todoItem.date}/edit`);
        };

        $scope.doneEditTodo = function (todoItem) {
            TodoFactory.doneEditTodo(todoItem);
            $location.path(`add/`);
        };

        // // FILTER todoItems by date
        // $scope.filterTodo = function() {
        //     todoService.filterTodo(parseInt($scope.filterText));
        // };

        if ($routeParams.id) {
            TodoFactory.editTodo(+$routeParams.id);
        }
}]);