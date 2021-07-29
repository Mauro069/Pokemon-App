const { DataTypes } = require("sequelize");

// Creo la tabla de pokemon con sus propiedades
module.exports = (sequelize) => {
  sequelize.define(
    "pokemon",
    {
      id: {
        // https://sequelize.org/master/manual/model-basics.html#uuids
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      hp: {
        type: DataTypes.INTEGER,
      },
      attack: {
        type: DataTypes.INTEGER,
      },
      defense: {
        type: DataTypes.INTEGER,
      },
      speed: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      img: {
        type: DataTypes.STRING,
      },
      create: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      timestamps: false,
    }
  );
};
