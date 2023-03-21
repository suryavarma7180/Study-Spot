import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Display from "./components/Display";
import "./app.css";

function App() {
  return (
    <Router>
   
    <div className="App">
    
      
      <Homepage />
    </div>
    </Router>
  
  );
}

export default App;
