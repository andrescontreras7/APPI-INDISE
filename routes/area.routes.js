const express = require("express");
const {getAreas , createArea, updateArea, getArea, deleteArea} = require('../controller/areas.controller.js')
const  authMidd  = require('../middleware/sesion.js')

const areaRouter = express.Router()

 //obtener las areas
areaRouter.get('/appi/area', authMidd , getAreas)
 

//crear una nueva area
areaRouter.post("/appi/area" ,authMidd, createArea)

//actualizar
areaRouter.put("/appi/area/:cod_area",authMidd, updateArea)

//obetener un detalle mediante el id
areaRouter.get("/appi/area/:cod_area",authMidd, getArea)


//eliminar
areaRouter.delete("/appi/area/:cod_area",authMidd, deleteArea)













module.exports = areaRouter
