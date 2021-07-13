import React, { useEffect, useState } from "react";
import { searchPokemon } from "../../Controllers";
import "../Searcher/searcher.css";

const Searcher = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="barra">
      <div className="input-busqueda">
        <input placeholder="Nombre del pokémon..." onChange={onChange} />
        <button onClick={onClick}>Buscar</button>
      </div>
      <div>Filtros:</div>
      <div>Ordenamiento:</div>
      <div className = 'pagination'>
        <div>-</div>
        <div> 1/4 </div>
        <div>+</div>
      </div>
    </div>
  );
};
export default Searcher;
