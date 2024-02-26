const express = require('express')

const {registerEstudiante} = require("../controller/registerEstudents.js")
const router = express.Router()

router.post("/" , registerEstudiante)

module.exports = router