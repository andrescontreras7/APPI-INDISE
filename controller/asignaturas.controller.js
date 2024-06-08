const generarCodigo = require("../helpers/generarCodigo.js");
const {Asignatura , Area} = require("../models/areas");
const AsignaturaDocente = require("../models/asignatura-docente.js");
const { areaModels } = require("../models/index.js");
const  {handleError} = require('../utils/CapError.js')
const _ = require('lodash');
const { Op } = require('sequelize');

/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getAsignaturas = async (req,res) => {
  try{
    const data = await Asignatura.findAll({
      include: [Area] // Incluye la tabla Area en la consulta
    });
    res.json({data});
    console.log(data);
  } catch(e) {
    handleError(res, "Error al obtener las asignaturas");
    console.log(e);
  }
}

 



/**
 *obtener un detalle 
 * @param {*} req 
 * @param {*} res 
 */
const getAsignatura = async (req,res) => {
    try{
        const { asigcod } = req.params;
        const data = await Asignatura.findByPk(asigcod);
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).send('REGISTRO NO ENCONTRADO');
        }
    }catch(e){
      handleError(res , "Eror al obtener las asignaturas mi pana " )
        console.log(e)

    }
}



/**
 * actulizar un registro pa
 * @param {*} req 
 * @param {*} res 
 */
const updateAsignaturas = async (req,res) => {
    try {
        const body = req.body;
        const {asigcod } =req.params // Obtén el ID y los nuevos datos del cuerpo de la solicitud
    
        const area = await Asignatura.findByPk(asigcod);
         // Busca el registro por su ID
        console.log(body)
        if (area) {
          await area.update(body); // Actualiza los datos del registro con los nuevos datos
          res.status(200).json({mensagge:"REGISTRO ACTUALIZADO CORRECTAMENTE"  }); // Envia la respuesta con el registro actualizado
        } else {
          res.status(404).send('REGISTRO NO ENCONTRADO'); // Envía una respuesta de error si el registro no existe
        }
      } catch (error) {
        res.status(500).send('ERROR AL ACTUALIZAR'); // Envía una respuesta de error si ocurre alguna excepción
      }
    }


/**
 * insertar un registro perro hpt
 * @param {*} req 
 * @param {*} res 
 */
const createAsignaturas  = async (req,res) => {
    try {
      const { asignombre, asigdescripcion, areaFK, url } = req.body;
  
     
  
      const asignaturaData = await Asignatura.findOne({
       where: {
        asignombre,
        }
      });
    
      if (!asignaturaData) {
        const Info = await Asignatura.create({ asignombre, asigdescripcion, areaFK, url, asigcod:generarCodigo() });
        return res.status(200).json({ 
          sucess: true,
          message:"REGISTRO CREADO EXITOSAMENTE" });
      
      } else {

        return res.status(407).json({ 
          sucess: false,message: "ERROR CAMPOS YA EXISTEN" });
      }
    } catch (e) {
      handleError(res, "ERROR AL CREAR ASIGNATURA   " );
      console.log(e)
  
    }
  };
 




/**
 * eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */


const deleteAsignaturas = async (req, res) => {
  try {
    const { asigcod } = req.params;
    const verfify = await AsignaturaDocente.findOne({
      where: {
        asignaturaAsigcod: asigcod,
      },
    });
    if (verfify) {
      return res.status(403).json({ 
        success: false, message: "La asignatura está asignada a un docente" });
    } 
    
    const deletedA = await Asignatura.update(
      { activo: false }, // Marcamos el registro como inactivo
      {
        where: {
          asigcod: asigcod,
          activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
        }
      }
    );

    if (deletedA) {
      res.status(200).json({ message: "Registro eliminado exitosamente" });
    } else {
      res.status(404).send("Registro no encontrado o ya eliminado");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el registro" });
  }
};






module.exports ={ getAsignaturas,  getAsignatura,  updateAsignaturas, createAsignaturas,  deleteAsignaturas }