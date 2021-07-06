const { Router } = require('express');
const pokemons =  require('./pokemon') 
const types =  require('./type') 

const router = Router();

// Middlewares
router.use('/pokemons', pokemons)
router.use('/types', types)

module.exports = router