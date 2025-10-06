const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

// tomar la carpeta de los argumentos o usar la actual
const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;

  try {
    // leer el contenido del directorio -> [archivo1, archivo2, ...]
    files = await fs.readdir(folder);
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio: ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file); // ruta completa del archivo
    let stats;

    try {
      stats = await fs.stat(filePath); // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
  });

  // filesInfo es un array de strings con la info de cada archivo.
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);