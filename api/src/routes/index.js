const { Router } = require("express");
const PokemonRouter = require("./pokemon");
const TypesRouter = require("./type");

const router = Router();

// Middlewares
router.use("/pokemons", PokemonRouter);
router.use("/types", TypesRouter);

module.exports = router;
