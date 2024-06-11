const { Op } = require('sequelize');
const Acudientes = require("../models/acudiente.js")
const { handleError } = require('../utils/CapError.js')
const _ = require('lodash');

const getAcudientes = async (req, res) => {
  try {
    const datos_activos = await Acudientes.findAll({
      where: {
        activo: true
      }
    })


    return res.status(200).json(datos_activos), ({
      success: true,
      message: "Datos recuperados exitosamente",
      data: datos_activos
    });
  } catch (error) {
    console.error(error)
    handleError(res, 'Ocurrió un error al recuperar los datos', 500);
  }
}

const getAcudienteDetail = async (req, res) => {
  try {
    const { id_acu } = req.params;

    if (!id_acu) {
      return res.status(400).json({
        success: false,
        message: "El ID del acudiente no puede estar vacío",
      });
    }

    const acudienteData = await Acudientes.findOne({
      where: {
        id_acu: id_acu,
        activo: true
      }
    });

    if (acudienteData) {
      return res.status(200).json({
        success: true,
        message: "Datos recuperados exitosamente",
        data: acudienteData
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Acudiente no encontrado",
      });
    }
  } catch (error) {
    console.error(error);
    handleError(res, "Ocurrió un error al recuperar los datos", 500);
  }
};

const createAcudientes = async (req, res) => {
  try {
    const { id_acu, nom_acu, ape_acu, corr_acu, tel_acu } = req.body;

    const acudienteData = await Acudientes.findOne({
      where: {
        [Op.or]: [{ id_acu }, { corr_acu }]
      }
    });

    if (acudienteData) {
      return res.status(409).json({
        success: false,
        message: "El correo o el ID ya existen",
        data: { id_acu, corr_acu }
      });
    }

    const newAcudiente = await Acudientes.create({
      id_acu,
      nom_acu,
      ape_acu,
      corr_acu,
      tel_acu
    });

    return res.status(201).json({
      success: true,
      message: "Registro creado exitosamente",
    
    });
  } catch (error) {
    console.error(error);
    handleError(res, "Error al crear registro", 500);
  }
};

const deletedAcudientes = async (req, res) => {
  try {
    const { id_acu } = req.params;

    const boorarAcudiente = await Acudientes.update(
      { activo: false }, // Marcamos el registro como inactivo
      {
        where: {
          id_acu: id_acu,
          activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
        }
      }
    );

    if (boorarAcudiente[0] > 0) {
      res.status(200).json({
        success: true,
        message: "Registro eliminado exitosamente"
      })
    } else {
      res.status(404).json({
        success: false,
        message: "Registro no encontrado"
      });
    }
  } catch (error) {
    console.error(error);
    handleError(res, "Error al eliminar registro", 500);
  }
};
const updateAcudiente = async (req, res) => {
  try {
    const { id_acu } = req.params;
    const { nom_acu, ape_acu, corr_acu, tel_acu } = req.body;

    if (!id_acu) {
      return res.status(400).json({
        success: false,
        message: "El ID del acudiente no puede estar vacío",
      });
    }

    const acudienteData = await Acudientes.findOne({
      where: {
        id_acu: id_acu,
        activo: true
      }
    });

    if (!acudienteData) {
      return res.status(404).json({
        success: false,
        message: "Acudiente no encontrado",
      });
    }

    await Acudientes.update(
      { nom_acu, ape_acu, corr_acu, tel_acu },
      {
        where: {
          id_acu: id_acu
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: "Registro actualizado exitosamente",
    });
  } catch (error) {
    console.error(error);
    handleError(res, "Error al actualizar registro", 500);
  }
};

module.exports = {
  getAcudientes,
  createAcudientes,
  deletedAcudientes,
  getAcudienteDetail,
  updateAcudiente
};