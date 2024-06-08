const generarCodigo = require("../helpers/generarCodigo");
const Grupo = require("../models/grupo");
const Tematicas = require("../models/tematicas");
const TematicaGrupo = require("../models/tematicas_grupo");

const getTemasGrupos = async (req, res) => {
    try {
      const temasGrup = await TematicaGrupo.findAll({
        where: { activo: true },
  
        include: [
          {
            model: Tematicas,
           
          },
          {
            model: Grupo,
          },
        ],
      });
  
      return res.status(200).json({
        success: true,
        data: temasGrup,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: "Error del servidor",
      });
    }
  };

const createTemaGrupo = async (req, res) => {
  try {
    // Verificar si el grupo y la temática existen
    const { grupoId, tematicaId } = req.body;
    const grupo = await Grupo.findByPk(grupoId);
    const tematica = await Tematicas.findByPk(tematicaId);

    if (!grupo || !tematica) {
      return res.status(400).json({
        success: false,
        error: "El grupo o la temática especificada no existe",
      });
    }

    // Crear la relación entre la temática y el grupo
    const temaGrupo = await TematicaGrupo.create({
      grupoId,
      tematicaId,
      id:generarCodigo()
    });

    return res.status(201).json({
      success: true,
      data: temaGrupo,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};

const deleteTemaGrupo = async (req, res) => {
  try {
    const { id } = req.params;

    const temaGrupo = await TematicaGrupo.findByPk(id);

    if (!temaGrupo) {
      return res.status(404).json({
        success: false,
        error: "Relación entre tema y grupo no encontrada",
      });
    }

    // Desactivar la relación en lugar de eliminarla físicamente
    await temaGrupo.update({ activo: false });

    return res.status(200).json({
      success: true,
      message: "Relación entre tema y grupo desactivada correctamente",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Error del servidor",
    });
  }
};



module.exports = {
 getTemasGrupos,
 createTemaGrupo,
 deleteTemaGrupo

}