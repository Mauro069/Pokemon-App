const { DataTypes } = require("sequelize");

// Creo la tabla Type con sus propiedades
module.exports = (sequelize) => {
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
