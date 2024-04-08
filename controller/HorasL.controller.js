const  {HanledError} = require('../utils/CapError.js')
const _ = require('lodash');
const HorasLaboradas = require('../models/horasLaboradas.js');



const getHoras = async (req,res) =>{

    try {
        const datos_activos = await HorasLaboradas.findAll({
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



module.exports = {getHoras}