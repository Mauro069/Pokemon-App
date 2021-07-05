const { DataTypes } = require('sequelize');

// Creamos la tabla pokemon
module.exports = (sequelize) => {
  // Tabla de Pokemon
  sequelize.define('pokemon', {
    id: {
      // Se convierte en el UUID tipo de datos para PostgreSQL y SQLite
      // https://sequelize.org/master/manual/model-basics.html#uuids
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER
    },
    fuerza: {
      type: DataTypes.INTEGER
    },
    defensa: {
      type: DataTypes.INTEGER 
    },
    Velocidad: {
      type: DataTypes.INTEGER
    },
    Altura: {
      type: DataTypes.INTEGER
    },
    Peso: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
};

