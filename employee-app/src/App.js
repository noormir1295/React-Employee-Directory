import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from './pages/About';
import Employees from './pages/Employees';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/all" component={Employees} />
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
