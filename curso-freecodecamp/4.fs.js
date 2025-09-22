const fs = require("node:fs");

// Leer un archivo (asíncrono)

// fs.readFile("./index.html", "utf-8", (err, content) => {
//   if (err) {
//     console.log("Ha ocurrido un error", err);
//   }
//   console.log("✅ Archivo leído exitosamente");
// });

// Síncrono
const file = fs.readFileSync("./index.html", "utf-8");
// console.log(file)
console.log("✅ Archivo leído correctamente");

// -------------------------------------------------

// Cambiar el nombre de un archivo (asíncrono)

// fs.rename("index.html", "main.html", (err) => {
//   if (err) {
//     return console.log("❌ Error", err.message);
//   }
//   console.log("✅ Nombre cambiado exitosamente");
// });

// Síncrono
fs.renameSync("index.html", "main.html");
console.log("✅ Nombre cambiado exitosamente");

// -------------------------------------------------

// Agregar contenido al final del archivo (asíncrono)

// fs.appendFile("./main.html", "\n<p>Párrafo Extra</p>", (err) => {
//   if (err) throw err;
//   console.log("✅ Archivo modificado exitosamente");
// });

// Síncrono
fs.appendFileSync("./main.html", "\n<p>Párrafo Extra</p>");
console.log("✅ Archivo modificado exitosamente");

// -------------------------------------------------

// Reemplazar contenido de un archivo (asíncrono)

// fs.writeFile("./main.html", "<h1>Contenido de ejemplo</h1>", (err) => {
//     if (err) throw err;
//     console.log("✅ Contenido reemplazado exitosamente")
// })

// Síncrono
fs.writeFileSync("./main.html", "<h1>Contenido de ejemplo</h1>");
console.log("✅ Contenido reemplazado exitosamente");

// -------------------------------------------------

// Eliminar archivo (asíncrono)
// fs.unlink("./main.html", (err) => {
//   if (err) console.log("Error", err.message);
//   else console.log("✅ Archivo eliminado con éxito");
// });

// Síncrono
fs.unlinkSync("./main.html");
console.log("✅ Archivo eliminado con éxito");
