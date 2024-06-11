const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

exports.createEvaluacionValidator = [
  check('descripcion')
    .notEmpty()
    .withMessage('El campo \'descripcion\' no puede estar vacío'),
  check('url')
    .notEmpty()
    .withMessage('El campo \'url\' no puede estar vacío'),
  check('id_grupoFk')
    .notEmpty()
    .withMessage('El campo \'id_grupoFk\' no puede estar vacío'),
  check('id_asignatura')
    .notEmpty()
    .withMessage('El campo \'id_asignatura\' no puede estar vacío'),
  check('id_funcionario')
    .notEmpty()
    .withMessage('El campo \'id_funcionario\' no puede estar vacío'),
  check('fec_entre')
    .notEmpty()
    .withMessage('El campo \'fec_entre\' no puede estar vacío'),
  check('tipo_eva')
    .notEmpty()
    .withMessage('El campo \'tipo_eva\' no puede estar vacío'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

exports.updateEvaluacionValidator = [
  check('descripcion')
    .optional()
    .notEmpty()
    .withMessage('El campo \'descripcion\' no puede estar vacío'),
  check('url')
    .optional()
    .notEmpty()
    .withMessage('El campo \'url\' no puede estar vacío'),
  check('id_grupoFk')
    .optional()
    .notEmpty()
    .withMessage('El campo \'id_grupoFk\' no puede estar vacío'),
  check('id_asignatura')
    .optional()
    .notEmpty()
    .withMessage('El campo \'id_asignatura\' no puede estar vacío'),
  check('id_funcionario')
    .optional()
    .notEmpty()
    .withMessage('El campo \'id_funcionario\' no puede estar vacío'),
  check('fec_entre')
    .optional()
    .notEmpty()
    .withMessage('El campo \'fec_entre\' no puede estar vacío'),
  check('tipo_eva')
    .optional()
    .notEmpty()
    .withMessage('El campo \'tipo_eva\' no puede estar vacío'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];