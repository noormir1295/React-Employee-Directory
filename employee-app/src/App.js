import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path='/' component={About} />
          </Wrapper>
        </div>
      
      </Router>
    
    </div>
  );
}

export default App;
