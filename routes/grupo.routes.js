const express = require('express');
const {getGrupo , createGrupo, updateGrupo} = require("../controller/grupo.controller")
const grupoRouter = express.Router();


grupoRouter.get("/appi/grupo", getGrupo)
grupoRouter.post("/appi/grupo", createGrupo)
grupoRouter.put("/appi/grupo/update/:grupcod", updateGrupo)


module.exports = grupoRouter;