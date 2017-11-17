import React from 'react';
import { shallow, configure } from 'enzyme';
import Search from '../../components/FormInputs/Search.jsx';
import Adapter from 'enzyme-adapter-react-16';

// configure out enzyme adapter
configure({ adapter: new Adapter() });

test('Search renders without crashing', () => {
    
    shallow(<Search />);
});

test('Clicking cancel button clears search input', () => {

    const search = shallow(<Search />);

    console.log(search.debug());

    search.find('button').simulate('click');

    expect(search.state().typed).toEqual('');
});

test('Typing should update state', () => {

    const search = shallow(<Search />);

    search.find('input').simulate('change', { target: { value: 'hi Chris!' }});
    
    expect(search.state().typed).toEqual('hi Chris!');
});