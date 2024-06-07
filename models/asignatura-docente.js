const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const AsignaturaDocente = sequelize.define(
  "asignaturaDocente",
  {
    asignaturaAsigcod: {
      type: DataTypes.INTEGER,
      allowNull: false,

     
    },
    funcionarioFuncid: {
      type: DataTypes.INTEGER,
      allowNull: false,
  
    
    },
    grupoFK:{
      type: DataTypes.INTEGER,
      allowNull: false,
   
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },
  {
    timestamps: true,
  }
);

sequelize.sync() // Sincronizar el modelo con la base de datos
.then(() => {
  console.log('Modelo sincronizado correctamente sapo.');
})
.catch(error => {
  console.error('Error al sincronizar el modelo:', error);
});

  
module.exports = AsignaturaDocente;