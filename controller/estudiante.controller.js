
const  {hanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const _ = require('lodash');
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op } = require('sequelize');
const generarCodigo = require('../helpers/generarCodigo.js')
const Acudiente = require('../models/acudiente.js') //
const Grupo = require("../models/grupo.js");
const Grado = require("../models/grado.js");

/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getEstudiantes = async (req,res) => {
  try{
    const  datos_activos = await Estudiante.findAll({
     
     include: [
      {
        model: Acudiente,
        attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] }, // Excluir campos del modelo Acudiente
       
       },
       {
        model: Grupo, 
        include: {model: Grado, attributes: { exclude: ['createdAt', 'updatedAt'] }}, // Excluir campos del modelo Grado
        attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] } // Excluir campos del modelo Grupo
       },
       
     ]
    })
    res.status(200).json({data: datos_activos})
  }

  catch(e){
      hanledError(res, "Error al recuperar los registros", 500)

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

     
         if ( body.estudcorreo !== estudiante.estudcorreo) {
              const existingEstudiante = await Estudiante.findOne({
                    where: {
                         estudcorreo: body.estudcorreo
                    }
              });

              if (existingEstudiante) {
                    return res.status(404).json({ error: 'El correo ya existe' });
              }
         }
         else{
          await estudiante.update(body);
         }

         
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
       const { estudid, estudnombre, estudapellido, estuddireccion, estudcorreo, estudtelefono, rol, password,grupoFK,acudienteFK} = req.body;
      
       const passwordHash = await encrypt(password);

       const user = await Estudiante.findOne({
           where: {
               [Op.or]: [{ estudid }, { estudcorreo }, ]
           }
       });

       if (user) {
           console.log("Error, el ID del estudiante o el correo ya existe");
           return res.status(407).json({ message: "Error, el ID del estudiante o el correo ya existe" });
       }
       const grupoEstudianteData = await Grupo.findOne({
        where: {
            grupcod: grupoFK,
          
        }
       })
       if(!grupoEstudianteData){
           return res.status(400).json({ message: "El ID del grupo ingresado no existe" });
       }
       const acudienteData = await Acudiente.findOne({
        where: {
          id_acu: acudienteFK,
        }
       });

       if(!acudienteData){
           return res.status(400).json({ message: "El ID del acudiente ingresado no existe" });
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
         tok: generarCodigo(),
         grupoFK: grupoFK,
         acudienteFK: acudienteFK 
        });

    /*send({
        email: data.estudcorreo,
        nombre: data.estudnombre,
       
    })
*/
    
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




  const getAllInformation = async (req, res) => {
    try{
      const  datos_activos = await Estudiante.findAll({
        where: { activo: true },
        include : [
          {
            model: Grupo, 
            include: {model: Grado, attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] }}, // Excluir campos del modelo Grado
            attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] } // Excluir campos del modelo Grupo
          }, 
          {
            model: Acudiente, 
            attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] } // Excluir campos del modelo Acudiente
          }
        ],
        attributes: { exclude: ['activo', 'createdAt', 'updatedAt', "password"] } // Excluir campos del modelo Estudiante
      })
      res.status(200).json({data: datos_activos})
    }

   catch(e){
    HanledError(res, "Error al recuperar los registros", 500)
    console.log(e)
   }
}



module.exports = {
   getEstudiantes,
   getEstudiante,
   updateEstudiante,
   createEstudiante,
   deleteEstudiante,
   getAllInformation
   
};
