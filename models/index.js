const Grupo = require('./grupo');
const Estudiante = require('./estudiante');

Grupo.hasMany(Estudiante, { foreignKey: 'grupoFK' });
Estudiante.belongsTo(Grupo, { foreignKey: 'grupoFK' });

module.exports = {
  Grupo,
  Estudiante
};