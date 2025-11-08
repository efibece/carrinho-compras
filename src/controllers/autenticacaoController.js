const autenticacaoService = require('../services/autenticacaoService');

class AutenticacaoController {
  exibirLogin(req, res) {
    if (req.session.usuario) {
      const destino = req.session.usuario.tipo === 'comprador' ? '/produtos' : '/compras-realizadas';
      return res.redirect(destino);
    }
    res.render('login', { erro: null, usuario: null });
  }

  realizarLogin(req, res) {
    const { email, senha } = req.body;

    const resultado = autenticacaoService.autenticar(email, senha);

    if (resultado.sucesso) {
      req.session.usuario = resultado.usuario;
      const destino = resultado.usuario.tipo === 'comprador' ? '/produtos' : '/compras-realizadas';
      return res.redirect(destino);
    }

    res.render('login', { erro: resultado.mensagem, usuario: null });
  }

  exibirRegistro(req, res) {
    if (req.session.usuario) {
      const destino = req.session.usuario.tipo === 'comprador' ? '/produtos' : '/compras-realizadas';
      return res.redirect(destino);
    }
    res.render('registro', { erro: null, usuario: null });
  }

  realizarRegistro(req, res) {
    const { nome, email, senha, tipo } = req.body;

    const resultado = autenticacaoService.registrar(nome, email, senha, tipo);

    if (resultado.sucesso) {
      req.session.usuario = resultado.usuario;
      const destino = resultado.usuario.tipo === 'comprador' ? '/produtos' : '/compras-realizadas';
      return res.redirect(destino);
    }

    res.render('registro', { erro: resultado.mensagem, usuario: null });
  }

  realizarLogout(req, res) {
    req.session.destroy();
    res.redirect('/login');
  }
}

module.exports = new AutenticacaoController();
