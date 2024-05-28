const Role = require('../models/rol'); // Asegúrate de tener un modelo de Role

const getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los roles', error });
    }
};

module.exports = {
    getRoles
};