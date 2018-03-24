app.factory('TodoFactory', function($resource) {
    let TodoModel = $resource('data/articles.json', null,
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

        editTodo: function(editedTodoItem) {
            todosList[todosList.indexOf(editedTodoItem)].isEditing = true;
        },

        doneEditTodo: function(editedTodoItem) {
            todosList[todosList.indexOf(editedTodoItem)].isEditing = false;
        },

        deleteTodo: function(todoItem) {
            todosList.splice(todosList.indexOf(todoItem), 1);
        },

        toggleCompleteTodo: function(todoItem) {
            todosList[todosList.indexOf(todoItem)].completed = !todoItem.completed;
        }
    }
});