const express = require("express");
const routerLibros = express.Router();

const { libros } = require("../datos/data.js");

// Obtener todos los libros
routerLibros.get("/", (req, res) => {
  return res.send(libros);
});


// Obtener libros por título
routerLibros.get("/:titulo", (req, res) => {
  const titulo = req.params.titulo.toLowerCase();
  const resultados = libros.filter((libro) =>
    libro.title.toLowerCase().includes(titulo)
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron libros con el título: '${titulo}'.`);
  }

  return res.send(resultados);
});


// Obtener libros por año
routerLibros.get("/anio/:anio", (req, res) => {
  const anio = req.params.anio;
  const resultados = libros.filter((libro) =>
    libro.year.toString() === anio
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron libros publicados en el año: '${anio}'.`);
  }

  return res.send(resultados);
});


// Obtener libros por título y año de publicación 
// Ejemplo de ruta: /api/libros/Harry Potter y la piedra filosofal/1997
routerLibros.get("/:title/:anio", (req, res) => {
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

module.exports = routerLibros;
