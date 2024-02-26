const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const Area = sequelize.define(
  "areas",
  {
    cod_area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    are_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
  }
  },
  {
    timestamps: false,
  }
);








const Asignatura = sequelize.define(
  "asignatura",
  {
    asigcod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    asignombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    asigdescripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    areaFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
Asignatura.belongsTo(Area, {
  foreignKey: 'areaFK',
 
});

Area.hasMany(Asignatura, {
  foreignKey: 'areaFK',
  sourceKey: 'cod_area'
});
// Establecer la relación entre las tablas

module.exports = {
  Area,
  Asignatura,
};