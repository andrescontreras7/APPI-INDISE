const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {getAsistencias_E, getFilterGrupo} = require("../controller/asistencias_ES.controller")
const asistenciasRouter = express.Router();


asistenciasRouter.get("/appi/asistenciaEstudiantes",    authMidd, checkRol(), getAsistencias_E   )
asistenciasRouter.post("/appi/asistenciaEstudiantes/fillter-grupo/:grupcod", getFilterGrupo   )



module.exports = asistenciasRouter;