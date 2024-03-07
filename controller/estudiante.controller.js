
const { estudModels } = require("../models/index.js")
const  {HanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const _ = require('lodash');
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op, json } = require('sequelize');

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
      const body = req.body;
      const {estudid } =req.params // Obtén el ID y los nuevos datos del cuerpo de la solicitud
  
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
const createEstudiante = async (req, res) => {
   try {
     const { estudid, estudnombre, estudapellido, estuddireccion, estudcorreo, estudtelefono, rol, password } = req.body;
 
     if (_.isNil(estudid)  || _.isEmpty(estudnombre) || _.isEmpty(estudapellido) || _.isEmpty(estuddireccion) || _.isEmpty(estudnombre) || _.isEmpty(password)) {
       return res.status(400).json({ message: "Todos los campos son requeridos" });
     }
     const passwordHash = await encrypt(password)
    
 
     const user = await Estudiante.findOne({
      where: {
         [Op.or]: [{ estudid }, { estudcorreo }]
       }
     });
   
     if (!user) {
       const datosE = await Estudiante.create({estudid, estudnombre, estudapellido, estuddireccion, estudcorreo, estudtelefono, rol, password:passwordHash  });

       const token = await tokenSign({ estudid: datosE.estudid, rol: datosE.rol });
   
       return res.status(200).json({ message: "Estudiante creado de manera exitosa" });
     
     } else {
       console.log("Error, el id del estudiante o el corrreo  ya existe");
       return res.status(500).json({ message: "Error, el id del estudiante o el corrreo  ya existe" });
     }
   } catch (e) {
     HanledError(res, "Error al crear estudiante");
     console.log(e)
   }
 };

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
      res.send("error al eliminar id no existe")
   }


}













module.exports ={ getEstudiantes ,  getEstudiante,  updateEstudiante, createEstudiante,  deleteEstudiante }