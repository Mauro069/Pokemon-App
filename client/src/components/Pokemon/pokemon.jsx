import React from "react";
import { Link } from "react-router-dom";
import "../Pokemon/pokemon.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="poke-card">
      <div className="top">
        <div className="poke-conteiner-img">
          <img className="poke-img" src={pokemon.img} />
        </div>
        <div className="poke-id"> Mas Info </div>
      </div>
      <div>
        <div className="poke-name-id">
          <h3 className="poke-name">{pokemon.name}</h3>
        </div>
        <div>
          <div className="types">
            Types:
            <div className='poke-types'>
              {pokemon.types.map((type, idx) => {
                return <div key={idx}>{type.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
