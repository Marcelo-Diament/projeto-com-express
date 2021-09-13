const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: (req, res, next) => {
    res.render('usuarios', {
      titulo: 'Usuários',
      subtitulo: 'Você está na página de usuários',
      usuarios: usuariosPlaceholder
    });
  }
}

module.exports = controller