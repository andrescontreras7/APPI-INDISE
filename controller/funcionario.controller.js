const _ = require('lodash');
const  Funcionario  = require("../models/funcionario.js")

const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op } = require('sequelize');
const { sendNewUserEmail } = require('./email.controller.js');



const getFuncionarios = async (req, res) =>{
    try {
        const datos = await Funcionario.findAll({
          where: {
            activo: true
          }
        })

        res.status(200).json({data:datos})

        
    } catch (error) {
        HanledError(res,  `ERROR ${error}`, 401)
        
    }
}

const createFuncionario = async (req, res) => {
  try {
    const { funcid, funccorreo, funcapellido, funcnombre, funcrol, jefe_areaFK, passwordFuncionario, telefono, rolFK } = req.body;

  
    const idFun = await Funcionario.findOne({
      where: {
        funcid: funcid
      }
    });

    if (idFun) {
      return res.status(400).json({success:false, message: 'El ID del funcionario ingresado ya existe' });
    }

 
    const correFun = await Funcionario.findOne({
      where: {
        funccorreo: funccorreo
      }
    });

    if (correFun) {
      return res.status(400).json({success:false, message: 'El correo del funcionario ingresado ya existe' });
    }
    
    // Verificar que el jefe de área exista
    const jefeArea = await Funcionario.findOne({
      where: {
        funcid: jefe_areaFK
      }
    });

    if (!jefeArea) {
      return res.status(400).json({success:false, message: 'El jefe de área ingresado no existe' });
    }

    // Encriptar la contraseña
    const passwordHash = await encrypt(passwordFuncionario);

    // Crear el nuevo funcionario
    const datosE = await Funcionario.create({ funcid, funcnombre, funcapellido, funccorreo, funcrol, passwordFuncionario: passwordHash, jefe_areaFK, telefono, rolFK });
    const contra = passwordFuncionario;
    const datafuncionarios = {
      id: funcid,
      rol: funcrol
    }
     sendNewUserEmail(funccorreo, contra)

    // Generar el token
    const token = await tokenSign(datafuncionarios);
    console.log(token);

    // Enviar la respuesta
    res.status(201).json({ success: true, message: "Funcionario creado exitosamente", token: token });

  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, message: "Error al crear el registro" });
  }
};


const UpdateFuncionario = async (req, res) => {
  try {
      const { id } = req.params;
      const body = req.body;

      const funcionarioData = await Funcionario.findOne({
          where: {
              funcid: id
          }
      });

      if (!funcionarioData) {
          return res.status(404).json({ error: 'Registro no encontrado' });
      }

      await Funcionario.update(body, {
          where: {
              funcid: id
          }
      });
      return res.status(200).json({ message: "Registro actualizado" });
  } catch (error) {
      console.error('Error al actualizar el registro:', error);
      return res.status(500).json({ error: 'Error al actualizar el registro' });

     
  }
};
     


const deletedFuncionario = async (req, res) => {
        try {
          const { id } = req.params;
          
          const deleteF = await Funcionario.update(
            { activo: false }, // Marcamos el registro como inactivo
            {
              where: {
                funcid: id,
                activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
              }
            }
          );
      
          if (deleteF) {
            res.status(200).json({mensagge:"Registro eliminado exitosamente "})
          } else {
            res.status(404).json({mensagge:"Registro no encontrado o ya eliminado  "})
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({mensagge:"Error al eliminar el registro"});
        }
};





module.exports = {getFuncionarios, createFuncionario, deletedFuncionario, UpdateFuncionario}