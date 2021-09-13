const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('usuarios', {
      titulo: 'Usuários',
      subtitulo: 'Você está na página de usuários',
      usuarios: usuariosPlaceholder
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