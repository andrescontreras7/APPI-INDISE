const generarCodigo = require("../helpers/generarCodigo.js");
const Grado = require("../models/grado");

const { handleError } = require("../utils/CapError.js");

const getGrados = async (req, res) => {
  try {
    const datos_activos = await Grado.findAll({
      where: { activo: true },
    });
    res.status(200).json({success:true, data: datos_activos });
  } catch (e) {
    handleError(res, "Error al recuperar los registros", 500);
    console.log(e);
  }
};

const getGrado = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await Grado.findOne({
      where: { grado_id: id },
      activo: { activo: true },
    });
    if (!registro) {
      return handleError(res, "El registro no existe", 404);
    }
    res.status(200).json({ data: registro });
  } catch (e) {
    handleError(res, "Error al recuperar el registro", 500);
    console.log(e);
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

const updateGrado = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_grado, descripcion, periodo_FK, año_escolar } = req.body;

    // Verificar si el grado existe
    const grado = await Grado.findOne({
      where: { grado_id: id },
    });

    if (!grado) {
      return handleError(res, "El registro no existe", 404);
    }

    // Verificar si el nuevo periodo_FK existe, si se proporciona
    if (periodo_FK) {
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
    }

    // Actualizar el grado
    await Grado.update(
      {
        nombre_grado,
        descripcion,
        periodo_FK,
        año_escolar,
      },
      {
        where: { grado_id: id },
      }
    );

    res.status(200).json({ success: true, message: "Grado actualizado exitosamente" });
  } catch (error) {
    console.error("Error al actualizar el grado:", error);
    handleError(res, "Error interno del servidor", 500);
  }
};

module.exports = {
  getGrados,
  getGrado,
  createGrado,
  updateGrado,
};


