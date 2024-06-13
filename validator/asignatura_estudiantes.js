const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

exports.asignaturaEstudianteValidator = [
  check('estudianteId')
    .exists().withMessage("El campo 'estudianteId' es requerido.")
    .isInt()
    .withMessage("El campo 'estudianteId' debe ser un número entero."),
  check('asignaturaId')
   .exists().withMessage("El campo 'asignaturaId' es requerido.")
    .isInt()
    .withMessage("El campo 'asignaturaId' debe ser un número entero."),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

exports.updateAsignaturaEstudianteValidator = [

  check('estudianteId')
    .optional()
    .isInt().withMessage("El campo 'estudianteId' debe ser un número entero.")
    .withMessage("El campo 'estudianteId' debe ser un número entero."),
  check('asignaturaId')
    .optional()
    .isInt()
    .withMessage("El campo 'asignaturaId' debe ser un número entero."),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

