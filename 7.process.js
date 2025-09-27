const process = require("node:process");

// process.argv: argumentos de entrada al ejecutar el script
// Ejecutar: node ./7.process.js argumento1 argumento2 ...
console.log("Argumentos: ", process.argv); // ['node', 'ruta/del/script.js', 'argumento1', 'argumento2', ...]

// process.pid: ID del proceso
console.log("PID: ", process.pid);

// process.cwd(): directorio de trabajo actual
console.log("cwd: ", process.cwd());

// process.env.OS: variables de entorno del sistema operativo
console.log("OS: ", process.env.OS);

// process.on(event): controlar eventos del proceso
process.on("exit", () => {
  console.log("Fin del proceso"); 
});