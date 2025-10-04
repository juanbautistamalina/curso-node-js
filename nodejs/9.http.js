const http = require("node:http");
const {findAvailablePort} = require("./9.free-port");

const port = process.env.PORT || 3000;

// un servidor puede recibir una petición y enviar una respuesta
const server = http.createServer((req, res) => {
  console.log("request recieved");
  res.end("Hello World");
});

// escuchar peticiones en el puerto 3000
findAvailablePort(port)
  .then((port) => {
    server.listen(port, () => {
      console.log(`server listening on port http://localhost:${port}`);
    });
  })
