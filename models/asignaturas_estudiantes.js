const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const Estudiante = require('./estudiante');
const {Asignatura} = require('./areas');


const AsignaturaEstudiante = sequelize.define(
    "AsignaturasEstudiante",
  {
    estudianteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Estudiante,
        key: 'id',
      },
    },
    asignaturaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Asignatura,
        key: 'id',
      },
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
  }
},
  {
    timestamps: true,
  }

);

Estudiante.belongsToMany(Asignatura, {
    through: AsignaturaEstudiante,
    foreignKey: 'estudianteId'
  });

  Asignatura.belongsToMany(Estudiante, {
    through: AsignaturaEstudiante,
    foreignKey: 'asignaturaId'
  });
