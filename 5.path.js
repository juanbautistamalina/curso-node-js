const path = require("node:path");

// barra separadora de carpetas según SO 
console.log(path.sep);

// unir rutas con path join
const filePath = path.join("content", "subfolder", "file.txt");
console.log(filePath);

const base = path.basename("/tmp/juanb/password.txt");
console.log(base);

const filename = path.basename("/temp/juanb/password.txt", ".txt");
console.log(filename);

const extension = path.extname("image.jpg");
console.log(extension)


