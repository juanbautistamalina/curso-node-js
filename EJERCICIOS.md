# 💻 Ejercicios Progresivos de Node.js

¡Es hora de poner en práctica lo aprendido! Esta serie de ejercicios está diseñada para reforzar los conceptos de la guía, llevándote desde tareas básicas hasta la creación de una API REST funcional, simulando problemas del mundo real.

---

### ✅ Ejercicio 1: Utilidad de Información del Sistema

**🎯 Objetivo:** Familiarizarte con los módulos nativos de Node.js, específicamente `os`, y practicar la creación y ejecución de un script básico.

**📖 Enunciado:**
Crea un script de Node.js llamado `system-info.js` que, al ejecutarse, muestre en la consola la siguiente información de tu sistema operativo:
*   Nombre de la plataforma (`os.platform()`).
*   Versión del sistema operativo (`os.release()`).
*   Arquitectura (`os.arch()`).
*   CPUs (solo la cantidad, `os.cpus().length`).
*   Memoria total en megabytes (`os.totalmem()`).
*   Tiempo que lleva encendido el sistema en días (`os.uptime()`).

**💡 Pistas:**
*   Recuerda importar el módulo `os` con `require('node:os')`.
*   Las funciones `totalmem()` y `uptime()` devuelven valores en bytes y segundos, respectivamente. Necesitarás hacer algunas conversiones matemáticas. Para megabytes, divide entre `1024 * 1024`. Para días, divide los segundos entre `60` (minutos), `60` (horas) y `24` (días).

**🏁 Resultado Esperado (Ejemplo):**
```
Información del Sistema Operativo:
---------------------------------
Plataforma: darwin
Versión: 21.6.0
Arquitectura: arm64
CPUs: 8
Memoria Total (MB): 16384
Tiempo de Actividad (días): 6.45
```

---

### ✅ Ejercicio 2: Lector de Archivos Asíncrono

**🎯 Objetivo:** Poner en práctica la lectura de archivos de forma asíncrona, un pilar de Node.js, y utilizar la sintaxis moderna `async/await` para un manejo de código más limpio.

**📖 Enunciado:**
Crea dos archivos de texto (`archivo1.txt` y `archivo2.txt`) con contenido diferente. Luego, crea un script `read-files.js` que lea ambos archivos **de forma secuencial y asíncrona** y muestre su contenido en la consola. El orden de ejecución debe ser estricto.

**🏢 Caso de la vida real:**
En un entorno laboral, a menudo necesitas realizar operaciones que dependen del resultado de una operación asíncrona anterior (ej: leer un archivo de configuración y, basado en su contenido, acceder a una base de datos). Asegurar el orden secuencial de estas operaciones es crucial.

**💡 Pistas:**
*   Utiliza la versión de `fs` que trabaja con promesas: `require('node:fs/promises')`.
*   Para poder usar `await` en el nivel superior de un archivo CommonJS, envuelve tu código en una función `async` autoinvocada (una IIFE): `(async () => { ... })();`.
*   Usa un bloque `try...catch` para manejar posibles errores, como que un archivo no exista.

**🏁 Resultado Esperado:**
```
Leyendo el primer archivo...
Contenido 1: [Contenido de archivo1.txt]
Leyendo el segundo archivo...
Contenido 2: [Contenido de archivo2.txt]
```

---

### ✅ Ejercicio 3: Herramienta CLI para Listar Archivos

**🎯 Objetivo:** Crear una herramienta de línea de comandos (CLI) que interactúe con el sistema de archivos, aplicando conocimientos sobre los módulos `fs`, `path`, y el objeto global `process` para leer argumentos.

**📖 Enunciado:**
Crea un script `ls-avanzado.js` que liste los archivos y directorios de una carpeta.
*   El script debe aceptar un argumento desde la línea de comandos que será la ruta del directorio a listar.
*   Si no se proporciona un argumento, debe listar el contenido del directorio actual (`.`).
*   Por cada elemento, debe mostrar si es un directorio (`D`) o un fichero (`F`), su nombre y su tamaño en bytes, formateado en columnas para que sea legible.

**🏢 Caso de la vida real:**
Los desarrolladores backend crean constantemente herramientas internas para automatizar tareas. Este ejercicio simula la creación de una utilidad que podría usarse para inspeccionar directorios de logs, carpetas de subida de archivos, etc..

**💡 Pistas:**
*   Obtén el argumento de la línea de comandos con `process.argv`.
*   Usa `fs.readdir()` para leer el contenido de un directorio.
*   Dentro del bucle que recorre los archivos, necesitarás obtener sus estadísticas con `fs.stat()` para saber si es un directorio (`stats.isDirectory()`) o un fichero, y su tamaño (`stats.size`).
*   Para construir la ruta completa de cada archivo, usa `path.join(directorio, archivo)`.
*   Para formatear la salida en columnas, puedes usar el método de string `.padEnd()` para asegurar que cada parte tenga una longitud fija.

