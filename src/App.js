import React, {
  Component
} from 'react';
import './static/App.module.css';
import Router from './router'
import {
  toast,
  ToastContainer
} from 'react-toastify';

toast.configure({
  autoClose: 1000,
  draggable: false,
})
class App extends Component {
  render() {
    return ( <
      div >
      <
      ToastContainer / >
      <
      div className = 'jumbotron' >
      <
      ul type = 'none' >
      <
      li >
      <
      a href = "/" > Home < /a> < /
      li > <
      li >
      <
      a href = "/login" > Login < /a> < /
      li > <
      li >
      <
      a href = "/register" > Register < /a> < /
      li > <
      li >
      <
      a href = "/showusers" > Display Users < /a> < /
      li > <
      /ul> < /
      div > <
      Router / >
      <
      /div>
    );
  }
}

export default App;