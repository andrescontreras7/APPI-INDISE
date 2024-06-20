const express = require('express');
const RouterLogin = express.Router();
const { getUserActivity, getUserActivityById } = require('../controller/userLogin.controller');


RouterLogin.get('/user_activity', getUserActivity);
RouterLogin.get('/user_activityBy/:id', getUserActivityById);

module.exports = RouterLogin;
