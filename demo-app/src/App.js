import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return(
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/**path refers to url */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} /> 
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

export default App;