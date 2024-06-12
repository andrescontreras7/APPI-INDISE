const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const { getEnvio,updateEnvioNota,createTarea,getEvaluacionesPorEstudiante} = require("../controller/envio_tarea.controller.js")
const enviosRouter = express.Router();


enviosRouter.get("/appi/tarea-send", getEnvio  )
enviosRouter.get("/appi/tarea-send/:id_estudiante/:idasig/:idgrupo", getEvaluacionesPorEstudiante  )
enviosRouter.post("/appi/tarea-send/create", authMidd, createTarea   )

//actualizar nota
enviosRouter.put("/appi/tarea-send/:uid", authMidd , checkRol(), updateEnvioNota)




module.exports = enviosRouter;