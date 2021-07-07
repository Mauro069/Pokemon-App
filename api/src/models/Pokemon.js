const { DataTypes } = require("sequelize");

// Creamos la tabla pokemon
module.exports = (sequelize) => {
  // Tabla de Pokemon
  sequelize.define(
    "pokemon",
    {
      id: {
        // Se convierte en el UUID tipo de datos para PostgreSQL y SQLite
        // https://sequelize.org/master/manual/model-basics.html#uuids
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      vida: {
        type: DataTypes.INTEGER,
      },
      fuerza: {
        type: DataTypes.INTEGER,
      },
      defensa: {
        type: DataTypes.INTEGER,
      },
      Velocidad: {
        type: DataTypes.INTEGER,
      },
      Altura: {
        type: DataTypes.INTEGER,
      },
      Peso: {
        type: DataTypes.INTEGER,
      },
      Img: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
