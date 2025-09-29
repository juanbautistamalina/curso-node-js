const {readFile} = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression

(
    async () => {
        
        console.log("Leyendo el primer archivo ...");
        const firstText = await readFile("./file.txt", "utf-8");
        console.log("primer texto", firstText);
        
        console.log("--> Hacer cosas mientras lee el archivo");
        
        console.log("Leyendo el segundo archivo ...");
        const secondText = await readFile("./file2.txt", "utf-8");
        console.log("segundo texto", secondText);

    }
)()
