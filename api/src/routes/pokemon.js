const { Router } = require("express");
const { Pokemon } = require("../db");
const { getPokemonDetail, getAllPokemons } = require("../controllers");
const { v4: uuidv4 } = require("uuid");

const router = Router();

// GET /pokemons y  GET /pokemons?name="...":
router.get("/", async (req, res) => {
  /* Me fijo si pasan un nombre por query */
  const { name } = req.query;
  /* Traigo los 40 pokemons */
  let pokeTotal = await getAllPokemons();
  /* Si pasaron un nombre por query */
  if (name) {
    /* Busco el detalle del pokemon con ese nombre */
    let pokeName = await getPokemonDetail("GET_NAME", name);
    pokeName.length
      ? /* Si se encontro un pokemon con ese nombre, envio el detalle */
        res.status(200).send(pokeName)
      : /* Sino mando un error */
        res.status(404).send("Pokemon not found");
  }
  return res.status(200).send(pokeTotal);
});

// GET /pokemons/{idPokemon}
router.get("/:id", async (req, res) => {
  /* Me fijo si pasan una id por params */
  const { id } = req.params;
  /* Si hay una id */
  if (id) {
    /* Busco el detalle del pokemon con ese id */
    let pokemonId = await getPokemonDetail("GET_ID", id);
    pokemonId.length
      ? /* Si se encontro un pokemon con ese id, envio el detalle */
        res.status(200).send(pokemonId)
      : /* Sino mando un error */
        res.status(404).send("No hay ningun pokemon con esa id");
  }
});

module.exports = router;
