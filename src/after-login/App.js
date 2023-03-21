import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Display from "./components/Display";

function App() {
  return (
    <Router>
      <Display />
    </Router>
  );
}

export default App;
