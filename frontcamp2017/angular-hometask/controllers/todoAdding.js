app.controller('todoAdding', function($scope, todoService) {
    $scope.addingTodo = {
        status: 0,
        title: ''
    };

    $scope.todoAddClick = function() {
        todoService.addTodo({
            status: $scope.addingTodo.status,
            title: $scope.addingTodo.title,
            isEditing: false,
            date: Date.now()
        });
        $scope.addingTodo.title = '';
    };
});