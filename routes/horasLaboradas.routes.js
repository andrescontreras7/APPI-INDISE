const express = require("express");
const {getHoras} = require('../controller/HorasL.controller.js')
const  authMidd  = require('../middleware/sesion.js')

const horasRouter = express.Router()

 //obtener las horas registradas
 horasRouter.get('/appi/horas', authMidd , getHoras)
 













module.exports = horasRouter
