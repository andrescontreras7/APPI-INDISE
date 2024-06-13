const { check } = require('express-validator');
const validateResult = require('../utils/validateResult');

const createStudentValidator = [
  check('estudid').exists().withMessage("El campo 'estudid' es obligatorio.").isInt().withMessage("El campo 'estudid' debe ser un número entero."),
  check('estudnombre').exists().withMessage("El campo 'estudnombre' es obligatorio.").notEmpty().withMessage("El campo 'estudnombre' no puede estar vacío."),
  check('estudapellido').exists().withMessage("El campo 'estudapellido' es obligatorio.").notEmpty().withMessage("El campo 'estudapellido' no puede estar vacío."),
  check('estuddireccion').exists().withMessage("El campo 'estuddireccion' es obligatorio.").notEmpty().withMessage("El campo 'estuddireccion' no puede estar vacío."),
  check('estudcorreo').exists().withMessage("El campo 'estudcorreo' es obligatorio.").isEmail().withMessage("El campo 'estudcorreo' debe ser una dirección de correo electrónico válida."),
  check('estudtelefono').exists().withMessage("El campo 'estudtelefono' es obligatorio.").isInt().withMessage("El campo 'estudtelefono' debe ser un número entero."),
  check('rol').exists().withMessage("El campo 'rol' es obligatorio.").isInt().withMessage("El campo 'rol' debe ser un número entero."),
  check('grupoFK').exists().withMessage("El campo 'grupoFK' es obligatorio.").isInt().withMessage("El campo 'grupoFK' debe ser un número entero."),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const updateStudentValidator = [
    check('estudnombre').optional().notEmpty().withMessage("El campo 'estudnombre' no puede estar vacío."),
    check('estudapellido').optional().notEmpty().withMessage("El campo 'estudapellido' no puede estar vacío."),
    check('estuddireccion').optional().notEmpty().withMessage("El campo 'estuddireccion' no puede estar vacío."),
    check('estudcorreo').optional().isEmail().withMessage("El campo 'estudcorreo' debe ser una dirección de correo electrónico válida."),
    check('estudtelefono').optional().isInt().withMessage("El campo 'estudtelefono' debe ser un número entero."),
    check('rol').optional().isInt().withMessage("El campo 'rol' debe ser un número entero."),
    check('grupoFK').optional().isInt().withMessage("El campo 'grupoFK' debe ser un número entero."),
    check('acudienteFK').optional().isInt().withMessage("El campo 'acudienteFK' debe ser un número entero."),
    check('tok').optional().isInt().withMessage("El campo 'tok' debe ser un número entero."),
    check('activo').optional().isBoolean().withMessage("El campo 'activo' debe ser un booleano."),
    (req, res, next) => {
      validateResult(req, res, next);
    }
  ];
  
 

module.exports = { createStudentValidator, updateStudentValidator };