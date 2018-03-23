app.factory('TodoStorage', function($resource) {
    return $resource('data/todos.json', null,
        {
            'get': {method: 'GET'},
            'save': {method: 'POST'},
            'query': {method: 'GET', isArray: true},
            'remove': {method: 'DELETE'},
            'delete': {method: 'DELETE'}
        }
    );
});