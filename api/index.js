const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT =  3001

// Arranco el servidor
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
  });
});
