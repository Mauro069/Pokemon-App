const { Pokemon, Type } = require("../db");

const getAllDb = async () => {
  /* Busco a todos los pokemons */
  return await Pokemon.findAll({
    /* Que incluyan la tabla type */
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
