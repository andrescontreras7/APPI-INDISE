const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Grupo = require("./grupo");
const Evaluaciones = sequelize.define(
  "evaluaciones",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },

    nombre_tipo_evaluacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre de la evaluacion no puede estar vacío",
        },
      },
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "la descripcion no puede esatr vacia no puede estar vacío",
        },
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "la url no puede estar vacia no puede estar vacío",
        },
      },
    },
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El id del grupo no puede estar vacío",
        },
      },
    },
    fec_entre: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "la fecha de entrega no puede estar vacia no puede estar vacío",
        },
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
    },
  },
  {
    timestamps: true,
  }
);

Evaluaciones.belongsTo(Grupo, { foreignKey: "id_grupo" });

module.exports = Evaluaciones;
