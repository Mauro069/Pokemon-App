import React from "react";
import { Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/landingPage";
import Home from './components/Home/home'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} ></Route>
      <Route path='/home' component={Home} />
    </React.Fragment>
  );
}

export default App;
