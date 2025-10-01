const express = require("express");
const app = express();

/* ----------------------------- ROUTERS ----------------------------- */

const routerLibros = require("./routers/libros.js");
app.use("/api/libros", routerLibros);

const routerAutores = require("./routers/autores.js");
app.use("/api/autores", routerAutores);

/* ----------------------------- RUTA PRINCIPAL ----------------------------- */

app.get("/", (req, res) => {
  res.send("Inicio");
});

// El resto de rutas se encuentran en la carpeta /routers

/* ------------------------ CONFIGURACIÓN DEL SERVIDOR ------------------------ */

const host = "localhost";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Servidor escuchando en http://${host}:${port}`);
});
