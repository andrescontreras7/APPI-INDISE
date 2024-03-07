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
        expiresIn :"1h"
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
        return null 
    }

}

module.exports = {tokenSign , verifyToken}