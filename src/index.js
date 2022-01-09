import React from "react";
import reactDom from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
//import Counters from './components/counters';

reactDom.render( 
    <React.StrictMode>
        <App />
    </React.StrictMode>
  , document.getElementById('root'));