**🏁 Resultado Esperado (Ejemplo al ejecutar `node ls-avanzado.js .`):**
```
TYPE  NAME                  SIZE      MODIFIED
D     datos                 128       2023-10-27T10:00:00.000Z
F     package.json          250       2023-10-27T10:05:00.000Z
D     routers               96        2023-10-27T10:02:00.000Z
```

---

### ✅ Ejercicio 4: Servidor Básico con Routing Manual

**🎯 Objetivo:** Entender los fundamentos de cómo funciona un servidor en Node.js usando el módulo nativo `http`, incluyendo el enrutamiento manual.

**📖 Enunciado:**
Crea un script `server.js` que levante un servidor en un puerto disponible (usa la técnica del puerto `0`). El servidor debe responder de manera diferente según la URL:
*   `GET /`: Debe responder con `<h1>Bienvenidos a mi página</h1>`.
*   `GET /cursos`: Debe responder con un JSON (en formato string) que contenga una lista de cursos (puedes inventarlos).
*   Cualquier otra ruta debe responder con un código de estado `404` y `<h1>Página no encontrada</h1>`.

**💡 Pistas:**
*   Dentro de la función `http.createServer((req, res) => { ... })`, accede a la URL y al método con `req.url` y `req.method`.
*   Usa una estructura `if/else if/else` o `switch` para manejar las diferentes rutas.
*   Para enviar una respuesta JSON, convierte tu objeto a un string con `JSON.stringify()`.
*   Para el error 404, establece el código de estado con `res.statusCode = 404` antes de enviar la respuesta.
*   Para encontrar un puerto disponible, puedes usar el módulo `net` como se mostró en una de las fuentes. Crea una función `findAvailablePort` que devuelva una promesa.

**🏁 Resultado Esperado:**
*   Al visitar `http://localhost:[puerto]` -> Se muestra el HTML de bienvenida.
*   Al visitar `http://localhost:[puerto]/cursos` -> Se muestra el JSON con los cursos.
*   Al visitar cualquier otra ruta -> Se muestra el HTML de error 404.

---

### ✅ Ejercicio 5: API REST de Cursos con Express

**🎯 Objetivo:** Aplicar los conocimientos del framework Express para construir una API REST funcional, manejando rutas, parámetros y métodos HTTP (GET, POST, PUT, DELETE). Esta es la habilidad más demandada en el mercado laboral para un desarrollador Node.js.

**📖 Enunciado:**
Crea una aplicación completa con Express que gestione una colección de cursos. Utiliza el archivo `cursos.js` de los ejemplos anteriores para simular una base de datos.
1.  **🚀 Inicialización:**
    *   Crea un proyecto con `npm init -y`.
    *   Instala `express` y `nodemon` (`-D`).
    *   Configura un script `dev` en `package.json` para ejecutar tu servidor con `nodemon`.
2.  **📂 Estructura del Proyecto:**
    *   Organiza tus rutas en `routers` separados (ej: `programacion.js`, `matematicas.js`).
3.  **🛣️ Rutas `GET`:**
    *   `GET /api/cursos/programacion`: Devuelve todos los cursos de programación.
    *   `GET /api/cursos/programacion/:lenguaje`: Devuelve los cursos del lenguaje especificado. Si no encuentra, devuelve un error 404.
4.  **➕ Rutas `POST`:**
    *   `POST /api/cursos/programacion`: Permite agregar un nuevo curso. El nuevo curso vendrá en el cuerpo (`body`) de la solicitud en formato JSON.
5.  **🔄 Rutas `PUT`:**
    *   `PUT /api/cursos/programacion/:id`: Permite actualizar **toda la información** de un curso existente, identificado por su `id`. La información completa vendrá en el `body`.
6.  **🗑️ Rutas `DELETE`:**
    *   `DELETE /api/cursos/programacion/:id`: Permite eliminar un curso por su `id`.

**🏢 Caso de la vida real:**
Este ejercicio simula la creación de un endpoint de una API. En un trabajo, construirías endpoints como este para que las aplicaciones frontend (React, Angular, etc.) puedan consumir, crear, actualizar y eliminar datos.

**💡 Pistas:**
*   Para manejar el `body` de las solicitudes JSON, necesitas usar un middleware. En tu archivo principal, añade `app.use(express.json())`.
*   Para encontrar un curso por `id`, puedes usar métodos de array como `.findIndex()`. Recuerda que los parámetros (`req.params.id`) vienen como strings, puede que necesites convertirlos a número (`parseInt()`).
*   Para `DELETE`, usa `.splice()` para eliminar el elemento del array una vez que encuentres su índice.
*   No olvides devolver códigos de estado apropiados para cada operación (ej: `201 Created`, `204 No Content`, `404 Not Found`).

**🏁 Resultado Esperado:**
Una API REST funcional que puedes probar con herramientas como Postman, Insomnia o la extensión `REST Client` de VS Code, enviando peticiones GET, POST, PUT y DELETE y viendo los resultados correctos en cada caso.