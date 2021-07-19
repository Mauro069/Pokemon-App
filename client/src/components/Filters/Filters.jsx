import React from "react";
import { connect } from "react-redux";
import { pokemonOrder } from "./Orders";
import { pokemonByType } from "./FilterByType";
import { pokemonByOrigin } from "./FiltersByOrigin";

const Filters = ({
  types,
  pokemons,
  pokemonOrder,
  pokemonByType,
  pokemonByOrigin,
}) => {
  const Types = types.data;

  /* Orders */
  const handleOrder = (e) => {
    pokemonOrder(e.target.value, pokemons);
  };

  /* Filter By Origin */
  const handleByOrigin = (e) => {
    pokemonByOrigin(e.target.value, pokemons);
  };
  const FilterByOrigin = (e) => {
    if (
      e.target.value === "API" ||
      e.target.value === "DB" ||
      e.target.value === "All"
    ) {
      handleByOrigin(e);
    }
  };

  /* Filter By Types */
  const handleByType = (e) => {
    pokemonByType(e.target.value, pokemons);
  };
  const FilterByType = (e) => {
    handleByType(e);
  };

  return (
    <div>
      {/* ORDERS */}
      <select name="Filter" onChange={handleOrder}>
        <optgroup label="Order by">
          <option value="All">All</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Attack Asc">More Attack</option>
          <option value="Attack Des">Less Attack</option>
        </optgroup>
      </select>

      {/* FILTER BY ORIGIN */}
      <select onChange={FilterByOrigin}>
        <optgroup label="By origin">
          <option default value="All">
            All
          </option>
          <option value="API" group="origin">
            Original
          </option>
          <option value="DB" group="origin">
            DataBase
          </option>
        </optgroup>
      </select>

      {/* FILTER BY TYPE */}
      <select onChange={FilterByType}>
        <optgroup label="By type">
          <option default>All</option>
          {Types &&
            Types.map((type, i) => (
              <option key={i} className="option-types" value={type.nombre}>
                {type.nombre}
              </option>
            ))}
        </optgroup>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.types,
    pokemons: state.pokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pokemonByType: (type, pokemons) => dispatch(pokemonByType(type, pokemons)),
    pokemonByOrigin: (by, pokemons) => dispatch(pokemonByOrigin(by, pokemons)),
    pokemonOrder: (by, pokemons) => dispatch(pokemonOrder(by, pokemons)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
