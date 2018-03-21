app.controller('todoAdding', function($scope, todoService) {
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
});