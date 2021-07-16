import React from "react";
import Pokemon from "./Pokemon";

import './Pokemons.css'

const Pokemons = (props) => {
  const { pokemons } = props;
  return (
    <div className = 'pokemons'>
      {pokemons.map((pokemon, idx) => (
        <Pokemon key={idx} pokemon={pokemon} index={idx} />
      ))}
    </div>
  );
};

export default Pokemons;
