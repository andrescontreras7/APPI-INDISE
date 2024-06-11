const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Estudiante = require("./estudiante");
const Asistencias_estudiantes = require("./asistencias_estudiantes");

const Excusa = sequelize.define(
  "excusa",
  {
    cod_exc: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    fec_reg_exc: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    mot_reg_exc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_persona: {
      type: DataTypes.INTEGER,
    },
    asistenciaFK: {
      type: DataTypes.INTEGER,
    },
  
  url_archivo: {
    type: DataTypes.INTEGER,
  },
    
      activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
  {
    timestamps: true,
 
  }
);

Excusa.belongsTo(Estudiante, { foreignKey: 'id_persona' });
Excusa.belongsTo(Asistencias_estudiantes, { foreignKey: 'asistenciaFK' });


module.exports = Excusa;