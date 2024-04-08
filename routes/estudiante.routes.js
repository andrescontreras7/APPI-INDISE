const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const { getEstudiantes, createEstudiante, getEstudiante, deleteEstudiante, updateEstudiante, validateEmail } = require('../controller/estudiante.controller.js');
const estudianteRouter = express.Router()


estudianteRouter.get("/appi/estudiante", authMidd, checkRol(),  getEstudiantes)

estudianteRouter.get("/appi/estudiante/:estudid" , authMidd, getEstudiante)

estudianteRouter.post("/appi/estudiante", authMidd , checkRol(), createEstudiante)


estudianteRouter.post("/appi/validate/cuenta/:token" , validateEmail)








estudianteRouter.delete("/appi/estudiante/:estudid" , authMidd , checkRol(), deleteEstudiante)

estudianteRouter.put("/appi/estudiante/:estudid", authMidd, checkRol(), updateEstudiante )



module.exports = estudianteRouter