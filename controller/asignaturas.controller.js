const {Asignatura , Area} = require("../models/areas");
const { areaModels } = require("../models/index.js");
const  {HanledError} = require('../utils/CapError.js')
const _ = require('lodash');
const { Op } = require('sequelize');

/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getAsignaturas = async (req,res) => {
    try{
      
        const data = await Asignatura.findAll
        ({
         
             // Incluye la tabla Area en la consulta
          });
          res.send({data})
          console.log(data)
          
    }catch(e){
        HanledError(res , "Eror al obtener las asignaturas mi pana " )
        console.log(e)

    }

}

 



/**
 *obtener un detalle 
 * @param {*} req 
 * @param {*} res 
 */
const getAsignatura = async(req,res) => {
    try{
        const {asigcod} = req.body
        console.log(asigcod)

    } catch(e){
        HanledError(res, "error al obtener asignatura")
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
      const { asigcod, asignombre, asigdescripcion, areaFK } = req.body;
  
      if (_.isNil(asigcod)  || _.isEmpty(asignombre) || _.isEmpty(asigdescripcion) || _.isNil(areaFK)) {
        return res.status(400).json({ message: "TODOS_LOS_CAMPOS_SON_REQUERIDOS" });
      }     
  
      const asignaturaData = await Asignatura.findOne({
       where: {
          [Op.or]: [{ asigcod }, { asignombre }]
        }
      });
    
      if (!asignaturaData) {
        const Info = await Asignatura.create({asigcod, asignombre, asigdescripcion, areaFK  })
        return res.status(200).json({ message:"REGISTRO CREADO EXITOSAMENTE" });
      
      } else {

        return res.status(500).json({ message: "ERROR CAMPOS YA EXISTEN" });
      }
    } catch (e) {
      HanledError(res, "ERROR AL CREAR ASIGNATURA   " );
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
      res.status(200).json({mensagge:"Registro eliminado exitosamente "})
    } else {
      res.status(404).send("Registro no encontrado o ya eliminado");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({mensagge:"Error al eliminar el registro"});
  }
};






module.exports ={ getAsignaturas,  getAsignatura,  updateAsignaturas, createAsignaturas,  deleteAsignaturas }