const  {HanledError} = require('../utils/CapError.js')
const Grupo = require('../models/grupo.js');
const _ = require('lodash');
const { where } = require('sequelize');


const getGrupo = async (req,res) =>{
   
try {
    
    const data = req.body;

    const datos = await Grupo.findAll(data);
    res.status(200).json({data:{datos}})
    
} catch (error) {
    HanledError(res,"error al obtener grupos", 404)
    console.log(error)
    
        }       
}


/**
 *  crear grupo 
 * @param {} req 
 * @param {*} res 
 */
const createGrupo = async (req,res) =>{
   try {
    const {grupcod, grupperiodo, grupgrado,grupsalon,directorFK } = req.body;
    

    if(_.isNil(grupcod)   || (_.isEmpty((grupperiodo) || _.isEmpty(grupgrado) || _.isEmpty(grupsalon) || _.isNil(directorFK)))) {
        res.status(404).json({"error":"TODOS LOS CAMPOS SON REQUERIDOS"})
    } 
    else {
  
    const grupoData = await Grupo.findOne({
        where: {
            grupcod : grupcod 
        }

    });
    if(!grupoData) {

    const data = await Grupo.create({
        grupcod: grupcod,
        grupperiodo: grupperiodo,
        grupgrado: grupgrado,
        grupsalon: grupsalon,
        directorFK: directorFK
    });
    res.status(200).json({data: "creado exitosamente "}) 
    }
    else{
        res.status(400).json({data: " IS ALREADY EXIST "}) 
    }
}
   } catch (error) {
   
    HanledError(res,"error:", error,404)
   }
}

const updateGrupo = async (req, res) => {
    try {
        const { grupcod } = req.params;
        const body = req.body;
 
        const grupos = await Grupo.findOne({
            where: {
                grupcod: grupcod
            }
        });
 
        if (!grupos) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
 
        await Grupo.update(body, {
            where: {
                grupcod: grupcod
            }
        });
        return res.status(200).json({ message: "Registro actualizado" });
    } catch (error) {
        console.error('Error al actualizar el registro:', error);
        return res.status(500).json({ error: 'Error al actualizar el registro' });
       
    }
 };

const deleteGrupo = async (req,res) =>{

}   

module.exports = {getGrupo , updateGrupo , createGrupo, deleteGrupo }  
