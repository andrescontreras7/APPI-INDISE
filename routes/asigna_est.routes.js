const express = require("express");
const { getAllInformation, getInformationById, getAsignaturasByEstudianteId} = require('../controller/asig_est.controller')

const asigEstudiantes = express.Router()

asigEstudiantes.get('/appi/asignaturas-estudiantes', getAllInformation)
asigEstudiantes.get('/appi/asignaturas-estudiantes/:id', getInformationById)
asigEstudiantes.get('/appi/asignaturas-estudiantes/All-estudiantes/:estudid',getAsignaturasByEstudianteId)



module.exports = asigEstudiantes