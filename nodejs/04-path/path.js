const path = require("node:path");

// barra separadora de carpetas según SO:
// windows -> \
// unix -> /
console.log(path.sep);

// unir rutas con path join
const filePath = path.join("content", "subfolder", "file.txt");
console.log(filePath);

// nombre del archivo.extensión
const base = path.basename("/tmp/juanb/password.txt");
console.log(base);

// nombre del archivo sin extensión
const filename = path.basename("/temp/juanb/password.txt", ".txt");
console.log(filename);

// extensión
const extension = path.extname("image.jpg");
console.log(extension)