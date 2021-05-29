const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MedioPagoSchema = new Schema({
  numtarjeta: {
    type: Number,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
})

const MedioPago = mongoose.model('MedioPago', MedioPagoSchema)
module.exports = MedioPago
