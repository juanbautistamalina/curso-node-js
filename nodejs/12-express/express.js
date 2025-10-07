const express = require("express");
const app = express();

const ditto = require("../11-http/2-api-with-routing/pokemon/ditto.json");

app.disable("x-powered-by"); // desactivar por motivos de seguridad (opcional)
const PORT = process.env.PORT ?? 1234;

// Middleware es una función que se ejecuta entre la petición y la respuesta

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   // solo llegan request que son POST y que tienen el header Content-Type; application/json.

//   let body = "";

//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     // mutar la request y meter la información en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  // express detecta automáticamente el content-type, dependiendo de la respuesta
  res.send("<h1>Inicio</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.send(ditto);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

// Para cualquier otro no contemplado (siempre colocar al final)
app.use((req, res) => {
  res.send(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
