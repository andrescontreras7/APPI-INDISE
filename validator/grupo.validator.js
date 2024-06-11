const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

exports.grupoValidator = [
  check('grado_FK')
    .notEmpty().withMessage("El campo 'grado_FK' no puede estar vacío.")
    .isInt().withMessage("El campo 'grado_FK' debe ser un número entero."),
  check('grupsalon')
    .notEmpty().withMessage("El campo 'grupsalon' no puede estar vacío.")
    .isLength({ max: 10 }).withMessage("El campo 'grupsalon' no puede tener más de 10 caracteres."),
  check('directorFK')
    .notEmpty().withMessage("El campo 'directorFK' no puede estar vacío.")
    .isInt().withMessage("El campo 'directorFK' debe ser un número entero."),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

exports.updateGrupoValidator = [
  check('grado_FK')
    .optional()
    .notEmpty().withMessage("El campo 'grado_FK' no puede estar vacío.")
    .isInt().withMessage("El campo 'grado_FK' debe ser un número entero."),
  check('grupsalon')
    .optional()
    .notEmpty().withMessage("El campo 'grupsalon' no puede estar vacío.")
    .isLength({ max: 10 }).withMessage("El campo 'grupsalon' no puede tener más de 10 caracteres."),
  check('directorFK')
    .optional()
    .notEmpty().withMessage("El campo 'directorFK' no puede estar vacío.")
    .isInt().withMessage("El campo 'directorFK' debe ser un número entero."),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];