const http = require("node:http");
const fs = require("node:fs"); 

const HOST = "127.0.0.1";
const PORT = process.env.PORT || 1234;

const server = http.createServer((req, res) => {
  
  // Por defecto, el statusCode es 200 ✅
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    // mensaje para mostrarle al cliente
    res.end("<h1>Bienvenido a la página de inicio</h1>");
  } else if (req.url === "/cat-image") {
    fs.readFile("./cat.jpg", (err, data) => {
      if (err) {
        res.statusCode(500);
        res.end("<h1>500 - Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data)
      }
    })
  } else if (req.url === "/contacto") {
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Not Found</h1>");
  }
});



server.listen(PORT, () => {
  console.log(`server listening on port http://${HOST}:${PORT}`);
});

// En el NAVEGADOR, se muestra por consola "request recieved" dos veces, debido
// a que se hace primero una petición para obtener la página, y luego
// una petición para obtener el favicon.ico
