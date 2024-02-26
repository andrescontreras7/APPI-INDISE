const express = require('express');
const { getEstudiantes, createEstudiante, getEstudiante, deleteEstudiante, updateEstudiante } = require('../controller/estudiante.controller.js');
const router = express.Router();

router.get("/" , getEstudiantes)

router.get("/:estudid" , getEstudiante)

router.post("/" , createEstudiante)


router.delete("/:estudid" , deleteEstudiante)

router.put("/:id", updateEstudiante )



module.exports = router