const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Funcionario = require("../models/funcionario.js");

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
      grupgrado: {
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


module.exports = Grupo
