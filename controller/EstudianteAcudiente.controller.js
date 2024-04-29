
const Acudientes = require( "../models/acudiente.js")
const  {HanledError} = require('../utils/CapError.js')
const _ = require('lodash');
const { EstudianteAcudiente } = require('../models/estudiante_acudiente.js');
const Estudiante = require('../models/estudiante.js');





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

const createAcudienteEstudiante = async (req, res) => {

    const {estudianteEstudid, acudienteIdAcu}= req.body

    try {
        if(_.isNil(estudianteEstudid) || _.isNil(acudienteIdAcu)){
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }

        const  acudienteData = await Acudientes.findOne({
            where: {
                acudienteIdAcu
            }
        })

        if(!acudienteData){
            return res.status(400).json({ message: "El código de acudiente ingresado no existe" });
        }

        const estudianteData = await Estudiante.findOne({
            where: {
                estudianteEstudid
            }
        })

        if(!estudianteData){
            return res.status(400).json({ message: "El ID de estudiante ingresado no existe" });
        }

        const Data = await EstudianteAcudiente.findOne({
            where: {
                estudianteEstudid,
                acudienteIdAcu
            }
        })

        if(Data){
            return res.status(409).json({ message: "Los datos ya existen" });
        }

        await EstudianteAcudiente.create({
            estudianteEstudid,
            acudienteIdAcu
        })

        res.status(200).json({ message: "Datos creados exitosamente" });

        
    } catch (error) {
        HanledError(error, "Error al crear el grupo de estudiantes", 500)
    }

}

  

module.exports = {
    getEstudianteAcudiente,
    createAcudienteEstudiante
    
}

