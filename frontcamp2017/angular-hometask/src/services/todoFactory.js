app.factory('TodoFactory', function($resource) {
    let TodoModel = $resource('data/todos.json', null,
        {
            'get': {method: 'GET'},
            'save': {method: 'POST'},
            'query': {method: 'GET', isArray: true},
            'remove': {method: 'DELETE'},
            'delete': {method: 'DELETE'}
        }
    );

    let todosList = TodoModel.query();

    return {
        getTodos: function() {
            return todosList;
        },

        addTodo: function(todoItem) {
            todosList.push(todoItem);
        },

        editTodo: function(todoId) {
            todosList = todosList.map((todoItem) => {
                if (todoItem.date === todoId) {
                    todoItem.isEditing = true;
                }

                return todoItem;
            });
        },

        doneEditTodo: function(editedTodoItem) {
            todosList = todosList.map((todoItem) => {
                if (todoItem.date === editedTodoItem.date) {
                    todoItem.isEditing = false;
                }

                return todoItem;
            })
        },

        deleteTodo: function(todoItem) {
            todosList.splice(todosList.indexOf(todoItem), 1);
        },

        toggleCompleteTodo: function(todoItem) {
            todosList[todosList.indexOf(todoItem)].completed = !todoItem.completed;
        }
    }
});