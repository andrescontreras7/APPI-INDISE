const { Op } = require('sequelize');
const Acudientes = require( "../models/acudiente.js")
const  {HanledError} = require('../utils/CapError.js')
const _ = require('lodash');





const getAcudientes = async (req, res) => {

    try {
        const datos_activos = await Acudientes.findAll({
        where: {
            activo: true
        }
        })

        res.status(200).json(datos_activos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Ocurrió un error al recuperar los registros"
        })
    }

}

const createAcudientes = async (req, res) =>{

 try {
    const {id_acu, nom_acu, ape_acu, corr_acu, tel_acu} = req.body;

    if(_.isNil(id_acu) ||  _.isEmpty(nom_acu) ||  _.isEmpty(ape_acu) ||  _.isEmpty(corr_acu) || _.isNil(tel_acu)   ){
        return res.status(400).json({ message: "Todos los campos son requeridos" });

    }
    const acudienteData = await Acudientes.findOne({

        where: {
            [Op.or]: [{ id_acu }, { corr_acu }]
        }
    })
    if(acudienteData){
        return res.status(400).json({ message: "El CORREO O EL ID YA EXISTEN " });
    }
    await Acudientes.create({
        id_acu,
        nom_acu,
        ape_acu,
        corr_acu,
        tel_acu
    })
     res.status(200).json({ message: "REGISTRO CREADO EXITOSAMENTE" });
    

    
    
 } catch (error) {
    HanledError(res, "ERROR AL CREAR REGISTRO", 400)
    console.log(error)
    
 }


}

const deletedAcudientes = async (req, res) => {
    try {
      const { id_acu } = req.params;
      
      const boorarAcudiente = await Acudientes.update(
        { activo: false }, // Marcamos el registro como inactivo
        {
          where: {
            id_acu: id_acu,
            activo: true // Aseguramos que el registro esté activo antes de marcarlo como inactivo
          }
        }
      );
  
      if (boorarAcudiente) {
        res.status(200).json({mensagge:"REGISTRO ELIMINADO EXITOSAMENTE"})
      } else {
        res.status(404).send("REGISTRO NO ENCONTRADO ");
      }
    } catch (error) {
      console.log(error);
     HanledError(res,   {mensagge:"ERROR AL ELIMINAR REGISTRO"}  , 400);
    }
  };
  

module.exports = {
    getAcudientes,
    createAcudientes,
    deletedAcudientes
}