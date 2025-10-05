// Importa el módulo http (nativo de Node.js) para crear el servidor
const http = require("node:http");

// Importa los datos de ejemplo desde un archivo local
const data = require("./data.js");

const host = "127.0.0.1";
const port = 3000;

// Crea el servidor HTTP
const server = http.createServer((req, res) => {
  const { method } = req; // Extrae el método HTTP de la solicitud (GET, POST, etc.)

  switch (method) {
    case "GET":
      return manejarSolicitudGet(req, res);

    case "POST":
      return manejarSolicitudPost(req, res);

    default:
      res.statusCode = 501; // 501: método no implementado en el servidor
      res.end(`El método usado no puede ser manejado por el servidor: ${method}`);
  }
});

// ----------------------
// Manejo de solicitudes GET
// ----------------------
function manejarSolicitudGet(req, res) {
  const path = req.url;

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Inicio");
  } else if (path === "/peliculas") {
    // Convierte el array de películas a JSON antes de enviarlo
    return res.end(JSON.stringify(data.peliculas));
  } else if (path === "/usuarios") {
    return res.end(JSON.stringify(data.usuarios));
  }

  res.statusCode = 404;
  res.end("El recurso solicitado no existe");
}

// ----------------------
// Manejo de solicitudes POST
// ----------------------
function manejarSolicitudPost(req, res) {
  const path = req.url;

  if (path === "/datos/usuarios") {
    let body = "";

    // Escucha los fragmentos de datos enviados por el cliente
    req.on("data", (data) => {
      body += data.toString(); // Acumula los datos recibidos
    });

    // Cuando termina de recibir los datos
    req.on("end", () => {
      console.log(body); // Muestra los datos recibidos en la consola del servidor
      return res.end(
        "El servidor recibió una solicitud POST para /datos/usuarios"
      );
    });
  } else {
    res.statusCode = 404;
    res.end("El recurso solicitado no existe");
  }
}

// Inicia el servidor y lo pone a escuchar en el host/puerto definidos
server.listen(port, host, () => {
  console.log(`Servidor escuchando en http://${host}:${port}/`);
});