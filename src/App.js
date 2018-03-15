import React, { Component } from 'react';
import marvel from './marvel.png';
import dc from './dc.png';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <div className='app-body'>
          <img src={marvel} alt='Marvel' />
          <img src={dc} alt='DC' />
        </div>
      </div>
    );
  }
}

export default App;