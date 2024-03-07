
// funcion para manerajr errores de los controladors


const HanledError = (res, message ="Error por defecto " , code = 403 ) => {
    res.status(code)
    res.json({error:message})

}

module.exports={HanledError}