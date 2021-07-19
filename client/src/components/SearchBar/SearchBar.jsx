import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonSearch } from "../../redux/actions";
import Filters from "../Filters/Filters";

import "./SearchBar.css";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [pokeName, setPokeName] = useState("");

  return (
    <div className="searchBar-container">
      <h2>Search a Pokémon</h2>
      <div>
        <input
          className="buscador"
          type="text"
          value={pokeName}
          autoComplete="off"
          onChange={(event) => {
            setPokeName(event.target.value);
          }}
        ></input>
        <Link to={`/home/${pokeName}`}>
          <button
            className="btn-search"
            onClick={() => {
              dispatch(getPokemonSearch(pokeName));
            }}
          >
            {" "}
            Search{" "}
          </button>
        </Link>
      </div>
      <div>
        <Filters />
      </div>
    </div>
  );
};

export default SearchBar;
