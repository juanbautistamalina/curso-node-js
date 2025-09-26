// Módulo process
const process = require("node:process");

const num1 = parseInt(process.argv[2] ?? 0);
const num2 = parseInt(process.argv[3] ?? 0);

if (num1 !== 0 && num2 !== 0) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else {
  console.log("No se han ingresado argumentos");
}

console.log("ID del proceso ", process.pid);