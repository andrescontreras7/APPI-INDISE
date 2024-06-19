const { handleError } = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const Funcionario = require("../models/funcionario.js");
const { tokenSign } = require("../utils/handlejwt.js");
const { compare } = require("../utils/handlePassword.js");
const UserLogin = require("../models/userLogin"); // Importa el modelo UserLogin

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
        handleError(res, 'Contraseña incorrecta', 401);
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

      // Registrar el inicio de sesión
      await UserLogin.create({
        userType: 'estudiante',
        userId: estudiante.estudid
      });

      res.status(200).json({ token: dataEstudiante });
      return;
    }

    const funcionario = await Funcionario.findOne({
      where: {
        funccorreo: correo,
      },
    });

    if (!funcionario) {
      handleError(res, 'Usuario no encontrado', 500);
      return;
    }

    const contraFuncionario = funcionario.passwordFuncionario;

    if (typeof password !== 'string' || typeof contraFuncionario !== 'string') {
      handleError(res, 'Datos de contraseña no válidos', 400);
      return;
    }

    const passwordCompare = await compare(password, contraFuncionario);

    if (!passwordCompare) {
      handleError(res, 'Contraseña incorrecta', 401);
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

    // Registrar el inicio de sesión
    await UserLogin.create({
      userType: 'funcionario',
      userId: funcionario.funcid
    });

    res.status(200).json({ token: dataFuncionario });
  } catch (error) {
    handleError(res, 'Error', 404);
    console.log(error);
  }
};

module.exports = { loginAuth };
