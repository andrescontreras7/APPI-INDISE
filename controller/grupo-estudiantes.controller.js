const _ = require('lodash');
const  {HanledError} = require('../utils/CapError.js');
const { GrupoEstudiantes } = require('../models/grupo_estudiantes.js');
const Estudiante = require('../models/estudiante.js');
const Grupo = require('../models/grupo.js');





const getGrupoEstudiantes = async (req, res) => {
    try {
         let datos_activos = await GrupoEstudiantes.findAll({
            where:{
                activo: true
            }
         })
         res.status(200).json({data:datos_activos})

        
    } catch (error) {
        HanledError(error, "Error al obtener los grupos de estudiantes", 404)
    }
}

const createGrupoEstudiante = async (req, res) => {

    const {grupcod, estudid} = req.body

    try {
        if(_.isNil(grupcod) || _.isNil(estudid)){
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }

        const grupoData = await Grupo.findOne({
            where: {
                grupcod
            }
        })

        if(!grupoData){
            return res.status(400).json({ message: "El código de grupo ingresado no existe" });
        }

        const estudianteData = await Estudiante.findOne({
            where: {
                estudid
            }
        })

        if(!estudianteData){
            return res.status(400).json({ message: "El ID de estudiante ingresado no existe" });
        }

        const grupoEstudianteData = await GrupoEstudiantes.findOne({
            where: {
                grupcod,
                estudid
            }
        })

        if(grupoEstudianteData){
            return res.status(400).json({ message: "Los datos ya existen" });
        }

        await GrupoEstudiantes.create({
            grupcod,
            estudid
        })

        res.status(200).json({ message: "Grupo de estudiantes creado exitosamente" });

        
    } catch (error) {
        HanledError(error, "Error al crear el grupo de estudiantes", 404)
    }

}

























module.exports = {
    getGrupoEstudiantes,
    createGrupoEstudiante
}