import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleAdding from '../../src/browser/components/article/article-adding';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArticleAdding />', () => {
    const mockStore = configureStore();
    let store, container;

    beforeEach(()=>{
        store = mockStore(initialState);
        container = shallow(<ArticleAdding store={store} /> )
    });

    it('Rendered a component', () => {
        expect(container.length).toEqual(1);
    });
});