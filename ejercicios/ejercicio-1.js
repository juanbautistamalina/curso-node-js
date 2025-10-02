// Ejercicio 1: Información del sistema ⚙️ 

const os = require("node:os");
console.log("Información del Sistema Operativo:");
console.log("---------------------------------");
console.log("Plataforma:", os.platform());
console.log("Versión:", os.release());
console.log("Arquitectura:", os.arch());
console.log("CPUs:", os.cpus().length);
console.log("Memoria total (MB):", os.totalmem() / 1024 / 1024);
console.log("Tiempo en actividad (días):", (os.uptime() / 60 / 60 / 24).toFixed(1));