// Módulo events
const events = require("node:events");

const emitter = new events.EventEmitter();
emitter.on("compra", (total) => {
    console.log(`✅ Se ha realizado una compra por $${total} `);
});

emitter.emit("compra", 1000);