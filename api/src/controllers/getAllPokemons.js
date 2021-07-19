const getAllApi = require("./getAllApi");
const getAllDb = require("./getAllDb");

/* Junto a todos los pokemons */
const getAllPokemons = async () => {
  let pokemonApi = await getAllApi;
  let pokemonDb = await getAllDb();
  let totalPokemons = pokemonApi.concat(pokemonDb);
  return totalPokemons;
};

module.exports = getAllPokemons;
