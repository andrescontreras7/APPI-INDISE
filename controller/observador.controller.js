const  {HanledError} = require('../utils/CapError.js')
const _ = require('lodash');
const Observador = require('../models/observador.js');
const Estudiante = require("../models/estudiante.js");
const  Funcionario  = require("../models/funcionario.js")

const getObservador = async (req,res) =>{

    try {
        const datos_activos = await Observador.findAll({
        where: {
            activo: true
        }
        })

        res.status(200).json(datos_activos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"ERROR AL OBTENER LOS REGISTROS"
        })
    }
   
}

/**
 * Creates a new observador.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the observador is created.
 * @throws {Error} - If an error occurs while creating the observador.
 */


//crear un nuevo registro 
const createObservador = async (req,res) =>{
    try {
     const { obsvtipo, obsvfecha,obsvestado,estudid,funcidfv } = req.body; // Obtener los datos del cuerpo de la solicitud.
  
 
     if((_.isEmpty((obsvtipo) || _.isEmpty(obsvfecha) || _.isEmpty(obsvestado) || _.isNil(estudid) || _.isNil(funcidfv)))) { // validar que los campos no  esten vacios
         res.status(404).json({"error":"TODOS LOS CAMPOS SON REQUERIDOS"})
     } 
     else {

 //validar que el id del estudiante y del funcionario existan
    const dataStudents = await Estudiante.findOne({          
        where: {
            estudid: estudid
        }
    })
    const dataFuncionarios = await Funcionario.findOne({
        where: {
            funcid: funcidfv
        }
    })


     if (!dataStudents || !dataFuncionarios) {
        return res.status(404).json({ message: "Id del estudiante o del funcionario no existen  " });// si no existen devolever un mensaje de error
     }

     await Observador.create({  //si existen, se pasan los datos ingresado como un objeto para crear un nuevo registro
    
        obsvtipo :obsvtipo  , 
        obsvfecha:obsvfecha,
        obsvestado:obsvestado,
        estudid:estudid,
        funcidfv:funcidfv
     });
        
   

     res.status(200).json({data: "creado exitosamente "}) 
     }
   
 
    } catch (error) {
    
     HanledError(res,"error:", error,404)
    }
 }
 


// Actualiza un registro de observador en la base de datos.
const updateObservador = async (req, res) => {
    try {
        const { obsvcod } = req.params; // Obtener el código del observador de los parámetros de la solicitud.
        const { body } = req.body; // Obtener el cuerpo de la solicitud.

        const observador = await Observador.findOne({
            where: {
                obsvcod: obsvcod // Buscar el observador por su código.
            }
        });

        if (!observador) {
            return res.status(404).json({ error: 'Registro no encontrado' }); // Si no se encuentra el observador, devolver un error.
        }

        await Observador.update(body, {
            where: {
                obsvcod: obsvcod // Actualizar el observador con el cuerpo de la solicitud.
            }
        });
        return res.status(200).json({ message: "Registro actualizado" }); // Devolver un mensaje de exito.
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        return res.status(500).json({ error: 'Error al actualizar el registro' }); // Si ocurre un error, devolver un error.
       
    }
};




/**
 * Deletes an observador record from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the record is deleted.
 */
 const deleteObservador = async (req, res) => {
    try {
        const {obsvcod  } = req.params;
        
        const data = await Observador.update(
          { activo: false }, // Marcamos el registro como inactivo
          {
            where: {
                obsvcod: obsvcod,
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
    



module.exports = {getObservador, createObservador , deleteObservador,updateObservador}