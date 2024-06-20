const Evaluaciones = require("../models/evaluaciones");
const Grupo = require("../models/grupo");
const { Asignatura } = require("../models/areas");
const Funcionario = require("../models/funcionario");
const Tipo_evaluacion = require("../models/tipoEva");
const { where, Model } = require("sequelize");
const Envio = require('../models/envio_tareas.js');
const Estudiante = require("../models/estudiante.js");


const createEvaluacion = async (req, res) => {
  const {
    descripcion,
    url,
    id_grupoFk,
    id_asignatura,
    id_funcionario,
    fec_entre,
    tipo_eva,
  } = req.body;

  const grupo = await Grupo.findByPk(id_grupoFk);
  if (!grupo) {
    return res
      .status(400)
      .json({ success: false, message: "Grupo no encontrado" });
  }

  const asignatura = await Asignatura.findByPk(id_asignatura);
  if (!asignatura) {
    return res
      .status(400)
      .json({ success: false, message: "Asignatura no encontrada" });
  }

  const funcionario = await Funcionario.findByPk(id_funcionario);
  if (!funcionario) {
    return res
      .status(400)
      .json({ success: false, message: "Funcionario no encontrado" });
  }

  const tipoEva = await Tipo_evaluacion.findByPk(tipo_eva);
  if (!tipoEva) {
    return res
      .status(400)
      .json({ success: false, message: "Tipo de evaluación no encontrado" });
  }

  try {
    const evaluacion = await Evaluaciones.create({
      descripcion,
      url,
      id_grupoFk,
      id_asignatura,
      id_funcionario,
      fec_entre,
      tipo_eva,
    });

    return res
      .status(201)
      .json({ success: true, message: "Evaluación creada", data: evaluacion });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error del servidor" });
  }
};

const getEvaluaciones = async (req, res) => {
  try {
    const evaluaciones = await Evaluaciones.findAll({
      where: { activo: true },
      include: [
        { model: Grupo },
        { model: Asignatura },
        { model: Funcionario }
      ]
    });
    return res.status(200).json({ success: true, data: evaluaciones });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error del servidor" });
  }
};

const updateEvaluacion = async (req, res) => {
  const { codigo } = req.params;
  const {
    descripcion,
    url,
    id_grupoFk,
    id_asignatura,
    id_funcionario,
    fec_entre,
    tipo_eva,
  } = req.body;

  
  const grupo = await Grupo.findByPk(id_grupoFk);
  if (!grupo) {
    return res
      .status(404)
      .json({ success: false, message: "Grupo no encontrado" });
  }

  const asignatura = await Asignatura.findByPk(id_asignatura);
  if (!asignatura) {
    return res
      .status(404)
      .json({ success: false, message: "Asignatura no encontrada" });
  }

  const funcionario = await Funcionario.findByPk(id_funcionario);
  if (!funcionario) {
    return res
      .status(404)
      .json({ success: false, message: "Funcionario no encontrado" });
  }

  const tipoEva = await Tipo_evaluacion.findByPk(tipo_eva);
  if (!tipoEva) {
    return res
      .status(404)
      .json({ success: false, message: "Tipo de evaluación no encontrado" });
  }

  try {
    const evaluacion = await Evaluaciones.findByPk(codigo);
    if (!evaluacion) {
      return res
        .status(404)
        .json({ success: false, message: "Evaluación no encontrada" });
    }

    await evaluacion.update({
      descripcion,
      url,
      id_grupoFk,
      id_asignatura,
      id_funcionario,
      fec_entre,
      tipo_eva,
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "Evaluación actualizada",
        data: evaluacion,
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error del servidor" });
  }
};
const getEvaluacionesPorId = async (req, res) => {
  const {codigo}  = req.params;
  try {
      const datos_activos = await Evaluaciones.findOne({
          where: {
              activo: true,
              codigo: codigo
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

const getTipoEvaluaciones = async (req, res) => {
  try {
      const datos_activos = await Tipo_evaluacion.findAll({
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

const getEvaluacionesPorFuncionario = async (req, res) => {
  const {id_funcionario}  = req.params;
  try {
      const datos_activos = await Evaluaciones.findAll({
          where: {
              activo: true,
              id_funcionario: id_funcionario
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

const getEvaluacionesPorGrupoAsig = async (req, res) => {
  const {idasig,idgrupo}  = req.params;

  try {
      const datos_activos = await Evaluaciones.findAll({
          where: {
              activo: true,
              id_grupoFK: idgrupo,
              id_asignatura: idasig
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

const getEvaluacionesPorGrupoAsigDocente = async (req, res) => {
  const {idasig,idgrupo,idfunc}  = req.params;

  try {
      const datos_activos = await Evaluaciones.findAll({
          where: {
              activo: true,
              id_funcionario:idfunc,
              id_grupoFK: idgrupo,
              id_asignatura: idasig
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

const getEvaluacionesEstudiantes = async (req, res) => {
  const {id_tarea}  = req.params;
  try {
      const datos_activos = await Envio.findAll({
          where: {
              activo: true,
              id_tarea: id_tarea
          },
         
            include: {
              model: Estudiante,
              include: Grupo
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
    const {codigo, nombre_tipo_evaluacion, descripcion,url, fec_entre, id_asignatura, id_funcionario, id_grupoFK, tipo_eva} = req.body;

    const grupoIsvalidate = await Grupo.findOne({where: {grupcod: id_grupoFK, activo: true}});
    if (!grupoIsvalidate) {
      return res.status(400).json({ message: "El grupo no existe." });
    }

    
    
    await Evaluaciones.create({
        codigo,
        nombre_tipo_evaluacion,
        descripcion,
        url,
        fec_entre,
        id_grupoFK,
        id_asignatura,
        id_funcionario,
        tipo_eva
     
    })
     res.status(200).json({ message: "Registro creado exitosamente." });
    

    
    
 } catch (error) {
    console.log(error)
    
 }


}

const deleteEvaluacion = async (req, res) => {
  try {
    const { codigo } = req.params;

  
    const evalData = await Evaluaciones.findOne({
      where: {
        codigo: codigo,
      },
    });

    if (!evalData) {
      return res
        .status(404)
        .json({ success: false, message: "La evaluación no existe" });
    }

    await Evaluaciones.update(
      { activo: false },
      {
        where: {
          codigo: codigo,
        },
      }
    );

    res
      .status(200)
      .json({ success: true, message: "Evaluación desactivada exitosamente" });
  } catch (error) {
    console.error("Error al desactivar la evaluación:", error);
    handleError(res, "Error interno del servidor", error, 500);
  }
};
module.exports = {
  getEvaluaciones,
  createEvaluacion,
  updateEvaluacion,
  createEvaluaciones,
  deleteEvaluacion,
  getEvaluacionesPorFuncionario,
  getEvaluacionesPorId,
  getTipoEvaluaciones,
  getEvaluacionesEstudiantes,
  getEvaluacionesPorGrupoAsig,
  getEvaluacionesPorGrupoAsigDocente
};
