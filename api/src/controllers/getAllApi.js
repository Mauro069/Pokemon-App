const axios = require("axios");

const getApi = async () => {
  /* Pido los primeros 20 pokemons */
  let pokemonUrl = await axios.get("https://pokeapi.co/api/v2/pokemon");
  /* Pido los 20 pokemons que siguen */
  let pokemonUrlNext = await axios.get(pokemonUrl.data.next);
  /* Concateno los primeros 20 pokemons con los 20 que siguen */
  let resultPokemon = pokemonUrl.data.results.concat(
    pokemonUrlNext.data.results
  );

  /* Accedo a las propiedades de cada pokemon */
  for (let el of resultPokemon) {
    /* Hago una subrequest a cada pokemon */
    let pokemonInfo = await axios.get(el.url);
    pokemonInfo = pokemonInfo.data;
    el.id = pokemonInfo.id;
    el.vida = pokemonInfo.stats[0].base_stat;
    el.fuerza = pokemonInfo.stats[1].base_stat;
    el.defensa = pokemonInfo.stats[2].base_stat;
    el.velocidad = pokemonInfo.stats[5].base_stat;
    el.altura = pokemonInfo.height;
    el.peso = pokemonInfo.weight;
    /* Obtengo todos los types de cada pokemon */
    el.types = pokemonInfo.types.map((el) => {
      return { name: el.type.name };
    });
    el.img = pokemonInfo.sprites.other.dream_world.front_default;
    /* Elimino la url asi puedo seguir con la siguiente */
    delete el.url;
  }
  /* Devuelvo la info que necesito de los 40 pokemons */
  return resultPokemon;
};

const getAllApi = getApi();

module.exports = getAllApi;
