const server = require("./src/app.js");
const { conn, Type } = require("./src/db.js");
const axios = require("axios");

const PORT = 3001;

// Arranco el servidor
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
    /* Traigo de la api los types de pokemons */
    axios.get("https://pokeapi.co/api/v2/type").then((response) => {
      /* Recorro el arreglo de resulst y por cada elemento creo un type en la base de datos */
      response.data.results.forEach((el) => Type.create({ nombre: el.name }));
      console.log("Types creados y guardados en la Base de Datos");
    });
  });
});
