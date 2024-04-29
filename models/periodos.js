const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/mysql");

const Periodo = sequelize.define('Periodo', {
    periodo_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 ,
        notEmpty: {
            args: true,
            msg: 'El id del periodo no puede estar vacío'
          }
    },
    periodo_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
            args: true,
            msg: 'El nombre del periodo no puede estar vacío'
          }
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
        notEmpty: {
            args: true,
            msg: 'la fecha del periodo  no puede estar vacío'
          }
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
        notEmpty: {
            args: true,
            msg: 'la fecha fin no puede estar vacia no puede estar vacío'
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
      }
    }, {
      tableName: 'periodos',
      timestamps: true
}
);

module.exports = Periodo;