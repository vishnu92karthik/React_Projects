import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import form from './form';
import table from './table';
function App() {
  return (
    <div className="App">
     <Router>
    <Link to="/">  <h3>Feedback</h3> </Link>
   <Link to="/table">   <h3>Table</h3> </Link> 
   <div className= "container">
     <Route exact path="/" component= {form}></Route>
     <Route path="/table" component= {table}></Route>
   </div>
   </Router>
    </div>
  );
}

export default App;
