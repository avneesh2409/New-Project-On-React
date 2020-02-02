import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/bootstrap.min.css';
import { Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(< App />, document.getElementById('root'));
registerServiceWorker();