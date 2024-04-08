const express = require("express");
const { getObservador, createObservador, deleteObservador, updateObservador } = require('../controller/observador.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")

const observadorRouter = express.Router()

 //obtener las areas
 observadorRouter.get('/appi/observador', authMidd ,checkRol(), getObservador)
 

//crear una nueva area
observadorRouter.post("/appi/observador/create" ,authMidd, checkRol(), createObservador )

//actualizar
observadorRouter.put("/appi/observador/editar/:obsvcod",authMidd, checkRol(), updateObservador )

//obetener un detalle mediante el id
observadorRouter.get("/appi/observador/:obsvcod",authMidd, checkRol() )


//eliminar
observadorRouter.delete("/appi/observador/delete/:obsvcod",authMidd, checkRol(), deleteObservador )


module.exports = observadorRouter
