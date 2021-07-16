export const BY_TYPE = "BY_TYPE";

export const pokemonByType = (pokeType) => (dispatch, getState) => {
  /* Traigo los pokemons */
  const pokemon = getState().pokemons.slice();

  /* Filtro a los pokemons por type */
  let arrayByType = pokemon.filter((pokemon) =>
    /* Si el length es mayor a 0 */
    pokemon.types.length
      ? /* Verifico si en la posicion 1 del array el name del type es igual al que le pasamos por parametro */
        pokemon.types[0].name === pokeType
        ? true
        : pokemon.types.length > 1
        ? pokemon.types[1].name === pokeType
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
