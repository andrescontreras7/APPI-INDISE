const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Grupo = require("./grupo");
const AsignaturaDocente = require("./asignatura-docente");

const Clase = sequelize.define(
  "clase",
  {
    claseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    grupoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    asignaturaDocenteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Clase.belongsTo(Grupo, { foreignKey: "grupoId" });
Clase.belongsTo(AsignaturaDocente, { foreignKey: "asignaturaDocenteId" });

module.exports = Clase;


//para recordar se encarga de contar los dias los cuales se dan clases para posteriormente poder calcular el porcentaje de asistencia de los estudiantes
//en la tabla de asitencias_estudiantes