const pelicula = require("./5.pelicula.json");

console.log(pelicula);
console.log(typeof pelicula); // object
console.log(pelicula.titulo);
console.log(pelicula.director);
console.log(pelicula.año);

// -----------------------------

const miPelicula = {
  titulo: "Inception",
  director: "Christopher Nolan",
  año: 2010,
};

// JavaScript a JSON (object -> string)
const peliculaJSON = JSON.stringify(miPelicula);
console.log(`${peliculaJSON} - ${typeof peliculaJSON}`)

// JSON a JavaScript (string -> object)
const peliculaObject = JSON.parse(peliculaJSON);
console.log(peliculaObject);
console.log(typeof peliculaObject)