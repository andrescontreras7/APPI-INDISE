const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

const createValidator = [
  check('funcid').notEmpty().withMessage("El campo 'funcid' no puede estar vacío."),
  check('funcnombre').notEmpty().withMessage("El campo 'funcnombre' no puede estar vacío."),
  check('funcapellido').notEmpty().withMessage("El campo 'funcapellido' no puede estar vacío."),
  check('funccorreo').isEmail().withMessage("El campo 'funccorreo' debe ser un correo válido."),
  check('funcrol').notEmpty().withMessage("El campo 'funcrol' no puede estar vacío."),
  check('jefe_areaFK').isInt().withMessage("El campo 'jefe_areaFK' debe ser un número entero."),
  check('passwordFuncionario').notEmpty().withMessage("La contraseña del funcionario es requerida."),
  check('telefono').isNumeric().withMessage("El número de teléfono debe ser numérico."),
  check('rolFK').isInt().withMessage("El campo 'rolFK' debe ser un número entero."),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];



const updateValidator = [
  check('funcnombre').optional().notEmpty().withMessage("El campo 'funcnombre' no puede estar vacío."),
  check('funcapellido').optional().notEmpty().withMessage("El campo 'funcapellido' no puede estar vacío."),
  check('funccorreo').optional().isEmail().withMessage("El campo 'funccorreo' debe ser un correo válido."),
  check('funcrol').optional().notEmpty().withMessage("El campo 'funcrol' no puede estar vacío."),
  check('jefe_areaFK').optional().isInt().withMessage("El campo 'jefe_areaFK' debe ser un número entero."),
  check('passwordFuncionario').optional().notEmpty().withMessage("La contraseña del funcionario es requerida."),
  check('telefono').optional().isNumeric().withMessage("El número de teléfono debe ser numérico."),
  check('rolFK').optional().isInt().withMessage("El campo 'rolFK' debe ser un número entero."),
  check('activo').optional().isBoolean().withMessage("El campo 'activo' debe ser un booleano."),
  check('updatedAt').optional().isISO8601().withMessage("El campo 'updatedAt' debe ser una fecha ISO8601 válida."),
  (req, res, next) => {
    validateResult(req, res, next);
  }  
];

module.exports = { createValidator, updateValidator };



