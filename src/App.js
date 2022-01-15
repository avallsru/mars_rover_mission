import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home, RoverController } from "./pages";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/controller" element={<RoverController />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
