const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");
const Rol = require("./rol"); 


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
    rol :{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password :{
        type: DataTypes.STRING,
        allowNull: false,
    },
    

 
},


    {
        timestamps: false,
    }
)
Estudiante.belongsTo(Rol, { foreignKey: 'rol' }),

module.exports = Estudiante