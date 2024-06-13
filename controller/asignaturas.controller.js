const generarCodigo = require("../helpers/generarCodigo.js");

const { Area, Asignatura } = require("../models/areas");
const AsignaturaDocente = require("../models/asignatura-docente.js");

const { handleError } = require("../utils/CapError.js");
const _ = require("lodash");

/**
 * obtener usuarios de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getAsignaturas = async (req, res) => {
  try {
    const data = await Asignatura.findAll({
      where: { activo: true },
      include: [Area],
    });
    res.json({
      success: true,
      message: "Asignaturas obtenidas con éxito",
      data,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ success: false, message: "Error al obtener las asignaturas" });
  }
};

/**
 *obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getAsignatura = async (req, res) => {
  try {
    const { asigcod } = req.params;
    const data = await Asignatura.findOne({
      where: {
        asigcod: asigcod,
        activo: true,
      },
    });
    if (data) {
      res
        .status(200)
        .json({
          success: true,
          message: "Asignatura obtenida con éxito",
          data,
        });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Asignatura no encontrada" });
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ success: false, message: "Error al obtener la asignatura" });
  }
};

/**
 * actulizar un registro pa
 * @param {*} req
 * @param {*} res
 */
const updateAsignaturas = async (req, res) => {
  try {
    const body = req.body;
    const { asigcod } = req.params; // Obtén el ID y los nuevos datos del cuerpo de la solicitud

    const area = await Asignatura.findByPk(asigcod);
    // Busca el registro por su ID
    console.log(body);
    if (area) {
      await area.update(body); // Actualiza los datos del registro con los nuevos datos
      res
        .status(200)
        .json({ success: true, message: "Registro actualizado exitosamente" }); // Envia la respuesta con el registro actualizado
    } else {
      res
        .status(404)
        .json({ success: false, message: "Registro no encontrado" }); // Envía una respuesta de error si el registro no existe
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error al actualizar el registro" }); // Envía una respuesta de error si ocurre alguna excepción
  }
};

/**
 * insertar un registro perro hpt
 * @param {*} req
 * @param {*} res
 */
const createAsignaturas = async (req, res) => {
  try {
    const { asignombre, asigdescripcion, areaFK, url } = req.body;

    /*const Area = await Area.findOne({
      where: {
        cod_area: areaFK
      }
    })
    if (!Area) {
      return res.status(400).json({ 
        success: false,
        message: "El area especificado no existe"
      });
    } */

    const Info = await Asignatura.create({
      asignombre,
      asigdescripcion,
      areaFK,
      url,
      asigcod: generarCodigo(),
    });
    return res.status(201).json({
      success: true,
      message: "Asignatura creada exitosamente",
      data: Info,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error al crear la asignatura",
    });
  }
};

/**
 * eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteAsignaturas = async (req, res) => {
  try {
    const { asigcod } = req.params;

    const asig_estado = await Asignatura.findOne({
      where: {
        asigcod: asigcod,
        activo: true,
      },


    });
    if (!asig_estado) {
      return res.status(404).json({
        success: false,
        message: "Asignatura no encontrada",
      });
    }



    const verfify = await AsignaturaDocente.findOne({
      where: {
        asignaturaAsigcod: asigcod,
      },
    });
    if (verfify) {
      return res.status(403).json({
        success: false,
        message: "La asignatura está asignada a un docente",
      });
    }

    const deletedA = await Asignatura.update(
      { activo: false }, // Marcamos el registro como inactivo
      {
        where: {
          asigcod: asigcod,
          activo: true, // Aseguramos que el registro esté activo antes de marcarlo como inactivo
        },
      }
    );

    if (deletedA) {
      res.status(200).json({ message: "Registro eliminado exitosamente" });
    } else {
      res.status(404).send("Registro no encontrado o ya eliminado");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el registro" });
  }
};

module.exports = {
  getAsignaturas,
  getAsignatura,
  updateAsignaturas,
  createAsignaturas,
  deleteAsignaturas,
};
