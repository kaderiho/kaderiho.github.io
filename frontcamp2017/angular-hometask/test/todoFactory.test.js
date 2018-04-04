import '../node_modules/angular/angular.min.js';
import '../node_modules/angular-mocks/angular-mocks.js';
import '../src/app';

describe('TodoFactory service: ', function(){

    beforeEach(
        angular.mock.module('todoApp')
    );

    var _TodoFactory;

    beforeEach(inject((TodoFactory) => {
        _TodoFactory = TodoFactory;
    }));

    it('Default TodoList: is array', function(){
        expect(Array.isArray(_TodoFactory.getTodos())).toBe(true);
    });

    it('Default TodoList: is empty', function(){
        expect(_TodoFactory.getTodos().length).toEqual(0);
    });

    it('Method addTodo: ', function(){
        let addedTodo = { title: 'This is mock todo', completed: false, isEditing: false, date: Date.now() };

        _TodoFactory.addTodo(addedTodo);
        expect(_TodoFactory.getTodos()[0]).toBe(addedTodo);
    });

    it('Method deleteTodo: ', function(){
        let addedTodo = { title: 'This is mock todo', completed: false, isEditing: false, date: Date.now() };

        _TodoFactory.addTodo(addedTodo);
        _TodoFactory.deleteTodo(addedTodo);
        expect(_TodoFactory.getTodos().length).toBe(0);
    });

    it('Method toggleCompleteTodo: ', function(){
        let addedTodo = { title: 'This is mock todo', completed: false, isEditing: false, date: Date.now() };

        _TodoFactory.addTodo(addedTodo);
        _TodoFactory.toggleCompleteTodo(addedTodo);
        expect(_TodoFactory.getTodos()[0].completed).toBe(true);
    });

    it('Method editTodo: ', function(){
        let addedTodo = { title: 'This is mock todo', completed: false, isEditing: false, date: Date.now() };

        _TodoFactory.addTodo(addedTodo);
        _TodoFactory.editTodo(addedTodo);
        expect(_TodoFactory.getTodos()[0].isEditing).toBe(true);
    });

    it('Method doneEditTodo: ', function(){
        let addedTodo = { title: 'This is mock todo', completed: false, isEditing: false, date: Date.now() };

        _TodoFactory.addTodo(addedTodo);
        _TodoFactory.doneEditTodo(addedTodo);
        expect(_TodoFactory.getTodos()[0].isEditing).toBe(false);
    });
});