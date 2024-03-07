const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const Rol = sequelize.define(
  "roles",
  {
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
  }
  },
  {
    timestamps: false,
  }
);

module.exports = Rol