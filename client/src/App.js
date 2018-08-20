import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  ComponentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}, ()=> console.log('Users fetched...', users)));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.users.map(user => 
            <li key={user._id}>{user.firstname}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
