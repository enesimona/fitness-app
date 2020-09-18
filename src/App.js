import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import WorkoutList from "./components/WorkoutList";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/workouts" component={WorkoutList}></Route>
          <Route path="/recipes" component={RecipeList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
