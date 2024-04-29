const express = require("express");
const  {getGrupoEstudiantes, createGrupoEstudiante} = require('../controller/grupo-estudiantes.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")

const grupo_estudiante = express.Router()

 //obtener las areas
 grupo_estudiante.get('/appi/Grupo-estudiantes', authMidd ,checkRol(), getGrupoEstudiantes)
 grupo_estudiante.post('/appi/Grupo-estudiantes/create', authMidd ,checkRol(), createGrupoEstudiante)
 

 module.exports = grupo_estudiante