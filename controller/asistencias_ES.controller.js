const  {handleError} = require('../utils/CapError.js')
const Asistencias_estudiantes  = require("../models/asistencias_estudiantes.js")
const {Asignatura} = require("../models/areas.js")
const  Grado = require("../models/grado.js")

const Estudiante = require('../models/estudiante.js')
const generarCodigo = require('../helpers/generarCodigo.js')
const AsignaturaDocente = require('../models/asignatura-docente.js')
const Grupo = require('../models/grupo.js')


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
                {
                    model: Asignatura,
                    attributes: ['asignombre']
                }
               
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });
        res.status(200).json({ data: datos });
    } catch (error) {
        handleError(res, "error al obtener asistencias");
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

const createAsistencia_E = async (req, res) => {
    try {
        const { cod_asi, fec_asi, det_asi, estudidfk, grupoFK, asigFk, claseFK} = req.body;

        const estudiante = await Estudiante.findByPk(estudidfk);
        if (!estudiante) {
            return res.status(404).json({ error: "Estudiante no encontrado" });
        }

        // Validar que el grupo exista
        const grupo = await Grupo.findByPk(grupoFK);
        if (!grupo) {
            return res.status(404).json({ error: "Grupo no encontrado" });
        }

        // Validar que la asignatura exista
        const asignatura = await AsignaturaDocente.findOne({
            where: {
                asignaturaAsigcod: asigFk,
             
            }
        });
        if (!asignatura) {
            return res.status(404).json({ error: "Asignatura no encontrada" });
        }

        const newAsistencia = await Asistencias_estudiantes.create({
            cod_asi:generarCodigo(),
            fec_asi,
            det_asi,
            estudidfk,
            grupoFK,
            asigFk,
            claseFK
        });

        res.status(201).json({ data: newAsistencia });
    } catch (error) {
        handleError(res, "Error al crear asistencia");
        console.log(error);
    }
};

  const updateAsistencias = async (req, res) => {
    try {
      const { grupcod } = req.params;
      const body = req.body;
  
      const grupos = await Asistencias_estudiantes.findOne({
        where: {
          grupcod: grupcod,
        },
      });
  
      if (!grupos) {
        return res.status(404).json({ error: "Registro no encontrado" });
      }
  
      await Grupo.update(body, {
        where: {
          grupcod: grupcod,
        },
      });
      return res.status(200).json({ message: "Registro actualizado" });
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
      return res.status(500).json({ error: "Error al actualizar el registro" });
    }
  };



  const getAsistenciasPorGrupoYAsignatura = async (req, res) => {
    try {
        const { grupcod, asigcod } = req.params;

        const datos = await Asistencias_estudiantes.findAll({
            where: {
                grupoFK: grupcod,
                asigFk: asigcod,
                activo: true
            },
            include: [
                {
                    model: Estudiante,
                    attributes: ['estudnombre', "estudid",  'estudapellido']
                },
                {
                    model: Asignatura,
                    attributes: ['asignombre']
                }
            ],
            attributes: ['cod_asi', 'fec_asi', 'det_asi', 'estudidfk']
        });

        if (datos.length > 0) {
            res.status(200).json({ data: datos });
        } else {
            res.status(404).json({ message: "No se encontraron registros" });
        }
    } catch (error) {
        handleError(res, "Error al obtener asistencias");
        console.log(error);
    }
};

module.exports = { getAsistencias_E, getFilterGrupo, createAsistencia_E, getAsistenciasPorGrupoYAsignatura };
 


