const express = require('express');
const RouterLogin = express.Router();
const { getUserActivity } = require('../controller/userLogin.controller');


RouterLogin.get('/user_activity', getUserActivity);

module.exports = RouterLogin;
