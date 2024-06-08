const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");


const AsignaturaEstudiante = sequelize.define(
    "AsignaturasEstudiante",
  {
    estudianteId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    
    },
    asignaturaId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      
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
  }
},
  {
    timestamps: true,
    tableName: "AsignaturaEstudiante",
  }

);




  module.exports = AsignaturaEstudiante;
