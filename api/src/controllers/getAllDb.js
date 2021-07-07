const { Pokemon, Type } = require("../db");

 // VER ESTO
 
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
