const { Op } = require('sequelize');
const Asistencias_estudiantes  = require("../models/asistencias_estudiantes.js");
const express = require('express')
const generateReport = require("../controller/reportes.controller.js")




const reporteRouter = express.Router()

reporteRouter.post('/appi/reporte-individual' , generateReport, )








module.exports = reporteRouter;
