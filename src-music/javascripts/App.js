import React, { Component } from 'react';
import './App.scss';



class App extends Component {
  render() {
    return (
      <div className="App">
        <audio id="audio"></audio>
        {this.props.children}

      </div>
    );
  }
}

export default App;
