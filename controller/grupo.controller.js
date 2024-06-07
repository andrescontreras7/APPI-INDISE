const { handleError } = require("../utils/CapError.js");
const Grupo = require("../models/grupo.js");
const _ = require("lodash");
const { where } = require("sequelize");
const Grado = require("../models/grado.js");
const AsignaturaDocente = require("../models/asignatura-docente.js");
const Estudiante = require("../models/estudiante.js");

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
const createGrupo = async (req, res) => {
  try {
    const { grupcod, grado_FK, grupsalon, directorFK } = req.body;

    const grupoData = await Grupo.findOne({
      where: {
        grupcod: grupcod,
      },
    });

    if (!grupoData) {
      // Verificar si el grado_FK existe
      const gradoData = await Grado.findOne({
        where: {
          gradocod: grado_FK,
        },
      });

      if (!gradoData) {
        return res
          .status(400)
          .json({ message: "El ID del grado ingresado no existe" });
      }

      const data = await Grupo.create({
        grupcod: grupcod,
        grupperiodo: grupperiodo,
        grupgrado: grupgrado,
        grupsalon: grupsalon,
        directorFK: directorFK,
        grado_FK: grado_FK,
      });

      res.status(200).json({ data: "creado exitosamente " });
    } else {
      res.status(400).json({ data: " IS ALREADY EXIST " });
    }
  } catch (error) {
    HanledError(res, "error:", error, 404);
  }
};

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
