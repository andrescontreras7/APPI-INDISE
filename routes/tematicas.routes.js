const express = require("express");
const { getTematica, createTematica, updateTematica, deleteTematica, getTematicaByAsignatura } = require('../controller/tematicas.controller')
const  {createValidator, updateValidator} = require ('../validator/tematicas.js') 

const Temas = express.Router()

Temas.get('/appi/Tematicas', getTematica )
Temas.get('/appi/Tematicas/:id', )
Temas.post('/appi/Tematicas/create', createValidator, createTematica )
Temas.put('/appi/Tematicas/update/:id', updateValidator, updateTematica )
Temas.delete('/appi/Tematicas/delete/:id', deleteTematica )
Temas.get('/appi/Tematicas-grupos/:asigcod/:docId/:grupCod', getTematicaByAsignatura )



module.exports = Temas