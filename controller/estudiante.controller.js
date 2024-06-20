
const  {hanledError} = require('../utils/CapError.js');
const Estudiante = require("../models/estudiante.js");
const _ = require('lodash');
const {tokenSign} = require("../utils/handlejwt.js")
const {encrypt , compare} =require("../utils/handlePassword.js")
const { Op,QueryTypes  } = require('sequelize');
const generarCodigo = require('../helpers/generarCodigo.js')
const Acudiente = require('../models/acudiente.js') //
const Grupo = require("../models/grupo.js");
const Grado = require("../models/grado.js");
const { sequelize } = require("../config/mysql");

/**
 * obtener usuarios de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */
const getEstudiantes = async (req,res) => {
  try{
    const  datos_activos = await Estudiante.findAll({
     
     include: [
      {
        model: Acudiente,
        attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] }, // Excluir campos del modelo Acudiente
       
       },
       {
        model: Grupo, 
        include: {model: Grado, attributes: { exclude: ['createdAt', 'updatedAt'] }}, // Excluir campos del modelo Grado
        attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] } // Excluir campos del modelo Grupo
       },
       
     ]
    })
    res.status(200).json({data: datos_activos})
  }

  catch(e){
      hanledError(res, "Error al recuperar los registros", 500)

  }
}

const getNotaEstudiante = async (req, res) => {
  const {estudianteId} = req.params;

  try {
    // Consulta SQL original modificada para Sequelize
    const query = `
      SELECT asig.asignombre, ev.id_asignatura, ROUND(AVG(env.nota), 1) AS promedio_nota
      FROM  envios env
      INNER JOIN asignaturaestudiante asiges on asiges.asignaturaId and env.id_estudiante
      INNER JOIN evaluaciones ev ON ev.codigo = env.id_tarea AND ev.id_asignatura = asiges.asignaturaId
      INNER JOIN asignaturas asig ON asig.asigcod = asiges.asignaturaId
      where env.id_estudiante =  :estudianteId 
      GROUP BY  ev.id_asignatura, asig.asignombre
      UNION
      SELECT asig.asignombre ,asig.asigcod as id_asignatura , 0.0
      FROM asignaturaestudiante asiges
      INNER JOIN asignaturas asig ON asig.asigcod = asiges.asignaturaId
      LEFT JOIN evaluaciones eva ON eva.id_asignatura = asiges.asignaturaId
      LEFT JOIN envios env ON env.id_tarea = eva.codigo AND env.id_estudiante = asiges.estudianteId
      WHERE asiges.estudianteId =  :estudianteId  AND env.id_tarea IS NULL AND  eva.codigo IS NULL;
    `;

    // Ejecutar la consulta utilizando Sequelize
    const resultados = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { estudianteId: estudianteId } // Reemplaza por el parámetro correcto que corresponda al estudiante
    });

    res.status(200).json(resultados);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Ocurrió un error al recuperar los registros."
    });
  }
};


/**
 *obtener un detalle 
 * @param {*} req 
 * @param {*} res 
 */
const getEstudiante = async (req,res) => {
   try{
      const {estudid} = req.params
      const data = await Estudiante.findByPk(estudid)

      if(data){
         console.log("yea pa")
         res.status(200).json({data}) 
      }
      else{
         res.send("error id no existe  ")
      }
    

   }catch(error){
      res.status(500).json({mensage:"error al obtener estudiante", error})
   }

}





/**
 * Actualizar un estudiante
 * @param {*} req 
 * @param {*} res 
 */
const updateEstudiante = async (req, res) => {
  try {
      const { estudid } = req.params;
      const body = req.body;

      const estudiante = await Estudiante.findOne({
          where: {
              estudid: estudid
          }
      });

      if (!estudiante) {
          return res.status(404).json({ error: 'Estudiante no encontrado' });
      }

      if (body.estudcorreo && body.estudcorreo !== estudiante.estudcorreo) {
          const existingEstudiante = await Estudiante.findOne({
              where: {
                  estudcorreo: body.estudcorreo
              }
          });

          if (existingEstudiante) {
              return res.status(404).json({ success:false, message: 'El correo ya existe' });
          }
      }

      if (body.grupoFK) {
          const existingGrupo = await Grupo.findOne({
              where: {
                  grupcod: body.grupoFK
              }
          });

          if (!existingGrupo) {
              return res.status(404).json({ success:false, message: 'Grupo no encontrado' });
          }
      }

      if (body.acudienteFK) {
          const existingAcudiente = await Acudiente.findOne({
              where: {
                  id: body.acudienteFK
              }
          });

          if (!existingAcudiente) {
              return res.status(404).json({ success:false, message: 'Acudiente no encontrado' });
          }
      }

      await estudiante.update(body);

      return res.status(200).json({ success:true, message: "Estudiante actualizado" });
  } catch (error) {
      console.error('Error al actualizar el estudiante:', error);
      return res.status(500).json({success:false, message: 'Error al actualizar el estudiante' });
  }
};

