const { Type } = require("../db");

function getTypes(req, res) {
  /* Obtengo todos los types */
  let totalTypes = Type.findAll();
  /* Mando un json */
  return res.json(totalTypes);
}

module.exports = getTypes;
