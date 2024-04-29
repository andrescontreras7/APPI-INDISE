const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Funcionario = require("../models/funcionario.js");
const Grado = require("../models/grado");


const Grupo = sequelize.define(
    "grupo",
    {
        grupcod: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      grupperiodo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      grado_FK: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      grupsalon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      directorFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
      },
    },
      {
        timestamps: false,
      }
    );

Grupo.belongsTo(Funcionario, { foreignKey: 'directorFK' });
Grupo.belongsTo(Grado, { foreignKey: 'grado_FK' }); 


module.exports = Grupo
