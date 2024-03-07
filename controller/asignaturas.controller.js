const {Asignatura , Area} = require("../models/areas");
const { areaModels } = require("../models/index.js");
const  {HanledError} = require('../utils/CapError.js')



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
          res.status(200).json({mensagge:"exito pa"  }); // Envia la respuesta con el registro actualizado
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
const createAsignaturas  = async (req,res) => {
try{
    const datosAsi = req.body
    const datos = await Asignatura.create(datosAsi)

    res.status(200)
    res.send("asignatura creada exitosamente ")

}catch(e){
    HanledError(res, "error al crear asignatura rectifica esa monda paisano")



}

}


/**
 * eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteAsignaturas = async (req,res) => {
  try{
    const {asigcod} = req.params
    console.log(req)
    const  deletedA    =  await Asignatura.destroy({
        where:{
            asigcod:asigcod

        }
    })
    if(deletedA ==1) {
        res.send("registro eliminado exitosamente")
        res.status(200)
    }
    res.send({datos})


  }
  catch(e){
    HanledError(res ,"error al eliminar ese registro ")
    console.log(e)
  }

}




module.exports ={ getAsignaturas,  getAsignatura,  updateAsignaturas, createAsignaturas,  deleteAsignaturas }