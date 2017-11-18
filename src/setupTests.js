import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure out enzyme adapter
configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;