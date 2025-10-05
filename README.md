# 📘 Node.js - Aprendizaje y Prácticas

Este repositorio contiene mis apuntes, ejercicios y proyectos prácticos realizados durante el aprendizaje de **Node.js** a través de cursos en YouTube y otros recursos.

El objetivo es consolidar conocimientos básicos e intermedios de Node.js y crear una base sólida para trabajar en proyectos reales.

---

## 🚀 ¿Qué es Node.js?

- Node.js **no es un lenguaje ni un framework**.
- Es un **entorno de ejecución de JavaScript** construido sobre el motor V8 de Chrome.
- Permite ejecutar **JavaScript fuera del navegador**, ideal para desarrollo backend, CLI, servidores y más.

### Características principales
- **Asíncrono y orientado a eventos** → ideal para aplicaciones escalables.
- **Monohilo con event loop** → maneja múltiples operaciones concurrentes.
- **Multiplataforma** → funciona en servidores, terminal y dispositivos IoT.
- **NPM integrado** → acceso al mayor ecosistema de paquetes.

---

## 📂 Contenido del repositorio

- `nodejs/` → introducción y bases de Node.js
- `express/` → introducción a Express.js
- `ejercicios/` → pequeños scripts y pruebas de conceptos

---

## 📖 Documentación esencial

### ▶️ REPL
Consola interactiva para probar JavaScript directamente en Node.
```bash
node
> 2 + 2
4
```

---

### 🌍 Variables globales
```js
console.log(globalThis); // objeto global
console.log(__dirname);  // ruta del directorio actual
console.log(__filename); // ruta del archivo actual
```

---

### 📦 Módulos

#### CommonJS (por defecto en Node):
```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// index.js
const sum = require("./sum");
console.log(sum(2, 3));
```

#### ES Modules:
```js
// sum.mjs
export function sum(a, b) {
  return a + b;
}

// index.mjs
import { sum } from "./sum.mjs";
console.log(sum(2, 3));
```

---

### ⚡ Eventos y EventEmitter
```js
const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("saludo", (msg) => {
  console.log(`Hola ${msg}`);
});

emitter.emit("saludo", "Mundo");
```

---

### 🔧 Módulo `process`
```js
console.log(process.argv); // argumentos desde terminal
process.stdout.write("Escribe algo: ");
process.stdin.on("data", (data) => {
  console.log(`Ingresaste: ${data.toString()}`);
  process.exit(0);
});
```

---

### 📂 Módulo `fs`
```js
const fs = require("node:fs");

// Escribir
fs.writeFileSync("archivo.txt", "Hola Node.js");

// Leer
const contenido = fs.readFileSync("archivo.txt", "utf-8");
console.log(contenido);
```

---

### 🌐 Módulo `http`
```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Mi primer servidor con Node.js");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor escuchando en http://127.0.0.1:3000");
});
```

---

### 📦 npm básico
```bash
npm init -y          # crear package.json
npm install express  # instalar paquete
npm uninstall express # desinstalar paquete
```

---

### 🚏 Routing básico con Express
```js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Inicio"));
app.get("/about", (req, res) => res.send("Acerca de nosotros"));

app.listen(3000, () => console.log("Servidor Express en http://localhost:3000"));
```

---

## 🛣️ Roadmap de aprendizaje

### Fundamentos
- [x] ¿Qué es Node.js?
- [x] REPL y uso básico en terminal
- [x] `globalThis` y variables globales
- [x] Sistema de módulos (CommonJS y ESM)
- [x] Eventos y EventEmitter
- [x] Módulo `process` (stdin, stdout, argv, exit)

### Módulos principales
- [x] `fs` → manejo del sistema de archivos
- [x] `path` → rutas de archivos y directorios
- [x] `os` → información del sistema operativo
- [x] `timers` → `setTimeout`, `setInterval`, `setImmediate`
- [x] `http` → crear servidores básicos

### npm
- [x] Uso de `npm init` y `package.json`
- [x] Instalación y desinstalación de paquetes
- [x] Dependencias y `node_modules`

### Express.js (introducción)
- [x] ¿Qué es Express.js?
- [x] Crear un servidor con Express
- [ ] Rutas y middleware
- [x] Manejo de peticiones y respuestas
- [x] Proyecto básico con Express

### Proyecto práctico
- [ ] Crear un servidor HTTP básico
- [ ] Leer y escribir archivos con `fs`
- [ ] Manejo de rutas con `path`
- [ ] Simular una CLI sencilla con `process`
- [ ] Proyecto integrador con Node.js

---

## 🔗 Recursos útiles

- [Node.js - Sitio oficial](https://nodejs.org/es/)
- [Documentación oficial Node.js](https://nodejs.org/dist/latest-v18.x/docs/api/)
- [NPM - Gestor de paquetes](https://www.npmjs.com/)
- [Express - Framework web para Node.js](https://www.npmjs.com/package/express)
- [Nodemon - Herramienta para reiniciar aplicaciones Node.js automáticamente](https://www.npmjs.com/package/nodemon)

---

## 🎯 Objetivo personal

- Practicar y entender los fundamentos de Node.js.
- Aprender a trabajar con módulos, eventos, `process`, `http`, `fs`, y más.
- Reforzar bases para avanzar a frameworks como **Express.js**.
