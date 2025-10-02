// Ejercicio 2: Lector de archivos 📂

const fs = require("node:fs/promises");
const path = require("node:path");


(async () => {
  try {
    const notas = await fs.readFile("notas.txt", "utf-8");
    console.log(`Archivo '${path.basename(__filename)}' leído exitosamente ✅\n`);
    console.log(notas);

  } catch (error) {
    console.error("Ha ocurrido un error: ", error.message);
  }
})();
