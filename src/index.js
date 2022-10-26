import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ReactDOM.StrictMode>
    <Router>
      <App />
    </Router>
   
  </ReactDOM.StrictMode>,
  document.getElementById('root')
);
