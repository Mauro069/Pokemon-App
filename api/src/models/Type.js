const { DataTypes } = require("sequelize");

// Creamos la tabla de Type
module.exports = (sequelize) => {
  // Tabla de Type
  sequelize.define(
    "type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
