const express = require('express');
const {loginAuth} = require("../controller/loginAuth.controller")
const loginRouter = express.Router();



loginRouter.post("/appi/login" , loginAuth)



module.exports = loginRouter