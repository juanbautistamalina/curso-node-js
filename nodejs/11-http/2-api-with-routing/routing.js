const http = require("node:http");
const dittoJSON = require("./pokemon/ditto.json");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  switch (method) {
    // ----------------------
    // Manejo de solicitudes GET
    // ----------------------
    case "GET":
      switch (url) {
        case "/":
          res.setHeader("Content-Type", "text/html charset=utf-8");
          return res.end("<h1>Inicio</h1>");

        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404 - Not Found</h1>");
      }

    // ----------------------
    // Manejo de solicitudes POST
    // ----------------------
    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          // escuchar el evento data
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            // llamar a una base de datos para guardar la info
            res.writeHead(201, { "Content-Type": "application/json; charset=utf-8" });

           res.end(JSON.stringify(data));
            
          });

          break; 
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }

    default: 
      res.statusCode = 501; // 501: método no implementado en el servidor
      res.end("El método usado no puede ser manejado por el servidor");
  }
});

server.listen(1234, () => {
  console.log("server listening on port http://localhost:1234");
});
