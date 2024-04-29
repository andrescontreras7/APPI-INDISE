const  {HanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const _ = require('lodash');
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op, json } = require('sequelize');
const Funcionario = require("../models/funcionario.js")
const cookieParser = require('cookie-parser');








const loginAuth = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const estudiante = await Estudiante.findOne({
      where: {
        estudcorreo: correo,
        activo: true,
      },
    });
    
  

    if (estudiante) {
      const hashPassword = estudiante.password;
      const passwordMatch = await compare(password, hashPassword);

      if (!passwordMatch) {
        HanledError(res, 'Contraseña incorrecta', 401);
        return;
      }

      const user = {
        id: estudiante.estudid,
        rol: estudiante.rol,
      };

      const dataEstudiante = {
        token: await tokenSign(user),
        rol: estudiante.rol,
        nombre: estudiante.estudnombre,
      
      };

      res.status(200).json({ token: dataEstudiante });
      return; 
    }

    const funcionario = await Funcionario.findOne({
      where: {
        funccorreo: correo,
      },
    });

    if (!funcionario) {
      HanledError(res, 'Usuario no encontrado', 500);
      return;
    }

    const contraFuncionario = funcionario.passwordFuncionario;

    if (typeof password !== 'string' || typeof contraFuncionario !== 'string') {
      HanledError(res, 'Datos de contraseña no válidos', 400);
      return;
    }

    const passwordCompare = await compare(password, contraFuncionario);

    if (!passwordCompare) {
      HanledError(res, 'Contraseña incorrecta', 401);
      return;
    }

    const user = {
      id: funcionario.funcid,
      rol: funcionario.rolFK,
     
    };

    const dataFuncionario = {
      token: await tokenSign(user),
      rol: funcionario.rolFK,
      nombre: funcionario.funcnombre
   
    };

    res.status(200).json({ token: dataFuncionario });
  } catch (error) {
    HanledError(res, 'Error', 404);
    console.log(error);
  }
};

module.exports = { loginAuth };

module.exports = { loginAuth };


 
