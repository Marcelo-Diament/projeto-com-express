const fs = require('fs'),
  path = require('path')

const controller = {
  register: (req, res, next) => {
    res.render('register', {
      titulo: 'Cadastro',
      subtitulo: req.cookies.usuario ? 'Verifique o formulário e atualize os dados desejados.' : 'Preencha os dados e complete seu cadastro!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
  add: (req, res, next) => {
    const usuarios = fs.readFileSync(path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'), 'utf-8')
    let usuariosNew = JSON.parse(usuarios)
    let newUsuario = req.body
    let newId = usuariosNew[usuariosNew.length - 1].id + 1
    newUsuario.plano = 'Free'
    newUsuario.criadoEm = new Date()
    newUsuario.modificadoEm = new Date()
    newUsuario.admin = false
    newUsuario.id = newId
    usuariosNew.push(newUsuario)
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'), JSON.stringify(usuariosNew))
    res.redirect('../../usuarios')
  },
  login: (req, res, next) => {
    res.render('login', {
      titulo: 'Login',
      subtitulo: 'Preencha os dados e acesse seu perfil!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  },
  auth: (req, res, next) => {
    res.redirect('../')
  },
  logout: (req, res, next) => {
    res.clearCookie('usuario').clearCookie('admin').redirect('../../')
  },
  lostPass: (req, res, next) => {
    res.render('lostPassword', {
      titulo: 'Recuperação de Senha',
      subtitulo: 'Preencha os dados e recupere sua senha!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    });
  }
}

module.exports = controller
