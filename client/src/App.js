import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/home";
import Nav from './components/Nav/nav'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/home" component={Nav}></Route>
      <Route path="/createpokemon" component={Nav}></Route>
      <Route path="/aboutme" component={Nav}></Route>
    </React.Fragment>
  );
}

export default App;
