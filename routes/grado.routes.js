const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createGrado , getGrados } = require("../controller/grado.controller.js")
const  {validateGrado} = require("../validator/grado.validator.js")



const gradosRoutes = express.Router();

gradosRoutes.get('/appi/grados' , authMidd, getGrados);

gradosRoutes.post('/appi/grados/create',validateGrado , authMidd, createGrado);

module.exports = gradosRoutes;