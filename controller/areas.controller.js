const { matchedData } = require("express-validator");
const {Area} = require( "../models/areas.js")
const  {handleError} = require('../utils/CapError.js')
const _ = require('lodash');
const generarCodigo = require("../helpers/generarCodigo.js");








/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getAreas = async (req, res) => {
  try {
    const datos_activos = await Area.findAll({
      where: { activo: true },
    });
    res.status(200).json({success:true, data: datos_activos });
  } catch (e) {
    handleError(res, "Error al recuperar los registros", 500);
    console.log(e);
  }
};











/**
 *obtener un detalle 
 * @param {*} req 
 * @param {*} res 
 */
const getArea = async (req,res) => {
  try{
   
    const { cod_area } = req.params // se aplica destructuracion
    console.log(cod_area)
    const data = await Area.findByPk(cod_area) // se usa la funcion del sequelize al modelo
    res.send({data})
  


  }catch(e){
    console.log(e)
    handleError(res, "error en esa verga" )
  }

}








/**
 * actulizar un registro pa
 * @param {*} req 
 * @param {*} res 
 */ 
const updateArea = async (req, res) => {
  try {
    const body = req.body;
    const {cod_area} =req.params // Obtén el ID y los nuevos datos del cuerpo de la solicitud

    const area = await Area.findByPk(cod_area); // Busca el registro por su ID
    if (area) {
      await area.update(body); // Actualiza los datos del registro con los nuevos datos
     res.status(200).json({ success: true, message: "Área actualizada exitosamente", data: area }); // Envía una respuesta de éxito si la actualización fue exitosa
    } else {
      res.status(404).send('Registro no encontrado'); // Envía una respuesta de error si el registro no existe
    }
  } catch (error) {
    console.error('Error al actualizar el área:', error);
    res.status(500).send('Error al actualizar el área'); // Envía una respuesta de error si ocurre alguna excepción
  }
}







/**
 * insertar un registro perro hpt
 * @param {*} req 
 * @param {*} res 
 */

const createArea = async (req, res) => {
  try {
    const {  are_nombre } = req.body;

    const areaData = await Area.create({ cod_area:generarCodigo(), are_nombre });
    res.status(201).json({success:true,  message: "Área creada exitosamente", data: areaData });
  } catch (error) {
    console.error("Error al crear el área:", error);
    handleError(res, "Error al crear nueva área", 500);
  }
};



/**
 * eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteArea = async (req, res) => {
  try {
    const { cod_area } = req.params;
    const areas = await Area.findOne({ where: { cod_area: cod_area } });

    if (!areas) {
      return res
        .status(404)
        .json({ success:false, message: "No se encontró la area con el código proporcionado" });
    }

   

    await Area.update(
      { activo: false },
      {
        where: {
          cod_area,
          activo: true,
        },
      }
    );

    res.status(200).json({ success:true, message: "Registro eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success:true,message: "Ocurrió un error al eliminar el registro" });
  }
};






module.exports ={ getAreas,  getArea,  updateArea, createArea,  deleteArea }