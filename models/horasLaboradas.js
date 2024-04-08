const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Funcionario = require("./funcionario");

const HorasLaboradas = sequelize.define(
  "horaslaboradas",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        notNull: {
          msg: "El código es obligatorio",
        },
      },
    },
    UUId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    hora_entrada: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La hora de entrada es obligatoria",
        },
      },
    },
    hora_salida: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La hora de salida es obligatoria",
        },
      },
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La fecha de registro es obligatoria",
        },
      },
    },
    funcidfk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El ID del funcionario es obligatorio",
        },
      },
    },
    horas_t_semana: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Las horas totales de la semana son obligatorias",
        },
      },
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        notNull: {
          msg: "El estado de activo es obligatorio",
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La fecha de creación es obligatoria",
        },
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La fecha de actualización es obligatoria",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

HorasLaboradas.belongsTo(Funcionario, {
  foreignKey: 'funcidfk',
});

module.exports = HorasLaboradas;