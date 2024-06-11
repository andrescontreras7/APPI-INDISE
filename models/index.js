const Grupo = require('./grupo');
const Estudiante = require('./estudiante');
const {Area , Asignatura} = require('./areas');

Grupo.hasMany(Estudiante, { foreignKey: 'grupoFK' });
Estudiante.belongsTo(Grupo, { foreignKey: 'grupoFK' });

Area.hasMany(Asignatura, { foreignKey: 'areaFK' });
Asignatura.belongsTo(Area, { foreignKey: 'areaFK' });

module.exports = {
  Grupo,
  Estudiante,
  Area,
  Asignatura
};