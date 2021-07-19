const { Type } = require("../db");

/* Traigo todos los types de la base de datos */
function getTypes(_req, res) {
  let totalTypes = Type.findAll();
  return res.json(totalTypes);
}

module.exports = getTypes;
