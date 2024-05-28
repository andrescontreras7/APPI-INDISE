const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Estudiantes = require("./estudiante");
const Evaluaciones = require("./evaluaciones");
const Envio = sequelize.define('Envio',
{
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
   
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'El id del estudiante no puede estar vacío'
        }
      }
    },
    id_tarea: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'el campo id de tarea no puede estar vacio'
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'el campo url no puede estar vacío'
        }
      }
    },
   
    fec_envio:{
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'la fecha de envio no puede estar vacia no puede estar vacío'
        }
      }
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
},
{
  timestamps: true,
}
);

Envio.belongsTo(Estudiantes, { foreignKey: 'id_estudiante' });
Envio.belongsTo(Evaluaciones,{foreignKey:"id_tarea"   });

module.exports = Envio