import React from "react";
import Pokemon from "../Pokemon/pokemon";
import "../Pokedex/pokedex.css";

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <div className='pokemons-conteiner'>
      <div className="pokemons">
        {pokemons.map((pokemon, idx) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
