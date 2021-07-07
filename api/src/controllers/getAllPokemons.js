const getAllApi = require("./getAllApi");
const getAllDb = require("./getAllDb");

const getAllPokemons = async () => {
  /* Traigo los pokemons de la api */
  let pokemonApi = await getAllApi;
  /* Traigo los pokemons de la base de datos */
  let pokemonDb = await getAllDb();
  /* Concateno todos los pokemons */
  let totalPokemons = pokemonApi.concat(pokemonDb);
  /* Devuelvo los pokemons */
  return totalPokemons;
};

module.exports = getAllPokemons;
