const express = require("express");
const app = express();

const {libros, autores} = require("./data.js");

// Routing
app.get("/", (req, res) => {
  res.send("Inicio");
});


app.get("/api/libros", (req, res) => {
  return res.send(libros);
});


app.get("/api/autores", (req, res) => {
  return res.send(autores);
});

app.get("/api/libros/:titulo", (req, res) => {
    const titulo = req.params.titulo;
    const resultados = libros.filter(libro => libro.title.toLowerCase().includes(titulo));

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron libros con el título '${titulo}'.`);
    }

    return res.send(resultados);
});

app.get("/api/autores/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    const resultados = autores.filter(autor => autor.name.toLowerCase().includes(nombre))

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron autores con el nombre '${nombre}'.`);
    }

    return res.send(resultados)
})


// Configuración
const host = "localhost";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`"Servidor escuchando en http://${host}:${port}`);
});
