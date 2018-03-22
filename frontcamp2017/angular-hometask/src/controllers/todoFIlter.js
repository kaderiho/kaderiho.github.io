export default function($scope, todoService) {
    $scope.filterText = '';

    $scope.filterTodo = function() {
        todoService.filterTodo(parseInt($scope.filterText));
    }
};