const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

const createAreaValidator = [
 
  check('are_nombre')
    .exists().withMessage("El campo 'area_nombre' es requerido.")
    .notEmpty().withMessage("El campo 'area_nombre' no puede estar vacío.")
    .isLength({ max: 20 }).withMessage("El campo 'area_nombre' no puede tener más de 20 caracteres."),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const updateAreaValidator = [
 
  check('are_nombre')
    .optional()
    .notEmpty().withMessage("El campo 'area_nombre' no puede estar vacío.")
    .isLength({ max: 10 }).withMessage("El campo 'area_nombre' no puede tener más de 10 caracteres."),
 
  (req, res, next) => {
    validateResult(req, res, next);
  }  
];

module.exports = { createAreaValidator, updateAreaValidator };