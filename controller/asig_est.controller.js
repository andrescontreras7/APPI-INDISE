const { Asignatura } = require("../models/areas");
const AsignaturaEstudiante = require("../models/asignaturas_estudiantes");
const Estudiantes = require("../models/estudiante");

const getAllInformation = async (req, res) => {
  try {
    const asig_est = await Asignatura.findAll({
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
    const { id } = req.params; // Obtenemos el id de la asignatura desde los parámetros de la ruta

    const asig_est = await Asignatura.findOne({ // Cambiamos findAll por findOne para obtener una sola asignatura
      where: { asigcod: id, activo: true }, // Agregamos la condición para buscar por id
  
      include: [{
        model: Estudiantes,
        attributes: { exclude: [ "createdAt", "updatedAt", "password"] },
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
module.exports = {
    getAllInformation,
    getInformationById
}

