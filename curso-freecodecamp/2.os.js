const os = require("node:os");

// tipo de os
console.log(os.type());

// directorio principal
console.log(os.homedir());

// cuánto tiempo se estuvo ejecutando el os (en segundos)
console.log(os.uptime());

// información del usuario
console.log(os.userInfo())