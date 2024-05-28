const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

exports.excusaValidator = [

  check('fec_reg_exc').notEmpty().withMessage("El campo 'fec_reg_exc' no puede estar vacío y debe ser una fecha válida."),
  
  check('mot_reg_exc').notEmpty().withMessage("El campo 'mot_reg_exc' no puede estar vacío."),
  
  check('id_persona').isInt().notEmpty().withMessage("El campo 'id_persona' no puede estar vacío y debe ser un número entero."),
  
  
  
  (req, res, next) => {
    validateResult(req, res, next);
  }
]