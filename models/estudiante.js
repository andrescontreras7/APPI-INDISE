const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Acudiente = require("../models/acudiente.js");
const Rol = require("./rol");

const Estudiante = sequelize.define(
  "estudiante",
  {
    estudid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        notNull: {
          msg: "El campo 'estudid' es obligatorio.",
        },
      },
    },
    estudnombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'estudnombre' es obligatorio.",
        },
        notEmpty: {
          msg: "El campo 'estudnombre' no puede estar vacío.",
        },
      },
    },
    estudapellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'estudapellido' es obligatorio.",
        },
        notEmpty: {
          msg: "El campo 'estudapellido' no puede estar vacío.",
        },
      },
    },
    estuddireccion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'estuddireccion' es obligatorio.",
        },
        notEmpty: {
          msg: "El campo 'estuddireccion' no puede estar vacío.",
        },
      },
    },
    estudcorreo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'estudcorreo' es obligatorio.",
        },
        notEmpty: {
          msg: "El campo 'estudcorreo' no puede estar vacío.",
        },
        isEmail: {
          msg: "El campo 'estudcorreo' debe ser una dirección de correo electrónico válida.",
        },
      },
    },
    estudtelefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'estudtelefono' es obligatorio.",
        },
        isInt: {
          msg: "El campo 'estudtelefono' debe ser un número entero.",
        },
      },
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'rol' es obligatorio.",
        },
        isInt: {
          msg: "El campo 'rol' debe ser un número entero.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'password' es obligatorio.",
        },
        notEmpty: {
          msg: "El campo 'password' no puede estar vacío.",
        },
      },
    },
    tok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo 'tok' es obligatorio.",
        },
        isInt: {
          msg: "El campo 'tok' debe ser un número entero.",
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

Estudiante.belongsToMany(Acudiente, { through: "EstudianteAcudiente" });
Acudiente.belongsToMany(Estudiante, { through: "EstudianteAcudiente" });

Estudiante.belongsTo(Rol, { foreignKey: "rol" });

sequelize
  .sync()
  .then(() => {
    console.log("Modelo sincronizado correctamente estudiante.");
  })
  .catch((error) => {
    console.error("Error al sincronizar el modelo:", error);
  });

module.exports = Estudiante;