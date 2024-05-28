const express = require("express");
const { createAsignaturaDocente,getAsignaturaDocente, getDocenteAsignatura } = require('../controller/asignaturas_docente.controller.js')

const AsigDocRouter = express.Router()

AsigDocRouter.get('/appi/asignaturas-docente', getAsignaturaDocente)
AsigDocRouter.get('/appi/asignaturas-docente/:id', getDocenteAsignatura)
AsigDocRouter.post('/appi/asignaturas-docente/create', createAsignaturaDocente)

module.exports = AsigDocRouter