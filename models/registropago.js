const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegistroPagoSchema = new Schema({
  medioPago: {
    type: Schema.Types.ObjectId,
    ref: 'medioPago',
  },
  fechaPago: {
    type: Date,
  },
})

const RegistroPago = mongoose.model('RegistroPago', RegistroPagoSchema)
module.exports = RegistroPago
