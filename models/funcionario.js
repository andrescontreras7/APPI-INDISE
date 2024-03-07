const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Rol = require("./rol");

const Funcionario = sequelize.define(
  "funcionario",
  {
    funcid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    funcnombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funcapellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funccorreo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funcrol: {
      type: DataTypes.ENUM('docente', 'Coordinador'),
      allowNull: false,
    },
    jefe_areaFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'funcionarios', // Nombre de la misma tabla
        key: 'funcid' // Nombre del campo que se está referenciando
      },
    },
    passwordFuncionario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rolFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'funcionario',
  }
);

Funcionario.belongsTo(Rol, { foreignKey: 'rolFK' });

module.exports = Funcionario;
