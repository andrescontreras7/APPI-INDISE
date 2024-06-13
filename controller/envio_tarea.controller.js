const generarCodigo = require('../helpers/generarCodigo');
const Envio = require('../models/envio_tareas');
const Estudiante = require('../models/estudiante');
const Evaluaciones = require('../models/evaluaciones');

const getEnvio = async (req, res) => {
  try {
    const envio_tareas = await Envio.findAll({
      where : {activo : true},
    });

    return res.status(200).json({
      success: true,
      data: envio_tareas
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Error del servidor',
    });
  }
};

const createEnvio = async (req, res) => {

  try {

    const {id_estudiante, id_tarea, fec_envio , url, descripcion, nota } = await req.body
    const Estud  = await Estudiante.findOne({where: {estudid: id_estudiante}})
    if (!Estud) {
      return res.status(404).json({ success:false, message: "El estudiante no existe." });
    }

    const tarea  = await Evaluaciones.findOne({where: {codigo: id_tarea}})
    if (!tarea) {
      return res.status(404).json({success:false, message: "La tarea no existe." });
    }
    const envio = await Envio.create({
      id_estudiante,
      id_tarea,
      url,
      descripcion,
      fec_envio,
      nota
    
    })
   
    return res.status(201).json({
      success: true,
      message: envio
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Error del servidor',
    });
  }
};

const updateEnvio = async (req, res) => {
  try {
    const { id } = req.params;
    const envio = await Envio.findOne({
      where: {
        uid: id,
      },
    });

    if (!envio) {
      return res
        .status(404)
        .json({ success: false, message: "Registro no encontrado" });
    }

    // Verificar si el nuevo grado_FK existe solo si se proporciona
    if (req.body.id_estudiante) {
      const { id_estudiante } = req.body;
      const esdata = await Estudiante.findOne({
        where: {
          estudid: id_estudiante,
        },
      });

      if (!esdata) {
        return res
          .status(404)
          .json({ success: false, message: "El ID del estudiante ingresado no existe" });
      }
    }
    if (req.body.id_tarea) {
      const { id_tarea } = req.body;
      const tar = await Evaluaciones.findOne({
        where: {
          codigo: id_tarea,
        },
      });

      if (!tar) {
        return res
          .status(404)
          .json({ success: false, message: "El ID de la evaluacion ingresado no existe" });
      }
    }

    await Envio.update(req.body, {
      where: {
        uid: id,
      },
    });
    return res
      .status(200)
      .json({ success: true, message: "Registro actualizado" });
  } catch (error) {
    console.error("Error al actualizar el registro:", error);
    return res.status(500).json({ error: "Error al actualizar el registro" });
  }
};

const deleteEnvio = async (req, res) => {
  try {
    const { id } = req.params;

  
    const evData = await Envio.findOne({
      where: {
        uid: id,
      },
    });

    if (!evData) {
      return res
        .status(404)
        .json({ success: false, message: "En id de envio no existe" });
    }

    await Envio.update(
      { activo: false },
      {
        where: {
          uid: id,
        },
      }
    );

    res
      .status(200)
      .json({ success: true, message: "envio eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la evaluación:", error);
    handleError(res, "Error interno del servidor", error, 500);
  }
};
const getEnvioById = async (req, res) => {
  try {
    const { id } = req.params;
    const envio = await Envio.findOne({
      where: { id: id, activo: true }
    });

    if (!envio) {
      return res.status(404).json({
        success: false,
        error: 'No se encontró el envío',
      });
    }

    return res.status(200).json({
      success: true,
      data: envio
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Error del servidor',
    });
  }
};


module.exports = {
  getEnvioById,
  getEnvio,
  createEnvio,
  updateEnvio,
  deleteEnvio
}