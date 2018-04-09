import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleAdding from '../../web-app/client/src/components/article/article-adding';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArticleAdding UI testing/>', () => {
    const mockStore = configureStore();
    const initialState = {
        author: '',
        message: ''
    };
    let store, componentContainer;

    beforeEach(() => {
        store = mockStore(initialState);
        componentContainer = mount(shallow(<ArticleAdding store={store}/>).get(0));
    });

    /** Mockup testing using Jest **/
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

    /** Snapshot testing **/
    it('Rendering component', () => {
        const mockStore = configureStore();
        const store = mockStore(initialState);
        const tree = renderer
            .create(<ArticleAdding store={store}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

