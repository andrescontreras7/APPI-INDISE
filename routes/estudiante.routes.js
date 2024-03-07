const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const { getEstudiantes, createEstudiante, getEstudiante, deleteEstudiante, updateEstudiante } = require('../controller/estudiante.controller.js');
const loginAuth = require("../controller/loginAuth.controller.js")
const estudianteRouter = express.Router()


estudianteRouter.get("/appi/estudiante", authMidd,  getEstudiantes)

estudianteRouter.get("/appi/estudiante/:estudid" , authMidd, getEstudiante)

estudianteRouter.post("/appi/estudiante" , authMidd, checkRol(),  createEstudiante)






estudianteRouter.delete("/appi/estudiante/:estudid" , authMidd , checkRol(), deleteEstudiante)

estudianteRouter.put("/appi/estudiante/:estudid", authMidd, checkRol(), updateEstudiante )



module.exports = estudianteRouter