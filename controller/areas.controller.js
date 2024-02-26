const { matchedData } = require("express-validator");
const {Area} = require( "../models/areas.js")
const  {HanledError} = require('../utils/CapError.js')









/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getAreas = async (req, res) => {
    try {
      const data = await Area.findAll();
      res.send({ data });
    } catch (error) {
      HanledError(res , "Eror al obtener las areas mi pana " )
     
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
    HanledError(res, "error en esa verga" )
  }

}








/**
 * actulizar un registro pa
 * @param {*} req 
 * @param {*} res 
 */ 
const updateArea = async (req, res) => {
  try {
    const { cod_area, ...body } = req.body; // Obtén el ID y los nuevos datos del cuerpo de la solicitud

    const area = await Area.findByPk(cod_area); // Busca el registro por su ID
    console.log(area)
    if (area) {
      await area.update(body); // Actualiza los datos del registro con los nuevos datos
      res.send({ area }); // Envía la respuesta con el registro actualizado
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
    const dataArea  = req.body; // se obtiene el cuerpo de los datos que se ingresaran
    const datos = await Area.create(dataArea) //asignamos a la variable datos los valores obtenidos de la base de datos 
    res.status(200).send("creado exityosamente ")//se valida si se ingresan con exito
  } catch (error) {
   HanledError(res , "error al crear nueva area") // se llama la funcion de captura de errores
   }
};






/**
 * eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteArea =  async (req,res) => {

  try{
   
    const { cod_area } = req.params  //se usa de la destructuracion para extraer el valor de cod_Area del req
    console.log(cod_area)
    const deletedRows = await Area.destroy({   //se ejecuta la funcion de elimnar al modelo 
      where: {
        cod_area: cod_area  //se pasa el id
      }
    })
    if(deletedRows ==1) { // validar que se haya eliminado
      res.send("registro elimado exitosamnete")
      res.send({deletedRows})
      res.status(200)
    }
    else{
      res.send("error al borrar arae")
    }
   
  


  }catch(e){
    console.log(e)
    HanledError(res, "error en esa verga" )
  }


}




module.exports ={ getAreas,  getArea,  updateArea, createArea,  deleteArea }