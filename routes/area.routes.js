const express = require("express");
const {getAreas , createArea, updateArea, getArea, deleteArea} = require('../controller/areas.controller.js')
const router = express.Router()



 //obtener las areas
router.get("/" , getAreas)
 

//crear una nueva area
router.post("/" , createArea)

//actualizar
router.put("/:cod_area", updateArea)

//obetener un detalle mediante el id
router.get("/:cod_area", getArea)


//eliminar
router.delete("/:cod_area", deleteArea)













module.exports = router
