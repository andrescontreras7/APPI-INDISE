
const  { check } = require('express-validator')
const  validateResult  =  require('../utils/validateResult')


exports.validatePeriodo = [
    check('periodo_nombre')
    .notEmpty().withMessage('El nombre del periodo no puede estar vacío')
    .isString().withMessage('El nombre del periodo debe ser una cadena de texto'),
    check('fecha_inicio')
    .notEmpty().withMessage('La fecha de inicio no puede estar vacía'),
    check('fecha_fin')
    .notEmpty().withMessage('La fecha fin no puede estar vacía') ,
 
    (req, res, next) => {
      validateResult(req, res, next);
  }
];