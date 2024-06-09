const { Asignatura } = require("../models/areas");
const AsignaturaEstudiante = require("../models/asignaturas_estudiantes");
const Estudiantes = require("../models/estudiante");

const getAllInformation = async (req, res) => {
  try {
    const asig_est = await AsignaturaEstudiante.findAll({
      where: { activo: true },
  
      include: [{
        model: Estudiantes,
        attributes: { exclude: ["activo", "createdAt", "updatedAt", "password"] },
        
      }]
    });

    return res.status(200).json({
      success: true,
      data: asig_est,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};



const getInformationById = async (req, res) => {
  try {
    const { id, } = req.params; // Obtenemos el id de la asignatura desde los parámetros de la ruta

    const asig_est = await AsignaturaEstudiante.findOne({
      where: { asignaturaId: id, activo: true }, 
  
      include: [{
        model: Estudiantes,
        attributes: { exclude: [ "createdAt", "updatedAt", "password"] },

        model: Asignatura,
      }]
    });

    if (!asig_est) { // Si no se encuentra la asignatura, retornamos un error
      return res.status(404).json({
        success: false,
        error: "Asignatura no encontrada",
      });
    }

    return res.status(200).json({
      success: true,
      data: asig_est,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

const getAsignaturasByEstudianteId = async (req, res) => {
  try {
    const { estudid } = req.params; 

    const asignaturas = await AsignaturaEstudiante.findAll({
      where: { estudianteId: estudid },
      include: [{
        model: Asignatura,
        attributes: { exclude: ["activo", "createdAt", "updatedAt"] },
        
      }]
    });

    if (!asignaturas) { 
      return res.status(404).json({
        success: false,
        error: "Asignaturas no encontradas para el estudiante especificado",
      });
    }

    return res.status(200).json({
      success: true,
      data: asignaturas,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};






module.exports = {
    getAllInformation,
    getInformationById,
    getAsignaturasByEstudianteId
    
}


