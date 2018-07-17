import React, { Component } from 'react';
import './App.css';


import banner from './resources/header.png';
import logo from './resources/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    <div>
      <div className='banner'>
        <img src={banner} />
        <img src={logo} />
      </div>
    </div>
  }
}

export default App;
