const { Router } = require('express');
const getAllpokemons =  require('./pokemon') 

const router = Router();

// Middlewares
router.use('/pokemons', getAllpokemons)

module.exports = router