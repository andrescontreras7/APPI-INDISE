
const { estudModels } = require("../models/index.js")
const  {HanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const _ = require('lodash');
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op } = require('sequelize');
const generarCodigo = require('../helpers/generarCodigo.js')
let EmailRegistro = require('../helpers/email.js')
/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getEstudiantes = async (req,res) => {
   try{
    const data  = req.body
    const datos = await estudModels.findAll(data)
    res.status(200).json(datos)
   }
   catch(e){
    HanledError(res, "error al obtener estudiantes")
   }

}



/**
 *obtener un detalle 
 * @param {*} req 
 * @param {*} res 
 */
const getEstudiante = async (req,res) => {
   try{
      const {estudid} = req.params
      const data = await Estudiante.findByPk(estudid)

      if(data){
         console.log("yea pa")
         res.status(200).json({data}) 
      }
      else{
         res.send("error id no existe  ")
      }
    

   }catch(error){
      res.status(500).json({mensage:"error al obtener estudiante", error})
   }

}



/**
 * Actualizar un estudiante
 * @param {*} req 
 * @param {*} res 
 */
const updateEstudiante = async (req, res) => {
   try {
       const { estudid } = req.params;
       const body = req.body;

       const estudiante = await Estudiante.findOne({
           where: {
               estudid: estudid
           }
       });

       if (!estudiante) {
           return res.status(404).json({ error: 'Registro no encontrado' });
       }

       await estudiante.update(body);
       return res.status(200).json({ message: "Registro actualizado" });
   } catch (error) {
       console.error('Error al actualizar el registro:', error);
       return res.status(500).json({ error: 'Error al actualizar el registro' });
   }
};

/**
* Crear un estudiante
* @param {*} req 
* @param {*} res 
*/
const createEstudiante = async (req, res) => {
   try {
       const { estudid, estudnombre, estudapellido, estuddireccion, estudcorreo, estudtelefono, rol, password, tok} = req.body;
       
       if (_.isNil(estudid) || _.isEmpty(estudnombre) || _.isEmpty(estudapellido) || _.isEmpty(estuddireccion) || _.isEmpty(estudnombre) || _.isEmpty(password)) {
           return res.status(400).json({ message: "Todos los campos son requeridos" });
       }
       const passwordHash = await encrypt(password);

       const user = await Estudiante.findOne({
           where: {
               [Op.or]: [{ estudid }, { estudcorreo }]
           }
       });

       if (user) {
           console.log("Error, el ID del estudiante o el correo ya existe");
           return res.status(500).json({ message: "Error, el ID del estudiante o el correo ya existe" });
       }

  const data = await Estudiante.create({
         estudid, 
         estudnombre, 
         estudapellido, 
         estuddireccion, 
         estudcorreo, 
         estudtelefono, 
         rol, 
         password: passwordHash,
         tok: generarCodigo()
        });

    EmailRegistro({
        email: data.estudcorreo,
        nombre: data.estudnombre,
        token: data.tok
    })
    
    
       const token = await tokenSign({ estudid: estudid, rol: rol });

       return res.status(200).json({ message: "Estudiante creado exitosamente" });
       

   } catch (e) {
       console.error('Error al crear estudiante:', e);
       return res.status(500).json({ error: 'Error al crear estudiante' });
   }
   
};


/**
* Eliminar un estudiante
* @param {*} req 
* @param {*} res 
*/
const deleteEstudiante = async (req, res) => {
    try {
        const { estudid } = req.params;
        
        const data = await Estudiante.update(
          { activo: false }, // Marcamos el registro como inactivo
          {
            where: {
              estudid: estudid,
              activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
            }
          }
        );
    
        if (data) {
          res.status(200).json({mensagge:"REGISTRO ELIMINADO EXITOSAMENTE"})
        } else {
          res.status(404).json({error :"REGISTRO NO ENCONTRADO "});
        }
      } catch (error) {
        console.log(error);
       HanledError(res,   {error:"ERROR AL ELIMINAR REGISTRO"}  , 400);
      }
    };
    

const validateEmail = async (req, res) => {
 const { token } = req.params;
    
    }

module.exports = {
   getEstudiantes,
   getEstudiante,
   updateEstudiante,
   createEstudiante,
   deleteEstudiante,
   validateEmail
};
