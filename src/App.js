import React, {
  Component
} from 'react';
import './static/App.module.css';
import Router from './router';
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
    return (
      <div>
        <ToastContainer />
        <Router />
      </div >
    )
  }
}

export default App;