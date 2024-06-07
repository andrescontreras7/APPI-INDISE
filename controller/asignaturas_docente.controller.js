const AsignaturaDocente = require("../models/asignatura-docente");
const { Asignatura } = require("../models/areas");
const Funcionario = require("../models/funcionario");
const Grupo = require("../models/grupo");
const Grado = require("../models/grado");

const getAsignaturaDocente = async (req, res) => {
  try {
    const asignaturaDocente = await AsignaturaDocente.findAll({
      where: { activo: true },

      include: [
        {
          model: Funcionario,
          attributes: ["funcnombre", "funcapellido"],
        },
        {
          model: Asignatura,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: asignaturaDocente,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

const getDocenteAsignatura = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar el docente
    const docente = await Funcionario.findByPk(id);
    if (!docente) {
      return res.status(404).json({
        success: false,
        error: "Docente no encontrado",
      });
    }

    const asignaturaDocente = await AsignaturaDocente.findAll({
      group:["asignaturaAsigcod"],
   

      where: {
        funcionarioFuncid: id, 
       
      },
      include: [
        {
          model: Asignatura,
          attributes: ["asigcod", "asignombre", "asigdescripcion", "url"],
          exclude: ["createdAt", "updatedAt", "activo "],
        },
        {
          model: Grupo,
          attributes: { exclude: ["activo", "createdAt", "updatedAt"] },
          include: {
            model: Grado,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: asignaturaDocente,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

const createAsignaturaDocente = async (req, res) => {
  try {
    const { asignaturaAsigcod, funcionarioFuncid } = req.body;

    // Verificar si la asignatura existe
    const asignatura = await Asignatura.findByPk(asignaturaAsigcod);
    if (!asignatura) {
      return res.status(404).json({
        success: false,
        error: "Asignatura not found",
      });
    }

    // Verificar si el docente existe
    const docente = await Funcionario.findByPk(funcionarioFuncid);
    if (!docente) {
      return res.status(404).json({
        success: false,
        error: "Docente no funciona",
      });
    }

    const dt = await AsignaturaDocente.create({
      asignaturaAsigcod,
      funcionarioFuncid,
    });

    return res.status(201).json({
      success: true,
      data: dt,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
const getAll = async (req, res) => {
  try {
    const asignaturaDocente = await AsignaturaDocente.findAll({
      where: { activo: true },
      include: [
        {
          model: Funcionario,
        },
        {
          model: Grupo,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: asignaturaDocente,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

const getGroup = async (req, res) => {
  try {
    const { id, asigcod } = req.params;

    // Buscar el docente
    const docente = await Funcionario.findByPk(id);
    if (!docente) {
      return res.status(404).json({
        success: false,
        error: "Docente no encontrado",
      });
    }

    const asignaturaDocente = await AsignaturaDocente.findAll({
   

      where: {
        funcionarioFuncid: id,
        asignaturaAsigcod:asigcod
      },
      include: [
        {
          model: Asignatura,
          attributes: ["asigcod", "asignombre", "asigdescripcion", "url"],
          exclude: ["createdAt", "updatedAt", "activo "],
        },
        {
          model: Grupo,
          attributes: { exclude: ["activo", "createdAt", "updatedAt"] },
          include: {
            model: Grado,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: asignaturaDocente,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};


module.exports = {
  createAsignaturaDocente,
  getAsignaturaDocente,
  getDocenteAsignatura,
  getGroup,
  getAll,
  
};
