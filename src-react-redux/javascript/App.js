import React, { Component } from 'react';

import Number from'../javascript/number'
import '../stylesheets/reset.scss'
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
      <Number/>
      {this.props.children}
      </div>
      
    );
  }
}

export default App;
