const {Router} = require("express")
// IMPORTAR ACA LOS HANDLERS// 
const envios = Router()

envios.get("/:id", /* HANDLER DE BUSQUEDA DE ENVIO */ ) // req.params
envios.post("/", /* HANDLER PARA CREAR UN ENVIO*/) //req.body
envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.params

module.exports = envios;