const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const { getFuncionarios , createFuncionario } = require('../controller/funcionario.controller.js');
const funcionarioRouter = express.Router();



funcionarioRouter.get("/appi/funcionario" , getFuncionarios )
funcionarioRouter.post("/appi/funcionario", createFuncionario )

module.exports = funcionarioRouter