const AsignaturaDocente = require('../models/asignatura-docente');
const Asistencias_estudiantes = require('../models/asistencias_estudiantes');
const Clase = require('../models/clases');
const Estudiante = require('../models/estudiante');
const Grupo = require('../models/grupo');




const getClases = async (req, res) => {
    try {
      const clas = await Clase.findAll({
        where: { activo: true },
    
        include: [
            {
          model:Grupo
         
          
        },
        {
            model :AsignaturaDocente
        }
    ]
      });
  
      return res.status(200).json({
        success: true,
        data: clas,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: "Error del servidor",
      });
    }
  };
  
  const getAttendancePercentage = async (req, res) => {
    const { estudianteId, grupoId, asig } = req.body
  
    try {
   
      const totalClases = await Clase.count({
        where: {
         
          asignaturaDocenteId: asig,
          grupoId: grupoId
        }
      });
  
      if (totalClases === 0) {
        return res.status(200).json({ data: { porcentaje: 0 } });
      }
  
      // Obtener el total de asistencias del estudiante para el grupo y asignatura especificados
      const totalAsistencias = await Asistencias_estudiantes.count({
        where: {
            estudidfk: estudianteId,
       
        },
        include: [
          {
            model: Clase,
            where: {
              grupoId: grupoId,
              asignaturaDocenteId: asig,
            }
          }
        ]
      });
  
      // Calcular el porcentaje de asistencias
      const porcentajeAsistencia = (totalAsistencias / totalClases) * 100;
  
      return res.status(200).json({ data: { porcentaje: porcentajeAsistencia } });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: "Error del servidor",
      });
    }
  };


  const getAllASig = async (req, res) => {
    const { asig } = req.params;
  
    try {
      // Paso 1: Obtener el total de clases para la asignatura especificada
      const totalClases = await Clase.count({
        where: {
          asignaturaDocenteId: asig,
        }
      });
  
      // Paso 2: Verificar si no hay clases
      if (totalClases === 0) {
        return res.status(200).json({ data: { porcentaje: 0 } });
      }
  
      // Paso 3: Obtener el total de asistencias para la asignatura especificada
      const totalAsistencias = await Asistencias_estudiantes.count({
        where: {
          det_asi: true,
        },
        include: [
          {
            model: Clase,
            where: {
              asignaturaDocenteId: asig,
            }
          }
        ]
      });
  
      // Paso 4: Calcular el número total de posibles asistencias
      const posiblesAsistencias = totalClases * totalAsistencias;
  
      // Paso 5: Calcular el porcentaje de asistencias
      const porcentajeAsistencia = (totalAsistencias / posiblesAsistencias) * 100;
  
      // Devolver el porcentaje de asistencia
      return res.status(200).json({ data: { porcentaje: porcentajeAsistencia } });
    } catch (error) {
      console.log(error);
      // Manejar errores de manera más específica
      return res.status(500).json({
        success: false,
        error: "Error del servidor",
      });
    }
  };
  















  
  
  module.exports = {
    getClases,
    getAttendancePercentage,
    getAllASig
  };
  