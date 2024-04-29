
const Grado = require('../models/grado')

const  {HanledError} = require('../utils/CapError.js')


const getGrados = async (req, res) => {
    try{
      const  datos_activos = await Grado.findAll({
        where: { activo: true }
      })
      res.status(200).json({data: datos_activos})
    }

    catch(e){
        HanledError(res, "Error al recuperar los registros", 500)

    }
}

const getGrado = async (req, res) => {
    try{
        const {id} = req.params.id
      const  registro = await Grado.findOne({
        where: { grado_id: id },
        activo: { activo: true }
      })
      if(!registro){
        return HanledError(res, "El registro no existe", 404)
      }
      res.status(200).json({data: registro})
  
    }

    catch(e){
        HanledError(res, "Error al recuperar el registro", 500)

    }
}

const createGrado = async (req, res) => {
    try {
        const {data} = req.body;
    
        data = await Grado.create(data)
         res.status(200).json({ message: "Registro creado exitosamente" });
          
     } catch (error) {
        HanledError(res, "Error al crear el registro", 400)
        console.log(error)
        
     }
    
    
    }

    module.exports = {
        getGrados,
        getGrado,
        createGrado,
    }