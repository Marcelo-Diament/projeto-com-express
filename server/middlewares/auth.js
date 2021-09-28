const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const auth = async (req, res, next) => {
  // Limpeza dos cookies usuario e admin
  res.clearCookie('usuario')
  res.clearCookie('admin')

  // Captura do email e da senha a partir de request -> body
  const { email, senha } = await req.body

  // Busca por usuário com aquele email e senha
  const usuarioLogado = usuariosPlaceholder.filter(usuario => {
    if (usuario.email === email) {
      console.log('esse cara existe mesmo')
      if (usuario.senha === senha) {
        console.log('esse cara sabe a senha mesmo')
        return usuario
      }
    }
  })

  // Caso não haja esse usuário ou a senha esteja errada
  if (!usuarioLogado.length) {
    res.render('login', {
      titulo: 'Ops!',
      subtitulo: 'Algo de errado não deu certo',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin,
    })
  }

  // Filtrando campos como a senha com JSON.stringify (função Replacer)
  const usuario = JSON.parse(JSON.stringify(usuarioLogado[0], ['id', 'nome', 'sobrenome', 'avatar', 'email', 'plano', 'admin'], 4))

  // Definindo cookies usuario (objeto) e admin (booleano)
  res.cookie('usuario', usuario)
  res.cookie('admin', `${usuarioLogado[0].admin}`)

  // Segue o jogo
  next()

  // Return para não continuar executando após esse trecho
  return
}

module.exports = auth
