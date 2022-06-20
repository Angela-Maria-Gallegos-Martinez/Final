const express = require("express"); // Importar express
const router = express.Router();

let envio = require('../controllers/correoControl');

router.post('/envia', envio.enviaCorreo);

module.exports = router; //Es para que se pueda usar afuera