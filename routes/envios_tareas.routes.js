const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const { getEnvio, createEnvio, updateEnvio} = require("../controller/envio_tarea.controller.js")
const {createEnvioValidator, updateEnvioValidator} = require("../validator/envio.js")
const enviosRouter = express.Router();


enviosRouter.get("/appi/tarea-send", authMidd,getEnvio  )
enviosRouter.post("/appi/tarea-send/create",createEnvioValidator ,authMidd,createEnvio   )
enviosRouter.put("/appi/tarea-send/update/:id",updateEnvioValidator ,authMidd,updateEnvio   )



module.exports = enviosRouter;