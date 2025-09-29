// A partir de Node 16, se recomienda poner "node:" en las importaciones
const fs = require("node:fs"); 

const stats = fs.statSync("./file.txt");
console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño en bytes
)