const express = require('express');
const { excusaValidator } = require('../validator/excusas.validator');
const { getExcusas, getExcusaDetail, createExcusas, deletedExcusas, updateExcusa } = require("../controller/excusa.controller");
const RouterExcusa = express.Router();
RouterExcusa.get('/appi/excusas', getExcusas);
RouterExcusa.post('/appi/excusas/create', excusaValidator, createExcusas);
RouterExcusa.delete('/appi/excusas/eliminar/:cod_exc', deletedExcusas);
RouterExcusa.get('/appi/excusas/detalles/:cod_exc', excusaValidator, getExcusaDetail);
RouterExcusa.put('/appi/excusas/actualizar/:cod_exc', excusaValidator, updateExcusa);
module.exports = RouterExcusa;