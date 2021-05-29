const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
const transporter = require('../middleware/recurperarContraseña')
const saltRounds = 10

const nuevo_usuario = async (req, res) => {
  const { rut, nombre, password, apellidos, email, telefono, tipoUsuario } =
    req.body
  try {
    const hashPassword = bcrypt.hashSync(password, saltRounds)
    const rutReplace = rut.replace(/\./g, '')
    const validaRUT = await ifExistsUser(rutReplace, email)
    if (validaRUT > 0) {
      res.json({
        code: 1,
        message: `Ya existe un usuario registrado con este rut`,
      })
    } else {
      const usuario = new Usuario({
        rut: rutReplace,
        nombre,
        password: hashPassword,
        apellidos,
        email,
        telefono,
        tipoUsuario,
      })

      await usuario.save()
      res.json({ code: 1, message: 'Usuario regsitrado con exito' })
    }
  } catch (error) {
    res.json({
      code: 0,
      message: 'No se ha podido registrar el Usuario',
      error: error,
    })
  }
}

const login = async (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  const rutValid = await Usuario.find({ rut: username })
  if (rutValid.length > 0) {
    const validaPassword = bcrypt.compareSync(password, rutValid[0].password)
    validaPassword
      ? res.json({ rutValid, code: 1 })
      : res.json({ code: 0, message: 'Contraseña ingresada incorrecta' })
  } else {
    res.json({ code: 0, message: 'Nombre de usuario invalido' })
  }
}
const ifExistsUser = async (rut, email) => {
  const rutValid = await Usuario.find({ rut: rut })
  return rutValid.length
}

const recurperarContraseña = async (req, res) => {
  const { email } = req.body
  console.log(email)
  let info = await transporter.sendMail({
    from: '"Recuperar contraseña 👻" <appmobike.cl@gmail.com>',
    to: `${email}`,
    subject: 'Recuperar contraseña',
    html: '<b>Prueba recuperación de la contraseña</b>',
  })
  res.send(email)
}

const testPassword = async (req, res) => {
  const password = 'NuevaContraseña123'
  const hash = bcrypt.hashSync(password, saltRounds)
  const valida = bcrypt.compareSync(
    password,
    '$2b$10$iL4J03SB4LCYvgTkpgycUef6wBfsFVrjHVtCwQKo3tp1fm/LbcB4O'
  )
  res.send({ hash, password, valida })
}

module.exports = { nuevo_usuario, testPassword, login, recurperarContraseña }
