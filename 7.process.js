// argumentos de entrada: node ./7.process.js argumento1 argumento2 ...
console.log(process.argv);

// controlar el proceso y su salida: 0 (bien) y 1 (error)
// process.exit(0);

// controlar eventos del proceso
process.on("exit", () => {
  // limpiar los recursos
});

// current working directory
console.log("cwd: ", process.cwd());

// platform
console.log(process.env.OS)