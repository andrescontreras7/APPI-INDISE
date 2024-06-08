const { check } = require('express-validator');
const { validationResult } = require('express-validator');

const createValidator = [
  check('titulo').notEmpty().withMessage("El campo 'titulo' no puede estar vacío."),
  check('descripcion').optional(),
  check('asignatura_cod').isInt().withMessage("El campo 'asignatura_cod' debe ser un número entero."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const updateValidator = [
  check('titulo').optional().notEmpty().withMessage("El campo 'titulo' no puede estar vacío."),
  check('descripcion').optional(),
  check('asignatura_cod').optional().isInt().withMessage("El campo 'asignatura_cod' debe ser un número entero."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { createValidator, updateValidator };
