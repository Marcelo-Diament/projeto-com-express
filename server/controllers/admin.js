const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('usuarios', {
      titulo: 'Usuários',
      subtitulo: 'Administração de usuários',
      usuarios: usuariosPlaceholder,
      bannerTopo: '/images/banner-topo-usuarios-1564x472.png'
    })
  }
}

module.exports = controller