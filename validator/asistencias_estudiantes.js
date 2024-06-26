const {check} = require('express-validator')
const validateResult = require('../utils/validateResult');



const createAsistenciaValidator = [
    check('fec_asi')
    .exists().withMessage("El campo 'fec_asi' es requerido.")
      .isISO8601().withMessage("El campo 'fec_asi' debe ser una fecha ISO8601 válida."),
    check('det_asi')
    .exists().withMessage("El campo 'det_asi' es requerido.")
    .notEmpty().withMessage("El campo 'det_asi' no puede estar vacío."),
    check('grupoFK').exists().withMessage("El campo 'grupoFK' es requerido")
     .notEmpty().withMessage("El campo 'grupoFK' no puede estar vacío."),
    check('estudidfk').isInt().withMessage("El campo 'estudidfk' debe ser un número entero."),
    check("asigFk").notEmpty().withMessage("El campo 'asigFk' no puede estar vacío.").isInt().withMessage("El campo 'asigFk' debe ser un número entero."),
  
    (req, res, next) => {
      validateResult(req, res, next);
    }
  ];
  
  const updateAsistenciaValidator = [
    check('fec_asi').optional().isISO8601().withMessage("El campo 'fec_asi' debe ser una fecha ISO8601 válida."),
    check('det_asi').optional().notEmpty().withMessage("El campo 'det_asi' no puede estar vacío."),
    check('estudidfk').optional().isInt().withMessage("El campo 'estudidfk' debe ser un número entero."),
    check('updatedAt').optional().isISO8601().withMessage("El campo 'updatedAt' debe ser una fecha ISO8601 válida."),
    (req, res, next) => {
      validateResult(req, res, next);
    }  
  ];
  
  module.exports = { createAsistenciaValidator, updateAsistenciaValidator };