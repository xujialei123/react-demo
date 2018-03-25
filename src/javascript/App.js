import React, { Component } from 'react';

import AppHeader from'../javascript/container/header'
import '../stylesheets/reset.scss'

class App extends Component {
  render() {
    return (
      <div>
      <AppHeader/>
      {this.props.children}
      </div>
      
    );
  }
}

export default App;
