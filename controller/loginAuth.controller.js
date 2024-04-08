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
    const { correo, password } = req.body; // se obtienen el coreo y la contraseña del cuerpo de la solicitud

    // Buscar en la tabla de Estudiantes
    const estudiante = await Estudiante.findOne({
      where: {
        estudcorreo: correo,
      },
    });
    // si es un estudiante se procede a comparar la contraseña

    if (estudiante) {
      const hashPassword = estudiante.password;
      const passwordMatch = await compare(password, hashPassword); // usando la funcion de compare definida anteriormente

      if (!passwordMatch) {
        HanledError(res, 'Contraseña incorrecta', 401); // si no es la contraseña devolver un mensaje de error
        return;
      }

      const user = {
        id: estudiante.estudid,  // luego de validar que el correo y la contraseña existan se procede a crear un objeto con el id y el rol del usuario
        rol: estudiante.rol,
      };

      const data = {
        token: await tokenSign(user), // luego se genera un token con la funcion tokenSign
        rol: 'estudiante',
      };

      res.send({ data });
      return;
    }

    // Si no es un estudiante, buscar en la tabla de Funcionarios
    const funcionario = await Funcionario.findOne({
      where: {
        funccorreo: correo,
      },
    });

    if (!funcionario) {
      HanledError(res, 'Correo no encontrado', 500);
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
      rol: funcionario.funcrol,
    };

    res.cookie('token', dataFuncionario.token, { httpOnly: true });
    res.status(200).json({ data: dataFuncionario });
  } catch (error) {
    HanledError(res, 'Error', 404);
    console.log(error);
  }
};

module.exports = { loginAuth };


 
