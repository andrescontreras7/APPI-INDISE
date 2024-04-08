const { Op } = require('sequelize');
const Asistencias_estudiantes  = require("../models/asistencias_estudiantes.js");
const { sequelize } = require("../config/mysql");
const data = require('../utils/data.js');
const generatePDF = require('../helpers/generarPDF.js');
const Estudiante = require('../models/estudiante.js');
const Grupo = require('../models/grupo.js');
// Función para generar un informe
const generateReport = async (req, res) => {
  const { id_usuario, mes, anio } = req.body;
  let asistenciasData = []

  try {
    // Consultar las asistencias individuales del estudiante para el mes y año especificados
    const asistenciasIndividuales = await Asistencias_estudiantes.findAll({
      where: {
        estudidfk: id_usuario,
        fec_asi: {
          [Op.and]: [
            sequelize.where(sequelize.fn('YEAR', sequelize.col('fec_asi')), anio),
            sequelize.where(sequelize.fn('MONTH', sequelize.col('fec_asi')), mes)
          ]
        }
      },
    include:[
      { 
        model: Grupo,
        attributes: ['grupgrado']
      },
      {
        model: Estudiante,
        attributes: ['estudnombre', 'estudapellido']
      }
    ]
    });
    
   

    // Almacenar los datos de las asistencias en un arreglo
    asistenciasIndividuales.forEach(asistencia => {
      asistenciasData.push({
        cod_asi: asistencia.cod_asi,
        fec_asi: asistencia.fec_asi,
        det_asi: asistencia.det_asi,
        estudidfk: asistencia.estudidfk,
        grupoFK: asistencia.grupoFK,
        mes:mes,
       grupo :{
        grupgrado:asistencia.grupo.grupgrado,
  
       },
        estudiante: {
          estudnombre: asistencia.estudiante.estudnombre,
          estudapellido: asistencia.estudiante.estudapellido
        }
      });
    });

    console.log("Datos de asistencias:", asistenciasData);
    generatePDF(asistenciasData);

    // Enviar las asistencias individuales como respuesta
    res.json(asistenciasIndividuales);

    // Devolver los datos de las asistencias
    return asistenciasData;
  } catch (error) {
    console.error('Error al generar el informe individual', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

  module.exports = generateReport;
