import React, { Component } from 'react';
import marvel from './marvel.png';
import dc from './dc.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>Secret Superhero (Data)base</div>
        </header>
        
        <div className='app-body'>
          <img src={marvel} alt='Marvel' />
          <img src={dc} alt='DC' />
        </div>
      </div>
    );
  }
}

export default App;