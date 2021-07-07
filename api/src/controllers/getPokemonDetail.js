const getAllPokemons = require("./getAllPokemons");

const getPokemonDetail = async (situation, element) => {
  /* Traigo los pokemons */
  let resultPokemon = await getAllPokemons();

  switch (situation) {
    /* Si busco por nombre se activa este caso */
    case "GET_NAME":
      return resultPokemon.filter((el) => el.name === element);

    /* Si busco por id se activa este caso */
    case "GET_ID":
      return resultPokemon.filter((el) => el.id.toString() === element);

    /* Si no se activa ninguno de los casos anteriores, muestro los 40 pokemons */
    default:
      return resultPokemon;
  }
};

module.exports = getPokemonDetail;
