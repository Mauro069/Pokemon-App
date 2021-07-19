const axios = require("axios");

/* Traigo los pokemons de la api */
const getApi = async () => {
  let pokemonUrl = await axios.get("https://pokeapi.co/api/v2/pokemon");
  let pokemonUrlNext = await axios.get(pokemonUrl.data.next);
  let pokemonUrlNextNext = await axios.get(pokemonUrlNext.data.next);
  let resultPokemons = pokemonUrl.data.results.concat(
    pokemonUrlNext.data.results
  );
  let resultPokemon = resultPokemons.concat(pokemonUrlNextNext.data.results);

  /* Accedo a las propiedades de los pokemons y hago una subrequest a cada pokemon */
  for (let el of resultPokemon) {
    let pokemonInfo = await axios.get(el.url);
    pokemonInfo = pokemonInfo.data;
    el.id = pokemonInfo.id;
    el.hp = pokemonInfo.stats[0].base_stat;
    el.attack = pokemonInfo.stats[1].base_stat;
    el.defense = pokemonInfo.stats[2].base_stat;
    el.speed = pokemonInfo.stats[5].base_stat;
    el.height = pokemonInfo.height;
    el.weight = pokemonInfo.weight;
    el.types = pokemonInfo.types.map((el) => {
      return { nombre: el.type.name };
    });
    el.img = pokemonInfo.sprites.other.dream_world.front_default;
  }
  return resultPokemon;
};

const getAllApi = getApi();
module.exports = getAllApi;
