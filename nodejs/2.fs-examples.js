const fs = require("node:fs");

// fs trabaja principalmente de forma asíncrona, pero también tiene los mismos métodos en versión síncrona, 
// que terminan con "Sync".

// Leer un archivo (asíncrono)
fs.readFile("./file.txt", "utf-8", (err, content) => {
    if (err) {
        console.error("❌ Error al leer el archivo:", err);
        return;
    }
    console.log(" ✅ Contenido del archivo:", content);
});


// Agregar contenido al final del archivo (asíncrono)
const newContent = "\nNuevo contenido agregado";
fs.appendFile("./file.txt", newContent, (err) => {
    if (err) {
        console.error("❌ Error al escribir en el archivo:", err);
        return;
    }
    console.log(" ✅ Contenido agregado en el archivo.");
});


// Reemplazar contenido de un archivo (asíncrono)
const replacedContent = "Este es el contenido reemplazado";
fs.writeFile("./file.txt", replacedContent, (err) => {
    if (err) {
        console.error("Error al reemplazar el contenido del archivo:", err);
        return;
    }
    console.log(" ✅ Contenido del archivo reemplazado.");
});


// Renombrar un archivo (asíncrono)
fs.rename("./file.txt", "./file-renamed.txt", (err) => {
  if (err) {
    return console.log("❌ Error", err.message);
  }
  console.log("✅ Archivo renombrado con éxito");
});


// Eliminar archivo (asíncrono)
fs.unlink("./file-renamed.txt", (err) => {
  if (err) {
    return console.log("❌ Error", err.message);
  }
  console.log("✅ Archivo eliminado con éxito");
});
