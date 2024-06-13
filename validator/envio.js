const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

exports.createEnvioValidator = [
  check('id_estudiante')
    .exists().withMessage('id_estudiante es requerido')
    .notEmpty()
    .withMessage('El campo \'id_estudiante\' no puede estar vacío')
    .isNumeric()
    .withMessage('El campo \'id_estudiante\' debe ser un número'),
  check('id_tarea')
    .exists().withMessage('id_tarea es requerido')
    .notEmpty()
    .withMessage('El campo \'id_tarea\' no puede estar vacío'),
  check('fec_envio')
  .exists().withMessage('fec_envio es requerido')
    .notEmpty()
    .withMessage('El campo \'fec_envio\' no puede estar vacío'),
    
  check('url')
    .notEmpty()
    .optional()
    .withMessage('El campo \'url\' no puede estar vacío'),
 
  check('descripcion')
    .exists().withMessage('descripcion es requerido')
    .notEmpty()
    .withMessage('El campo \'descripcion\' no puede estar vacío')
    .isLength({ max: 20 })
    .withMessage('El campo \'descripcion\' no puede tener más de 20 caracteres'),
  check('nota')
   .exists().withMessage('nota es requerido')
    .notEmpty()
    .withMessage('El campo \'nota\' no puede estar vacío'),


  (req, res, next) => {
    validateResult(req, res, next);
  },
];

exports.updateEnvioValidator = [
  check('id_estudiante')
    .optional()
    .notEmpty()
    .withMessage('El campo \'id_estudiante\' no puede estar vacío')
    .isNumeric()
    .withMessage('El campo \'id_estudiante\' debe ser un número'),
  check('id_tarea')
    .optional()
    .notEmpty()
    .withMessage('El campo \'id_tarea\' no puede estar vacío'),
  check('fec_envio')
    .optional()
    .notEmpty()
    .withMessage('El campo \'fec_envio\' no puede estar vacío')
    .isDate()
    .withMessage('El campo \'fec_envio\' debe ser una fecha válida'),
  check('url')
    .optional()
    .notEmpty()
    .withMessage('El campo \'url\' no puede estar vacío'),
   
  check('descripcion')
    .optional()
    .notEmpty()
    .withMessage('El campo \'descripcion\' no puede estar vacío')
    .isLength({ max: 20 })
    .withMessage('El campo \'descripcion\' no puede tener más de 20 caracteres'),
  check('nota')
    .optional()
    .notEmpty()
    .withMessage('El campo \'nota\' no puede estar vacío'),
  
  (req, res, next) => {
    validateResult(req, res, next);
  },
];