const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET


const tokenSign = async(userData) =>{
const sing = await jwt.sign(

    {
        id: userData.id,  //genera el token con los datos que se han pasado
        rol: userData.rol,
    },
    JWT_SECRET,
    {
        expiresIn :"8h"
    }

    



)
return sing

};

/**
 * debe de pasar el token de sesion 
 */
const verifyToken = async (tokenJWT) =>{
    try {
        return jwt.verify(tokenJWT, JWT_SECRET)
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return 'Token expirado';  // devuelve un mensaje específico para el error de token expirado
        }
        return null 
    }
}

module.exports = {tokenSign , verifyToken}