const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Estudiante = require("../models/estudiante.js");
const Funcionario = require("../models/funcionario.js");
const Grado = require("../models/grado");
const AsignaturaDocente = require("./asignatura-docente.js");
const TematicaGrupo = require("./tematicas_grupo.js");


const Grupo = sequelize.define(
  "grupo",
  {
    grupcod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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


Grupo.belongsTo(Funcionario, { foreignKey: "directorFK" });
Grupo.belongsTo(Grado, { foreignKey: "grado_FK" });
Grupo.hasMany(AsignaturaDocente, {
  foreignKey: "grupoFk",
  sourceKey: "grupcod",
});
AsignaturaDocente.belongsTo(Grupo, { foreignKey: "grupoFk" });


Grupo.hasMany(TematicaGrupo, { foreignKey: "grupoId" });

TematicaGrupo.belongsTo(Grupo, { foreignKey: "grupoId" });

module.exports = Grupo;
