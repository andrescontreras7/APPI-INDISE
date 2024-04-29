const { sequelize } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");
const Estudiante = require("../models/estudiante.js");
const Grupo = require("../models/grupo.js");

const GrupoEstudiantes = sequelize.define(
  "grupo_estudiante",
  {
    grupcod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notNull: {
          msg: "El codigo del grupo es obligatorio",
        },
      },
    },
    
    estudid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
          notNull: {
            msg: "El id del estudiante es obligatorio",
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
  },
  {
    timestamps: true,
    tableName: 'grupo_estudiante',
  }
);

Grupo.belongsToMany(Estudiante, {
  through: GrupoEstudiantes,
  foreignKey: 'grupcod',
  otherKey: 'estudid'
});

Estudiante.belongsToMany(Grupo, {
  through: GrupoEstudiantes,
  foreignKey: 'estudid',
  otherKey: 'grupcod'
});


module.exports = {
    GrupoEstudiantes,
};
