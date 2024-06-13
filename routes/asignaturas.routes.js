const express = require('express')
const { getAsignaturas, getAsignatura, createAsignaturas, deleteAsignaturas, updateAsignaturas } = require("../controller/asignaturas.controller.js")
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {validateAsignaturaCreation, validateAsignaturaUpdate} = require("../validator/asignaturas.js")

const asignaturasRoutes = express.Router()


//obtener listado de asignaturas
asignaturasRoutes.get("/appi/asignaturas",authMidd ,  getAsignaturas )


//crear una asignatura
asignaturasRoutes.post("/appi/asignaturas/create",validateAsignaturaCreation,  authMidd,  createAsignaturas)


//eliminar asignatura
asignaturasRoutes.delete("/appi/asignaturas/:asigcod",authMidd ,deleteAsignaturas)

//actualizar una asignatura
asignaturasRoutes.put("/appi/asignaturas/update/:asigcod",validateAsignaturaUpdate, authMidd, updateAsignaturas)

module.exports = asignaturasRoutes
