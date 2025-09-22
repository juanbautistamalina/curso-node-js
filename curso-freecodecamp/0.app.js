const { suma, resta, multiplicar, dividir } =
  require("./0.funciones.js").default; // --> CJS (importación de varios elementos)

console.log(suma(1, 1));
console.log(resta(10, 5));
console.log(multiplicar(5, 5));
console.log(dividir(10, 2));
