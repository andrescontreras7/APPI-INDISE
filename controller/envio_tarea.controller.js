const Envio = require('../models/envio_tareas');









const getEnvio = async (req, res) => {
  try {

    const envio_tareas = await Envio.findAll({
      where : {activo : true},
     
     
    });

  
  

    return res.status(200).json({
      success: true,
      data: envio_tareas
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Error del servidor',

    });
  }
};


module.exports = {
    getEnvio
}