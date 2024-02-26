const {Asignatura , Area} = require("../models/areas")
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
            include: Area,
             // Incluye la tabla Area en la consulta
          });
          res.send({data})
          console.log(data)
          
    }catch(e){
        HanledError(res , "Eror al obtener las asignaturas mi pana " )

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
try{
    const {asigcod, ...body} = req.params

    const   data    = await Asignatura.findByPk(asigcod)
    res.send(data)
    
}catch(e){
    HanledError(res , "error al crear asignatura")
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