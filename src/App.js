import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
 

  componentDidMount(){
    axios.get('/api/messages').then( (res) => {
      this.setState({
        allMessages: res.data
      })
    })
  }

  createMessage(){
    let {username, message} = this.state;
    axios.post('/api/messages', {username: username, message: message}).then( (res) => {
      this.setState({
          allMessages: res.data
      })
    })
  }


  render(){
    return (
      <p> Hello World </p>
    )
  }
}

export default App;

// Find the createMessage method and make a post request. Send this.state.username and this.state.message in the body of the request. Use username and message property names.
// path: '/api/messages'
// body: {username: this.state.username, message: this.state.message}
// Set state with the response (which will be the updated array messages from the server)
// Update the allMessages property.