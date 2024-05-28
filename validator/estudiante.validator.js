const  { check } = require('express-validator')
const  validateResult  =  require('../utils/validateResult')

exports.estudianteValidator = [
  check('estudid').isInt().withMessage("El campo 'estudid' debe ser un número entero."),
  
  check('estudnombre').notEmpty().withMessage("El campo 'estudnombre' no puede estar vacío."),
  check('estudapellido').notEmpty().withMessage("El campo 'estudapellido' no puede estar vacío."),
  check('estuddireccion').notEmpty().withMessage("El campo 'estuddireccion' no puede estar vacío."),
  check('estudcorreo').isEmail().withMessage("El campo 'estudcorreo' debe ser una dirección de correo electrónico válida."),
  check('estudtelefono').isInt().withMessage("El campo 'estudtelefono' debe ser un número entero.") .notEmpty().withMessage("El campo 'estudtelefono' no puede estar vacío."),
  check('grupoFK').notEmpty().withMessage("El campo 'grupoFK' no puede estra vacio."),
  check('password').notEmpty().withMessage("El campo 'password' no puede estar vacío."),
  
  (req, res, next) => {
    validateResult(req, res, next);
  }
];