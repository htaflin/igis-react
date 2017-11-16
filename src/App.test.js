import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App.jsx';
import Adapter from 'enzyme-adapter-react-16';

// configure out enzyme adapter
configure({ adapter: new Adapter() });

// just shallow mount the App and make sure it doesn't crash
test('App renders without crashing', () => {

    shallow(<App />);
});