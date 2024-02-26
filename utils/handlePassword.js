const bcryptsjs = require('bcryptjs')

/** funcion para encriptar contraseña 
 * 
 * @param {*} Password 
 */
const encrypt = async (Password) => {

    const hash = await bcryptsjs.hash(Password, 1)
    return hash

}

/**
 *  compara las dos contraseñas, encriptada y antes de encriptar
 * @param {*} Password 
 * @param {*} Hashpassword 
 * @returns 
 */
 const compare = async (Password, Hashpassword) =>{

    return await bcryptsjs.compare(Password , Hashpassword)


 }

 module.exports = {compare, encrypt}
