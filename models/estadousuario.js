const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstadoUsuarioSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
});

const EstadoUsuario = mongoose.model("EstadoUsuario", EstadoUsuarioSchema);
module.exports = EstadoUsuario;
