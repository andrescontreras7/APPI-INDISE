const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");



const Estudiante = sequelize.define(
    "estudiante",
{

    estudid:{
    type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estudnombre :{
        type: DataTypes.STRING,
      allowNull: false
    },
    estudapellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    estuddireccion :{
        type: DataTypes.STRING,
        allowNull: false
    },
    estudcorreo :{
        type: DataTypes.STRING,
        allowNull: false
    },
    estudtelefono :{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        timestamps: false,
    }
)

module.exports = Estudiante