
// setTimeout((n1, n2) => {
//     console.log(n1 + n2)
// }, 5000, 20, 30)

console.log("--- Antes de setImmediate ---")

setImmediate((n1, n2) => {
    console.log("Código dentro de setImmediate");
    console.log("Suma:", n1 + n2)
}, 50, 50)

console.log("--- Antes de setImmediate ---")


setInterval(() => {
    console.log("probando...")
}, 1000)
