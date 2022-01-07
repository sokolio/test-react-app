import React from "react";
import reactDom from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';
import Counter from './components/counter';

reactDom.render(<Counter />, document.getElementById('root'));