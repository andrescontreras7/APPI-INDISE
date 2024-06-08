const { DataTypes, UUIDV1, UUID } = require("sequelize");
const { sequelize } = require("../config/mysql");
const AsignaturaDocente = require("./asignatura-docente");
const TematicaGrupo = require("./tematicas_grupo");

const Tematicas = sequelize.define(
  "tematicas",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
   
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    asignatura_cod: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    timestamps: true // Agregar timestamps (createdAt, updatedAt)
  }
);


Tematicas.belongsTo(AsignaturaDocente, { foreignKey: "asignatura_cod", sourceKey: "id"});
Tematicas.hasMany(TematicaGrupo, { foreignKey: "tematicaId" });

TematicaGrupo.belongsTo(Tematicas, { foreignKey: "tematicaId" });
module.exports = Tematicas;
