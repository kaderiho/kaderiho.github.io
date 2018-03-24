app.controller('todoCtrl', ['$scope', 'TodoFactory', '$location', '$routeParams',
    function($scope, TodoFactory, $location, $routeParams) {
        $scope.todoList = TodoFactory.getTodos();
        $scope.newTodoTitle = '';
        $scope.filterText = '';

        // Filter todoItem by date: the date have to be in the range of inputed date
        $scope.searchDate = function(todoItem) {
            if (isNaN($scope.filterText) || !$scope.filterText) {
                return todoItem;
            }

            return todoItem.date < Date.now() - $scope.filterText * 1000 * 60 * 60 * 24
        };

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

        if ($routeParams.id) {
            TodoFactory.editTodo($scope.todoList.filter((todoItem) => todoItem.date === +$routeParams.id)[0]);
        }
}]);