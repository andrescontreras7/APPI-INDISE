const _ = require('lodash');
const  Funcionario  = require("../models/funcionario.js")
const  {HanledError} = require('../utils/CapError.js')
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op } = require('sequelize');



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

const createFuncionario  = async (req, res) => {
        try {
          const {funcid,funccorreo,funcapellido, funcnombre,funcrol,jefe_areaFK,passwordFuncionario,telefono,rolFK    } = req.body;
          if (_.isNil(funcid)  || _.isNil(jefe_areaFK)  || _.isEmpty(passwordFuncionario)  || _.isEmpty(funccorreo) || _.isEmpty(funcapellido) || _.isEmpty(funcnombre) || _.isNil(telefono) || _.isNil(rolFK) || _.isEmpty(funcrol)){
            res.status(422).json({mensage:"UNO O MAS CAMPOS VACIOS "})
        
          }
          else{
            
          }
          const passwordHash = await encrypt(passwordFuncionario)
         
          const user = await Funcionario.findOne({
           where: {
              [Op.or]: [{ funcid }, { funccorreo }]
            }
          });
       

          if (!user) {
            const datosE = await Funcionario.create({funcid,  funcnombre,funcapellido,funccorreo, funcrol, passwordFuncionario:passwordHash ,jefe_areaFK,telefono,rolFK  });
            const datafuncionarios ={
              id:funcid,
              rol:funcrol


            }
            console.log(datafuncionarios.id)
            const token = await tokenSign(datafuncionarios);
            console.log(token)
        
            return res.status(200).json({ message: "funcionario   creado de manera exitosa" });
          
          } else {
            console.log("Error, el id del estudiante o el corrreo  ya existe");
            return res.status(500).json({ message: "Error, el id del estudiante o el corrreo  ya existe" });
          }
        } catch (e) {
          HanledError(res, "Error al crear funcionario");
          console.log(e)
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