const url = require("node:url");
const myUrl = new url.URL("https://www.ejemplo.com/cursos/programacion?lenguaje=nodejs&nivel=basico");

console.log("hostname:", myUrl.hostname); // www.ejemplo.org
console.log("path:", myUrl.pathname) // /cursos/programacion
console.log("search params:", myUrl.searchParams); // URLSearchParams { 'lenguaje' => 'nodejs', 'nivel' => 'basico' }
console.log(myUrl.searchParams.get("lenguaje")); 
console.log(myUrl.searchParams.get("nivel")); 