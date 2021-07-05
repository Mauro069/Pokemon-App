const { DataTypes } = require('sequelize');

// Creamos la tabla de Type
module.exports = (sequelize) => {
// Tabla de Type
  sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
})
}