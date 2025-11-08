class PaginaController {
  exibirInicio(req, res) {
    res.render('index', { usuario: req.session ? req.session.usuario : null });
  }

  exibirSobre(req, res) {
    res.render('sobre', { usuario: req.session ? req.session.usuario : null });
  }

  exibirContato(req, res) {
    res.render('contato', { usuario: req.session ? req.session.usuario : null });
  }
}

module.exports = new PaginaController();
