import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
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
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>{user._id}<Button variant="contained" color="primary">Delete</Button></li>
          )}
        </ul>
        </p>       
      </div>
    );
  }
}

export default App;
