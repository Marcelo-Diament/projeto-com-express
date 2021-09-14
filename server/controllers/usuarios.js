const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('usuarios', {
      titulo: 'Usuários',
      subtitulo: 'Você está na página de usuários',
      usuarios: usuariosPlaceholder,
      bannerTopo: '/images/banner-topo-usuarios-1564x472.png'
    });
  },
  show: (req, res, next) => {
    const { id } = req.params
    const usuario = usuariosPlaceholder[id]
    res.render('usuario', {
      titulo: 'Usuário',
      subtitulo: `Você está na página do usuário ${id}`,
      usuario,
      bannerTopo: '/images/banner-topo-usuario-1564x472.png'
    });
  }
}

module.exports = controller