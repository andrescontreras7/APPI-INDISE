const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Estudiante = require("../models/estudiante.js");
const Grupo = require("../models/grupo.js")


const Asistencias_estudiantes = sequelize.define(
    "asistencias_estudiante",
    {
        cod_asi: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fec_asi: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      det_asi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estudidfk: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
     
      grupoFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
     
      },
    },
    {
      timestamps: false,
    }
  );



  Asistencias_estudiantes.belongsTo(Estudiante, {
    foreignKey: 'estudidfk',
    targetKey: 'estudid'
  });
  
  Asistencias_estudiantes.belongsTo(Grupo, {
    foreignKey: 'grupoFK',
    targetKey: 'grupcod'
  });


  // Establecer la relación entre las tablas
  
  module.exports = Asistencias_estudiantes
