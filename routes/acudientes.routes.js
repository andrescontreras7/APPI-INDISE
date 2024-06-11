const express = require("express");
const {
  getAcudientes,
  createAcudientes,
  deletedAcudientes,
  getAcudienteDetail,
  updateAcudiente
} = require("../controller/acudiente.controller.js");
const authMidd = require("../middleware/sesion.js");
const checkRol = require("../middleware/roles.js");
const {
  acudientesValidator,
  updateAcudientesValidator,
} = require("../validator/acudiente.validator.js");
const acudienteRouter = express.Router();

acudienteRouter.get("/appi/acudientes", authMidd,checkRol,getAcudientes);

acudienteRouter.post(
  "/appi/acudientes/create",
  authMidd,
  acudientesValidator,
  checkRol(),
  createAcudientes
);

acudienteRouter.put(
  "/appi/acudientes/update/:id_acu",
  updateAcudientesValidator,
  authMidd,
  checkRol(),
  updateAcudiente

);

acudienteRouter.put("/appi/acudientes/:id_acu", authMidd, checkRol(),getAcudienteDetail )

acudienteRouter.delete(
  "/appi/acudientes/borrar/:id_acu",
  authMidd,
  checkRol(),
  deletedAcudientes
);

module.exports = acudienteRouter;
