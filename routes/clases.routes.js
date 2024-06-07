const {getClases, getAttendancePercentage, getAllASig} = require('../controller/clases.controller');
const express = require('express');


const clasesRouter = express.Router();

clasesRouter.get('/appi/clases/getAll', getClases)
clasesRouter.post('/appi/clases/porcentaje',getAttendancePercentage )
clasesRouter.get('/appi/clases/porcentaje-asignaturas/:asig',getAllASig)


module.exports = clasesRouter