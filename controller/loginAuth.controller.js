const  {HanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const _ = require('lodash');
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op, json } = require('sequelize');
const Funcionario = require("../models/funcionario.js")









const loginAuth = async(req,res)=>{

    try {
       const { correo, password } = req.body;
   
       // Buscar en la tabla de Estudiantes
       const estudiante = await Estudiante.findOne({
         where: {
           estudcorreo: correo,
         },
       });
   
       if (estudiante) {
         const hashPassword = estudiante.password;
         const passwordMatch = await compare(password, hashPassword);
   
         if (!passwordMatch) {
           HanledError(res, 'Contraseña incorrecta', 401);
           return;
         }
 
         user = {
           id:estudiante.estudid,
           rol:estudiante.rol
         }
         console.log(user)
   
         const data = {
           token: await tokenSign(user),
           rol: 'estudiante',
         };
   
         console.log(data);
         res.send({ data });
         return;
       }
   
       // Si no es un estudiante, buscar en la tabla de Funcionarios
       const data = req.body.password
       let funcionario = await Funcionario.findOne({
         where: {
           funccorreo: req.body.correo,
         },
       });
      
   
       if (!funcionario) {
         HanledError(res, 'Correo no encontrado', 500);
         return;
       }
   
       const contraFuncionario = funcionario.passwordFuncionario;
 
 
 
       if (typeof data !== 'string' || typeof contraFuncionario !== 'string') {
         HanledError(res, 'Datos de contraseña no válidos', 400);
         return;
       }
 
       const passwordCompare = await compare(data, contraFuncionario);
       
     if (!passwordCompare) {
       HanledError(res, 'Contraseña incorrecta', 401);
       return;
     }
 
       user = {  
         id:funcionario.funcid,  ///almaceno en un objeto el rol y el id del usuario
         rol:funcionario.rolFK
       }
       const dataFuncionario = {
         token: await tokenSign(user),//luego le paso ese  objeto a la funcion de verificar el token
         rol: funcionario.funcrol,
       };
   
      
       res.status(200).json({ data: dataFuncionario });
     } catch (error) {
       HanledError(res, 'Error', 404);
       console.log(error);
     }
   };
 

   module.exports = loginAuth