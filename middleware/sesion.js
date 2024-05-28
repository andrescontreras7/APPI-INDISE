const  {handleError} = require('../utils/CapError.js');
const { verifyToken } = require('../utils/handlejwt');
const Estudiante = require("../models/estudiante.js");
const Funcionario = require('../models/funcionario.js');
const { LIMIT_SQL_LENGTH } = require('sqlite3');

const authMidd = async(req ,res, next) => {
    try {

        if(!req.headers.authorization){ //accedo al header para acceder al token de sesion
            handleError(res,"NOT_TOKEN", 401)
            return
        }

         // Extrae el token de sesión de los encabezados y verifica su validez

        const token = req.headers.authorization.split(' ').pop(); //ya e el token existe, que me separe su extension
        const dataToken = await verifyToken(token); //espero que la funcion verfyToken, verifique si es un token valido
       console.log(dataToken.rol)

    

       
        // Verifica si el campo 'id' del token existe
        if(!dataToken.id){
            handleError(res,"ERROR_I_TOKEN ", 401)
            
            return
        }
        let usuario;
         // Verifica si el rol es 1 o 2 (funcionario)
  
        if(dataToken.rol===1 || dataToken.rol===2){
            usuario  = await Funcionario.findByPk(dataToken.id) 

         
          
        }
        else if (dataToken.rol === 3) {
            usuario = await Estudiante.findByPk(dataToken.id);
        } else {
            handleError(res, "INVALID_USER_TYPE", 401);
            return;
        }  LIMIT_SQL_LENGTH
       // Asigna el objeto de usuario al objeto 'req' para su uso en las rutas
        req.usuarios = usuario;
        console.log(req.usuarios)
     
        
        
        // Llama a la siguiente función en la cadena de middleware
        next()
    



    } catch (error) {
        handleError(res, "NOT_SESION" , 401)
        console.log(error)
    }
}

module.exports = authMidd