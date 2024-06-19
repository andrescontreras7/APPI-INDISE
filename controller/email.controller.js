const crypto = require('crypto');
const transporter = require('../helpers/tranposter.js');
const { handleError } = require('../utils/CapError.js');
const Funcionario = require('../models/funcionario.js');
const Estudiante = require('../models/estudiante.js');
const { Op } = require('sequelize');
const { encrypt } = require('../utils/handlePassword.js');

const requestPasswordReset = async (req, res) => {
    try {
      const { email } = req.body;
  
      let user = await Funcionario.findOne({ where: { funccorreo: email } });
      let userEmail = null;
  
      // Si no se encuentra el usuario en el modelo Funcionario, buscar en el modelo Estudiante
      if (!user) {
        user = await Estudiante.findOne({ where: { estudcorreo: email } }); // Asume que el campo de correo en Estudiante se llama estcorreo
        if (user) userEmail = user.estudcorreo;
      } else {
        userEmail = user.funccorreo;
      }
  
      if (!user) {
        return handleError(res, "El usuario no existe", 404);
      }
  
      const token = crypto.randomBytes(32).toString('hex');
      const tokenExpiry = Date.now() + 3600000; // 1 hora
  
      await user.update({
        resetPasswordToken: token,
        resetPasswordExpires: tokenExpiry
      });
  
      const mailOptions = {
          from: 'your-email@gmail.com',
          to: userEmail, 
          subject: 'Restablecimiento de contraseña',
          text: `Recibió esto porque usted (u otra persona) solicitó restablecer la contraseña de su cuenta.\n\n
                 Haga clic en el siguiente enlace, o péguelo en su navegador para completar el proceso:\n\n
                 http://localhost:5173/reset-password?token=${token}\n\n
                 Si no solicitó esto, ignore este correo electrónico y su contraseña permanecerá sin cambios.\n`
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Correo de restablecimiento de contraseña enviado' });
    } catch (error) {
      console.error('Error al enviar el correo de restablecimiento de contraseña:', error);
      handleError(res, "Error interno del servidor", 500);
    }
};

const sendNewUserEmail = async (userEmail, userPassword) => {
  try {
      const mailOptions = {
          from: 'your-email@gmail.com',
          to: userEmail,
          subject: 'Bienvenido al sistema',
          text: `Se ha creado una nueva cuenta para usted en nuestro sistema.\n\n
                 Aquí están sus credenciales:\n\n
                 Correo electrónico: ${userEmail}\n
                 Contraseña: ${userPassword}\n\n
                 Por favor, cambie su contraseña lo antes posible por seguridad.\n`
      };

      await transporter.sendMail(mailOptions);
  } catch (error) {
      console.error('Error al enviar el correo de bienvenida:', error);
      throw error;
  }
};

const resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
  
      let user = await Funcionario.findOne({ 
        where: {
          resetPasswordToken: token,
          resetPasswordExpires: { [Op.gt]: Date.now() }
        }
      });
  
      if (!user) {
        user = await Estudiante.findOne({ 
          where: {
            resetPasswordToken: token,
            resetPasswordExpires: { [Op.gt]: Date.now() }
          }
        });
      }
  
      if (!user) {
        return handleError(res, "El token es inválido o ha expirado", 400);
      }
      const passwordHash = await encrypt(newPassword);
  
      await user.update({
        password: passwordHash,
        resetPasswordToken: null,
        resetPasswordExpires: null
      });
  
      res.status(200).json({ message: 'Contraseña restablecida exitosamente' });
    } catch (error) {
      console.error('Error al restablecer la contraseña:', error);
      handleError(res, "Error interno del servidor", 500);
    }
};

module.exports = {
  requestPasswordReset,
  resetPassword,
  sendNewUserEmail
};