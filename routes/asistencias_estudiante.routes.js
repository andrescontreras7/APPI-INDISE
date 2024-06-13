const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const  { createAsistenciaValidator } = require ("../validator/asistencias_estudiantes.js")
const {getAsistencias_E, getFilterGrupo, createAsistencia_E, getAsistenciasPorGrupoYAsignatura} = require("../controller/asistencias_ES.controller")
const asistenciasRouter = express.Router();


asistenciasRouter.get("/appi/asistenciaEstudiantes",    authMidd, checkRol(), getAsistencias_E   )
asistenciasRouter.put("/appi/asistenciaEstudiantes/fillter-grupo/:grupcod", getFilterGrupo   )
asistenciasRouter.post("/appi/asistenciaEstudiantes/create",createAsistenciaValidator, createAsistencia_E   )
asistenciasRouter.put("/appi/asistenciaEstudiantes/getAll/:asigcod/:grupcod", getAsistenciasPorGrupoYAsignatura   )



module.exports = asistenciasRouter;