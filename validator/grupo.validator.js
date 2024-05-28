const  { check } = require('express-validator')
const  validateResult  =  require('../utils/validateResult')

exports.grupoValidator = [
  check('grupcod').notEmpty().withMessage("El campo 'grupcod' no puede estar vacío.").isInt().withMessage("El campo 'grupcod' debe ser un número entero."),
  check('grado_FK').notEmpty().withMessage("El campo 'grado_FK' no puede estar vacío.").isInt().withMessage("El campo 'grado_FK' debe ser un número entero."),
  check('grupsalon').notEmpty().withMessage("El campo 'grupsalon' no puede estar vacío."),
  check('directorFK').notEmpty().withMessage("El campo 'directorFK' no puede estar vacío.").isInt().withMessage("El campo 'directorFK' debe ser un número entero."),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];