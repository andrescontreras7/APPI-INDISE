const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createPeriodos , getPeriodos } = require("../controller/periodos.controller.js")
const  {validatePeriodo} = require("../validator/periodo.js")



const periodosRoutes = express.Router();

periodosRoutes.post('/appi/periodos',validatePeriodo , authMidd, getPeriodos);

periodosRoutes.post('/appi/periodos/create',validatePeriodo , authMidd, createPeriodos);

module.exports = periodosRoutes;