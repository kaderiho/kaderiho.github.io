import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import ArticleAdding from '../../src/browser/components/article/article-adding';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArticleAdding />', () => {
    const mockStore = configureStore();
    const initialState = {
        author: '',
        message: ''
    };
    let store, componentContainer;

    beforeEach(() => {
        store = mockStore(initialState);
        componentContainer = mount(<ArticleAdding store={store}/> );
    });

    // Markup testing
    it('Rendered a component', () => {
        expect(componentContainer.length).toEqual(1);
    });

    it('There is a form', () => {
        expect(componentContainer.find('.addingTodoForm').length).toEqual(1);
    });

    it('There are 2 inputs inside the form', () => {
        expect(componentContainer.find('input').length).toEqual(2);
    });

    it('There is a submit button inside the form', () => {
        expect(componentContainer.find('button').length).toEqual(1);
    });

    // TODO: UI actions testing
    // it('Simulates change event on author input', () => {
        // componentContainer.find('input[name="author"]').simulate('change', {
        //     target: { value: 'My new value', name: 'author'}
        // });

        // componentContainer.setState({
        //     author: '',
        //     message: ''
        // });

        // const usernameInput = componentContainer.find('input[name="author"]');
        //       usernameInput.instance().value = "correctUsername";
        //       usernameInput.simulate('change');

        // console.log(componentContainer.state());
    // });
});