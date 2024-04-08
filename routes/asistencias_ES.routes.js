const express = require('express');
const {getAsistencias_E} = require("../controller/asistencias_ES.controller")
const asistenciasRouter = express.Router();


asistenciasRouter.get("/appi/asistenciaEstudiantes", getAsistencias_E   )



module.exports = asistenciasRouter;