const express = require("express");
const {getAreas , createArea, updateArea, getArea, deleteArea} = require('../controller/areas.controller.js')
const  authMidd  = require('../middleware/sesion.js')
const {createAreaValidator, updateAreaValidator} = require('../validator/area.js')

const areaRouter = express.Router()


areaRouter.get('/appi/area', authMidd , getAreas)
 


areaRouter.post("/appi/area", createAreaValidator,authMidd, createArea)


areaRouter.put("/appi/area/:cod_area",updateAreaValidator, authMidd, updateArea)

areaRouter.get("/appi/area/:cod_area",authMidd, getArea)


//eliminar
areaRouter.delete("/appi/area/:cod_area",authMidd, deleteArea)













module.exports = areaRouter
