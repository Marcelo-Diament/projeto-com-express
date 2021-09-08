const controller = {
  index: function (req, res, next) {
    res.render('index', {
      titulo: 'Index',
      subtitulo: 'Você está na página principal'
    });
  }
}

module.exports = controller