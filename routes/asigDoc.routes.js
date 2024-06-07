const express = require("express");
const { createAsignaturaDocente,getAsignaturaDocente, getDocenteAsignatura,getGroup, getAll } = require('../controller/asignaturas_docente.controller.js')

const AsigDocRouter = express.Router()

AsigDocRouter.get('/appi/asignaturas-docente', getAsignaturaDocente)
AsigDocRouter.get('/appi/asignaturas-docente/all', getAll)
AsigDocRouter.get('/appi/asignaturas-docente/:id', getDocenteAsignatura)
AsigDocRouter.get('/appi/asignaturas-docente/grupo/:id/:asigcod', getGroup)
AsigDocRouter.post('/appi/asignaturas-docente/create', createAsignaturaDocente)

module.exports = AsigDocRouter