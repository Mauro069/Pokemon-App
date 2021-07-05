const { Router } = require('express');
const getpokemons =  require('./getPokemons') 

const router = Router();

// Middlewares
router.use('/pokemons', getpokemons)

module.exports = router
