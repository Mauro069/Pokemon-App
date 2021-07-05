const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Tabla de Pokemon
  sequelize.define('pokemon', {
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

  // Tabla de Pokemon_Type
  sequelize.define('pokemon_types', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }, {
    timestamps: false
  });




/* --------------------------------- */
};

