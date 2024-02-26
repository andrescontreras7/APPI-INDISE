const express = require('express')
const { getAsignaturas, createAsignaturas, deleteAsignaturas, updateAsignaturas } = require("../controller/asignaturas.controller.js")
const { updateArea } = require('../controller/areas.controller.js')
const router = express.Router()


//obtener listado de asignaturas
router.get("/" ,getAsignaturas )


//crear una asignatura
router.post("/", createAsignaturas)


//eliminar asignatura
router.delete("/:asigcod" ,deleteAsignaturas)

//actualizar una asignatura
router.put("/:asigcod", updateAsignaturas)

module.exports = router
