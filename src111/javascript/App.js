import React, { Component } from 'react';

import '../stylesheets/reset.scss'
import Content from './container/content'
import Add from './container/add'
import Reduce from './container/reduce'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='box'>
        <Add/>
        <Content/>
        <Reduce/>

      </div>
      
    );
  }
}

export default App;
