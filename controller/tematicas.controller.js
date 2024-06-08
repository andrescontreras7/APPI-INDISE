const { handleError } = require("../utils/CapError.js");
const Tematica = require("../models/tematicas.js");

const AsignaturaDocente = require("../models/asignatura-docente.js");
const generarCodigo = require("../helpers/generarCodigo.js");

const getTematica = async (req, res) => {
  try {

    const tematicas = await Tematica.findAll({
      where: { activo: true },
    });

    res.status(200).json(tematicas);
  } catch (error) {
    handleError(res, "Error al obtener temáticas", 404);
    console.error(error);
  }
};

const createTematica = async (req, res) => {
  try {
    const { titulo, descripcion, asignatura_cod } = req.body;
   
    const lol = parseInt(asignatura_cod);

    
    const Asig = await AsignaturaDocente.findAll({
      where: {
        asignaturaAsigcod: lol,
      },
    });

    if (!Asig) {
      return res
        .status(400)
        .json({ message: "la Asignatura especificado no existe" });
    }

    const tematica = await Tematica.create({
      titulo: titulo,
      descripcion: descripcion,
      asignatura_cod: asignatura_cod,
      id:generarCodigo()
    });

    res.status(200).json({ message: "Tema creado exitosamente", data: tematica });
  } catch (error) {
    console.error("Error al crear tema:", error);
    handleError(res, "Error al crear tema:", 404);
  }
};

const updateTematica = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const tematica = await Tematica.findByPk(id);

    if (!tematica) {
      return res.status(404).json({ error: "Tema no encontrado" });
    }

    await tematica.update(body);

    res.status(200).json({ message: "Tema actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar tema:", error);
    res.status(500).json({ error: "Error al actualizar tema" });
  }
};

const deleteTematica = async (req, res) => {
  try {
    const { id } = req.params;

    const tematica = await Tematica.findByPk(id);

    if (!tematica) {
      return res.status(404).json({ error: "Tema no encontrado" });
    }

    // En lugar de eliminar, actualizamos el campo "activo" a false
    await tematica.update({ activo: false });

    res.status(200).json({ message: "Tema marcado como inactivo correctamente" });
  } catch (error) {
    console.error("Error al marcar tema como inactivo:", error);
    res.status(500).json({ error: "Error al marcar tema como inactivo" });
  }
};



const getTematicaByAsignatura = async (req, res) => {
  try {
    const { asigcod, docId, grupCod } = req.body;

    // Verificar si existe la asignaturaDocente
    const asignaturaDocente = await AsignaturaDocente.findOne({
      where: { asignaturaAsigcod: asigcod, funcionarioFuncid: docId, grupoFK: grupCod },
    });

    if (!asignaturaDocente) {
      return res.status(400).json({ message: "La combinación de asignatura, docente y grupo no existe" });
    }

    // Obtener las temáticas asociadas a la asignaturaDocente
    const tematicas = await Tematica.findAll({
      where: { asignatura_cod: asignaturaDocente.id },
    });

    res.status(200).json(tematicas);
  } catch (error) {
    console.error("Error al obtener temáticas por asignatura:", error);
    handleError(res, "Error al obtener temáticas por asignatura", 404);
  }
};

module.exports = {
  getTematicaByAsignatura,
};



module.exports = {
  getTematica,
  createTematica,
  updateTematica,
  deleteTematica,
};
