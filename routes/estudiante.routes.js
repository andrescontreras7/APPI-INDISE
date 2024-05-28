const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {estudianteValidator} = require('../validator/estudiante.validator.js')
const { getEstudiantes, createEstudiante, getEstudiante, deleteEstudiante, updateEstudiante, getAllInformation } = require('../controller/estudiante.controller.js');
const estudianteRouter = express.Router()


estudianteRouter.get("/appi/estudiante",authMidd, checkRol() ,  getEstudiantes)
estudianteRouter.post("/appi/estudiante/create",estudianteValidator, authMidd , checkRol(), createEstudiante)
estudianteRouter.post("/appi/validate/cuenta/:token")
estudianteRouter.get("/appi/estudiante/informacion" , authMidd, getAllInformation)






estudianteRouter.delete("/appi/estudiante/:estudid" , authMidd , checkRol(), deleteEstudiante)

estudianteRouter.put("/appi/estudiante/:estudid", authMidd, checkRol(), updateEstudiante )



module.exports = estudianteRouter