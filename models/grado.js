const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/mysql");
const Periodo =  require("./periodos");




const Grado = sequelize.define('grado', {
    grado_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 ,
        
    },
    nombre_grado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El nombre del grado no puede estar vacío'
            }
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    periodo_FK: {
        type: DataTypes.STRING,
        allowNull: false,
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
    año_escolar: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El año escolar no puede estar vacío'
            },
            isDate: {
                args: true,
                msg: 'El año escolar debe ser una fecha válida'
            }
        }
    },
   
}, {
    tableName: 'grado',
    timestamps: true
});
Grado.belongsTo(Periodo, { foreignKey: 'periodo_FK' }); 

module.exports = Grado;