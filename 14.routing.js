const http = require("node:http");
const data = require("./14.data.js");

const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const { method } = req; // GET, POST, PUT or DELETE

  switch (method) {
    case "GET":
      return manejarSolicitudGet(req, res);
    
    default:
        console.log(`El método usado no puede ser manejado por el servidor: ${method}`);
  }
});


function manejarSolicitudGet(req, res) {
    const path = req.url;

    if (path === "/") {
        res.statusCode = 200;
        res.end("Inicio");
    } else if (path === "/peliculas") {
        res.statusCode = 200;
        res.end(JSON.stringify(data));
    }

}



server.listen(port, host, () => {
  console.log(`Servidor escuchando en el puerto https://${host}:${port}/`);
});
