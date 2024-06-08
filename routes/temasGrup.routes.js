const express = require("express");
const { getTemasGrupos, createTemaGrupo  } = require('../controller/tematicas-grupo.controller')


const TemasGrup = express.Router()

TemasGrup.get('/appi/Tematicas-grupos', getTemasGrupos )
TemasGrup.post('/appi/Tematicas-grupos/create', createTemaGrupo )




module.exports = TemasGrup