import React, { Component } from 'react';
import './App.scss';


import AppHeader from './components/container/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>

        {this.props.children}

      </div>
    );
  }
}

export default App;
