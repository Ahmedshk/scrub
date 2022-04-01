import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-quill/dist/quill.snow.css';
import App from './App';

const app = <App />;

ReactDOM.render(
    app ,
  document.getElementById('root')
);