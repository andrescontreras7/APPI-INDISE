const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createStudentValidator,updateStudentValidator } = require('../validator/estudiante.js')
const { getEstudiantes, createEstudiante, getEstudiante, getNotaEstudiante, deleteEstudiante, updateEstudiante, getAllInformation } = require('../controller/estudiante.controller.js');
const estudianteRouter = express.Router()


estudianteRouter.get("/appi/estudiante",authMidd, checkRol() ,  getEstudiantes)
estudianteRouter.get("/appi/estudiante/:estudid",authMidd,  getEstudiante)

estudianteRouter.post("/appi/estudiante/create",createStudentValidator, authMidd , checkRol(), createEstudiante)
estudianteRouter.post("/appi/validate/cuenta/:token")
estudianteRouter.get("/appi/estudiante/informacion", authMidd, getAllInformation)
estudianteRouter.get("/appi/estudiante/notas/:estudianteId", authMidd, getNotaEstudiante)






estudianteRouter.delete("/appi/estudiante/:estudid" , authMidd , checkRol(), deleteEstudiante)

estudianteRouter.put("/appi/estudiante/update/:estudid",updateStudentValidator, authMidd, checkRol(), updateEstudiante )



module.exports = estudianteRouter