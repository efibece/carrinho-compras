function verificarAutenticacao(req, res, next) {
  if (req.session && req.session.usuario) {
    return next();
  }
  
  res.status(404).render('erro', { 
    mensagem: 'Página não encontrada',
    usuario: null 
  });
}

module.exports = verificarAutenticacao;
