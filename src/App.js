import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home, RoverController } from "./pages";

// import './App.css';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/controller" element={<RoverController />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
