const express = require('express');
const rol = express.Router();
const {getRoles} = require('../controller/rol.controller');

rol.get('/appi/roles', getRoles);

module.exports = rol;