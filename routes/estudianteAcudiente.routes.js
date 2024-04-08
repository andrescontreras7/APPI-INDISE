const express = require("express");
const { getEstudianteAcudiente} = require('../controller/EstudianteAcudiente.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")

const EstudianteAcudienteRouter = express.Router()

 //obtener las areas
 EstudianteAcudienteRouter.get('/appi/Estudiantes-acudientes', authMidd ,checkRol(), getEstudianteAcudiente)
 

 module.exports = EstudianteAcudienteRouter