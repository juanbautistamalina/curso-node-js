const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain; charset=utf-8");

  if (req.url === "/") {
    res.end("Inicio");
  } else if (req.url === "/about") {
    res.end("Acerca de nosotros");
  } else {
    res.statusCode = 404;
    res.end("Página no encontrada");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
