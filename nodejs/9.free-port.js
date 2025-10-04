// módulo net -> para crear servidores tcp
const net = require("node:net"); 

function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {

        // crear un servidor tcp
        const server = net.createServer();

        // escuchar en el puerto deseado
        server.listen(desiredPort, () => {
            const {port} = server.address();
            server.close(() => {
                resolve(port);
            });
        });


        server.on("error", (err) => {
            if (err.code === "EADDRINUSE") {
                // si el puerto está en uso, usar el puerto 0 (asignación dinámica)
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        });
    });
}

module.exports = {findAvailablePort};