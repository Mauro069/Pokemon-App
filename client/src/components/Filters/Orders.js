export const POKEMONS_ASC = "POKEMONS_ASC";
export const POKEMONS_DESC = "POKEMONS_DESC";
export const ATTACK_ASC = "ATTACK_ASC";
export const ATTACK_DESC = "ATTACK_DESC";
export const ALL = "ALL";
export const NO_ORDER = "NO_ORDER";

/* Ordenar pokemons por Az/Za o por Attack */
export const pokemonOrder = (by) => (dispatch, getState) => {
  const filtered = getState().filteredPokemon.slice();
  const OrderBy = getState().filtered_by;
  const pokemon = getState().pokemons.slice();

  switch (by) {
    case "A-Z":
      if (OrderBy === "All") {
        const orderedPokemon = pokemon.sort((a, b) => {
          return a.name.localeCompare(b.name);
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
          return a.name.localeCompare(b.name);
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
        const orderedPokemon = pokemon
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .reverse();
        dispatch({
          type: POKEMONS_DESC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .reverse();
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
        const orderedPokemon = pokemon.sort((a, b) => b.attack - a.attack);
        dispatch({
          type: ATTACK_ASC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered.sort((a, b) => b.attack - a.attack);
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
        const orderedPokemon = pokemon.sort((a, b) => a.attack - b.attack);
        dispatch({
          type: ATTACK_DESC,
          payload: {
            orderedPokemon,
            name: by,
          },
        });
      } else {
        const orderedPokemon = filtered.sort((a, b) => a.attack - b.attack);
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
