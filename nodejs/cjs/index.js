/* Variables globales:
 * En Node no existe la variable window.
 *
 * globalThis: Es una variable global en toda la aplicación.
 * - En el navegador, globalThis -> window
 * - En NodeJS, globalThis -> global
 */

// CommonJS require module
const { sum } = require("./sum.js");

console.log(sum(1, 2));
