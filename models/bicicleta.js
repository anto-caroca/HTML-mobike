const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BicicletaSchema = new Schema({
  modelo: {
    type: String,
  },
  estado: {
    type: String,
  },
  candado: {
    type: String,
  },
})

const Bicicleta = mongoose.model('Bicicleta', BicicletaSchema)
module.exports = Bicicleta
