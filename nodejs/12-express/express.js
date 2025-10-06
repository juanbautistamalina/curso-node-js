const express = require("express");
const app = express();

const ditto = require("../11-http/2-api-with-routing/pokemon/ditto.json");

app.disable("x-powered-by"); // desactivar por motivos de seguridad (opcional)
const PORT = process.env.PORT ?? 1234;

// Middleware es una función que se ejecuta entre la petición y la respuesta
// app.use((req, res, next) => {
//   console.log("mi primer middleware");
//   // trackear la request a la base de datos
//   // revisar si el usuario tiene cookies
//   next();
// });

app.use((req, res, next) => {

})


app.get("/", (req, res) => {
  // express detecta automáticamente el content-type, dependiendo de la respuesta
  res.send("<h1>Inicio</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.send(ditto);
});

app.post("/pokemon", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    res.status(201).json(data);
  });
});

// Para cualquier otro no contemplado (siempre colocar al final)
app.use((req, res) => {
  res.send(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
