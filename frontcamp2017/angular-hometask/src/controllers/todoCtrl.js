app.controller('todoCtrl', ['$scope', 'TodoFactory', '$location', '$routeParams',
    function($scope, TodoFactory, $location, $routeParams) {
        $scope.todoList = TodoFactory.getTodos();
        $scope.newTodoTitle = '';
        $scope.filterText = '';

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

        $scope.filterTodo = function() {
            if (isNaN($scope.filterText) || !$scope.filterText) {
                $scope.todoList = TodoFactory.getTodos();
            }

            let timeRange = Date.now() - $scope.filterText * 1000 * 60 * 60 * 24;

            $scope.todoList = $scope.todoList.filter(todoItem => todoItem.date <= timeRange)
        };

        if ($routeParams.id) {
            TodoFactory.editTodo(+$routeParams.id);
        }
}]);