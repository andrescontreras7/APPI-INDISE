const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

const createAsignaturaDocenteValidator = [
  check('asignaturaAsigcod')
    .exists().withMessage('El código de la asignatura es requerido')
    .isNumeric().withMessage('El código de la asignatura debe ser numérico'),
  check('funcionarioFuncid')
    .exists().withMessage('El ID del funcionario es requerido')
    .isNumeric().withMessage('El ID del funcionario debe ser numérico'),
  check('grupoFK')
    .exists().withMessage('El código del grupo es requerido')
    .isNumeric().withMessage('El código del grupo debe ser numérico'),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const updateAsignaturaDocenteValidator = [
  check('asignaturaAsigcod')
    .optional()
    .isNumeric().withMessage('El código de la asignatura debe ser numérico'),
  check('funcionarioFuncid')
    .optional()
    .isNumeric().withMessage('El ID del funcionario debe ser numérico'),
  check('grupoFk')
    .optional()
    .isNumeric().withMessage('El código del grupo debe ser numérico'),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = { createAsignaturaDocenteValidator, updateAsignaturaDocenteValidator };