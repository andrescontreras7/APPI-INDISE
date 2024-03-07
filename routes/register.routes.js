const express = require('express')
const {registerEstudiante} = require("../controller/registerEstudents.js")
const registerRouter = express.Router()

registerRouter.post("/" , registerEstudiante)

module.exports = registerRouter