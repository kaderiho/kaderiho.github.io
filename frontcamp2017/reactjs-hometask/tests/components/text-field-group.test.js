import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextFieldGroup from '../../src/browser/components/common/text-field-group';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<TextFieldGroup />', () => {
    /** Markup testing **/
    it('Renders an input for field', () => {
        const addingForm = shallow(<TextFieldGroup/>);

        expect(addingForm.find('input').length).toEqual(1);
    });

    it('Renders an label for field', () => {
        const addingForm = shallow(<TextFieldGroup/>);

        expect(addingForm.find('label').length).toEqual(1);
    });

    /** UI actions testing **/
    it('Simulate onChange events', () => {
        const onChange = sinon.spy();
        const wrapper = mount((
            <TextFieldGroup onChange={onChange} />
        ));
        wrapper.find('input').simulate('change');
        expect(onChange.calledOnce).toEqual(true);
    });
});