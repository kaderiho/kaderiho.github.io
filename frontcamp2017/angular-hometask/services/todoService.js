app.service('todoService', function() {
    this.todoList = [];

    this.addTodo = function(todoItem) {
        this.todoList.push(todoItem);
    };

    this.removeTodo = function(todoId) {};
});