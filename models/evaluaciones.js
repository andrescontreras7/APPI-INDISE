const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Grupo = require("./grupo");
const { Asignatura } = require("./areas");
const Funcionario = require("./funcionario");
const Tipo_evaluacion = require("./tipoEva");
const Evaluaciones = sequelize.define(
  "evaluaciones",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
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
    id_grupoFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El id del grupo no puede estar vacío",
        },
      },
    },
    id_funcionario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El id del funcionario no puede estar vacío",
        },
      },
    },
    tipo_eva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El id del tipo no puede estar vacío",
        },
      },
    },
    id_asignatura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El id de la asignatura no puede estar vacío",
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
    tipo_eva:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    },
  {
    timestamps: true,
  }
);

Evaluaciones.belongsTo(Grupo, { foreignKey: "id_grupoFK" });
Evaluaciones.belongsTo(Asignatura, { foreignKey: "id_asignatura" });
Evaluaciones.belongsTo(Funcionario, { foreignKey: "id_funcionario" });
Evaluaciones.belongsTo(Tipo_evaluacion, { foreignKey: "tipo_eva" })

module.exports = Evaluaciones;
