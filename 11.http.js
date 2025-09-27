const http = require("node:http");

const HOST = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  
    if (req.url !== "/favicon.ico") {
    console.log("URL:", req.url);
    console.log("Método:", req.method);
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Inicio"); // mensaje para mostrarle al cliente
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor en ejecución en http://${HOST}:${PORT}`);
});
