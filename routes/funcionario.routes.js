const express = require('express');
const  authMidd  = require('../middleware/sesion.js')
const checkRol = require("../middleware/roles.js")
const {createValidator, updateValidator} = require('../validator/funcionario')

const { getFuncionarios , createFuncionario,deletedFuncionario,UpdateFuncionario } = require('../controller/funcionario.controller.js');
const funcionarioRouter = express.Router();



funcionarioRouter.get("/appi/funcionario" ,  authMidd , checkRol(), getFuncionarios )
funcionarioRouter.post("/appi/funcionario/create",createValidator,  authMidd, checkRol(), createFuncionario )
funcionarioRouter.delete("/appi/funcionario/delete/:id",  authMidd , checkRol(), deletedFuncionario )

funcionarioRouter.put("/appi/funcionario/update/:id", updateValidator, authMidd , checkRol(), UpdateFuncionario )




module.exports = funcionarioRouter