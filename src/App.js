import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageList from './components/MessageList';
import Message from './components/Message';
import Compose from './components/Compose';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        </div>
      </div>
    );
  }
}

export default App;
