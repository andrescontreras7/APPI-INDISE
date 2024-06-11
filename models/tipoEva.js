const { DataTypes, UUIDV1, UUID } = require("sequelize");
const { sequelize } = require("../config/mysql");

const Tipo_evaluacion = sequelize.define(
  "Tipo_evaluacion",
  {
    nombre_tipo_evaluacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
   
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
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
    timestamps: true // Agregar timestamps (createdAt, updatedAt)
  }
);





module.exports = Tipo_evaluacion;
