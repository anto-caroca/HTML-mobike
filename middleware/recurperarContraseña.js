const nodemailer = require('nodemailer')
const { CORREO_GMAIL, PASSWORD_GMAIL } = require('../config/db')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: CORREO_GMAIL, // generated ethereal user
    pass: PASSWORD_GMAIL, // generated ethereal password
  },
})

module.exports = transporter
