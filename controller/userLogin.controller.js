const { fn, col, Op } = require('sequelize');
const UserLogin = require('../models/userLogin');

const getUserActivity = async (req, res) => {
  try {
    const { month } = req.query; 

   
    if (!month || isNaN(parseInt(month)) || parseInt(month) < 1 || parseInt(month) > 12) {
      return res.status(400).json({ message: 'El parámetro de mes no es válido' });
    }


    const year = new Date().getFullYear();

    
    const startDate = new Date(year, parseInt(month) - 1); 
    const endDate = new Date(year, parseInt(month), 0); 

    const activity = await UserLogin.findAll({
      where: {
        loginTimestamp: {
          [Op.and]: {
            [Op.gte]: startDate,
            [Op.lte]: endDate
          }
        }
      },
      attributes: [
        'userType',
        'userId',
        [fn('COUNT', col('id')), 'loginCount']
      ],
      group: ['userType', 'userId']
    });

    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la actividad del usuario', error });
  }
};



const getUserActivityById = async (req, res) => {
  try {
    const { month } = req.query;
    const { id } = req.params; 

    if (!month || isNaN(parseInt(month)) || parseInt(month) < 1 || parseInt(month) > 12) {
      return res.status(400).json({ message: 'El parámetro de mes no es válido' });
    }

    const year = new Date().getFullYear();

    const startDate = new Date(year, parseInt(month) - 1);
    const endDate = new Date(year, parseInt(month), 0);

    const activity = await UserLogin.findAll({
      where: {
        userId: id, // Filtramos por el ID del usuario
        loginTimestamp: {
          [Op.and]: {
            [Op.gte]: startDate,
            [Op.lte]: endDate
          }
        }
      },
      attributes: [
        'userType',
        'userId',
        [fn('COUNT', col('id')), 'loginCount']
      ],
      group: ['userType', 'userId']
    });

    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la actividad del usuario', error });
  }
};

module.exports = {
  getUserActivityById,
  getUserActivity
};

