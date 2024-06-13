const  { check } = require('express-validator')
const  validateResult  =  require('../utils/validateResult')

exports.passwordReset = [
  check('email').isString().withMessage("El campo 'Email' debe ser un string.")
  .exists().withMessage("El campo 'Email' debe ser proporcionado.")
  .isEmail().withMessage("El campo 'Email' debe ser una dirección de correo electrónico válida."),
  
  
  (req, res, next) => {
    validateResult(req, res, next);
  }
];