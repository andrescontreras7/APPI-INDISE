const express = require("express");
const { createAsignaturaDocente,getAsignaturaDocente, getDocenteAsignatura,getGroup, getAll, getGroupAll } = require('../controller/asignaturas_docente.controller.js')
const {createAsignaturaDocenteValidator, updateAsignaturaDocenteValidator} = require('../validator/asignatura_docente.js')
const AsigDocRouter = express.Router()

AsigDocRouter.get('/appi/asignaturas-docente', getAsignaturaDocente)
AsigDocRouter.get('/appi/asignaturas-docente/all', getAll)
AsigDocRouter.get('/appi/asignaturas-docente/:id', getDocenteAsignatura)
AsigDocRouter.get('/appi/asignaturas-docente/grupo/:id/:asigcod', getGroup)
AsigDocRouter.get('/appi/asignaturas-docente/grupo/:id/:asigcod/:grupoFK', getGroupAll)
AsigDocRouter.post('/appi/asignaturas-docente/create',createAsignaturaDocenteValidator, createAsignaturaDocente)

module.exports = AsigDocRouter