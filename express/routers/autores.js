const express = require("express");
const routerAutores = express.Router();

const { autores } = require("../datos/data.js");

// Obtener todos los autores
// Soporta query parameter opcional ?ordenar=true para orden alfabético
routerAutores.get("/", (req, res) => {
  if (req.query.ordenar === "true") {
    const autoresOrdenados = [...autores].sort((a, b) => a.name.localeCompare(b.name));
    return res.send(autoresOrdenados);
  }

  return res.send(autores);
});


// Obtener autores por nombre
// Soporta query opcional ?birthYear=YYYY
routerAutores.get("/:nombre", (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
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

module.exports = routerAutores;
