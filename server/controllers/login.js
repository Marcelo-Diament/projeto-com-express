const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const fs = require('fs'),
  path = require('path')

// let usuarios = fs.readFileSync(path.join(__dirname, '..', 'data', 'usuariosPlaceholder.json'), 'utf-8')

const controller = {
  auth: (req, res, next) => {
    const { email, senha } = req.body
    const usuarioLogado = usuariosPlaceholder.filter(usuario => {
      if (usuario.email === email) {
        console.log('esse cara existe mesmo')
        if (usuario.senha === senha) {
          console.log('esse cara sabe a senha mesmo')
          return usuario
        }
      }
    })

    if (!usuarioLogado.length) {
      res.send('MOLHOU PROCÊ')
      // res.render('usuarios', {
      //   titulo: 'A CASA CAIU',
      //   subtitulo: 'MOLHOU! JÁ CHAMAMOS O FBI!',
      //   usuarios: usuariosPlaceholder,
      //   bannerTopo: '/images/banner-topo-usuarios-1564x472.png'
      // })
    }

    const usuario = JSON.parse(JSON.stringify(usuarioLogado[0], ['id', 'nome', 'sobrenome', 'avatar', 'email', 'plano', 'admin'], 4))
    console.log(usuario)
    res.send(usuario)
    // res.render('usuario', {
    //   titulo: 'Usuário',
    //   subtitulo: 'Parabéns! Vc logou com sucesso!',
    //   usuario: usuario,
    //   bannerTopo: '/images/banner-topo-usuarios-1564x472.png'
    // })
  }
}

module.exports = controller