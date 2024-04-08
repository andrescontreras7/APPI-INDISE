const { sequelize } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");
const Estudiante = require("../models/estudiante.js");

const Area = sequelize.define(
  "areas",
  {
    cod_area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notNull: {
          msg: "El código de área es obligatorio",
        },
      },
    },
    are_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre de área es obligatorio",
        },
        len: {
          args: [3, 50],
          msg: "El nombre de área debe tener entre 3 y 50 caracteres",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Asignatura = sequelize.define(
  "asignatura",
  {
    asigcod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notNull: {
          msg: "El código de asignatura es obligatorio",
        },
      },
    },
    asignombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre de asignatura es obligatorio",
        },
        len: {
          args: [3, 50],
          msg: "El nombre de asignatura debe tener entre 3 y 50 caracteres",
        },
      },
    },
    asigdescripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La descripción de asignatura es obligatoria",
        },
      },
    },
    areaFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El área de asignatura es obligatoria",
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
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: true,
  }
);

Asignatura.belongsTo(Area, {
  foreignKey: "areaFK",
});

Area.hasMany(Asignatura, {
  foreignKey: "areaFK",
  sourceKey: "cod_area",
});

module.exports = {
  Area,
  Asignatura,
};