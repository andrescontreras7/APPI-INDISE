const express = require('express');
const routerE = express.Router();
const { requestPasswordReset, resetPassword } = require('../controller/email.controller');
const {passwordReset} = require('../validator/password');

routerE.post('/request-password-reset', passwordReset, requestPasswordReset);
routerE.post('/reset-password/:token', resetPassword);

module.exports = routerE;
