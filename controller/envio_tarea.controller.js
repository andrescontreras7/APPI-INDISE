const Envio = require('../models/envio_tareas');
const moment = require('moment');
const Evaluaciones = require('../models/evaluaciones');



const updateEnvioNota = async (req, res) => {
  try {
    const body = req.body;
    const { uid } = req.params; // Obtén el ID y los nuevos datos del cuerpo de la solicitud
    console.log("RAWWWWWWWWWWWWWWWWWWWWWWW")
    console.log(body)
    console.log(uid)

    const tarea = await Envio.findByPk(uid);
    // Busca el registro por su ID
    console.log(tarea);
    if (tarea) {
      await tarea.update(body); // Actualiza los datos del registro con los nuevos datos
      res
        .status(200)
        .json({ success: true, message: "Registro actualizado exitosamente" }); // Envia la respuesta con el registro actualizado
    } else {
      res
        .status(404)
        .json({ success: false, message: "Registro no encontrado" }); // Envía una respuesta de error si el registro no existe
    }
  } catch (error) {
    console.log("error")
    console.log(error)
    res
      .status(500)
      .json({ success: false, message: "Error al actualizar el registro" }); // Envía una respuesta de error si ocurre alguna excepción
  }
};



const createTarea = async (req, res) =>{
  try {
     const {uid,id_estudiante,id_tarea,url,descripcion} = req.body;

     var fec_envio = moment().format();
     var createdAt = moment().format();
     var updatedAt = moment().format();
     var nota = 0;

     await Envio.create({
          uid,
          id_estudiante,
          id_tarea,
          url,
          descripcion,
          fec_envio,
          nota,
          createdAt,
          updatedAt
     })
      res.status(200).json({ message: "Registro creado exitosamente." });
  } catch (error) {
     console.log(error)
  }
 }


 const getEvaluacionesPorEstudiante = async (req, res) => {
  const {id_estudiante,idasig,idgrupo}  = req.params;

  console.log('HEREEEE')
  try {
      const datos_activos = await Envio.findAll({
          where: {
              activo: true,
              id_estudiante: id_estudiante
          },
          include: [{
            model: Evaluaciones,
            where: {
              id_grupoFK: idgrupo,
              id_asignatura: idasig
            },
            required: true
          }]
      });

      res.status(200).json(datos_activos);
  } catch (error) {
      console.log(error);
      res.status(500).json({
          message: "Ocurrió un error al recuperar los registros."
      });
  }
}


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
    getEnvio,
    getEvaluacionesPorEstudiante,
    updateEnvioNota,
    createTarea
}