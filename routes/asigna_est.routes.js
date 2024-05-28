const express = require("express");
const { getAllInformation, getInformationById } = require('../controller/asig_est.controller')

const asigEstudiantes = express.Router()

asigEstudiantes.get('/appi/asignaturas-estudiantes', getAllInformation)
asigEstudiantes.get('/appi/asignaturas-estudiantes/:id', getInformationById)


module.exports = asigEstudiantes