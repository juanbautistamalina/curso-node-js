const express = require("express");
const app = express();

const { libros, autores } = require("./data.js");


/* ----------------------------- RUTAS PRINCIPALES ----------------------------- */

// Ruta de inicio
app.get("/", (req, res) => {
  res.send("Inicio");
});


// Obtener todos los libros
app.get("/api/libros", (req, res) => {
  return res.send(libros);
});


// Obtener todos los autores
// Soporta query parameter opcional ?ordenar=true para orden alfabético
app.get("/api/autores", (req, res) => {

  // Ordenar autores por nombre si se pasa ?ordenar=true
  if (req.query.ordenar === "true") {
    const autoresOrdenados = [...autores].sort((a, b) => a.name.localeCompare(b.name));
    return res.send(autoresOrdenados);
  }

  return res.send(autores);
});


/* ------------------------ PARÁMETROS DE RUTA ------------------------ */

// Obtener libros por título (coincidencia parcial)
app.get("/api/libros/:titulo", (req, res) => {
  const titulo = req.params.titulo.toLowerCase();
  const resultados = libros.filter((libro) =>
    libro.title.toLowerCase().includes(titulo)
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron libros con el título: '${titulo}'.`);
  }

  return res.send(resultados);
});


// Obtener autores por nombre
// Soporta query opcional ?birthYear=YYYY
app.get("/api/autores/:nombre", (req, res) => {
  const nombre = req.params.nombre.toLowerCase();

  // Filtra por coincidencia en el nombre
  let resultados = autores.filter((autor) =>
    autor.name.toLowerCase().includes(nombre)
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron autores con el nombre: '${nombre}'.`);
  }

  // Filtrar por año de nacimiento si se pasa ?birthYear=YYYY
  // Ejemplo: /api/autores/conan?birthYear=1859
  if (req.query.birthYear) {
    const year = Number(req.query.birthYear);
    resultados = resultados.filter((autor) => autor.birthYear === year);
  }

  return res.send(resultados);
});

// Obtener libros por título y año exacto de publicación
// Ejemplo de ruta: /api/libros/Harry Potter y la piedra filosofal/1997
app.get("/api/libros/:title/:anio", (req, res) => {
  const titulo = req.params.title.toLowerCase();
  const anio = req.params.anio;

  const resultados = libros.filter(
    (libro) =>
      libro.title.toLowerCase().includes(titulo) &&
      libro.year.toString() === anio
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron libros con el título '${titulo}' publicados en ${anio}.`);
  }

  return res.send(resultados);
});


/* ------------------------ CONFIGURACIÓN DEL SERVIDOR ------------------------ */

const host = "localhost";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Servidor escuchando en http://${host}:${port}`);
});
