const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Funcionario = require("./funcionario");
const Estudiante = require("./estudiante");
const Observador = sequelize.define(
  "observador",
  {
    obsvcod: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 
    },
    
    obsvfecha: {
      type: DataTypes.DATE,
      allowNull: false,
  },
  obsvestado: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    obsvtipo: {
      type: DataTypes.STRING,
      allowNull: false,
      },
  
    estudid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    funcidfv: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true // Por defecto, los usuarios están activos
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

Observador.belongsTo(Funcionario, { foreignKey: 'funcidfv' }),
Observador.belongsTo(Estudiante, { foreignKey: 'estudid' }),


module.exports = Observador