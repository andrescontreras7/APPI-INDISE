const { sequelize } = require("../config/mysql");
const { DataTypes, Sequelize } = require("sequelize");
const Estudiante = require("../models/estudiante.js");
const Acudientes = require("./acudiente.js");

const EstudianteAcudiente = sequelize.define(
  "EstudianteAcudiente",
  {
    estudianteEstudid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        notNull: {
          msg: "El id del estudiante es obligatorio",
        },
      },
    },
    
    acudienteIdAcu: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
          notNull: {
            msg: "El id del acudiente es obligatorio",
          },
        },
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
    tableName: 'estudianteacudientes',
  }
);

Estudiante.belongsToMany(Acudientes, {
  through: EstudianteAcudiente,
  foreignKey: 'estudianteEstudid',
  otherKey: 'acudienteIdAcu'
});

Acudientes.belongsToMany(Estudiante, {
  through: EstudianteAcudiente,
  foreignKey: 'acudienteIdAcu',
  otherKey: 'estudianteEstudid'
});

sequelize.sync()
  .then(() => {
    console.log('Modelo sincronizado correctamente, Estudiante acudientes.');
  })
  .catch(error => {
    console.error('Error al sincronizar el modelo:', error);
  });

module.exports = {
  EstudianteAcudiente,
};
