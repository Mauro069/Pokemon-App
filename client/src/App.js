import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import AddPokemon from "./components/AddPokemon/AddPokemon";
import GetTypes from "./components/Types/Types";
import Home from "./components/Home/Home";
import PokemonsHome from "./components/Home/PokemonsHome";
import PokemonSearch from "./components/PokemonSearch/PokemonSearch";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/" component={GetTypes} />
      <Route path="/" component={PokemonsHome} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:name" component={PokemonSearch} />
      <Route exact path="/createpokemon" component={AddPokemon} />
    </div>
  );
}

export default App;
