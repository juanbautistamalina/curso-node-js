// Módulo events
const events = require("node:events");

const emitter = new events.EventEmitter();
emitter.on("compra", () => {
    console.log("Se ha realizado una compra ✅");
});

emitter.emit("compra")