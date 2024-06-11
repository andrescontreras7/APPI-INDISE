const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createGrado , getGrados, getGrado, updateGrado } = require("../controller/grado.controller.js")
const  {createGradoValidator, updateGradoValidator} = require("../validator/grado.validator.js")



const gradosRoutes = express.Router();

gradosRoutes.get('/appi/grados' , authMidd, checkRol(), getGrados);

gradosRoutes.post('/appi/grados/create',createGradoValidator , authMidd,checkRol(), createGrado);

gradosRoutes.put('/appi/grados/detalle/:id' , authMidd, checkRol(),getGrado);
gradosRoutes.put('/appi/grados/update/:id',updateGradoValidator , authMidd, checkRol(),updateGrado);

module.exports = gradosRoutes;