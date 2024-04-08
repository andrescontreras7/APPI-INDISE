const express = require("express");
const {getEvaluaciones ,createEvaluaciones,deletedEvaluaciones } = require('../controller/evaluaciones.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const EvaluacionesRouter = express.Router()

 //obtener las areas
 EvaluacionesRouter.get('/appi/evaluaciones', authMidd , getEvaluaciones)
 

//crear una nueva evaluacion
EvaluacionesRouter.post("/appi/evaluaciones/create" ,authMidd , checkRol(), createEvaluaciones)

//actualizar
EvaluacionesRouter.put("/appi/evaluaciones/:codigo", authMidd , checkRol(),)

//obetener un detalle mediante el id
EvaluacionesRouter.get("/appi/evaluaciones/:codigo",authMidd , checkRol(), )


//eliminar
EvaluacionesRouter.delete("/appi/evaluaciones/delete/:codigo",authMidd , checkRol(),deletedEvaluaciones)













module.exports = EvaluacionesRouter
