const express = require("express");
const { getAcudientes, createAcudientes, deletedAcudientes} = require('../controller/acudiente.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {acudientesValidator} = require('../validator/acudiente.validator.js')
const acudienteRouter = express.Router()

 //obtener las areas
 acudienteRouter.get('/appi/acudientes', getAcudientes)
 

//crear una nueva area
acudienteRouter.post("/appi/acudientes/create" ,  authMidd, acudientesValidator,  checkRol(), createAcudientes )

//actualizar
acudienteRouter.put("/appi/acudientes/:id_acu",authMidd, checkRol() )

//obetener un detalle mediante el id
acudienteRouter.get("/appi/acudientes/:id_acu",authMidd, checkRol() )


//eliminar
acudienteRouter.delete("/appi/acudientes/borrar/:id_acu",authMidd, checkRol(),deletedAcudientes )


module.exports = acudienteRouter
