const { Pokemon, Type } = require("../db");

/* Traigo a los pokemons de la base de datos */
const getAllDb = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["nombre"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = getAllDb;
