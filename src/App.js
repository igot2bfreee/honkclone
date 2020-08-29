import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import './App.css';
import Start from "./Components/StartComponent"
import Note from './Components/ButtonComponent';
import Help from './Components/HelpComponent';
import Transfer from './Components/TransferComponent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Help />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
