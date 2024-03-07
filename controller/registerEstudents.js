const {compare, encrypt} = require("../utils/handlePassword")


const registerEstudiante = async (req,res) =>{
    
    const Password = await encrypt(req.password)
    console.log(req)
    const body = {...req, Password}
    res.send(body)


}

module.exports = {registerEstudiante}