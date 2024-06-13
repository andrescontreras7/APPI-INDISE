const generarCodigo = require("../helpers/generarCodigo");
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
    const { id, } = req.params; 

    const asig_est = await AsignaturaEstudiante.findOne({
      where: { asignaturaId: id, activo: true }, 
  
      include: [{
        model: Estudiantes,
        }
        , {
       

        model: Asignatura,
      }]
    });

    if (!asig_est) { 
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

    const id_est = await Estudiantes.findByPk(estudid);
    if (!id_est) {
      return res.status(404).json({
        success: false,
        error: "Estudiante no encontrado",
      });
    }

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

const createAsignaturaEstudiante = async (req, res) => {
  try {
    const { estudianteId, asignaturaId } = req.body;

    // Verificar si la asignatura existe
    const asignatura = await Asignatura.findByPk(asignaturaId);
    if (!asignatura) {
      return res.status(404).json({
        success: false,
        error: "Asignatura not found",
      });
    }

    // Verificar si el estudiante existe
    const estudiante = await Estudiantes.findByPk(estudianteId);
    if (!estudiante) {
      return res.status(404).json({
        success: false,
        error: "Estudiante no encontrado",
      });
    }

    const asig_est = await AsignaturaEstudiante.create({
      estudianteId,
      id:generarCodigo(),
      asignaturaId,

    });

    return res.status(201).json({
      success: true,
      data: asig_est,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

const updateAsignaturaEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const { estudianteId, asignaturaId } = req.body;

    // Verificar si la asignatura existe si se proporciona en el cuerpo de la solicitud
    if (asignaturaId) {
      const asignatura = await Asignatura.findByPk(asignaturaId);
      if (!asignatura) {
        return res.status(404).json({
          success: false,
          error: "Asignatura no encontrada",
        });
      }
    }

    // Verificar si el estudiante existe si se proporciona en el cuerpo de la solicitud
    if (estudianteId) {
      const estudiante = await Estudiantes.findByPk(estudianteId);
      if (!estudiante) {
        return res.status(404).json({
          success: false,
          error: "Estudiante no encontrado",
        });
      }
    }

    // Actualizar la asignatura del estudiante
    const [updated] = await AsignaturaEstudiante.update(req.body, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: "No se pudo actualizar la asignatura del estudiante",
      });
    }

    // Obtener la asignatura del estudiante actualizada
    const updatedAsignaturaEstudiante = await AsignaturaEstudiante.findOne({ where: { id } });

    return res.status(200).json({
      success: true,
      data: updatedAsignaturaEstudiante,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

const deleteAsignaturaEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const asigE = await AsignaturaEstudiante.findOne({ where: { id: id } });

    if (!asigE) {
      return res
        .status(404)
        .json({ success:false, message: "No se encontró la area con el código proporcionado" });
    }

  
    await AsignaturaEstudiante.update(
      { activo: false },
      {
        where: {
          id,
          activo: true,
        },
      }
    );

    res.status(200).json({ success:true, message: "Registro eliminado exitosamente" });
    

    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success:true,message: "Ocurrió un error al eliminar el registro" });
  }
};

module.exports = {
  getAllInformation,
  getInformationById,
  getAsignaturasByEstudianteId,
  createAsignaturaEstudiante,
  updateAsignaturaEstudiante,
  deleteAsignaturaEstudiante
};