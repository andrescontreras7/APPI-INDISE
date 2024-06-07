const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Estudiante = require("../models/estudiante.js");
const Grupo = require("../models/grupo.js")
const {Asignatura} = require("../models/areas.js");
const Clase = require("./clases.js");
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    claseFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estudidfk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El campo 'estudidfk' debe ser un número entero.",
        },
      },
    },
    grupoFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El campo 'grupoFK' debe ser un número entero.",
        },
      },
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    asigFK:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "El campo 'asignatura' debe ser un número entero.",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

// Asistencias_estudiantes está asociado con Estudiante
Asistencias_estudiantes.belongsTo(Estudiante, {
  foreignKey: 'estudidfk',
  targetKey: 'estudid'
});

// Asistencias_estudiantes está asociado con Grupo
Asistencias_estudiantes.belongsTo(Grupo, {
  foreignKey: 'grupoFK',
  targetKey: 'grupcod'
});
Asistencias_estudiantes.belongsTo(Asignatura, {
  foreignKey: 'asigFK',
  targetKey: 'asigcod' 
});
Asistencias_estudiantes.belongsTo(Clase  , {
  foreignKey: 'claseFK',
}) 

module.exports = Asistencias_estudiantes;

