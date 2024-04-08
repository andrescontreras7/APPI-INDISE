const  {HanledError} = require('../utils/CapError.js')
const Asistencias_estudiantes  = require("../models/asistencias_estudiantes.js")



const getAsistencias_E = async (req,res) =>{
   
try {
    
    const data = req.body;
    console.log(data)
    const datos = await Asistencias_estudiantes.findAll(data)
    res.status(200).json({data:{datos}})
    
} catch (error) {
    HanledError(error,"error al obtener asistencias", 404)
    console.log(error)
    
}


}


module.exports = {getAsistencias_E}




