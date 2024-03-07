const _ = require('lodash');
const  Funcionario  = require("../models/funcionario.js")
const  {HanledError} = require('../utils/CapError.js')
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op } = require('sequelize');



const getFuncionarios = async (req, res) =>{
    try {
        const datos = req.body
        const data  = await Funcionario.findAll(datos)

        res.status(200).json({data:data})
        
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
          console.log("Contraseña original:", passwordFuncionario);
          console.log("Contraseña encriptada:", passwordHash);
      
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
     






module.exports = {getFuncionarios, createFuncionario}