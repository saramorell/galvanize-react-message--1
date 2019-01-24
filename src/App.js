import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageList from './components/MessageList';
import Message from './components/Message';
import Compose from './components/Compose';

class App extends Component {

  state = {
    messages:[]
  }

  async componentDidMount() {
      const response = await fetch('https://sm-assessment.herokuapp.com/messages')
      const json = await response.json()
      this.setState({messages: json} )
    }

  renderMessages = () => {
     return this.state.messages.map((m, i) => {
      return <Message {...m} key={i}
        messages={this.state.messages}
       />
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <MessageList
          renderMessages={this.renderMessages}
          messages={this.state.messages}
         />
        </div>
      </div>
    );
  }
}

export default App;
