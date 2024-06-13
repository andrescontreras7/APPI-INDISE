// config/emailConfig.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andrescavadiaaa@gmail.com',
    pass: 'tzmm rbkt mowg kkji'
  }
});

module.exports = transporter;
