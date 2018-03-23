app.service('todoService', function($q, $http) {
    this.filterText = '';
    this.todoList = [];

    /////////////////////////////////////////////////////////////////////////////////////////////
    // API methods
    /////////////////////////////////////////////////////////////////////////////////////////////
    const deferred = $q.defer();

    $http.get('data/todos.json').then((res) => {
        deferred.resolve(res);
    });

    this.getTodos = function() {
        return deferred.promise
    };

    this.addTodo = function(todoItem) {
        this.todoList.push(todoItem);

        // TODO: for making obervables list its possible to user RxJs
        this.filterTodo(this.filterText);
    };

    this.editTodo = function(todoId) {
        this.todoList = this.todoList.map((todoItem) => {
            if (todoId === todoItem.date) {
                todoItem.isEditing = true;
            }

            return todoItem;
        });

        this.filterTodo(this.filterText);
    };

    this.doneEditTodo = function(editingTodo) {
        this.todoList = this.todoList.map((todoItem) => {
            if (editingTodo.date === todoItem.date) {
                todoItem.isEditing = false;
            }

            return todoItem;
        });
    };

    this.toggleCompeteTodo = function(toggleTodo) {
        this.todoList = this.todoList.map((todoItem) => {
            if (toggleTodo.date === todoItem.date) {
                todoItem.completed = !todoItem.completed;
            }

            return todoItem;
        });
    };

    this.deleteTodo = function(deletedTodo) {
        this.todoList = this.todoList.filter(todoItem => todoItem.date !== deletedTodo.date);
        this.filterTodo(this.filterText);
    };

    this.filterTodo = function(filterText) {
        this.filterText = filterText || '';

        if (isNaN(this.filterText) || !this.filterText) {
            this.filteredTodoList = this.todoList;
            return;
        }

        let timeRange = Date.now() - filterText * 1000 * 60 * 60 * 24;

        this.filteredTodoList = this.todoList.filter(todoItem => todoItem.date <= timeRange);
    }
});