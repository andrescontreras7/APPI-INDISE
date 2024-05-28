const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Acudientes = sequelize.define(
  "acudiente",
  {
    id_acu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 
    },
    UUId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    nom_acu: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El nombre del acudiente no puede estar vacío'
        }
      }
    },
    ape_acu: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El apellido del acudiente no puede estar vacío'
        }
      }
    },
    corr_acu: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Debe ser una dirección de correo electrónico válida'
        }
      }
    },
    tel_acu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          args: true,
          msg: 'El número de teléfono debe ser numérico'
        }
      }
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
    }
  },
  {
    timestamps: true, // Agregar timestamps (createdAt, updatedAt)
  }
);

// Sincronizar el modelo con la base de datos

// Exportar el modelo de Acudientes
module.exports = Acudientes;