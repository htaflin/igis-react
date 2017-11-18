import App from './App.jsx';

// just shallow mount the App and make sure it doesn't crash
test('App renders without crashing', () => {

    shallow(<App />);
});