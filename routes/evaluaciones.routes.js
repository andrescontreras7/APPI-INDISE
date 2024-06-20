const express = require("express");
const {getEvaluaciones ,createEvaluaciones,createEvaluacion,getEvaluacionesPorGrupoAsigDocente,updateEvaluacion,getTipoEvaluaciones,getEvaluacionesPorGrupoAsig,deleteEvaluacion,getEvaluacionesPorFuncionario,getEvaluacionesPorId,getEvaluacionesEstudiantes } = require('../controller/evaluaciones.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createEvaluacionValidator, updateEvaluacionValidator} = require('../validator/evaluaciones.js')
const EvaluacionesRouter = express.Router()

 //obtener las areas
 EvaluacionesRouter.get('/appi/evaluaciones', authMidd , getEvaluaciones)
 

//crear una nueva evaluacion
EvaluacionesRouter.post("/appi/evaluaciones/create",createEvaluacionValidator, authMidd , checkRol(), createEvaluaciones)

//actualizar
EvaluacionesRouter.put("/appi/evaluaciones/:codigo",updateEvaluacionValidator, authMidd , checkRol(),updateEvaluacion)

//obetener un detalle mediante el id
EvaluacionesRouter.get("/appi/evaluaciones/:codigo",authMidd , checkRol(), getEvaluacionesPorId)

//obetener lista de tipos de evaluacion
EvaluacionesRouter.get("/appi/evaluaciones_tipos",authMidd , checkRol(), getTipoEvaluaciones)

//obetener un detalle de estudiantes que subieron la tarea por id de la tarea
EvaluacionesRouter.get("/appi/evaluaciones_estudiantes/:id_tarea",authMidd , checkRol(), getEvaluacionesEstudiantes)

//obetener actividades por id del funcionario
EvaluacionesRouter.get("/appi/evaluaciones_por_funcionario/:id_funcionario",authMidd , checkRol(), getEvaluacionesPorFuncionario)

//obetener las actividades por id de grupo y asignatura
EvaluacionesRouter.get("/appi/evaluaciones_del_estudiante/:idasig/:idgrupo",authMidd , getEvaluacionesPorGrupoAsig)

EvaluacionesRouter.get("/appi/evaluaciones_del_docente/:idasig/:idgrupo/:idfunc",authMidd , getEvaluacionesPorGrupoAsigDocente)



//eliminar
EvaluacionesRouter.delete("/appi/evaluaciones/delete/:codigo",authMidd , checkRol(),deleteEvaluacion)













module.exports = EvaluacionesRouter