/**
* Crear un estudiante
* @param {*} req 
* @param {*} res 
*/
const createEstudiante = async (req, res) => {
  try {
    const { estudid, estudnombre, estudapellido, estuddireccion, estudcorreo, estudtelefono, rol, password, grupoFK, acudienteFK } = req.body;

    // Encriptar la contraseña
    

    // Verificar si el ID del estudiante ya existe
    const estudianteId = await Estudiante.findOne({
      where: {
        estudid: estudid
      }
    });

    if (estudianteId) {
      return res.status(400).json({ success: false, message: 'El ID del estudiante ya existe' });
    }

    // Verificar si el correo del estudiante ya existe
    const estudianteCorreo = await Estudiante.findOne({
      where: {
        estudcorreo: estudcorreo
      }
    });

    if (estudianteCorreo) {
      return res.status(400).json({ success: false, message: 'El correo del estudiante ya existe' });
    }

    // Verificar si el grupo existe
    const grupoEstudianteData = await Grupo.findOne({
      where: {
        grupcod: grupoFK
      }
    });

    if (!grupoEstudianteData) {
      return res.status(400).json({ success: false, message: 'El ID del grupo ingresado no existe' });
    }

    // Verificar si el acudiente existe
    const acudienteData = await Acudiente.findOne({
      where: {
        id_acu: acudienteFK
      }
    });

    if (!acudienteData) {
      return res.status(400).json({ success: false, message: 'El ID del acudiente ingresado no existe' });
    }
    const passwordHash = await encrypt(password);
    // Crear el nuevo estudiante
    const data = await Estudiante.create({
      estudid,
      estudnombre,
      estudapellido,
      estuddireccion,
      estudcorreo,
      estudtelefono,
      rol,
      password: passwordHash,
      tok: generarCodigo(),
      grupoFK: grupoFK,
      acudienteFK: acudienteFK
    });

    // Generar el token
    const token = await tokenSign({ estudid: estudid, rol: rol });

    // Enviar la respuesta
    return res.status(201).json({ success: true, message: "Estudiante creado exitosamente", token: token });

  } catch (e) {
    console.error('Error al crear estudiante:', e);
    return res.status(500).json({ success: false, message: 'Error al crear estudiante' });
  }
};

/**
* Eliminar un estudiante
* @param {*} req 
* @param {*} res 
*/
const deleteEstudiante = async (req, res) => {
    try {
        const { estudid } = req.params;
        
        const data = await Estudiante.update(
          { activo: false }, // Marcamos el registro como inactivo
          {
            where: {
              estudid: estudid,
              activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
            }
          }
        );
    
        if (data) {
          res.status(200).json({mensagge:"REGISTRO ELIMINADO EXITOSAMENTE"})
        } else {
          res.status(404).json({error :"REGISTRO NO ENCONTRADO "});
        }
      } catch (error) {
        console.log(error);
       HanledError(res,   {error:"ERROR AL ELIMINAR REGISTRO"}  , 400);
      }
    };




  const getAllInformation = async (req, res) => {
    try{
      const  datos_activos = await Estudiante.findAll({
        where: { activo: true },
        include : [
          {
            model: Grupo, 
            include: {model: Grado, attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] }}, // Excluir campos del modelo Grado
            attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] } // Excluir campos del modelo Grupo
          }, 
          {
            model: Acudiente, 
            attributes: { exclude: ['activo', 'createdAt', 'updatedAt'] } // Excluir campos del modelo Acudiente
          }
        ],
        attributes: { exclude: ['activo', 'createdAt', 'updatedAt', "password"] } // Excluir campos del modelo Estudiante
      })
      res.status(200).json({data: datos_activos})
    }

   catch(e){
  res.status(500).json({success:false, message:"error al obtener estudiante", error})
    console.log(e)
   }
}



module.exports = {
   getEstudiantes,
   getEstudiante,
   updateEstudiante,
   createEstudiante,
   deleteEstudiante,
   getAllInformation,
   getNotaEstudiante
   
};
