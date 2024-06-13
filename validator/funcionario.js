const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

const createValidator = [
  check('funcid').exists().withMessage("el campo funcid es requerido").isInt().withMessage("El campo 'funcid' debe ser un número entero."),
  check('funcnombre').exists().isLength({ min: 2 }).withMessage("El campo 'funcnombre' debe tener al menos 2 caracteres."),
  check('funcapellido').exists().isLength({ min: 2 }).withMessage("El campo 'funcapellido' debe tener al menos 2 caracteres."),
  check('funccorreo').exists().isEmail().withMessage("El campo 'funccorreo' debe ser un correo válido."),
  check('funcrol').exists().isLength({ min: 2 }).withMessage("El campo 'funcrol' debe tener al menos 2 caracteres."),
  check('jefe_areaFK').exists().isInt().withMessage("El campo 'jefe_areaFK' debe ser un número entero."),
  check('passwordFuncionario').exists().isLength({ min: 6 }).withMessage("La contraseña del funcionario debe tener al menos 6 caracteres."),
  check('telefono').exists().isNumeric().withMessage("El número de teléfono debe ser numérico."),
  check('rolFK').exists().isInt().withMessage("El campo 'rolFK' debe ser un número entero."),
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