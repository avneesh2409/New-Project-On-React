import React, { Component } from 'react';
import './static/bootstrap.min.css';
import Router from './router'
class App extends Component {
  render() {
    return (
      <div>
        <div className='jumbotron'>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
        <Router />
      </div>
    );
  }
}

export default App;
