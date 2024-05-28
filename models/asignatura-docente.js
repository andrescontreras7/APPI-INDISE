const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const {Asignatura} = require("./areas");
const Funcionario = require("./funcionario");

const AsignaturaDocente = sequelize.define(
  "asignaturaDocente",
  {
    asignaturaAsigcod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     
    },
    funcionarioFuncid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    
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

Asignatura.belongsToMany(Funcionario, {
    through: AsignaturaDocente,
    foreignKey: "asignaturaAsigcod",
    otherKey: "funcionarioFuncid",
  });
  
  Funcionario.belongsToMany(Asignatura, {
    through: AsignaturaDocente,
    foreignKey: "funcionarioFuncid",
    otherKey: "asignaturaAsigcod",
  });
  
module.exports = AsignaturaDocente;