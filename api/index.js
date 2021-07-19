const server = require("./src/app.js");
const { conn, Type } = require("./src/db.js");
const axios = require("axios");

const PORT = 3001;

/* Arranco el servidor, Y llevo los types a la base de datos */
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
    axios.get("https://pokeapi.co/api/v2/type").then((response) => {
      response.data.results.forEach((el) => Type.create({ nombre: el.name }));
      console.log("Types creados y guardados en la Base de Datos");
    });
  });
});
