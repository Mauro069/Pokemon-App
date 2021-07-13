import React, { useEffect, useState } from "react";
import { render } from 'react-dom';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Nav from "./components/Nav/nav";
import Searcher from "./components/Searcher/searcher";
import Pokedex from "./components/Pokedex/pokedex";
import { getPokemons } from "./Controllers";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const axiosPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data);
    } catch (error) {}
  };

  useEffect(() => {
    axiosPokemons();
  }, []);

  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/home" component={Nav}></Route>
      <Route exact path="/home" component={Searcher}></Route>

      <Route
        path="/home"
        render={() => <Pokedex pokemons={pokemons} />}
      />
    </React.Fragment>
  );
}

export default App;
