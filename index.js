const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TipoUsuario = require('./models/tipousuario')
const {
  nuevo_usuario,
  testPassword,
  login,
  recurperarContraseña,
} = require('./controllers/UsuarioController')
const { DATABASE_CONNECTION } = require('./config/db')

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: true, limit: '80mb' }))
app.use(express.json({ extended: true, limit: '80mb' }))

app.get('/', (req, res) => res.send('API MOBIKE V1.3'))
app.get('/passwordTest', testPassword)
app.post('/nuevo_tipousuario', async (req, res) => {
  const { descripcion } = req.body
  const tipoUsuario = new TipoUsuario({ descripcion })
  try {
    await tipoUsuario.save()
    res.json({ code: 1, message: 'Tipo de usuario registrado con exito' })
  } catch (error) {
    res.json({
      code: 0,
      message: 'No se ha podido registrar el Tipo de usuario',
    })
  }
})

app.post('/nuevo_usuario', nuevo_usuario)
app.post('/login', login)
app.post('/recuperar_contrasena', recurperarContraseña)

app.post('/tipo_usuario', async (req, res) => {
  const { descripcion } = req.body
  try {
    descripcion == ''
      ? (tipoUsuario = await TipoUsuario.find())
      : (tipoUsuario = await TipoUsuario.find({
          descripcion: { $regex: `.*${descripcion}.*` },
        }))
    res.json({ code: 1, data: tipoUsuario })
  } catch (error) {
    res.send(error)
  }
})
mongoose
  .connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () => {
      console.log('API MOBIKE V1.0 ON PORT: 3000')
    })
  )
  .catch((err) => console.log(err))
