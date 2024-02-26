const { matchedData } = require("express-validator");
const { estudModels } = require("../models/index.js")
const  {HanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");





/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getEstudiantes = async (req,res) => {
   try{
    const data  = req.body
    const datos = await estudModels.findAll(data)
    res.send(datos)
    res.status(200)
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
 * actulizar un registro pa
 * @param {*} req 
 * @param {*} res 
 */
const updateEstudiante = async (req,res) => {
   try {
      const { estudid, ...body } = req.body; // Obtén el ID y los nuevos datos del cuerpo de la solicitud
  
      const estudiante = await estudModels.findByPk(estudid); // Busca el registro por su ID
      console.log(body)
      if (estudiante) {
        await estudiante.update(body); // Actualiza los datos del registro con los nuevos datos
        res.status(200).json({mensagge:"exito pa"  }); // Envía la respuesta con el registro actualizado
      } else {
        res.status(404).send('Registro no encontrado'); // Envía una respuesta de error si el registro no existe
      }
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
      res.status(500).send('Error al actualizar el registro'); // Envía una respuesta de error si ocurre alguna excepción
    }
  }


/**
 * insertar un registro perro hpt
 * @param {*} req 
 * @param {*} res 
 */
const createEstudiante = async (req,res) => {
try{
   const {estudid, estudcorreo, ...dataEstudiantes } = req.body
   const user = await Estudiante.findOne({
      where:{
         estudid
      }

   })

   if(!user){

      const datosE =  Estudiante.create( {estudid, ...dataEstudiantes})
      res. status(200).json({message: "estudiante creado de manera exitosa"})
   }
   else{
      console.log("error mi hermanaso")
      res.status(500).json({ message:"error el id del estudiante ya existe "})
   }


} catch(e){

   HanledError(res , "error al crear estudiante ")
}


}


/**
 * eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteEstudiante   = async (req,res) => {
   const {estudid} = req.params
   const data = await Estudiante.destroy({
      where:{
         estudid:estudid
      }
   })
   if(data){
      res.status(200).json({mensage:"Registro eliminad exitosamente "})
   }
   else{
      res.send("error al eliminar id ya existe")
   }


}




module.exports ={ getEstudiantes  ,  getEstudiante,  updateEstudiante, createEstudiante,  deleteEstudiante }