import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
      
      </Router>
    
    </div>
  );
}

export default App;
