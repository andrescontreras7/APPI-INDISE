const  {handleError} = require('../utils/CapError.js');

const checkRol = (roles) => (req,res,next) =>{
    try {
        const {usuarios} = req  //llamo al objeto usuarios que fue creado antes
        const rolesByUser = usuarios.rolFK
        
         //acedo al rol del usurio
       
        

        
         if (rolesByUser!=1 &&  rolesByUser!=2      ) {
            handleError(res, "NOT_PERMISION");
      } else {
          next();
      }
  } catch (error) {
    handleError(res, "ERROR_USER_NOT_PERMISION", 403);
      console.log(error);
  }
};

module.exports = checkRol;