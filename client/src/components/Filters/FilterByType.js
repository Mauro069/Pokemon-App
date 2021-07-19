export const BY_TYPE = "BY_TYPE";

/* Filtrar pokemons por Type */
export const pokemonByType = (pokeType) => (dispatch, getState) => {
  const Pokemons = getState().pokemons;

  let arrayByType = Pokemons.filter((pokemon) =>
    pokemon.types.length
      ? pokemon.types[0].nombre === pokeType
        ? true
        : pokemon.types.length > 1
        ? pokemon.types[1].nombre === pokeType
          ? true
          : false
        : false
      : false
  );
  dispatch({
    type: BY_TYPE,
    payload: {
      arrayByType,
      name: pokeType,
    },
  });
};
