const express = require("express");
const { getEstudianteAcudiente, createAcudienteEstudiante} = require('../controller/EstudianteAcudiente.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")

const EstudianteAcudienteRouter = express.Router()


 EstudianteAcudienteRouter.get('/appi/Estudiantes-acudientes', authMidd ,checkRol(), getEstudianteAcudiente)
 EstudianteAcudienteRouter.get('/appi/Estudiantes-acudientes/create', authMidd ,checkRol(), createAcudienteEstudiante)
 

 module.exports = EstudianteAcudienteRouter