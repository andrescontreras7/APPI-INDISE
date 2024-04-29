const  {HanledError} = require('../utils/CapError.js')
const Asistencias_estudiantes  = require("../models/asistencias_estudiantes.js")
const {Asignatura} = require("../models/areas.js")
const  Grado = require("../models/grado.js")

const Estudiante = require('../models/estudiante.js')


const getAsistencias_E = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const datos = await Asistencias_estudiantes.findAll({
            where: {
                activo: true
            },
            include: [
                {
                    model: Estudiante,
                    attributes: ['estudnombre', 'estudapellido']
                },
               
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.status(200).json({ data: datos });
    } catch (error) {
        HanledError(res, "error al obtener asistencias");
        console.log(error);
    }
};

const getFilterGrupo = async (req,res) =>{
    const {grupcod}  = req.params;
    console.log(grupcod)
    let datos = await Asistencias_estudiantes.findAll({
        where: {
            grupoFK: grupcod,
            activo: true
        },
        attributes: ['cod_asi','fec_asi','det_asi','estudidfk'],
        include : [
           {
            model: Grado,
            attributes: ['nombre_grado']
           },
           {
            model:Estudiante,
            attributes: ['estudnombre','estudapellido']
           }
        
        
        ]
     
    })
    if(datos){
        res.status(200).json({data:{datos}})
    }
    else{
        res.status(404).json({
            message: "No se encontraron registros"
        })
    }
    
   
}


module.exports = {getAsistencias_E, getFilterGrupo}