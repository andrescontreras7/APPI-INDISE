const { Op } = require('sequelize');
const Acudientes = require( "../models/acudiente.js")
const  {HanledError} = require('../utils/CapError.js')
const _ = require('lodash');
const { EstudianteAcudiente } = require('../models/EstudianteAcudiente.js');





const getEstudianteAcudiente = async (req, res) => {

    try {
        const datos_activos = await EstudianteAcudiente.findAll({
        where: {
            activo: true
        }
        })

        res.status(200).json(datos_activos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Ocurrió un error al recuperar los registros"
        })
    }

}



  

module.exports = {
    getEstudianteAcudiente,
    
}