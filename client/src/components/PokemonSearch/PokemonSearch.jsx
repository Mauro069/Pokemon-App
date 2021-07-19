import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

import "./PokemonSearch.css";

const PokemonByName = () => {
  const buscador = useSelector((state) => state.pokemon_search);
  const error = useSelector((state) => state.error);

  return (
    <div>
      {buscador.length >= 1 && (
        <div>
          <Nav />
          <div>
            <div className="searchBar-container">
              <h2 className="poke-found">
                Pokémon Found:<p className="name-found"> {buscador[0].name} </p>
              </h2>
              <div className="btn-conteiner">
                <Link to="/home">
                  <button className="btn"> Back to home </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="poke-search-conteiner">
            <div className="poke-search-info-conteiner">
              <div className="data-text">
                <div className="poke-name-id">
                  <div className="poke-search-id">#{buscador[0].id}</div>
                  <div className="poke-search-name">{buscador[0].name}</div>
                </div>
                <div>
                  <p className="typess">Types: </p>
                  <div className="types_search">
                    {buscador[0].types.map((type) => (
                      <div className="types_search-name">{type.nombre}</div>
                    ))}
                  </div>
                </div>

                <div className="data">
                  <div className="Weight-Speed">
                    <div className="conteiner">
                      {" "}
                      <div className="hp-conteiner">
                        <p className="hp">HP:</p> {buscador[0].hp}
                      </div>{" "}
                      <div className="Height-conteiner">
                        <p className="Height">Height:</p> {buscador[0].height}
                      </div>{" "}
                      <div className="Weight-conteiner">
                        <p className="Weight">Weight:</p> {buscador[0].weight}
                      </div>
                    </div>
                    <div className="conteiner-2">
                      {" "}
                      <div className="Attack-conteiner">
                        <p className="Attack">Attack:</p> {buscador[0].attack}
                      </div>{" "}
                      <div className="Defense-conteiner">
                        <p className="Defense">Defense:</p>{" "}
                        {buscador[0].defense}
                      </div>{" "}
                      <div className="Speed-conteiner">
                        <p className="Speed">Speed:</p> {buscador[0].speed}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="poke-search-img-conteiner">
                <img
                  className="poke-search-img"
                  src={buscador[0].img}
                  alt="poke-img"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="error">
          <div className="btn-f">
            <h1 className="poke-f">Pokémon Not Found</h1>
            <div className="btn-conteiner">
              <Link to="/home">
                <button className="btn-back"> Back to home </button>
              </Link>
            </div>
          </div>
          <img
            className="not-found"
            src="https://media1.tenor.com/images/0436bfc9861b4b57ffffda82d3adad6e/tenor.gif?itemid=15550145"
          />
        </div>
      )}
    </div>
  );
};

export default PokemonByName;
