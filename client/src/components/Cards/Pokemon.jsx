import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonSearch } from "../../redux/actions";

import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    <div className="poke-card">
      <div className="poke-name-conteiner">
        <h3 className="poke-name">{pokemon.name}</h3>
        <div>
          <div className="types">Types:</div>
          <div className="poke-types-conteiner">
            {pokemon.types.map((type) => (
              <p className="poke-types"> {type.name} </p>
            ))}
          </div>
        </div>
      </div>
      <div className="poke-img-conteiner">
        <Link to={`/home/${pokemon.name}`}>
          <img
            className="poke-img"
            src={pokemon.img}
            alt = 'poke-img'
            onClick={() => dispatch(getPokemonSearch(pokemon.name))}
          />
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
