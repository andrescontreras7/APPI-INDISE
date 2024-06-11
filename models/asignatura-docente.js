const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Tematicas = require("./tematicas");

const AsignaturaDocente = sequelize.define(
  "asignaturaDocente",
  {
    asignaturaAsigcod: {
      type: DataTypes.INTEGER,
      allowNull: false,

     
    },
    funcionarioFuncid: {
      type: DataTypes.INTEGER,
      allowNull: false,
  
    
    },
    grupoFK:{
      type: DataTypes.INTEGER,
      allowNull: false,
   
    },
    
    tematicasFK:{
      type: DataTypes.INTEGER,
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
      },
  },
  {
    timestamps: true,
  }
);



AsignaturaDocente.belongsTo(Tematicas, { foreignKey: "tematicasFK" })

module.exports = AsignaturaDocente;