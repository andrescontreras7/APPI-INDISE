const express = require("express");
const {getEvaluaciones, createEvaluacion,updateEvaluacion,deleteEvaluacion } = require('../controller/evaluaciones.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createEvaluacionValidator, updateEvaluacionValidator} = require('../validator/evaluaciones.js')
const EvaluacionesRouter = express.Router()

 //obtener las areas
 EvaluacionesRouter.get('/appi/evaluaciones', authMidd , getEvaluaciones)
 

//crear una nueva evaluacion
EvaluacionesRouter.post("/appi/evaluaciones/create",createEvaluacionValidator, authMidd , checkRol(), createEvaluacion)

//actualizar
EvaluacionesRouter.put("/appi/evaluaciones/:codigo",updateEvaluacionValidator, authMidd , checkRol(),updateEvaluacion)

//obetener un detalle mediante el id
EvaluacionesRouter.get("/appi/evaluaciones/:codigo",authMidd , checkRol(), )


//eliminar
EvaluacionesRouter.delete("/appi/evaluaciones/delete/:codigo",authMidd , checkRol(),deleteEvaluacion)













module.exports = EvaluacionesRouter
