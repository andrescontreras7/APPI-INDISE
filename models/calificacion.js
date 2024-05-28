const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const Calificaciones = sequelize.define('Calificaciones',
{
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
   
    envio_idFK: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El id del envio no puede estar vacío'
        }
      }
    },
    nota: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'la nota no puede estar vacia no puede estar vacío'
        }
      }
    },
    comentarios: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'el campo comentarios no puede estar vacío'
        }
      }
    },
   
    fec_cal:{
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'la fecha de calificacion no puede estar vacia no puede estar vacío'
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
    },
},
{
  timestamps: true,
}
);

module.exports = Calificaciones