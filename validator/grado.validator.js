

const  { check } = require('express-validator')
const  validateResult  =  require('../utils/validateResult')

exports.validateGrado = [
  
    check('nombre_grado')
    .notEmpty().withMessage('El nombre del grado no puede estar vacío')
    .isString().withMessage('El nombre del grado debe ser una cadena de texto'),
    check('descripcion')
    .optional({ checkFalsy: true }) // Este campo es opcional
    .isString().withMessage('La descripción debe ser una cadena de texto'),
    check('año_escolar')
    .notEmpty().withMessage('El año escolar no puede estar vacío')
    .isISO8601().withMessage('El año escolar debe ser una fecha válida en formato ISO 8601'),
    check('periodo_FK')
    .notEmpty().withMessage('El id del periodo no puede estar vacío')
    .isString().withMessage('El id del periodo debe ser una cadena de texto'),
    (req, res, next) => {
      validateResult(req, res, next);
  }
];