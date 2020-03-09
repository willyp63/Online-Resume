import React from "react";

import { NavBar, Footer } from "./shared";
import Projects from "./projects/Projects";
import About from "./about/About";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
