const express = require("express");
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js") 
const { getAllInformation, getInformationById, getAsignaturasByEstudianteId,createAsignaturaEstudiante,
    updateAsignaturaEstudiante, deleteAsignaturaEstudiante
} = require('../controller/asig_est.controller')
const {asignaturaEstudianteValidator,updateAsignaturaEstudianteValidator} = require('../validator/asignatura_estudiantes')
const asigEstudiantes = express.Router()

asigEstudiantes.get('/appi/asignaturas-estudiantes',authMidd, checkRol(), getAllInformation)
asigEstudiantes.get('/appi/asignaturas-estudiantes/:id', authMidd, checkRol() ,getInformationById)
asigEstudiantes.get('/appi/asignaturas-estudiantes/details-estudents/:estudid',authMidd,getAsignaturasByEstudianteId)
asigEstudiantes.post('/appi/asignaturas-estudiantes/create',asignaturaEstudianteValidator,authMidd, checkRol(), createAsignaturaEstudiante)
asigEstudiantes.put('/appi/asignaturas-estudiantes/update/:id',updateAsignaturaEstudianteValidator,authMidd, checkRol(),updateAsignaturaEstudiante)
asigEstudiantes.delete('/appi/asignaturas-estudiantes/delete/:id',authMidd, checkRol(),deleteAsignaturaEstudiante)



module.exports = asigEstudiantes