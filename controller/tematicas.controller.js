const { handleError } = require("../utils/CapError.js");
const Tematica = require("../models/tematicas.js");

const AsignaturaDocente = require("../models/asignatura-docente.js");
const generarCodigo = require("../helpers/generarCodigo.js");
const { Asignatura } = require("../models/areas.js");
const Funcionario = require("../models/funcionario.js");
const Grupo = require("../models/grupo.js");

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
    const { asigcod, docId, grupCod } = req.params;

    // Validar que los IDs existen en sus respectivos modelos
    const asignatura = await Asignatura.findOne({ where: { asigcod } });
    if (!asignatura) {
      return res.status(404).json({ success: false, message: "Asignatura no encontrada" });
    }

    const docente = await Funcionario.findOne({ where: { funcid: docId } });
    if (!docente) {
      return res.status(404).json({ success: false, message: "Docente no encontrado" });
    }

    const grupo = await Grupo.findOne({ where: { grupcod: grupCod } });
    if (!grupo) {
      return res.status(404).json({ success: false, message: "Grupo no encontrado" });
    }

    // Obtener las temáticas asociadas a la asignaturaDocente
    const tematicas = await AsignaturaDocente.findAll({
      where: { asignaturaAsigcod: asigcod, funcionarioFuncid: docId, grupoFk: grupCod },
      include: {
        model: Tematica,
        where: { activo: true },
      },
    });

    res.status(200).json({ success: true, data: tematicas });
  } catch (error) {
    console.error("Error al obtener temáticas por asignatura:", error);
    res.status(500).json({ success: false, message: "Error al obtener temáticas por asignatura" });
  }
};




module.exports = {
  getTematica,
  createTematica,
  updateTematica,
  deleteTematica,
  getTematicaByAsignatura,
};
