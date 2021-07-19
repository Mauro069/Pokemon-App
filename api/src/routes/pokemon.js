const { Router } = require("express");
const { Pokemon } = require("../db");
const { getPokemonDetail, getAllPokemons } = require("../controllers");
const { v4: uuidv4 } = require("uuid");

const router = Router();

/* GET /pokemons y  GET /pokemons?name= */
router.get("/", async (req, res) => {
  const { name } = req.query;
  let pokeTotal = await getAllPokemons();
  if (name) {
    let pokeName = await getPokemonDetail("GET_NAME", name);
    pokeName.length > 0
      ? res.status(200).send(pokeName)
      : res.status(404).send("Pokemon no encontrado");
  }
  return res.status(200).send(pokeTotal);
});

/* GET /pokemons/{idPokemon} */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    let pokemonId = await getPokemonDetail("GET_ID", id);
    pokemonId.length
      ? res.status(200).send(pokemonId)
      : res.status(404).send("No hay ningun pokemon con esa id");
  }
});

/*  POST /pokemons */
router.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, type, img } =
    req.body;
  try {
    const createPokemon = await Pokemon.create({
      id: uuidv4(),
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    });
    await createPokemon.setTypes(type);
    return res.status(200).send(createPokemon);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
