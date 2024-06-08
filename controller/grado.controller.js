const generarCodigo = require("../helpers/generarCodigo.js");
const Grado = require("../models/grado");

const { HanledError } = require("../utils/CapError.js");

const getGrados = async (req, res) => {
  try {
    const datos_activos = await Grado.findAll({
      where: { activo: true },
    });
    res.status(200).json({ data: datos_activos });
  } catch (e) {
    HanledError(res, "Error al recuperar los registros", 500);
    console.log(e);
  }
};

const getGrado = async (req, res) => {
  try {
    const { id } = req.params.id;
    const registro = await Grado.findOne({
      where: { grado_id: id },
      activo: { activo: true },
    });
    if (!registro) {
      return HanledError(res, "El registro no existe", 404);
    }
    res.status(200).json({ data: registro });
  } catch (e) {
    HanledError(res, "Error al recuperar el registro", 500);
  }
};

const createGrado = async (req, res) => {
  try {
    const { nombre_grado, descripcion, periodo_FK, año_escolar } = req.body;

    // Verificar si el grado ya existe
    const gradoData = await Grado.findOne({
      where: {
        nombre_grado: nombre_grado,
      },
    });

    if (!gradoData) {
      // Verificar si el periodo_FK existe
      const periodoData = await Periodo.findOne({
        where: {
          periodo_id: periodo_FK,
        },
      });

      if (!periodoData) {
        return res
          .status(404)
          .json({ success: false, message: "El ID del periodo ingresado no existe" });
      }

      const data = await Grado.create({
        nombre_grado: nombre_grado,
        descripcion: descripcion,
        periodo_FK: periodo_FK,
        año_escolar: año_escolar,
        grado_id:generarCodigo()
      });

      res.status(201).json({ success: true, message: "Grado creado exitosamente", data: data });
    } else {
      res.status(409).json({ success: false, message: "El grado ya existe" });
    }
  } catch (error) {
    console.error("Error al crear el grado:", error);
    handleError(res, "Error interno del servidor", error, 500);
  }
};

module.exports = {
  getGrados,
  getGrado,
  createGrado,
};
