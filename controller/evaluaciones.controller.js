const  {handleError} = require('../utils/CapError.js')
const Evaluaciones = require('../models/evaluaciones.js');
const _ = require('lodash');
const Grupo = require('../models/grupo.js');










const getEvaluaciones = async (req, res) => {
    try {
        const datos_activos = await Evaluaciones.findAll({
            where: {
                activo: true
            }
        });

        res.status(200).json(datos_activos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Ocurrió un error al recuperar los registros."
        });
    }
}

const createEvaluaciones = async (req, res) =>{

 try {
    const {nombre_tipo_evaluacion, descripcion,url, fec_entre, id_grupo} = req.body;
    const grupoIsvalidate = await Grupo.findOne({where: {grupcod: id_grupo, activo: true}});
    if (!grupoIsvalidate) {
      return res.status(400).json({ message: "El grupo no existe." });
    }

    
    
    await Evaluaciones.create({
        nombre_tipo_evaluacion,
        descripcion,
        url,
        fec_entre,
        id_grupo,
     
    })
     res.status(200).json({ message: "Registro creado exitosamente." });
    

    
    
 } catch (error) {
  handleError(res, "Error al crear registro.", 400)
    console.log(error)
    
 }


}


const deletedEvaluaciones = async (req, res) => {
    try {
      const { codigo } = req.params;
      
      const eliminar = await Evaluaciones.update(
        { activo: false }, // Marcamos el registro como inactivo
        {
          where: {
            codigo: codigo,
            activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
          }
        }
      );
  
      if (eliminar) {
        res.status(200).json({mensagge:"REGISTRO ELIMINADO EXITOSAMENTE"})
      } else {
        res.status(404).send("RGEISTRO NO ENCONTRADO ");
      }
    } catch (error) {
      console.log(error);
      handleError(res,   {mensagge:"ERROR AL ELIMINAR REGISTRO"}  , 400);
    }
  };
  

module.exports = {
    getEvaluaciones,
    createEvaluaciones,
    deletedEvaluaciones
}