function verificarPermissaoComprador(req, res, next) {
  if (req.session && req.session.usuario && req.session.usuario.tipo === 'comprador') {
    return next();
  }
  
  res.status(404).render('erro', { 
    mensagem: 'Você não tem permissão para acessar esta página',
    usuario: req.session ? req.session.usuario : null 
  });
}

module.exports = verificarPermissaoComprador;
