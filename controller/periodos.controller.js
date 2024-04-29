const Periodos  = require("../models/periodos");

const  {HanledError} = require('../utils/CapError.js')


const getPeriodos = async (req, res) => {
    try{
      const  datos_activos = await Periodos.findAll({
        where: { activo: true }
      })
      res.status(200).json({data: datos_activos})
    }

    catch(e){
        HanledError(res, "Error al recuperar los registros", 500)

    }
}


const createPeriodos = async (req, res) => {
    try{
        const { periodo_nombre, fecha_inicio, fecha_fin } = req.body;
    
        try{
             await Periodos.create({ periodo_nombre, fecha_inicio, fecha_fin });
            res.status(200).json("Registro creado exitosamente")
    

        }
        catch(e){
          HanledError(res, "Error al crear el registro", 500)
          console.log(e)
        }
       

    }
    catch(e){
        HanledError(res, "ocurrio un error", 404)
        
}
}



module.exports = {
    getPeriodos,
    createPeriodos
}