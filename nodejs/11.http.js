const http = require("node:http");

const HOST = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  
  // config response
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");


    if (req.url !== "/favicon.ico") {
    console.log("-- REQUEST (solicitud del cliente) --")
    console.log("URL:", req.url);
    console.log("Método:", req.method);
  }

  console.log("\n-- RESPONSE (respuesta del servidor --");
  console.log("Código:", res.statusCode);
  console.log("Headers:", res.getHeaders());


  res.end("Inicio"); // mensaje para mostrarle al cliente
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor en ejecución en http://${HOST}:${PORT}\n`);
});