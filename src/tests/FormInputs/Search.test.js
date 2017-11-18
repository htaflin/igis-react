import Search from '../../components/FormInputs/Search.jsx';

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