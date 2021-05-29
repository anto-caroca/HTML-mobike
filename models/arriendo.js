const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArriendoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  registroPago: {
    type: Schema.Types.ObjectId,
    ref: 'RegistroPago',
  },
  bicicleta: {
    type: Schema.Types.ObjectId,
    ref: 'Bicicleta',
  },
  tiempo: {
    type: Number,
  },
  fecha: {
    type: Date,
  },
})

const Arriendo = mongoose.model('Arriendo', ArriendoSchema)
module.exports = Arriendo
