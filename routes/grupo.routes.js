const express = require('express');
const {getGrupo , createGrupo, updateGrupo, getAllGrupo} = require("../controller/grupo.controller")
const {grupoValidator} = require("../validator/grupo.validator")
const grupoRouter = express.Router();


grupoRouter.get("/appi/grupo", getGrupo)
grupoRouter.post("/appi/grupo", grupoValidator, createGrupo)
grupoRouter.get("/appi/grupo/all/:id_asig/:grupo", getAllGrupo)
grupoRouter.put("/appi/grupo/update/:grupcod", updateGrupo)


module.exports = grupoRouter;