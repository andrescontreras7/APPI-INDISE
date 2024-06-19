const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Rol = require("./rol");
const AsignaturaDocente = require("./asignatura-docente");

// Definición del modelo Funcionario
const Funcionario = sequelize.define(
  "funcionario",
  {
    // ID del funcionario
    funcid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    // Nombre del funcionario
    funcnombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'El nombre del funcionario es requerido'
        }
      }
    },
    // Apellido del funcionario
    funcapellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'El apellido del funcionario es requerido'
        }
      }
    },
    // Correo electrónico del funcionario
    funccorreo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Debe ser una dirección de correo electrónico válida'
        }
      }
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    // 
    // Rol del funcionario (docente o coordinador)
    funcrol: {
      type: DataTypes.ENUM('docente', 'Coordinador'),
      allowNull: false,
    },
    // ID del jefe de área al que pertenece el funcionario
    jefe_areaFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'funcionarios',
        key: 'funcid'
      },
    },
    // Contraseña del funcionario
    passwordFuncionario: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'La contraseña del funcionario es requerida'
        }
      }
    },
    // Número de teléfono del funcionario
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'El número de teléfono debe ser numérico'
        }
      }
    },
    // ID del rol del funcionario
    rolFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Indicador de si el funcionario está activo o no
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    // Fecha de creación del registro
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    // Fecha de actualización del registro
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: 'funcionario',
  }
);

// Relación entre Funcionario y Rol
Funcionario.belongsTo(Rol, { foreignKey: 'rolFK' });

Funcionario.hasMany(AsignaturaDocente, { foreignKey: 'funcionarioFuncid', sourceKey: 'funcid'});
AsignaturaDocente.belongsTo(Funcionario, { foreignKey: 'funcionarioFuncid' });

module.exports = Funcionario;
