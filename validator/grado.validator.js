const {check} = require('express-validator')
const validateResult = require('../utils/validateResult');

const createGradoValidator = [
    check('nombre_grado').notEmpty().withMessage("El campo 'nombre_grado' no puede estar vacío."),
    check('descripcion').optional().isString().withMessage("El campo 'descripcion' debe ser una cadena de texto."),
    check('año_escolar').isISO8601().withMessage("El campo 'año_escolar' debe ser una fecha ISO8601 válida."),
    check('periodo_FK').notEmpty().withMessage("El campo 'periodo_FK' no puede estar vacío."),
  
    (req, res, next) => {
      validateResult(req, res, next);
    }
];

const updateGradoValidator = [
    check('nombre_grado').optional().isString().withMessage("El campo 'nombre_grado' debe ser una cadena de texto."),
    check('descripcion').optional().isString().withMessage("El campo 'descripcion' debe ser una cadena de texto."),
    check('año_escolar').optional().isISO8601().withMessage("El campo 'año_escolar' debe ser una fecha ISO8601 válida."),
    check('periodo_FK').optional().isString().withMessage("El campo 'periodo_FK' debe ser una cadena de texto."),
    (req, res, next) => {
      validateResult(req, res, next);
    }  
];

module.exports = { createGradoValidator, updateGradoValidator };