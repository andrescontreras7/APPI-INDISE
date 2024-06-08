const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysql");

const TematicaGrupo = sequelize.define(
  "TematicaGrupo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tematicaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
    },
    grupoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  },
  {

    timestamps: true,
  }
);




module.exports = TematicaGrupo;
