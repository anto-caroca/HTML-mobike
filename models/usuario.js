const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
  rut: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: Number,
  },
  estado: {
    type: Boolean,
    default: 1,
  },
  tipoUsuario: {
    type: Schema.Types.ObjectId,
    ref: 'TipoUsuario',
  },
})

const Usuario = mongoose.model('Usuario', UsuarioSchema)
module.exports = Usuario
