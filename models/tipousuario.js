const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoUsuarioSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
    unique: true,
  },
});

const TipoUsuario = mongoose.model("TipoUsuario", TipoUsuarioSchema);
module.exports = TipoUsuario;
