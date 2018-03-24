app.service('todoService', function($resource, TodoStorage) {
    // this.filteredTodoList = [];
    this.filterText = '';
    this.todoList = [];

    // GET - retrieve list of todos
    // this.getTodos = function() {
    //     this.filteredTodoList = this.todoList = TodoStorage.query();
    // };

    this.addTodo = function(todoItem) {
        this.todoList.push(todoItem);

        // TODO: for making obervables list its possible to user RxJs
        // this.filterTodo(this.filterText);
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

    // this.filterTodo = function(filterText) {
    //     this.filterText = filterText || '';
    //
    //     if (isNaN(this.filterText) || !this.filterText) {
    //         this.filteredTodoList = this.todoList;
    //         return;
    //     }
    //
    //     let timeRange = Date.now() - filterText * 1000 * 60 * 60 * 24;
    //
    //     this.filteredTodoList = this.todoList.filter(todoItem => todoItem.date <= timeRange);
    // }
});