
function loggerMiddleware(req, res, next) {
    const timestamp = new Date().toLocaleString('pt-BR');
    const usuario = req.session.usuario ? req.session.usuario.nome : 'Anônimo';
    
    console.log(`[${timestamp}] ${req.method} ${req.url} - Usuário: ${usuario}`);
    
    next();
}

module.exports = loggerMiddleware;
