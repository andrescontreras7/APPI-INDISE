const { handleError } = require("../utils/CapError.js");

const _ = require("lodash");
const {Grupo, Estudiante} = require("../models/index.js");
const Grado = require("../models/grado.js");
const AsignaturaDocente = require("../models/asignatura-docente.js");
const generarCodigo = require("../helpers/generarCodigo.js");

const getGrupo = async (req, res) => {
  try {
    const data = req.body;

    const datos = await Grupo.findAll({
      where: data,
    
    });
    res.status(200).json(datos);
  } catch (error) {
    handleError(res, "error al obtener grupos", 404);
    console.log(error);
  }
};
/**
 *  crear grupo
 * @param {} req
 * @param {*} res
 */

const updateGrupo = async (req, res) => {
  try {
    const { grupcod } = req.params;
    const body = req.body;

    const grupos = await Grupo.findOne({
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
const createGrupo = async (req, res) => {
  try {
    const { grado_FK, grupsalon, directorFK, grupperiodo, grupgrado } = req.body;

    // Verificar si el grupo ya existe
    const grupoData = await Grupo.findOne({
      where: {
        grado_FK: grado_FK,
        directorFK: directorFK
      },
    });

    if (!grupoData) {
      // Verificar si el grado_FK existe
      const gradoData = await Grado.findOne({
        where: {
          grado_codigo: grado_FK,
        },
      });

      if (!gradoData) {
        return res
          .status(404)
          .json({ success: false, message: "El ID del grado ingresado no existe" });
      }

      const data = await Grupo.create({
        grupcod: generarCodigo(),
        grupperiodo: grupperiodo,
        grupgrado: grupgrado,
        grupsalon: grupsalon,
        directorFK: directorFK,
        grado_FK: grado_FK,
      });

      res.status(201).json({ success: true, message: "Grupo creado exitosamente", data: data });
    } else {
      res.status(409).json({ success: false, message: "El grupo ya existe" });
    }
  } catch (error) {
    console.error("Error al crear el grupo:", error);
    handleError(res, "Error interno del servidor", 500);
  }
};

const deleteGrupo = async (req, res) => {};



const getAllGrupo = async (req, res) => {
  try {
    const { id_asig,grupo } = req.params;
    const gru = await Grupo.findOne({
      where: {
        grupcod: grupo,
      },
    });
    if (!gru) {
        return res.status(404).json({
          success: false,
          error: 'grupo no encontrado'
        });
      }

    const grupos = await AsignaturaDocente.findAll({
      where: {
        asignaturaAsigcod: id_asig,
        grupoFK: grupo,
      },

      
      
      include: [
        {
          model: Grupo,
          attributes: ["grupcod", "grupsalon", "directorFK", "grado_FK"],
          include: {
            model: Estudiante,
            attributes: ['estudnombre', 'estudapellido'],
          }
        }
      ],
    });

    
    return res.status(200).json({
      success: true,
      data: grupos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

module.exports = {
  getGrupo,
  updateGrupo,
  createGrupo,
  deleteGrupo,
  getAllGrupo,
};
