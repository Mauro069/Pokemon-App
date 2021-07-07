const { Router } = require("express");
const PokemonRouter = require("./pokemon");

const router = Router();

// Middlewares
router.use("/pokemons", PokemonRouter);

module.exports = router;
