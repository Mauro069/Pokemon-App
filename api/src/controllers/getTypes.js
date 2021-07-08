const { Type } = require("../db");

function getTypes(_req, res) {
  let totalTypes = Type.findAll();
  return res.json(totalTypes);
}

module.exports = getTypes;
