const { Op } = require("sequelize");
const Excusas = require("../models/excusas.js");
const { handleError } = require("../utils/CapError.js");
const _ = require("lodash");
const Estudiante = require("../models/estudiante.js");
const Asistencias_estudiantes = require("../models/asistencias_estudiantes.js");

const getExcusas = async (req, res) => {
  try {
    const datos_activos = await Excusas.findAll({
      where: {
        activo: true,
      },
      attributes  : ['cod_exc', 'fec_reg_exc', 'mot_reg_exc', 'id_persona'],
    });

    res.status(200).json(datos_activos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Ocurrió un error al recuperar los registros",
    });
  }
};

const getExcusaDetail = async (req, res) => {
  try {
    const { cod_exc } = req.params;
    const excusa = await Excusas.findOne({
      where: {
        cod_exc: cod_exc,
        activo: true,
      },
    });

    if (!excusa) {
      return res
        .status(404)
        .json({
          message: "No se encontró la excusa con el código proporcionado",
        });
    }

    res.status(200).json(excusa);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Ocurrió un error al recuperar el registro",
    });
  }
};

const createExcusas = async (req, res) => {
  try {
    const {  fec_reg_exc, mot_reg_exc, id_persona, asistenciaFK,url_archivo } = req.body;


    const AsisDta = await Asistencias_estudiantes.findOne({
      where: {
        cod_asi:  asistenciaFK ,
      },
    });
    if (!AsisDta) {
      return res
       .status(409)
       .json({ message: "El id de la asistencia no existe. " });
    }

    const excusaData = await Estudiante.findOne({
      where: {
        estudid:  id_persona ,
      },
    });
    if (!excusaData) {
      return res
        .status(409)
        .json({ message: "El id de la persona no existe. " });
    }
    await Excusas.create({
    
      fec_reg_exc,
      mot_reg_exc,
      id_persona,
      asistenciaFK,
      url_archivo
    
    });
    res.status(200).json({ message: "Registro creado exitosamente" });
  } catch (error) {
    handleError(res, "Error al crear el registro", 400);
    console.log(error);
  }
};

const deletedExcusas = async (req, res) => {
  try {
    const { cod_exc } = req.params;
    const excusa = await Excusas.findOne({ where: { cod_exc: cod_exc } });

    if (!excusa) {
      return res
        .status(404)
        .json({ message: "No se encontró la excusa con el código proporcionado" });
    }

    const estudiante = await Estudiante.findOne({ where: { estudid: excusa.id_persona } });

    if (!estudiante) {
      return res
        .status(409)
        .json({ message: "El id de la persona no existe" });
    }

    await Excusas.update(
      { activo: false },
      {
        where: {
          cod_exc: cod_exc,
          activo: true,
        },
      }
    );

    res.status(200).json({ message: "Registro eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ocurrió un error al eliminar el registro" });
  }
};

const updateExcusa = async (req, res) => {
  try {
    const { cod_exc } = req.params;
    const { fec_reg_exc, mot_reg_exc, id_persona } = req.body;

    const excusa = await Excusas.findOne({
      where: {
        cod_exc: cod_exc,
        activo: true,
      },
    });

    if (!excusa) {
      return res
        .status(404)
        .json({
          message: "No se encontró la excusa con el código proporcionado",
        });
    }

    await Excusas.update(
      {
        fec_reg_exc,
        mot_reg_exc,
        id_persona,
    
      },
      {
        where: {
          cod_exc: cod_exc,
        },
      }
    );

    res.status(200).json({ message: "Excusa actualizada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Ocurrió un error al actualizar el registro",
    });
  }
};

module.exports = {
  getExcusas,
  createExcusas,
  deletedExcusas,
  getExcusaDetail,
  updateExcusa,
};
