const { check } = require("express-validator");
const validateResult = require("../utils/validateResult");

exports.acudientesValidator = [
  check("id_acu")
    .notEmpty()
    .withMessage("El campo 'id_acu' no puede estar vacío."),

  check("nom_acu")
    .notEmpty()
    .withMessage("El campo 'nom_acu' no puede estar vacío."),

  check("ape_acu")
    .notEmpty()
    .withMessage("El campo 'ape_acu' no puede estar vacío."),

  check("corr_acu")
    .isEmail()
    .withMessage("El campo 'corr_acu' debe ser un correo válido."),

  check("tel_acu")
    .notEmpty()
    .withMessage("El campo 'tel_acu' no puede estar vacío.")
    .isInt()
    .withMessage("El campo 'tel_acu' debe ser un número entero."),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

exports.updateAcudientesValidator = [
  check("id_acu")
    .notEmpty()
    .withMessage("El campo 'id_acu' no puede estar vacío."),

  check("nom_acu")
    .optional()
    .notEmpty()
    .withMessage("El campo 'nom_acu' no puede estar vacío."),

  check("ape_acu")
    .optional()
    .notEmpty()
    .withMessage("El campo 'ape_acu' no puede estar vacío."),

  check("corr_acu")
    .optional()
    .isEmail()
    .withMessage("El campo 'corr_acu' debe ser un correo válido."),

  check("tel_acu")
    .optional()
    .notEmpty()
    .withMessage("El campo 'tel_acu' no puede estar vacío.")
    .isInt()
    .withMessage("El campo 'tel_acu' debe ser un número entero."),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];
