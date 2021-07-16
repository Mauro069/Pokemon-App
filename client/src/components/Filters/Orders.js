export const POKEMONS_ASC = "POKEMONS_ASC";
export const POKEMONS_DESC = "POKEMONS_DESC";
export const ATTACK_ASC = "ATTACK_ASC";
export const ATTACK_DESC = "ATTACK_DESC";
export const ALL = "ALL";
export const NO_ORDER = "NO_ORDER";

export const pokemonOrder = (by) => (dispatch, getState) => {
  const filtered = getState().filteredPokemon.slice();
  const OrderBy = getState().filtered_by;
  const pokemon = getState().pokemons.slice();

  switch (by) {
    case "A-Z":
      if (OrderBy === "All") {
        const orderedPokemon = pokemon.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        });
        dispatch({
          type: POKEMONS_ASC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        });
        dispatch({
          type: POKEMONS_ASC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      }
      break;

    case "Z-A":
      if (OrderBy === "All") {
        const orderedPokemon = pokemon.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0;
        });
        dispatch({
          type: POKEMONS_DESC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0;
        });
        dispatch({
          type: POKEMONS_DESC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      }
      break;

    case "Attack Asc":
      if (OrderBy === "All") {
        const orderedPokemon = pokemon.sort((a, b) => b.ataque - a.ataque);
        dispatch({
          type: ATTACK_ASC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered.sort((a, b) => b.ataque - a.ataque);
        dispatch({
          type: ATTACK_ASC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      }
      break;

    case "Attack Des":
      if (OrderBy === "All") {
        const orderedPokemon = pokemon.sort((a, b) => a.ataque - b.ataque);
        dispatch({
          type: ATTACK_DESC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered.sort((a, b) => a.ataque - b.ataque);
        dispatch({
          type: ATTACK_DESC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      }
      break;
    case "All":
      dispatch({
        type: NO_ORDER,
        payload: {
          pokemon,
          name: by,
        },
      });
      break;
    default:
      return pokemon;
  }
};

