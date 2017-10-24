import React, { Component } from 'react';
import Header from './components/Header.jsx';

class App extends Component {
  render() {

    let items = [{value: 'Parker', color: '#A1A1A1', message: 'is cool'}, {value: 'Jason', color: '#Fc7f2D', message: 'is clever'}, {value: 'Erich', color: '#000000', message: 'is a secret genius.'}, {value: 'Helena', color: "#456123", message: 'has cream cheese on her face'}];

    let jsxElements = items.map((item, i) => {
      
      return <Header value={item.value} color={item.color} message={item.message} key={i} />;
    });

    return (
      <div style={{textAlign: 'center'}}>
        {jsxElements}
      </div>
    );
  }
}

export default App;