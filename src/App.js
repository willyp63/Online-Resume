import React from "react";

import { NavBar, Footer } from "./shared";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
