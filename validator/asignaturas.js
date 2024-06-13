const { check } = require("express-validator");
const validateResult = require("../utils/validateResult");

exports.validateAsignaturaCreation = [
  check("asignombre")
  .exists().withMessage("El campo 'asignombre' es requerido.")
    .notEmpty()
    .withMessage("El campo 'asignombre' no puede estar vacío.")
    .isLength({ max: 255 })
    .withMessage("El campo 'asignombre' no puede exceder los 255 caracteres"),
  check("asigdescripcion")
    .exists().withMessage("El campo 'asigdescripcion' es requerido.")
    .notEmpty()
    .withMessage("El campo 'asigdescripcion' no puede estar vacío.")
    .isLength({ max: 500 })
    .withMessage("El campo 'asigdescripcion' no puede exceder los 500 caracteres"),
  check("areaFK")
    .exists().withMessage("El campo 'areaFK' es requerido.")
    .notEmpty()
    .withMessage("El campo 'areaFK' no puede estar vacío."),
  check("url")
    .notEmpty()
    .withMessage("El campo 'url' no puede estar vacío.")
    .isURL()
    .withMessage("El campo 'url' debe ser una URL válida"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

exports.validateAsignaturaUpdate = [
  check("asigcod")
    .notEmpty()
    .withMessage("El campo 'asigcod' no puede estar vacío."),
  check("asignombre")
    .optional()
    .notEmpty()
    .withMessage("El campo 'asignombre' no puede estar vacío.")
    .isLength({ max: 255 })
    .withMessage("El campo 'asignombre' no puede exceder los 255 caracteres"),
  check("asigdescripcion")
    .optional()
    .notEmpty()
    .withMessage("El campo 'asigdescripcion' no puede estar vacío.")
    .isLength({ max: 500 })
    .withMessage("El campo 'asigdescripcion' no puede exceder los 500 caracteres"),
  check("areaFK")
    .optional()
    .notEmpty()
    .withMessage("El campo 'areaFK' no puede estar vacío."),
  check("url")
    .optional()
    .notEmpty()
    .withMessage("El campo 'url' no puede estar vacío.")
    .isURL()
    .withMessage("El campo 'url' debe ser una URL válida"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];