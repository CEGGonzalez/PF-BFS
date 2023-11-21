const { Router } = require("express");
// LINEA PARA LA EXPORTACION DE HANDLERS
const users = Router()

// Autenticación y Registro de Usuarios
users.post('/register', /* handler */); //body
users.post('/login',/* handler */); //body
users.post('/logout',/* handler */); //body

// Gestión de Usuarios
users.get('/profile',/* handler */); // query
users.put('/profile',/* handler */); // query + body 
users.delete('/profile'/* handler */,); // query

module.exports = users