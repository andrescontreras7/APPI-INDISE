const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Evaluaciones = sequelize.define(
  "evaluaciones",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
   
    nombre_tipo_evaluacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El nombre de la evaluacion no puede estar vacío'
        }
      }
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'la descripcion no puede esatr vacia no puede estar vacío'
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
    timestamps: true,
  }
);
sequelize.sync() // Sincronizar el modelo con la base de datos
  .then(() => {
    console.log('Modelo sincronizado correctamente.');
  })
  .catch(error => {
    console.error('Error al sincronizar el modelo:', error);
  });
  

module.exports = Evaluaciones