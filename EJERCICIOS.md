# 📘 Ejercicios de Node.js  

Bienvenido a esta colección de **ejercicios prácticos de Node.js** 🎉.  
El objetivo es **aprender progresivamente** desde lo más básico (módulos nativos) hasta la construcción de **APIs con Express**.  

Estos ejercicios están pensados para practicar de forma escalonada y reforzar los fundamentos clave que se usan en proyectos reales.  

---

## 🟢 Nivel 1: Fundamentos básicos  

### 1. Información del sistema ⚙️  
Crea un script que use el módulo `os` para mostrar:  
- Plataforma del sistema operativo.  
- Cantidad de CPUs.  
- Memoria libre en MB.  
- Tiempo de actividad en horas.  

---

### 2. Lector de archivos 📂  
Escribe un programa que lea y muestre en consola el contenido de un archivo llamado `notas.txt`.  

---

### 3. Escritor de archivos ✍️  
Crea un script que guarde en un archivo `log.txt` el mensaje:  
```
[fecha actual] - El sistema está funcionando correctamente
```

---

## 🟡 Nivel 2: Módulos y asincronía  

### 4. Analizador de JSON 📊  
Crea un archivo `productos.json` con un arreglo de objetos (cada uno con `id`, `nombre`, `precio`).  
Haz un script que lea ese archivo y calcule el **precio promedio** de los productos.  

---

### 5. Cronómetro ⏱️  
Haz un programa que muestre en consola un contador de segundos (1, 2, 3, …).  
Debe detenerse automáticamente después de 10 segundos.  

---

### 6. Servidor básico con `http` 🌐  
Crea un servidor en Node.js que responda con:  
- `/` → "Bienvenido al servidor de ejemplo 🚀".  
- `/contacto` → "Página de contacto 📧".  
- En cualquier otra ruta → "404: No encontrado ❌".  

---

## 🔵 Nivel 3: Express.js  

### 7. Servidor con rutas de **usuarios** 👤  
Usa Express para crear un servidor con estas rutas:  
- `GET /api/usuarios` → lista todos los usuarios (array en memoria).  
- `POST /api/usuarios` → agrega un usuario nuevo.  
- `DELETE /api/usuarios/:id` → elimina un usuario por ID.  

---

### 8. Parámetros de consulta (query) 🔍  
Agrega a la ruta `GET /api/usuarios` un query `?edad=30` que filtre usuarios por edad.  

---

### 9. Middleware de logger 📜  
Crea un middleware que muestre en consola la fecha y la URL de cada petición recibida en el servidor.  

---

### 10. Router de **productos** 🛒  
Separa la lógica de productos en un `router`.  
Endpoints:  
- `GET /api/productos` → lista de productos.  
- `GET /api/productos/:id` → detalle de un producto.  
- `POST /api/productos` → agrega un producto.  

---

## 🔴 Nivel 4: Desafíos  

### 11. API de **tareas** ✅  
Construye una API con Express que permita:  
- Listar tareas (`GET /api/tareas`)  
- Crear una tarea (`POST /api/tareas`)  
- Marcar como completada (`PATCH /api/tareas/:id`)  
- Eliminar una tarea (`DELETE /api/tareas/:id`)  

---

### 12. Manejo de errores 🚨  
Agrega manejo de errores con `try/catch` y respuestas en formato JSON con un campo `error` si algo falla.  

---

### 13. Archivos con Express 📄  
Agrega una ruta `GET /api/descargar` que permita descargar un archivo de texto (ejemplo: `manual.txt`).  

---

### 14. Reto final: mini-API con persistencia 💾  
Crea una API de **notas** que permita:  
- Guardar notas en un archivo `notas.json`.  
- Leer las notas desde ese archivo al iniciar el servidor.  
- Permitir CRUD completo (crear, leer, actualizar, eliminar).  

---

## 📌 Consejos finales  

- Intenta resolver los ejercicios en orden, ya que cada nivel se apoya en el anterior.  
- No te preocupes si al inicio parece difícil: **la práctica es la clave 🔑**.  
- Revisa la [documentación oficial de Node.js](https://nodejs.org/docs) y [Express](https://expressjs.com/es/) cuando tengas dudas.  

---

✨ ¡Disfruta el proceso y sigue practicando! 🚀
